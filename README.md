# Instructions
# test

to access kubernetes within notebook

## step 1 - set PATH
```sh
export PATH=$PATH:./
```

## step 2 - install kubectl and setup kubeconfig file

```sh
bash setup.sh
```

## step 3 - run kubectl to interact with cluster

```sh
kubectl create -f hellopod.yaml
kubectl get pod 

kubectl exec -it job/hello -- /bin/sh
```

