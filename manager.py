"""A manager for dask clusters."""

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

import importlib
from inspect import isawaitable
from typing import Any, Dict, List, Union
from uuid import uuid4

import dask
from dask.utils import format_bytes
#from dask.distributed import Adaptive
from tornado.ioloop import IOLoop
from tornado.concurrent import Future
from dask_gateway import Gateway


# A type for a dask cluster model: a serializable
# representation of information about the cluster.
ClusterModel = Dict[str, Any]

# A type stub for a Dask cluster.
Cluster = Any

class Adaptive:
    def __init__(self, minimum, maximum):
        self.minimum = minimum
        self.maximum = maximum


import os

def save_tls_credentials(cluster):
    """
    Saves the TLS certificate and key of a Dask-Gateway cluster object to files
    in the user's ~/.config/dask/tls directory with proper extensions.

    Args:
        cluster: A Dask-Gateway cluster object with `tls_cert`, `tls_key`, and `name` attributes.
    """
    config_dir = os.path.join(os.path.expanduser("~"), ".config", "dask", "tls")
    os.makedirs(config_dir, exist_ok=True)

    cert_path = os.path.join(config_dir, f"{cluster.name}.pem")
    key_path = os.path.join(config_dir, f"{cluster.name}.key")

    os.makedirs(os.path.dirname(cert_path), exist_ok=True)
    os.makedirs(os.path.dirname(key_path), exist_ok=True)

    with open(cert_path, "w") as cert_file:
        cert_file.write(cluster.tls_cert)

    with open(key_path, "w") as key_file:
        key_file.write(cluster.tls_key)

    print(f"Saved TLS cert to {cert_path}")
    print(f"Saved TLS key to {key_path}")

async def make_cluster(configuration: dict) -> Cluster:
    module = importlib.import_module(dask.config.get("labextension.factory.module"))
    Cluster = getattr(module, dask.config.get("labextension.factory.class"))

    kwargs = dask.config.get("labextension.factory.kwargs")
    kwargs = {key.replace("-", "_"): entry for key, entry in kwargs.items()}

    cluster = await Cluster(
        *dask.config.get("labextension.factory.args"), **kwargs, asynchronous=True
    )


    configuration = dask.config.merge(
        dask.config.get("labextension.default"), configuration
    )

    adaptive = None
    if configuration.get("adapt"):
        adaptive = cluster.adapt(**configuration.get("adapt"))
        # adapt of gateway cluster doesn't return a valid adaptive object, 
        # so we just keep the state on the client before we can figure out 
        # a way to retrieve that from the server side 
        adaptive = Adaptive(**configuration.get("adapt")) 
    elif configuration.get("workers") is not None:
        t = cluster.scale(configuration.get("workers"))
        if isawaitable(t):
            await t

    return cluster, adaptive


class DaskClusterManager:
    """
    A class for starting, stopping, and otherwise managing the lifecycle
    of Dask clusters.
    """

    def __init__(self) -> None:
        """Initialize the cluster manager"""
        self._clusters: Dict[str, Cluster] = dict()
        self._adaptives: Dict[str, Adaptive] = dict()
        self._cluster_names: Dict[str, str] = dict()
        self._n_clusters = 0

        self.initialized = Future()

        async def _load_clusters():
            """Load existing clusters"""
            #module = importlib.import_module(dask.config.get("labextension.factory.module"))
            #Cluster = getattr(module, dask.config.get("labextension.factory.class"))
        
            kwargs = dask.config.get("labextension.factory.kwargs")
            kwargs = {key.replace("-", "_"): kwargs[key] for key in kwargs.keys() & {"address","public_address","auth"}}
            if dask.config.get("labextension.factory.class") == 'GatewayCluster':
                self.gateway = Gateway(**kwargs, asynchronous=True)
                clusters = await self.gateway.list_clusters()
                for c in clusters:
                    print(f"cluster: {c.name}")
                    await self._load_cluster(name=c.name)

        async def start_clusters():
            for model in dask.config.get("labextension.initial"):
                await self.start_cluster(configuration=model)

            await _load_clusters()

            self.initialized.set_result(self)

        IOLoop.current().add_callback(start_clusters)

    async def start_cluster(
        self, cluster_id: str = "", configuration: dict = {}
    ) -> ClusterModel:
        """
        Start a new Dask cluster.

        Parameters
        ----------
        cluster_id : string
            An optional string id for the cluster. If not given, a random id
            will be chosen.

        Returns
        cluster_model : a dask cluster model.
        """
        if not cluster_id:
            cluster_id = str(uuid4())

        cluster, adaptive = await make_cluster(configuration)
        self._n_clusters += 1


        # Check for a name in the config
        if not configuration.get("name"):
            cluster_type = type(cluster).__name__
            cluster_name = f"{cluster_type} {self._n_clusters}"
        else:
            cluster_name = configuration["name"]

        # Check if the cluster was started adaptively
        if adaptive:
            self._adaptives[cluster_id] = adaptive

        print(f"{cluster_id}, {cluster_name} {cluster.name}")
        save_tls_credentials( await self.gateway.get_cluster(cluster.name))

        self._clusters[cluster_id] = cluster
        self._cluster_names[cluster_id] = cluster_name
        return make_cluster_model(cluster_id, cluster_name, cluster, adaptive=adaptive)

    async def _load_cluster(
        self, cluster_id: str = "", name: str = ""
    ) -> ClusterModel:
        """
        Load a existing Dask cluster.

        Parameters
        ----------
        cluster_id : string
            An optional string id for the cluster. If not given, a random id
            will be chosen.

        Returns
        cluster_model : a dask cluster model.
        """
        if not cluster_id:
            cluster_id = str(uuid4())

        cluster = await self.gateway.connect(name, shutdown_on_close=True)
        info = cluster.scheduler_info
        cores = sum(d["nthreads"] for d in info["workers"].values())
        print(f"cores:{cores}")

        adaptive = None

        self._n_clusters += 1

        # 
        cluster_type = type(cluster).__name__
        cluster_name = f"{cluster_type} {self._n_clusters}"

        # Check if the cluster was started adaptively
        if adaptive:
            self._adaptives[cluster_id] = adaptive

        self._clusters[cluster_id] = cluster
        self._cluster_names[cluster_id] = cluster_name
        return make_cluster_model(cluster_id, cluster_name, cluster, adaptive=adaptive)

    async def close_cluster(self, cluster_id: str) -> Union[ClusterModel, None]:
        """
        Close a Dask cluster.

        Parameters
        ----------
        cluster_id : string
            A string id for the cluster.

        Returns
        cluster_model : the dask cluster model for the shut down cluster,
            or None if it was not found.
        """
        cluster = self._clusters.get(cluster_id)
        if cluster:
            await cluster.close()
            self._clusters.pop(cluster_id)
            name = self._cluster_names.pop(cluster_id)
            adaptive = self._adaptives.pop(cluster_id, None)
            return make_cluster_model(cluster_id, name, cluster, adaptive)

        else:
            return None

    def get_cluster(self, cluster_id) -> Union[ClusterModel, None]:
        """
        Get a Dask cluster model.

        Parameters
        ----------
        cluster_id : string
            A string id for the cluster.

        Returns
        cluster_model : the dask cluster model for the cluster,
            or None if it was not found.
        """
        cluster = self._clusters.get(cluster_id)
        name = self._cluster_names.get(cluster_id, "")
        adaptive = self._adaptives.get(cluster_id)
        if not cluster:
            return None

        return make_cluster_model(cluster_id, name, cluster, adaptive)

    def list_clusters(self) -> List[ClusterModel]:
        """
        List the Dask cluster models known to the manager.

        Returns
        cluster_models : A list of the dask cluster models known to the manager.
        """
        return [
            make_cluster_model(
                cluster_id,
                self._cluster_names[cluster_id],
                self._clusters[cluster_id],
                self._adaptives.get(cluster_id, None),
            )
            for cluster_id in self._clusters
        ]

    async def scale_cluster(self, cluster_id: str, n: int) -> Union[ClusterModel, None]:
        cluster = self._clusters.get(cluster_id)
        name = self._cluster_names[cluster_id]
        adaptive = self._adaptives.pop(cluster_id, None)

        # Check if the cluster exists
        if not cluster:
            return None

        # Check if it is actually different.
        model = make_cluster_model(cluster_id, name, cluster, adaptive)
        if model.get("adapt") is None and model["workers"] == n:
            return model

        # Otherwise, rescale the model.
        t = cluster.scale(n)
        if isawaitable(t):
            await t
        return make_cluster_model(cluster_id, name, cluster, adaptive=None)

    async def adapt_cluster(
        self, cluster_id: str, minimum: int, maximum: int
    ) -> Union[ClusterModel, None]:
        cluster = self._clusters.get(cluster_id)
        name = self._cluster_names[cluster_id]
        adaptive = self._adaptives.pop(cluster_id, None)

        # Check if the cluster exists
        if not cluster:
            return None

        # Check if it is actually different.
        model = make_cluster_model(cluster_id, name, cluster, adaptive)
        if (
            model.get("adapt") is not None
            and model["adapt"]["minimum"] == minimum
            and model["adapt"]["maximum"] == maximum
        ):
            return model

        # Otherwise, rescale the model.
        t = cluster.adapt(minimum=minimum, maximum=maximum)
        if isawaitable(t):
            await t

        adaptive = Adaptive(minimum=minimum, maximum=maximum)
        self._adaptives[cluster_id] = adaptive
        return make_cluster_model(cluster_id, name, cluster, adaptive)

    async def close(self):
        """Close all clusters and cleanup"""
        for cluster_id in list(self._clusters):
            await self.close_cluster(cluster_id)

    async def __aenter__(self):
        """
        Enter an asynchronous context.
        This waits for any initial clusters specified via configuration to start.
        """
        await self.initialized
        return self

    async def __aexit__(self, exc_type, exc, tb):
        """
        Exit an asynchronous context.
        This closes any extant clusters.
        """
        await self.close()

    def __await__(self):
        """
        Awaiter for the manager to be initialized.
        This waits for any initial clusters specified via configuration to start.
        """
        return self.initialized.__await__()


def make_cluster_model(
    cluster_id: str,
    cluster_name: str,
    cluster: Cluster,
    adaptive: Union[Adaptive, None],
) -> ClusterModel:
    """
    Make a cluster model. This is a JSON-serializable representation
    of the information about a cluster that can be sent over the wire.

    Parameters
    ----------
    cluster_id: string
        A unique string for the cluster.

    cluster_name: string
        A display name for the cluster.

    cluster: Cluster
        The cluster out of which to make the cluster model.

    adaptive: Adaptive
        The adaptive controller for the number of workers for the cluster, or
        none if the cluster is not scaled adaptively.
    """
    # This would be a great target for a dataclass
    # once python 3.7 is in wider use.
    try:
        info = cluster.scheduler_info
    except AttributeError:
        info = cluster.scheduler.identity()
    try:
        cores = sum(d["nthreads"] for d in info["workers"].values())
    except KeyError:  # dask.__version__ < 2.0
        cores = sum(d["ncores"] for d in info["workers"].values())
    assert isinstance(info, dict)
    model = dict(
        id=cluster_id,
        name=cluster_name,
        scheduler_address=cluster.scheduler_address,
        dashboard_link=cluster.dashboard_link or "",
        workers=len(info["workers"]),
        memory=format_bytes(sum(d["memory_limit"] for d in info["workers"].values())),
        cores=cores,
    )
    if adaptive:
        model["adapt"] = {"minimum": adaptive.minimum, "maximum": adaptive.maximum}

    return model


# Create a default cluster manager
# to keep track of clusters.
manager = DaskClusterManager()
