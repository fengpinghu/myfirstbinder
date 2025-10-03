"use strict";
(self["webpackChunkdask_labextension"] = self["webpackChunkdask_labextension"] || []).push([["lib_index_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./style/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style/index.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! dask.svg */ "./style/dask.svg?ccc1"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! code-light.svg */ "./style/code-light.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! code-dark.svg */ "./style/code-dark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --dask-launch-button-height: 24px;
}

/**
 * Rules related to the overall sidebar panel.
 */

.dask-DaskSidebar {
  background: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

/**
 * Rules related to the dashboard launcher.
 */

.dask-DashboardListing-inactive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 600px;
  color: var(--jp-ui-font-color3);
}

.dask-DashboardListing-inactive-title {
  font-size: var(--jp-ui-font-size3);
  padding: 24px;
  text-align: center;
}

.dask-DashboardListing-inactive-detail {
  font-size: var(--jp-ui-font-size4);
  padding: 24px;
}

.dask-DashboardListing-inactive:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1;
}

.dask-DashboardListing-list {
  margin: 8px;
  padding: 0;
  list-style-type: none;
}

.dask-DashboardListing-item {
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 12px;
  margin-right: 12px;
  white-space: nowrap;
}

.dask-DashboardListing-item button {
  font-size: var(--jp-ui-font-size0);
  border-radius: 2px;
  line-height: 1em;
  padding: 0px 8px;
  width: 100%;
}

.dask-DashboardListing-item button.jp-mod-styled.jp-mod-accept {
  height: var(--dask-launch-button-height);
  color: #262326;
  background-color: #ffc11e;
  border: 1px solid #ffc11e;
  text-transform: uppercase;
}

.dask-URLInput {
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: var(--jp-layout-color1);
  border-bottom: 1px solid var(--jp-border-color2);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.dask-URLInput-wrapper {
  background-color: var(--jp-input-active-background);
  border: var(--jp-border-width) solid var(--jp-border-color2);
  flex: 1 1 auto;
  height: 30px;
  padding: 0px 12px;
  margin: 0 4px 0 0;
}

.dask-URLInput-wrapper:focus-within {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.dask-URLInput-wrapper input {
  background: transparent;
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  width: calc(100% - 18px);
  line-height: 28px;
}

.dask-URLInput-wrapper::placeholder {
  color: var(--jp-ui-font-color3);
  font-size: var(--jp-ui-font-size1);
}

.dask-UrlInput .jp-ToolbarButton {
  flex: 0 0 auto;
  margin: 0 0 0 4px;
  background-color: var(--jp-layout-color2);
  min-width: 16px;
}

/**
 * Rules for the dashboard panels.
 */
.dask-DaskDashboard-widget {
  background-color: white;
}

.dask-DaskDashboard-inactive {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--jp-ui-font-color3);
  font-size: var(--jp-ui-font-size3);
  background-color: var(--jp-layout-color0);
  z-index: 10;
}

.dask-DaskDashboard-inactive:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.1;
}

/**
 * Rules related to the cluster manager.
 */

.dask-DaskClusterManager {
  border-top: 6px solid var(--jp-toolbar-border-color);
}

.dask-DaskClusterManager .jp-Toolbar {
  align-items: center;
}

.dask-DaskClusterManager .jp-Toolbar .dask-DaskClusterManager-label {
  flex: 0 0 auto;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: var(--jp-ui-font-size0);
  padding: 8px 8px 8px 12px;
  margin: 0px;
}

.dask-DaskClusterManager button.jp-Button > span {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dask-ClusterListing ul.dask-ClusterListing-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dask-ClusterListingItem {
  display: inline-block;
  list-style-type: none;
  padding: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: grab;
}

.dask-ClusterListingItem-drag {
  opacity: 0.7;
  color: var(--jp-ui-font-color1);
  cursor: grabbing;
  max-width: 260px;
  transform: translateX(-50%) translateY(-50%);
}

.dask-ClusterListingItem-title {
  margin: 0px;
  font-size: var(--jp-ui-font-size2);
}

.dask-ClusterListingItem-link a {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.dask-ClusterListingItem-link a:hover {
  text-decoration: underline;
}

.dask-ClusterListingItem-link a:visited {
  color: var(--jp-content-link-color);
}

.dask-ClusterListingItem:hover {
  background: var(--jp-layout-color2);
}

.dask-ClusterListingItem.jp-mod-active {
  color: white;
  background: var(--jp-brand-color0);
}

.dask-ClusterListingItem.jp-mod-active a,
.dask-ClusterListingItem.jp-mod-active a:visited {
  color: white;
}

.dask-ClusterListingItem button.jp-mod-styled {
  background-color: transparent;
}

.dask-ClusterListingItem button.jp-mod-styled:hover {
  background-color: var(--jp-layout-color3);
}

.dask-ClusterListingItem.jp-mod-active button.jp-mod-styled:hover {
  background-color: var(--jp-brand-color1);
}

.dask-ClusterListingItem-button-panel {
  display: flex;
  align-content: center;
}

button.dask-ClusterListingItem-stop {
  color: var(--jp-warn-color1);
  font-weight: 600;
}

button.dask-ClusterListingItem-scale {
  color: var(--jp-accent-color1);
  font-weight: 600;
}

.dask-ClusterListingItem button.dask-ClusterListingItem-code.jp-mod-styled {
  margin: 0 4px 0 4px;
  background-repeat: no-repeat;
  background-position: center;
}

/**
 * Rules for the scaling dialog.
 */

.dask-ScalingHeader {
  font-size: var(--jp-ui-font-size2);
}

.dask-ScalingSection {
  margin-left: 24px;
}

.dask-ScalingSection-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 12px 0 12px 0;
}

.dask-ScalingHeader input[type='checkbox'] {
  position: relative;
  top: 4px;
  left: 4px;
  margin: 0 0 0 8px;
}

.dask-ScalingSection input[type='number'] {
  width: 72px;
}

.dask-ScalingSection-label.dask-mod-disabled {
  color: var(--jp-ui-font-color3);
}

.dask-ScalingSection input[type='number']:disabled {
  color: var(--jp-ui-font-color3);
}

/**
 * Rules for the logos.
 */

.dask-SearchIcon {
  background-image: var(--jp-icon-search);
}

[data-jp-theme-light='true'] .dask-CodeIcon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

[data-jp-theme-light='false'] .dask-CodeIcon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.dask-ClusterListingItem.jp-mod-active .dask-CodeIcon {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.dask-DaskLogo {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#setting-editor .dask-DaskLogo {
  background-repeat: no-repeat;
  background-size: 85%;
  background-position: center;
}
`, "",{"version":3,"sources":["webpack://./style/index.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;AACnC;;AAEA;;EAEE;;AAEF;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,kCAAkC;EAClC,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,WAAW;EACX,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;EACV,WAAW;EACX,yDAA+B;EAC/B,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,cAAc;EACd,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yCAAyC;EACzC,gDAAgD;EAChD,wCAAwC;EACxC,UAAU;AACZ;;AAEA;EACE,mDAAmD;EACnD,4DAA4D;EAC5D,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,uDAAuD;EACvD,4CAA4C;AAC9C;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,+BAA+B;EAC/B,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,yCAAyC;EACzC,eAAe;AACjB;;AAEA;;EAEE;AACF;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,+BAA+B;EAC/B,kCAAkC;EAClC,yCAAyC;EACzC,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,yDAA+B;EAC/B,4BAA4B;EAC5B,2BAA2B;EAC3B,YAAY;AACd;;AAEA;;EAEE;;AAEF;EACE,oDAAoD;AACtD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,kCAAkC;EAClC,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,+BAA+B;EAC/B,gBAAgB;EAChB,gBAAgB;EAChB,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;EACrB,mCAAmC;AACrC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,kCAAkC;AACpC;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;;EAEE;;AAEF;EACE,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE;;AAEF;EACE,uCAAuC;AACzC;;AAEA;EACE,yDAAqC;AACvC;;AAEA;EACE,yDAAoC;AACtC;;AAEA;EACE,yDAAoC;AACtC;;AAEA;EACE,yDAA+B;AACjC;;AAEA;EACE,4BAA4B;EAC5B,oBAAoB;EACpB,2BAA2B;AAC7B","sourcesContent":[":root {\n  --dask-launch-button-height: 24px;\n}\n\n/**\n * Rules related to the overall sidebar panel.\n */\n\n.dask-DaskSidebar {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  overflow: auto;\n}\n\n/**\n * Rules related to the dashboard launcher.\n */\n\n.dask-DashboardListing-inactive {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 600px;\n  color: var(--jp-ui-font-color3);\n}\n\n.dask-DashboardListing-inactive-title {\n  font-size: var(--jp-ui-font-size3);\n  padding: 24px;\n  text-align: center;\n}\n\n.dask-DashboardListing-inactive-detail {\n  font-size: var(--jp-ui-font-size4);\n  padding: 24px;\n}\n\n.dask-DashboardListing-inactive:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80%;\n  height: 80%;\n  background-image: url(dask.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.1;\n}\n\n.dask-DashboardListing-list {\n  margin: 8px;\n  padding: 0;\n  list-style-type: none;\n}\n\n.dask-DashboardListing-item {\n  margin-top: 4px;\n  margin-bottom: 4px;\n  margin-left: 12px;\n  margin-right: 12px;\n  white-space: nowrap;\n}\n\n.dask-DashboardListing-item button {\n  font-size: var(--jp-ui-font-size0);\n  border-radius: 2px;\n  line-height: 1em;\n  padding: 0px 8px;\n  width: 100%;\n}\n\n.dask-DashboardListing-item button.jp-mod-styled.jp-mod-accept {\n  height: var(--dask-launch-button-height);\n  color: #262326;\n  background-color: #ffc11e;\n  border: 1px solid #ffc11e;\n  text-transform: uppercase;\n}\n\n.dask-URLInput {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  background-color: var(--jp-layout-color1);\n  border-bottom: 1px solid var(--jp-border-color2);\n  box-shadow: var(--jp-toolbar-box-shadow);\n  z-index: 2;\n}\n\n.dask-URLInput-wrapper {\n  background-color: var(--jp-input-active-background);\n  border: var(--jp-border-width) solid var(--jp-border-color2);\n  flex: 1 1 auto;\n  height: 30px;\n  padding: 0px 12px;\n  margin: 0 4px 0 0;\n}\n\n.dask-URLInput-wrapper:focus-within {\n  border: var(--jp-border-width) solid var(--md-blue-500);\n  box-shadow: inset 0 0 4px var(--md-blue-300);\n}\n\n.dask-URLInput-wrapper input {\n  background: transparent;\n  float: left;\n  border: none;\n  outline: none;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  width: calc(100% - 18px);\n  line-height: 28px;\n}\n\n.dask-URLInput-wrapper::placeholder {\n  color: var(--jp-ui-font-color3);\n  font-size: var(--jp-ui-font-size1);\n}\n\n.dask-UrlInput .jp-ToolbarButton {\n  flex: 0 0 auto;\n  margin: 0 0 0 4px;\n  background-color: var(--jp-layout-color2);\n  min-width: 16px;\n}\n\n/**\n * Rules for the dashboard panels.\n */\n.dask-DaskDashboard-widget {\n  background-color: white;\n}\n\n.dask-DaskDashboard-inactive {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--jp-ui-font-color3);\n  font-size: var(--jp-ui-font-size3);\n  background-color: var(--jp-layout-color0);\n  z-index: 10;\n}\n\n.dask-DaskDashboard-inactive:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(dask.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.1;\n}\n\n/**\n * Rules related to the cluster manager.\n */\n\n.dask-DaskClusterManager {\n  border-top: 6px solid var(--jp-toolbar-border-color);\n}\n\n.dask-DaskClusterManager .jp-Toolbar {\n  align-items: center;\n}\n\n.dask-DaskClusterManager .jp-Toolbar .dask-DaskClusterManager-label {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 0px;\n}\n\n.dask-DaskClusterManager button.jp-Button > span {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.dask-ClusterListing ul.dask-ClusterListing-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.dask-ClusterListingItem {\n  display: inline-block;\n  list-style-type: none;\n  padding: 8px;\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: grab;\n}\n\n.dask-ClusterListingItem-drag {\n  opacity: 0.7;\n  color: var(--jp-ui-font-color1);\n  cursor: grabbing;\n  max-width: 260px;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.dask-ClusterListingItem-title {\n  margin: 0px;\n  font-size: var(--jp-ui-font-size2);\n}\n\n.dask-ClusterListingItem-link a {\n  text-decoration: none;\n  color: var(--jp-content-link-color);\n}\n\n.dask-ClusterListingItem-link a:hover {\n  text-decoration: underline;\n}\n\n.dask-ClusterListingItem-link a:visited {\n  color: var(--jp-content-link-color);\n}\n\n.dask-ClusterListingItem:hover {\n  background: var(--jp-layout-color2);\n}\n\n.dask-ClusterListingItem.jp-mod-active {\n  color: white;\n  background: var(--jp-brand-color0);\n}\n\n.dask-ClusterListingItem.jp-mod-active a,\n.dask-ClusterListingItem.jp-mod-active a:visited {\n  color: white;\n}\n\n.dask-ClusterListingItem button.jp-mod-styled {\n  background-color: transparent;\n}\n\n.dask-ClusterListingItem button.jp-mod-styled:hover {\n  background-color: var(--jp-layout-color3);\n}\n\n.dask-ClusterListingItem.jp-mod-active button.jp-mod-styled:hover {\n  background-color: var(--jp-brand-color1);\n}\n\n.dask-ClusterListingItem-button-panel {\n  display: flex;\n  align-content: center;\n}\n\nbutton.dask-ClusterListingItem-stop {\n  color: var(--jp-warn-color1);\n  font-weight: 600;\n}\n\nbutton.dask-ClusterListingItem-scale {\n  color: var(--jp-accent-color1);\n  font-weight: 600;\n}\n\n.dask-ClusterListingItem button.dask-ClusterListingItem-code.jp-mod-styled {\n  margin: 0 4px 0 4px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n/**\n * Rules for the scaling dialog.\n */\n\n.dask-ScalingHeader {\n  font-size: var(--jp-ui-font-size2);\n}\n\n.dask-ScalingSection {\n  margin-left: 24px;\n}\n\n.dask-ScalingSection-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 12px 0 12px 0;\n}\n\n.dask-ScalingHeader input[type='checkbox'] {\n  position: relative;\n  top: 4px;\n  left: 4px;\n  margin: 0 0 0 8px;\n}\n\n.dask-ScalingSection input[type='number'] {\n  width: 72px;\n}\n\n.dask-ScalingSection-label.dask-mod-disabled {\n  color: var(--jp-ui-font-color3);\n}\n\n.dask-ScalingSection input[type='number']:disabled {\n  color: var(--jp-ui-font-color3);\n}\n\n/**\n * Rules for the logos.\n */\n\n.dask-SearchIcon {\n  background-image: var(--jp-icon-search);\n}\n\n[data-jp-theme-light='true'] .dask-CodeIcon {\n  background-image: url(code-light.svg);\n}\n\n[data-jp-theme-light='false'] .dask-CodeIcon {\n  background-image: url(code-dark.svg);\n}\n\n.dask-ClusterListingItem.jp-mod-active .dask-CodeIcon {\n  background-image: url(code-dark.svg);\n}\n\n.dask-DaskLogo {\n  background-image: url(dask.svg);\n}\n\n#setting-editor .dask-DaskLogo {\n  background-repeat: no-repeat;\n  background-size: 85%;\n  background-position: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./lib/clusters.js":
/*!*************************!*\
  !*** ./lib/clusters.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DaskClusterManager: () => (/* binding */ DaskClusterManager)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
/* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lumino_algorithm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lumino_domutils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lumino/domutils */ "webpack/sharing/consume/default/@lumino/domutils");
/* harmony import */ var _lumino_domutils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lumino_domutils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lumino_dragdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lumino/dragdrop */ "webpack/sharing/consume/default/@lumino/dragdrop");
/* harmony import */ var _lumino_dragdrop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lumino_dragdrop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lumino_polling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lumino/polling */ "webpack/sharing/consume/default/@lumino/polling");
/* harmony import */ var _lumino_polling__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lumino_polling__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lumino_signaling__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scaling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scaling */ "./lib/scaling.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_13__);














/**
 * A refresh interval (in ms) for polling the backend cluster manager.
 */
const REFRESH_INTERVAL = 5000;
/**
 * The threshold in pixels to start a drag event.
 */
const DRAG_THRESHOLD = 5;
/**
 * The mimetype used for Jupyter cell data.
 */
const JUPYTER_CELL_MIME = 'application/vnd.jupyter.cells';
/**
 * A widget for hosting Dask cluster management.
 */
class DaskClusterManager extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_10__.Widget {
    /**
     * Create a new Dask cluster manager.
     */
    constructor(options) {
        super();
        this._dragData = null;
        this._clusters = [];
        this._activeClusterChanged = new _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__.Signal(this);
        this._failedServerChecks = 0;
        this._hasServer = false;
        this._isReady = true;
        this.addClass('dask-DaskClusterManager');
        this._serverSettings = _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeSettings();
        this._injectClientCodeForCluster = options.injectClientCodeForCluster;
        this._getClientCodeForCluster = options.getClientCodeForCluster;
        this._registry = options.registry;
        this._launchClusterId = options.launchClusterId;
        // A function to set the active cluster.
        this._setActiveById = (id) => {
            const cluster = this._clusters.find(c => c.id === id);
            if (!cluster) {
                return;
            }
            const proxyUrl = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(this._serverSettings.baseUrl, 'proxy');
            const proxyPrefix = new URL(proxyUrl).pathname;
            if (cluster.dashboard_link.indexOf(proxyPrefix) !== -1) {
                // If the dashboard link is already proxied using
                // jupyter_server_proxy, don't proxy again. This
                // can happen if the user has overridden the dashboard
                // URL to the jupyter_server_proxy URL manually.
                options.setDashboardUrl(cluster.dashboard_link);
            }
            else {
                // Otherwise, use the internal proxy URL.
                options.setDashboardUrl(`dask/dashboard/${cluster.id}`);
            }
            const old = this._activeCluster;
            if (old && old.id === cluster.id) {
                return;
            }
            this._activeCluster = cluster;
            this._activeClusterChanged.emit({
                name: 'cluster',
                oldValue: old,
                newValue: cluster
            });
            this.update();
        };
        const layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_10__.PanelLayout());
        this._clusterListing = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_10__.Widget();
        this._clusterListing.addClass('dask-ClusterListing');
        // Create the toolbar.
        const toolbar = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Toolbar();
        // Make a label widget for the toolbar.
        const toolbarLabel = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_10__.Widget();
        toolbarLabel.node.textContent = 'CLUSTERS';
        toolbarLabel.addClass('dask-DaskClusterManager-label');
        toolbar.addItem('label', toolbarLabel);
        // Make a refresh button for the toolbar.
        toolbar.addItem('refresh', new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton({
            icon: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.refreshIcon,
            onClick: async () => {
                return this._updateClusterList();
            },
            tooltip: 'Refresh Cluster List'
        }));
        // Make a new cluster button for the toolbar.
        toolbar.addItem(this._launchClusterId, new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.CommandToolbarButton({
            commands: this._registry,
            id: this._launchClusterId
        }));
        layout.addWidget(toolbar);
        layout.addWidget(this._clusterListing);
        // Do an initial refresh of the cluster list.
        void this._updateClusterList();
        // Also refresh periodically.
        this._poll = new _lumino_polling__WEBPACK_IMPORTED_MODULE_8__.Poll({
            factory: async () => {
                await this._updateClusterList();
            },
            frequency: { interval: REFRESH_INTERVAL, backoff: true, max: 60 * 1000 },
            standby: 'when-hidden'
        });
    }
    /**
     * The currently selected cluster, or undefined if there is none.
     */
    get activeCluster() {
        return this._activeCluster;
    }
    /**
     * Set an active cluster by id.
     */
    setActiveCluster(id) {
        this._setActiveById(id);
    }
    /**
     * A signal that is emitted when an active cluster changes.
     */
    get activeClusterChanged() {
        return this._activeClusterChanged;
    }
    /**
     * Whether the cluster manager is ready to launch a cluster
     */
    get isReady() {
        return this._isReady;
    }
    /**
     * Get the current clusters known to the manager.
     */
    get clusters() {
        return this._clusters;
    }
    /**
     * Refresh the current list of clusters.
     */
    async refresh() {
        await this._updateClusterList();
    }
    /**
     * Start a new cluster.
     */
    async start() {
        const cluster = await this._launchCluster();
        return cluster;
    }
    /**
     * Stop a cluster by ID.
     */
    async stop(id) {
        const cluster = this._clusters.find(c => c.id === id);
        if (!cluster) {
            throw Error(`Cannot find cluster ${id}`);
        }
        await this._stopById(id);
    }
    /**
     * Scale a cluster by ID.
     */
    async scale(id) {
        const cluster = this._clusters.find(c => c.id === id);
        if (!cluster) {
            throw Error(`Cannot find cluster ${id}`);
        }
        const newCluster = await this._scaleById(id);
        return newCluster;
    }
    /**
     * Dispose of the cluster manager.
     */
    dispose() {
        if (this.isDisposed) {
            return;
        }
        this._poll.dispose();
        super.dispose();
    }
    /**
     * Handle an update request.
     */
    onUpdateRequest(msg) {
        // Don't bother if the sidebar is not visible
        if (!this.isVisible) {
            return;
        }
        react_dom__WEBPACK_IMPORTED_MODULE_13__.render(react__WEBPACK_IMPORTED_MODULE_12__.createElement(ClusterListing, { clusters: this._clusters, activeClusterId: (this._activeCluster && this._activeCluster.id) || '', scaleById: (id) => {
                return this._scaleById(id);
            }, stopById: (id) => {
                return this._stopById(id);
            }, setActiveById: this._setActiveById, injectClientCodeForCluster: this._injectClientCodeForCluster }), this._clusterListing.node);
    }
    /**
     * Rerender after showing.
     */
    onAfterShow(msg) {
        this.update();
    }
    /**
     * Handle `after-attach` messages for the widget.
     */
    onAfterAttach(msg) {
        super.onAfterAttach(msg);
        let node = this._clusterListing.node;
        node.addEventListener('p-dragenter', this);
        node.addEventListener('p-dragleave', this);
        node.addEventListener('p-dragover', this);
        node.addEventListener('mousedown', this);
    }
    /**
     * Handle `before-detach` messages for the widget.
     */
    onBeforeDetach(msg) {
        let node = this._clusterListing.node;
        node.removeEventListener('p-dragenter', this);
        node.removeEventListener('p-dragleave', this);
        node.removeEventListener('p-dragover', this);
        node.removeEventListener('mousedown', this);
        document.removeEventListener('mouseup', this, true);
        document.removeEventListener('mousemove', this, true);
    }
    /**
     * Handle the DOM events for the directory listing.
     *
     * @param event - The DOM event sent to the widget.
     *
     * #### Notes
     * This method implements the DOM `EventListener` interface and is
     * called in response to events on the panel's DOM node. It should
     * not be called directly by user code.
     */
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                this._evtMouseDown(event);
                break;
            case 'mouseup':
                this._evtMouseUp(event);
                break;
            case 'mousemove':
                this._evtMouseMove(event);
                break;
            default:
                break;
        }
    }
    /**
     * Handle `mousedown` events for the widget.
     */
    _evtMouseDown(event) {
        const { button, shiftKey } = event;
        // We only handle main or secondary button actions.
        if (!(button === 0 || button === 2)) {
            return;
        }
        // Shift right-click gives the browser default behavior.
        if (shiftKey && button === 2) {
            return;
        }
        // Find the target cluster.
        const clusterIndex = this._findCluster(event);
        if (clusterIndex === -1) {
            return;
        }
        // Prepare for a drag start
        this._dragData = {
            pressX: event.clientX,
            pressY: event.clientY,
            index: clusterIndex
        };
        // Enter possible drag mode
        document.addEventListener('mouseup', this, true);
        document.addEventListener('mousemove', this, true);
        event.preventDefault();
    }
    /**
     * Handle the `'mouseup'` event on the document.
     */
    _evtMouseUp(event) {
        // Remove the event listeners we put on the document
        if (event.button !== 0 || !this._drag) {
            document.removeEventListener('mousemove', this, true);
            document.removeEventListener('mouseup', this, true);
        }
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Handle the `'mousemove'` event for the widget.
     */
    _evtMouseMove(event) {
        let data = this._dragData;
        if (!data) {
            return;
        }
        // Check for a drag initialization.
        let dx = Math.abs(event.clientX - data.pressX);
        let dy = Math.abs(event.clientY - data.pressY);
        if (dx >= DRAG_THRESHOLD || dy >= DRAG_THRESHOLD) {
            event.preventDefault();
            event.stopPropagation();
            void this._startDrag(data.index, event.clientX, event.clientY);
        }
    }
    /**
     * Start a drag event.
     */
    async _startDrag(index, clientX, clientY) {
        // Create the drag image.
        const model = this._clusters[index];
        const listingItem = this._clusterListing.node.querySelector(`li.dask-ClusterListingItem[data-cluster-id="${model.id}"]`);
        const dragImage = Private.createDragImage(listingItem);
        // Set up the drag event.
        this._drag = new _lumino_dragdrop__WEBPACK_IMPORTED_MODULE_7__.Drag({
            mimeData: new _lumino_coreutils__WEBPACK_IMPORTED_MODULE_5__.MimeData(),
            dragImage,
            supportedActions: 'copy',
            proposedAction: 'copy',
            source: this
        });
        // Add mimeData for plain text so that normal editors can
        // receive the data.
        const textData = this._getClientCodeForCluster(model);
        this._drag.mimeData.setData('text/plain', textData);
        // Add cell data for notebook drops.
        const cellData = [
            {
                cell_type: 'code',
                source: textData,
                outputs: [],
                execution_count: null,
                metadata: {}
            }
        ];
        this._drag.mimeData.setData(JUPYTER_CELL_MIME, cellData);
        // Remove mousemove and mouseup listeners and start the drag.
        document.removeEventListener('mousemove', this, true);
        document.removeEventListener('mouseup', this, true);
        return this._drag.start(clientX, clientY).then(action => {
            if (this.isDisposed) {
                return;
            }
            this._drag = null;
            this._dragData = null;
        });
    }
    /**
     * Launch a new cluster on the server.
     */
    async _launchCluster() {
        this._isReady = false;
        this._registry.notifyCommandChanged(this._launchClusterId);
        const response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}dask/clusters`, { method: 'PUT' }, this._serverSettings);
        if (response.status !== 200) {
            const err = await response.json();
            void (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)('Cluster Start Error', err);
            this._isReady = true;
            this._registry.notifyCommandChanged(this._launchClusterId);
            throw err;
        }
        const model = (await response.json());
        await this._updateClusterList();
        this._isReady = true;
        this._registry.notifyCommandChanged(this._launchClusterId);
        return model;
    }
    /**
     * Refresh the list of clusters on the server.
     */
    async _updateClusterList() {
        const response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}dask/clusters`, {}, this._serverSettings);
        if (response.status !== 200) {
            this._failedServerChecks++;
            const msg = 'Failed to list Dask clusters: might the server extension not be installed/enabled?';
            const err = new Error(msg);
            if (!this._hasServer && this._failedServerChecks == 5) {
                void (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)('Dask Server Error', err);
            }
            throw err;
        }
        this._hasServer = true;
        const data = (await response.json());
        this._clusters = data;
        // Check to see if the active cluster still exits.
        // If it doesn't, or if there is no active cluster,
        // select the first one.
        const active = this._clusters.find(c => c.id === (this._activeCluster && this._activeCluster.id));
        if (!active) {
            const id = (this._clusters[0] && this._clusters[0].id) || '';
            this._setActiveById(id);
        }
        this.update();
    }
    /**
     * Stop a cluster by its id.
     */
    async _stopById(id) {
        const response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}dask/clusters/${id}`, { method: 'DELETE' }, this._serverSettings);
        if (response.status !== 204) {
            const err = await response.json();
            void (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)('Failed to close cluster', err);
            throw err;
        }
        await this._updateClusterList();
    }
    /**
     * Scale a cluster by its id.
     */
    async _scaleById(id) {
        const cluster = this._clusters.find(c => c.id === id);
        if (!cluster) {
            throw Error(`Failed to find cluster ${id} to scale`);
        }
        const update = await (0,_scaling__WEBPACK_IMPORTED_MODULE_11__.showScalingDialog)(cluster);
        if (_lumino_coreutils__WEBPACK_IMPORTED_MODULE_5__.JSONExt.deepEqual(update, cluster)) {
            // If the user canceled, or the model is identical don't try to update.
            return Promise.resolve(cluster);
        }
        const response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(`${this._serverSettings.baseUrl}dask/clusters/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(update)
        }, this._serverSettings);
        if (response.status !== 200) {
            const err = await response.json();
            void (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showErrorMessage)('Failed to scale cluster', err);
            throw err;
        }
        const model = (await response.json());
        await this._updateClusterList();
        return model;
    }
    _findCluster(event) {
        const nodes = Array.from(this.node.querySelectorAll('li.dask-ClusterListingItem'));
        return _lumino_algorithm__WEBPACK_IMPORTED_MODULE_4__.ArrayExt.findFirstIndex(nodes, node => {
            return _lumino_domutils__WEBPACK_IMPORTED_MODULE_6__.ElementExt.hitTest(node, event.clientX, event.clientY);
        });
    }
}
/**
 * A React component for a launcher button listing.
 */
function ClusterListing(props) {
    let listing = props.clusters.map(cluster => {
        return (react__WEBPACK_IMPORTED_MODULE_12__.createElement(ClusterListingItem, { isActive: cluster.id === props.activeClusterId, key: cluster.id, cluster: cluster, scale: () => props.scaleById(cluster.id), stop: () => props.stopById(cluster.id), setActive: () => props.setActiveById(cluster.id), injectClientCode: () => props.injectClientCodeForCluster(cluster) }));
    });
    // Return the JSX component.
    return (react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("ul", { className: "dask-ClusterListing-list" }, listing)));
}
/**
 * A TSX functional component for rendering a single running cluster.
 */
function ClusterListingItem(props) {
    const { cluster, isActive, setActive, scale, stop, injectClientCode } = props;
    let itemClass = 'dask-ClusterListingItem';
    itemClass = isActive ? `${itemClass} jp-mod-active` : itemClass;
    let minimum = null;
    let maximum = null;
    if (cluster.adapt) {
        minimum = (react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-stats" },
            "Minimum Workers: ",
            cluster.adapt.minimum));
        maximum = (react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-stats" },
            "Maximum Workers: ",
            cluster.adapt.maximum));
    }
    return (react__WEBPACK_IMPORTED_MODULE_12__.createElement("li", { className: itemClass, "data-cluster-id": cluster.id, onClick: evt => {
            setActive();
            evt.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-title" }, cluster.name),
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-link", title: cluster.scheduler_address },
            "Scheduler Address: ",
            cluster.scheduler_address),
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-link" },
            "Dashboard URL:",
            ' ',
            react__WEBPACK_IMPORTED_MODULE_12__.createElement("a", { target: "_blank", rel: "noreferrer", href: cluster.dashboard_link, title: cluster.dashboard_link }, cluster.dashboard_link)),
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-stats" },
            "Number of Cores: ",
            cluster.cores),
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-stats" },
            "Memory: ",
            cluster.memory),
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-stats" },
            "Number of Workers: ",
            cluster.workers),
        minimum,
        maximum,
        react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", { className: "dask-ClusterListingItem-button-panel" },
            react__WEBPACK_IMPORTED_MODULE_12__.createElement("button", { className: "dask-ClusterListingItem-button dask-ClusterListingItem-code dask-CodeIcon jp-mod-styled", onClick: evt => {
                    injectClientCode();
                    evt.stopPropagation();
                }, title: `Inject client code for ${cluster.name}` }),
            react__WEBPACK_IMPORTED_MODULE_12__.createElement("button", { className: "dask-ClusterListingItem-button dask-ClusterListingItem-scale jp-mod-styled", onClick: async (evt) => {
                    evt.stopPropagation();
                    return scale();
                }, title: `Rescale ${cluster.name}` }, "SCALE"),
            react__WEBPACK_IMPORTED_MODULE_12__.createElement("button", { className: "dask-ClusterListingItem-button dask-ClusterListingItem-stop jp-mod-styled", onClick: async (evt) => {
                    evt.stopPropagation();
                    return stop();
                }, title: `Shutdown ${cluster.name}` }, "SHUTDOWN"))));
}
/**
 * A namespace for module-private functionality.
 */
var Private;
(function (Private) {
    /**
     * Create a drag image for an HTML node.
     */
    function createDragImage(node) {
        const image = node.cloneNode(true);
        image.classList.add('dask-ClusterListingItem-drag');
        return image;
    }
    Private.createDragImage = createDragImage;
})(Private || (Private = {}));


/***/ }),

/***/ "./lib/dashboard.js":
/*!**************************!*\
  !*** ./lib/dashboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DaskDashboard: () => (/* binding */ DaskDashboard),
/* harmony export */   DaskDashboardLauncher: () => (/* binding */ DaskDashboardLauncher),
/* harmony export */   URLInput: () => (/* binding */ URLInput)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/services */ "webpack/sharing/consume/default/@jupyterlab/services");
/* harmony import */ var _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
/* harmony import */ var _lumino_coreutils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lumino_coreutils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lumino_polling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lumino/polling */ "webpack/sharing/consume/default/@lumino/polling");
/* harmony import */ var _lumino_polling__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lumino_polling__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lumino_signaling__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);










/**
 * A class for hosting a Dask dashboard in an iframe.
 */
class DaskDashboard extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget {
    /**
     * Construct a new dashboard widget.
     */
    constructor() {
        super({
            // Disable allow some iframe extensions to let server requests
            // and scripts to execute in the bokeh server context.
            // This is unsafe, but we presumably trust the code in the bokeh server.
            content: new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.IFrame({ sandbox: ['allow-scripts', 'allow-same-origin'] })
        });
        this._item = null;
        this._dashboardUrl = '';
        this._active = false;
        this._inactivePanel = Private.createInactivePanel();
        this.content.node.appendChild(this._inactivePanel);
        this.addClass('dask-DaskDashboard-widget');
        this.update();
    }
    /**
     * The current dashboard item for the widget.
     */
    get item() {
        return this._item;
    }
    set item(value) {
        if (_lumino_coreutils__WEBPACK_IMPORTED_MODULE_4__.JSONExt.deepEqual(value, this._item)) {
            return;
        }
        this._item = value;
        this.update();
    }
    /**
     * The current dashboard URL for the widget.
     */
    get dashboardUrl() {
        return this._dashboardUrl;
    }
    set dashboardUrl(value) {
        if (value === this._dashboardUrl) {
            return;
        }
        this._dashboardUrl = Private.normalizeDashboardUrl(value);
        this.update();
    }
    /**
     * Whether the dashboard is active. When inactive,
     * it will show a placeholder panel.
     */
    get active() {
        return this._active;
    }
    set active(value) {
        if (value === this._active) {
            return;
        }
        this._active = value;
        this.update();
    }
    /**
     * Handle an update request to the dashboard panel.
     */
    onUpdateRequest() {
        // If there is nothing to show, empty the iframe URL and
        // show the inactive panel.
        if (!this.item || !this.dashboardUrl || !this.active) {
            this.content.url = '';
            this._inactivePanel.style.display = '';
            return;
        }
        // Make sure the inactive panel is hidden
        this._inactivePanel.style.display = 'none';
        this.content.url = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(this.dashboardUrl, this.item.route);
    }
}
/**
 * A widget for hosting Dask dashboard launchers.
 */
class DaskDashboardLauncher extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.Widget {
    /**
     * Create a new Dask sidebar.
     */
    constructor(options) {
        super();
        let layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.PanelLayout());
        this._dashboard = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.Widget();
        this._serverSettings = _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeSettings();
        this._input = new URLInput(this._serverSettings, options.linkFinder);
        layout.addWidget(this._input);
        layout.addWidget(this._dashboard);
        this.addClass('dask-DaskDashboardLauncher');
        this._items = options.items || [];
        this._launchItem = options.launchItem;
        this._input.urlInfoChanged.connect(this._updateLinks, this);
    }
    _updateLinks(_, change) {
        if (!change.newValue.isActive) {
            this.update();
            return;
        }
        const result = Private.getDashboardPlots(change.newValue);
        this._items = result;
        this.update();
    }
    /**
     * The list of dashboard items which can be launched.
     */
    get items() {
        return this._items;
    }
    /**
     * Get the URL input widget.
     */
    get input() {
        return this._input;
    }
    /**
     * Handle an update request.
     */
    onUpdateRequest() {
        // Don't bother if the sidebar is not visible
        if (!this.isVisible) {
            return;
        }
        react_dom__WEBPACK_IMPORTED_MODULE_9__.render(react__WEBPACK_IMPORTED_MODULE_8__.createElement(DashboardListing, { launchItem: this._launchItem, isEnabled: this.input.urlInfo.isActive, items: this._items }), this._dashboard.node);
    }
    /**
     * Rerender after showing.
     */
    onAfterShow() {
        this.update();
    }
}
/**
 * A widget for hosting a url input element.
 */
class URLInput extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.Widget {
    /**
     * Construct a new input element.
     */
    constructor(serverSettings, linkFinder) {
        super();
        this._urlChanged = new _lumino_signaling__WEBPACK_IMPORTED_MODULE_6__.Signal(this);
        this._urlInfo = { isActive: false, url: '', plots: {} };
        this._browserDashboardCheck = false;
        this.addClass('dask-URLInput');
        const layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.PanelLayout());
        const wrapper = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_7__.Widget();
        wrapper.addClass('dask-URLInput-wrapper');
        this._input = document.createElement('input');
        this._input.placeholder = 'DASK DASHBOARD URL';
        wrapper.node.appendChild(this._input);
        layout.addWidget(wrapper);
        this._serverSettings = serverSettings;
        if (linkFinder) {
            const findButton = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ToolbarButton({
                icon: _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_3__.searchIcon,
                onClick: async () => {
                    let link = await linkFinder();
                    if (link) {
                        this.url = link;
                    }
                },
                tooltip: 'Auto-detect dashboard URL'
            });
            layout.addWidget(findButton);
        }
        this._startUrlCheckTimer();
    }
    /**
     * The underlying input value.
     */
    get input() {
        return this._input;
    }
    /**
     * The base url for the dask webserver.
     *
     * #### Notes
     * Setting this value will result in a urlChanged
     * signal being emitted, but it will happen asynchronously,
     * as it first checks to see whether the url is pointing
     * at a valid dask dashboard server.
     */
    set url(newValue) {
        this._input.value = newValue;
        const oldValue = this._urlInfo;
        if (newValue === oldValue.url) {
            return;
        }
        void Private.testDaskDashboard(newValue, this._serverSettings, this._browserDashboardCheck).then(result => {
            this._urlInfo = result;
            this._urlChanged.emit({ oldValue, newValue: result });
            this._input.blur();
            this.update();
            if (!result) {
                console.warn(`${newValue} does not appear to host a valid Dask dashboard`);
            }
        });
    }
    /**
     * The URL information for the dashboard. This should be set via the url setter,
     * but read through this getter, as it brings in some extra information.
     */
    get urlInfo() {
        return this._urlInfo;
    }
    /**
     * A signal emitted when the url changes.
     */
    get urlInfoChanged() {
        return this._urlChanged;
    }
    /**
     * The in browser dashboard check for authenticated dashboards.
     */
    get browserDashboardCheck() {
        return this._browserDashboardCheck;
    }
    set browserDashboardCheck(value) {
        this._browserDashboardCheck = value;
    }
    /**
     * Dispose of the resources held by the dashboard.
     */
    dispose() {
        if (this.isDisposed) {
            return;
        }
        this._poll.dispose();
        super.dispose();
    }
    /**
     * Handle the DOM events for the widget.
     *
     * @param event - The DOM event sent to the widget.
     *
     * #### Notes
     * This method implements the DOM `EventListener` interface and is
     * called in response to events on the main area widget's node. It should
     * not be called directly by user code.
     */
    handleEvent(event) {
        switch (event.type) {
            case 'keydown':
                switch (event.keyCode) {
                    case 13: // Enter
                        event.stopPropagation();
                        event.preventDefault();
                        this.url = this._input.value;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
    /**
     * Handle `after-attach` messages for the widget.
     */
    onAfterAttach() {
        this._input.addEventListener('keydown', this, true);
    }
    /**
     * Handle `before-detach` messages for the widget.
     */
    onBeforeDetach() {
        this._input.removeEventListener('keydown', this, true);
    }
    /**
     * Periodically poll for valid url.
     */
    _startUrlCheckTimer() {
        this._poll = new _lumino_polling__WEBPACK_IMPORTED_MODULE_5__.Poll({
            factory: async () => {
                const urlInfo = this._urlInfo;
                // Don't bother checking if there is no url.
                if (!urlInfo.url) {
                    return;
                }
                const result = await Private.testDaskDashboard(urlInfo.url, this._serverSettings, this._browserDashboardCheck);
                if (!result.isActive && urlInfo.isActive) {
                    console.warn(`The connection to dask dashboard ${urlInfo.url} has been lost`);
                }
                if (!_lumino_coreutils__WEBPACK_IMPORTED_MODULE_4__.JSONExt.deepEqual(result, urlInfo)) {
                    this._urlInfo = result;
                    this._urlChanged.emit({
                        oldValue: urlInfo,
                        newValue: result
                    });
                }
                // Throw an error if the connection died. If we don't raise/reject here,
                // then the poll won't back off.
                if (!result.isActive) {
                    throw Error(`No connection to ${urlInfo.url}`);
                }
            },
            frequency: { interval: 4 * 1000, backoff: true, max: 120 * 1000 },
            standby: 'when-hidden'
        });
        // When the URL changes, refresh the poll and backoff.
        this._urlChanged.connect(() => this._poll.refresh(), this);
    }
}
/**
 * A React component for a launcher button listing.
 */
function DashboardListing(props) {
    if (!props.isEnabled) {
        return (react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", { className: "dask-DashboardListing-inactive" },
            react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", { className: "dask-DashboardListing-inactive-title" }, "Dashboard not connected"),
            react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", { className: "dask-DashboardListing-inactive-detail" }, "To connect, paste a dashboard URL in the box above, or create a new Dask cluster with the cluster manager below. If you are still unable to connect, check your network setup.")));
    }
    const items = [...props.items].sort((e1, e2) => e1.label <= e2.label ? -1 : 1);
    const listing = items.map(item => {
        return (react__WEBPACK_IMPORTED_MODULE_8__.createElement("li", { className: "dask-DashboardListing-item", key: item.route },
            react__WEBPACK_IMPORTED_MODULE_8__.createElement("button", { className: "jp-mod-styled jp-mod-accept", value: item.label, disabled: !props.isEnabled, onClick: () => props.launchItem(item) }, item.label)));
    });
    // Return the JSX component.
    return (react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_8__.createElement("ul", { className: "dask-DashboardListing-list" }, listing)));
}
/**
 * A namespace for private functionality.
 */
var Private;
(function (Private) {
    /**
     * Optionally remove a `status` route from a dashboard url.
     */
    function normalizeDashboardUrl(url, baseUrl = '') {
        if (isLocal(url)) {
            if (!baseUrl) {
                baseUrl = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.PageConfig.getBaseUrl();
            }
            // If the path-portion of the baseUrl has been included,
            // strip that off.
            const tmp = new URL(baseUrl);
            if (url.startsWith(tmp.pathname)) {
                url = url.slice(tmp.pathname.length);
            }
            // Fully qualify the local URL to remove any relative-path confusion.
            url = baseUrl + url;
        }
        // If 'status' has been included at the end, strip it.
        if (url.endsWith('status')) {
            url = url.slice(0, -'status'.length);
        }
        else if (url.endsWith('status/')) {
            url = url.slice(0, -'status/'.length);
        }
        return url;
    }
    Private.normalizeDashboardUrl = normalizeDashboardUrl;
    /**
     * Return the json result of /individual-plots.json
     */
    function getDashboardPlots(info) {
        const plots = [];
        for (let key in info.plots) {
            const label = key.replace('Individual ', '');
            const route = String(info.plots[key]);
            const plot = { route: route, label: label, key: label };
            plots.push(plot);
        }
        return plots;
    }
    Private.getDashboardPlots = getDashboardPlots;
    /**
     * Test whether a given URL hosts a dask dashboard.
     */
    async function testDaskDashboard(url, settings, browserDashboardCheck = false) {
        url = normalizeDashboardUrl(url, settings.baseUrl);
        // If this is a url that we are proxying under the notebook server,
        // check for the individual charts directly.
        if (url.indexOf(settings.baseUrl) === 0) {
            return _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(url, 'individual-plots.json'), {}, settings)
                .then(async (response) => {
                if (response.status === 200) {
                    const plots = (await response.json());
                    return {
                        url,
                        isActive: true,
                        plots
                    };
                }
                else {
                    return {
                        url,
                        isActive: false,
                        plots: {}
                    };
                }
            })
                .catch(() => {
                return {
                    url,
                    isActive: false,
                    plots: {}
                };
            });
        }
        else if (browserDashboardCheck) {
            return fetch(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(url, 'individual-plots.json'))
                .then(async (response) => {
                if (response.status === 200) {
                    const plots = (await response.json());
                    return {
                        url,
                        isActive: true,
                        plots
                    };
                }
                else {
                    return {
                        url,
                        isActive: false,
                        plots: {}
                    };
                }
            })
                .catch(() => {
                return {
                    url,
                    isActive: false,
                    plots: {}
                };
            });
        }
        const response = await _jupyterlab_services__WEBPACK_IMPORTED_MODULE_2__.ServerConnection.makeRequest(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.join(settings.baseUrl, 'dask', 'dashboard-check', encodeURIComponent(url)), {}, settings);
        const info = (await response.json());
        return info;
    }
    Private.testDaskDashboard = testDaskDashboard;
    function createInactivePanel() {
        const panel = document.createElement('div');
        panel.className = 'dask-DaskDashboard-inactive';
        return panel;
    }
    Private.createInactivePanel = createInactivePanel;
    /**
     * Test whether the url is a local url.
     *
     * #### Notes
     * This function returns `false` for any fully qualified url, including
     * `data:`, `file:`, and `//` protocol URLs.
     */
    function isLocal(url) {
        const { protocol } = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_1__.URLExt.parse(url);
        return (url.toLowerCase().indexOf(protocol) !== 0 && url.indexOf('//') !== 0);
    }
    Private.isLocal = isLocal;
})(Private || (Private = {}));


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DaskIcon: () => (/* binding */ DaskIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
/* harmony import */ var _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jupyterlab_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/console */ "webpack/sharing/consume/default/@jupyterlab/console");
/* harmony import */ var _jupyterlab_console__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_console__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jupyterlab/mainmenu */ "webpack/sharing/consume/default/@jupyterlab/mainmenu");
/* harmony import */ var _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jupyterlab/settingregistry */ "webpack/sharing/consume/default/@jupyterlab/settingregistry");
/* harmony import */ var _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jupyterlab/statedb */ "webpack/sharing/consume/default/@jupyterlab/statedb");
/* harmony import */ var _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
/* harmony import */ var _lumino_algorithm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lumino_algorithm__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @lumino/signaling */ "webpack/sharing/consume/default/@lumino/signaling");
/* harmony import */ var _lumino_signaling__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lumino_signaling__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard */ "./lib/dashboard.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar */ "./lib/sidebar.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_dask_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../style/dask.svg */ "./style/dask.svg?e344");














const DaskIcon = new _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.LabIcon({
    name: 'dask:icon',
    svgstr: _style_dask_svg__WEBPACK_IMPORTED_MODULE_13__
});
var CommandIDs;
(function (CommandIDs) {
    /**
     * Launch a dask dashboard panel in an iframe.
     */
    CommandIDs.launchPanel = 'dask:launch-dashboard';
    /**
     * Launch a dask custom layout.
     */
    CommandIDs.launchLayout = 'dask:launch-layout';
    /**
     * Attempt to find an active dask cluster.
     */
    CommandIDs.populateDashboardUrl = 'dask:populate-dashboard-url';
    /**
     * Attempt to find an active dask cluster.
     */
    CommandIDs.populateAndLaunchLayout = 'dask:populate-and-launch-layout';
    /**
     * Inject client code into the active editor.
     */
    CommandIDs.injectClientCode = 'dask:inject-client-code';
    /**
     * Launch a new cluster.
     */
    CommandIDs.launchCluster = 'dask:launch-cluster';
    /**
     * Shutdown a cluster.
     */
    CommandIDs.stopCluster = 'dask:stop-cluster';
    /**
     * Scale a cluster.
     */
    CommandIDs.scaleCluster = 'dask:scale-cluster';
    /**
     * Toggle the auto-starting of clients.
     */
    CommandIDs.toggleAutoStartClient = 'dask:toggle-auto-start-client';
})(CommandIDs || (CommandIDs = {}));
const PLUGIN_ID = 'dask-labextension:plugin';
/**
 * The dask dashboard extension.
 */
const plugin = {
    activate,
    id: PLUGIN_ID,
    requires: [
        _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.ICommandPalette,
        _jupyterlab_console__WEBPACK_IMPORTED_MODULE_3__.IConsoleTracker,
        _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILabShell,
        _jupyterlab_application__WEBPACK_IMPORTED_MODULE_0__.ILayoutRestorer,
        _jupyterlab_mainmenu__WEBPACK_IMPORTED_MODULE_4__.IMainMenu,
        _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.INotebookTracker,
        _jupyterlab_settingregistry__WEBPACK_IMPORTED_MODULE_5__.ISettingRegistry,
        _jupyterlab_statedb__WEBPACK_IMPORTED_MODULE_6__.IStateDB
    ],
    autoStart: true
};
/**
 * Export the plugin as default.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);
/**
 * Activate the dashboard launcher plugin.
 */
async function activate(app, commandPalette, consoleTracker, labShell, restorer, mainMenu, notebookTracker, settingRegistry, state) {
    const id = 'dask-dashboard-launcher';
    // Attempt to find a link to the dask dashboard
    // based on the currently active notebook/console
    const linkFinder = async () => {
        const kernel = Private.getCurrentKernel(labShell, notebookTracker, consoleTracker);
        // Check to see if we found a kernel, and if its
        // language is python.
        if (!(await Private.shouldUseKernel(kernel))) {
            return '';
        }
        // If so, find the link if we can.
        const link = await Private.checkKernel(kernel);
        return link;
    };
    const clientCodeInjector = async (model) => {
        const editor = await Private.getCurrentEditor(app, notebookTracker, consoleTracker);
        if (!editor) {
            return;
        }
        Private.injectClientCode(model, editor);
    };
    // Create the Dask sidebar panel.
    const sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_11__.DaskSidebar({
        launchDashboardItem: (item) => {
            void app.commands.execute(CommandIDs.launchPanel, { item });
        },
        linkFinder,
        clientCodeInjector,
        clientCodeGetter: Private.getClientCode,
        registry: app.commands,
        launchClusterId: CommandIDs.launchCluster
    });
    sidebar.id = id;
    sidebar.title.icon = DaskIcon;
    sidebar.title.iconClass = 'jp-SideBar-tabIcon';
    sidebar.title.caption = 'Dask';
    // An instance tracker which is used for state restoration.
    const tracker = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_1__.WidgetTracker({
        namespace: 'dask-dashboard-launcher'
    });
    // Add state restoration for the dashboard items.
    restorer.add(sidebar, id);
    void restorer.restore(tracker, {
        command: CommandIDs.launchPanel,
        args: widget => ({ item: widget.item }) || {},
        name: widget => (widget.item && widget.item.route) || ''
    });
    labShell.add(sidebar, 'left', { rank: 200 });
    const updateDashboards = () => {
        const input = sidebar.dashboardLauncher.input;
        const dashboards = sidebar.dashboardLauncher.items;
        // Update the urls of open dashboards.
        tracker.forEach(widget => {
            // Identify the dashboard item associated with the widget
            const dashboard = dashboards.find(d => { var _a; return ((_a = widget.item) === null || _a === void 0 ? void 0 : _a.route) === d.route; });
            // If the dashboard item doesn't exist in the new listing, or if the new
            // url is inactive, mark the existing pane as such.
            if (!dashboard || !input.urlInfo.isActive) {
                widget.active = false;
                widget.dashboardUrl = '';
                return;
            }
            // Possibly update the name of the existing dashboard pane.
            if (`${dashboard.label}` !== widget.title.label) {
                widget.title.label = `${dashboard.label}`;
            }
            widget.dashboardUrl = input.urlInfo.effectiveUrl || input.urlInfo.url;
            widget.active = true;
        });
    };
    sidebar.dashboardLauncher.input.urlInfoChanged.connect(async (_, args) => {
        updateDashboards();
        // Save the current url to the state DB so it can be
        // reloaded on refresh. Save url instead of effectiveUrl to continue
        // showing user intent.
        const active = sidebar.clusterManager.activeCluster;
        return state.save(id, {
            url: args.newValue.url,
            cluster: active ? active.id : ''
        });
    });
    sidebar.clusterManager.activeClusterChanged.connect(async () => {
        const active = sidebar.clusterManager.activeCluster;
        return state.save(id, {
            url: sidebar.dashboardLauncher.input.urlInfo.url,
            cluster: active ? active.id : ''
        });
    });
    updateDashboards();
    // A function to create a new dask client for a session.
    const createClientForSession = async (session) => {
        if (!session) {
            return;
        }
        const cluster = sidebar.clusterManager.activeCluster;
        if (!cluster || !(await Private.shouldUseKernel(session.kernel))) {
            return;
        }
        return Private.createClientForKernel(cluster, session.kernel);
    };
    // An array of the trackers to check for active sessions.
    const trackers = [
        notebookTracker,
        consoleTracker
    ];
    // A function to recreate a dask client on reconnect.
    const injectOnSessionStatusChanged = async (sessionContext) => {
        if (sessionContext.session &&
            sessionContext.session.kernel &&
            sessionContext.session.kernel.status === 'restarting') {
            return createClientForSession(sessionContext.session);
        }
    };
    // A function to inject a dask client when a new session owner is added.
    const injectOnWidgetAdded = (_, widget) => {
        widget.sessionContext.statusChanged.connect(injectOnSessionStatusChanged);
    };
    // A function to inject a dask client when the active cluster changes.
    const injectOnClusterChanged = () => {
        trackers.forEach(tracker => {
            tracker.forEach(async (widget) => {
                const session = widget.sessionContext.session;
                if (session && (await Private.shouldUseKernel(session.kernel))) {
                    return createClientForSession(session);
                }
            });
        });
    };
    // Whether the dask cluster clients should aggressively inject themselves
    // into the current session.
    let autoStartClient = false;
    // Whether to hide the cluster manager for deployments that don't want to
    // or are unable to use it.
    let hideClusterManager = false;
    // Whether to test the Dask dashboard using a fetch request or to proceed
    // with default behavior.
    let browserDashboardCheck = false;
    // The default layout for dashboards.
    let defaultLayout;
    // Update the existing trackers and signals in light of a change to the
    // settings system. In particular, this reacts to a change in the setting
    // for auto-starting cluster client.
    const updateTrackers = () => {
        // Clear any existing signals related to the auto-starting.
        _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__.Signal.clearData(injectOnWidgetAdded);
        _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__.Signal.clearData(injectOnSessionStatusChanged);
        _lumino_signaling__WEBPACK_IMPORTED_MODULE_9__.Signal.clearData(injectOnClusterChanged);
        if (autoStartClient) {
            // When a new console or notebook is created, inject
            // a new client into it.
            trackers.forEach(tracker => {
                tracker.widgetAdded.connect(injectOnWidgetAdded);
            });
            // When the status of an existing notebook changes, reinject the client.
            trackers.forEach(tracker => {
                tracker.forEach(async (widget) => {
                    await createClientForSession(widget.sessionContext.session);
                    widget.sessionContext.statusChanged.connect(injectOnSessionStatusChanged);
                });
            });
            // When the active cluster changes, reinject the client.
            sidebar.clusterManager.activeClusterChanged.connect(injectOnClusterChanged);
        }
    };
    // Fetch the initial state of the settings.
    void Promise.all([settingRegistry.load(PLUGIN_ID), state.fetch(id)]).then(async (res) => {
        const settings = res[0];
        if (!settings) {
            console.warn('Unable to retrieve dask-labextension settings');
            return;
        }
        const state = res[1];
        const url = state ? state.url : '';
        const cluster = state ? state.cluster : '';
        const dashboardUrl = sidebar.dashboardLauncher.input.urlInfo.effectiveUrl ||
            sidebar.dashboardLauncher.input.urlInfo.url;
        if (url && !dashboardUrl) {
            // If there is a URL in the statedb, let it have priority.
            sidebar.dashboardLauncher.input.url = url;
        }
        else {
            // Otherwise set the default from the settings.
            sidebar.dashboardLauncher.input.url = settings.get('defaultURL')
                .composite;
        }
        const onSettingsChanged = () => {
            // Determine whether to use the auto-starting client.
            autoStartClient = settings.get('autoStartClient').composite;
            updateTrackers();
            // Determine whether to validate dashboards via browser check.
            browserDashboardCheck = settings.get('browserDashboardCheck')
                .composite;
            sidebar.dashboardLauncher.input.browserDashboardCheck =
                browserDashboardCheck;
            //Determine whether to hide the cluster manager
            hideClusterManager = settings.get('hideClusterManager')
                .composite;
            sidebar.clusterManager.setHidden(hideClusterManager);
            // Get the default layout
            defaultLayout = settings.get('defaultLayout').composite;
        };
        onSettingsChanged();
        // React to a change in the settings.
        settings.changed.connect(onSettingsChanged);
        // If an active cluster is in the state, reset it.
        if (cluster) {
            await sidebar.clusterManager.refresh();
            sidebar.clusterManager.setActiveCluster(cluster);
        }
    });
    // Add the command for launching a new dashboard item.
    app.commands.addCommand(CommandIDs.launchPanel, {
        label: args => `Launch Dask ${args.item['label'] || ''} Dashboard`,
        caption: 'Launch a Dask dashboard',
        execute: args => {
            // Construct the url for the dashboard.
            const urlInfo = sidebar.dashboardLauncher.input.urlInfo;
            const dashboardUrl = urlInfo.effectiveUrl || urlInfo.url;
            const active = urlInfo.isActive;
            const dashboardItem = args.item;
            const addOptions = args === null || args === void 0 ? void 0 : args.options;
            // If we already have a dashboard open to this url, activate it
            // but don't create a duplicate.
            const w = tracker.find(w => {
                return !!(w && w.item && w.item.route === dashboardItem.route);
            });
            if (w) {
                if (!w.isAttached) {
                    labShell.add(w, 'main', addOptions);
                }
                labShell.activateById(w.id);
                return;
            }
            // Otherwise create the new dashboard widget.
            const dashboard = new _dashboard__WEBPACK_IMPORTED_MODULE_10__.DaskDashboard();
            dashboard.dashboardUrl = dashboardUrl;
            dashboard.item = dashboardItem;
            dashboard.active = active;
            dashboard.id = `dask-dashboard-${Private.id++}`;
            dashboard.title.label = `${dashboardItem.label}`;
            dashboard.title.icon = DaskIcon;
            labShell.add(dashboard, 'main', addOptions);
            void tracker.add(dashboard); // no need to wait on this
            return dashboard;
        }
    });
    const _normalize_ref = (r) => {
        if (r.startsWith('/')) {
            r = r.slice(1);
        }
        if (!r.startsWith('individual-')) {
            r = 'individual-' + r;
        }
        return r;
    };
    app.commands.addCommand(CommandIDs.launchLayout, {
        label: 'Launch Dask Dashboard Layout',
        caption: 'Launch a pre-configured Dask Dashboard Layout',
        isEnabled: () => sidebar.dashboardLauncher.input.urlInfo.isActive,
        execute: async () => {
            const dashboards = sidebar.dashboardLauncher.items;
            // Compute the order that we have to add the panes so that the refs
            // exist when we need them.
            const dependencies = [];
            for (let k of Object.keys(defaultLayout)) {
                dependencies.push([defaultLayout[k].ref || null, k]);
            }
            const order = (0,_lumino_algorithm__WEBPACK_IMPORTED_MODULE_8__.topologicSort)(dependencies).filter(d => d); // sort and remove nulls
            const initial = app.shell.currentWidget;
            for (let k of order) {
                const opts = defaultLayout[k];
                const dashboard = dashboards.find(d => _normalize_ref(d.route) === _normalize_ref(k));
                if (!dashboard) {
                    console.warn(`Non-existent dashboard found in Dask layout spec ${k}`);
                    continue;
                }
                const options = { mode: opts.mode };
                if (opts.ref) {
                    const ref = tracker.find(w => {
                        return !!(w &&
                            w.item &&
                            _normalize_ref(w.item.route) === _normalize_ref(opts.ref));
                    });
                    if (!ref) {
                        console.warn(`Non-existent dashboard found in Dask layout spec ${opts.ref}`);
                        options.ref = null;
                    }
                    else {
                        options.ref = ref.id;
                    }
                }
                else {
                    options.ref = null;
                }
                await app.commands.execute(CommandIDs.launchPanel, {
                    item: dashboard,
                    options: options
                });
            }
            app.shell.activateById(initial.id);
        }
    });
    app.commands.addCommand(CommandIDs.populateDashboardUrl, {
        label: 'Populate Dask Dashboard URL',
        caption: 'Attempt to populate the URL for an active Dask cluster',
        execute: async (args) => {
            let url = args.url || (await linkFinder());
            if (url) {
                sidebar.dashboardLauncher.input.url = url;
            }
            return url;
        }
    });
    app.commands.addCommand(CommandIDs.populateAndLaunchLayout, {
        label: 'Populate Dask Dashboard URL and launch the default layout',
        caption: 'Attempt to populate the URL for an active Dask cluster and then launch the default layout',
        execute: async (args) => {
            const url = await app.commands.execute(CommandIDs.populateDashboardUrl, args);
            if (url) {
                await app.commands.execute(CommandIDs.launchLayout);
            }
        }
    });
    // Add a command to inject client connection code for a given cluster model.
    // This looks for a cluster model in the application context menu,
    // and looks for an editor among the currently active notebooks and consoles.
    // If either is not found, it bails.
    app.commands.addCommand(CommandIDs.injectClientCode, {
        label: 'Inject Dask Client Connection Code',
        execute: async () => {
            const cluster = Private.clusterFromClick(app, sidebar.clusterManager);
            if (!cluster) {
                return;
            }
            await clientCodeInjector(cluster);
        }
    });
    // Add a command to launch a new cluster.
    app.commands.addCommand(CommandIDs.launchCluster, {
        label: args => (args['isPalette'] ? 'Launch New Cluster' : 'NEW'),
        execute: () => sidebar.clusterManager.start(),
        iconClass: args => args['isPalette'] ? '' : 'jp-AddIcon jp-Icon jp-Icon-16',
        isEnabled: () => sidebar.clusterManager.isReady,
        caption: () => {
            if (sidebar.clusterManager.isReady) {
                return 'Start New Dask Cluster';
            }
            return 'Cluster starting...';
        }
    });
    // Add a command to launch a new cluster.
    app.commands.addCommand(CommandIDs.stopCluster, {
        label: 'Shutdown Cluster',
        execute: () => {
            const cluster = Private.clusterFromClick(app, sidebar.clusterManager);
            if (!cluster) {
                return;
            }
            return sidebar.clusterManager.stop(cluster.id);
        }
    });
    // Add a command to launch a new cluster.
    app.commands.addCommand(CommandIDs.scaleCluster, {
        label: 'Scale Cluster…',
        execute: () => {
            const cluster = Private.clusterFromClick(app, sidebar.clusterManager);
            if (!cluster) {
                return;
            }
            return sidebar.clusterManager.scale(cluster.id);
        }
    });
    // Add a command to toggle the auto-starting client code.
    app.commands.addCommand(CommandIDs.toggleAutoStartClient, {
        label: 'Auto-Start Dask',
        isToggled: () => autoStartClient,
        execute: async () => {
            const value = !autoStartClient;
            const key = 'autoStartClient';
            return settingRegistry
                .set(PLUGIN_ID, key, value)
                .catch((reason) => {
                console.error(`Failed to set ${PLUGIN_ID}:${key} - ${reason.message}`);
            });
        }
    });
    // Add some commands to the menu and command palette.
    mainMenu.fileMenu.addGroup([{ command: CommandIDs.launchLayout }], 50);
    mainMenu.settingsMenu.addGroup([
        { command: CommandIDs.toggleAutoStartClient }
    ]);
    [
        CommandIDs.launchCluster,
        CommandIDs.launchLayout,
        CommandIDs.toggleAutoStartClient
    ].forEach(command => {
        commandPalette.addItem({
            category: 'Dask',
            command,
            args: { isPalette: true }
        });
    });
    // Add a context menu items.
    app.contextMenu.addItem({
        command: CommandIDs.injectClientCode,
        selector: '.dask-ClusterListingItem',
        rank: 10
    });
    app.contextMenu.addItem({
        command: CommandIDs.stopCluster,
        selector: '.dask-ClusterListingItem',
        rank: 3
    });
    app.contextMenu.addItem({
        command: CommandIDs.scaleCluster,
        selector: '.dask-ClusterListingItem',
        rank: 2
    });
    app.contextMenu.addItem({
        command: CommandIDs.launchCluster,
        selector: '.dask-ClusterListing-list',
        rank: 1
    });
}
var Private;
(function (Private) {
    /**
     * A private counter for ids.
     */
    Private.id = 0;
    /**
     * Whether a kernel should be used. Only evaluates to true
     * if it is valid and in python.
     */
    async function shouldUseKernel(kernel) {
        if (!kernel) {
            return false;
        }
        const spec = await kernel.spec;
        return !!spec && spec.language.toLowerCase().indexOf('python') !== -1;
    }
    Private.shouldUseKernel = shouldUseKernel;
    /**
     * Check a kernel for whether it has a default client dashboard address.
     */
    function checkKernel(kernel) {
        const code = `try:\n  from dask.distributed import default_client as _internal_jlab_default_client\n  display(_internal_jlab_default_client().dashboard_link)\nexcept:\n  pass`;
        const content = {
            store_history: false,
            code
        };
        return new Promise((resolve, _) => {
            const future = kernel.requestExecute(content);
            future.onIOPub = msg => {
                if (msg.header.msg_type !== 'display_data') {
                    return;
                }
                const data = msg.content.data;
                const url = data['text/plain'] || '';
                console.log(`Found dashboard link at ${url}`);
                resolve(url.replace(/'/g, '').split('status')[0]);
            };
        });
    }
    Private.checkKernel = checkKernel;
    /**
     * Connect a kernel to a cluster by creating a new Client.
     */
    async function createClientForKernel(model, kernel) {
        const code = `import dask; from dask.distributed import Client
dask.config.set({'scheduler-address': '${model.scheduler_address}'})
client = Client()`;
        const content = {
            store_history: false,
            code
        };
        return new Promise((resolve, _) => {
            const future = kernel.requestExecute(content);
            future.onIOPub = msg => {
                if (msg.header.msg_type !== 'display_data') {
                    return;
                }
                resolve(void 0);
            };
        });
    }
    Private.createClientForKernel = createClientForKernel;
    /**
     * Insert code to connect to a given cluster.
     */
    function injectClientCode(cluster, editor) {
        const code = getClientCode(cluster);
        editor.model.sharedModel.setSource(code);
    }
    Private.injectClientCode = injectClientCode;
    /**
     * Get code to connect to a given cluster.
     */
    function getClientCode(cluster) {
        return `from dask_gateway import Gateway

client = Gateway().connect("${cluster.scheduler_address.substr(cluster.scheduler_address.indexOf('/dask-gateway') + 1)}").get_client()
client`;
    }
    Private.getClientCode = getClientCode;
    /**
     * Get the currently focused kernel in the application,
     * checking both notebooks and consoles.
     */
    function getCurrentKernel(shell, notebookTracker, consoleTracker) {
        var _a, _b, _c, _d;
        // Get a handle on the most relevant kernel,
        // whether it is attached to a notebook or a console.
        let current = shell.currentWidget;
        let kernel;
        if (current && notebookTracker.has(current)) {
            kernel = (_a = current.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel;
        }
        else if (current && consoleTracker.has(current)) {
            kernel = (_b = current.sessionContext.session) === null || _b === void 0 ? void 0 : _b.kernel;
        }
        else if (notebookTracker.currentWidget) {
            const current = notebookTracker.currentWidget;
            kernel = (_c = current.sessionContext.session) === null || _c === void 0 ? void 0 : _c.kernel;
        }
        else if (consoleTracker.currentWidget) {
            const current = consoleTracker.currentWidget;
            kernel = (_d = current.sessionContext.session) === null || _d === void 0 ? void 0 : _d.kernel;
        }
        return kernel;
    }
    Private.getCurrentKernel = getCurrentKernel;
    /**
     * Wait until the cell is ready and return a promise
     * that fullfils to editor
     */
    async function getEditor(cell) {
        await cell.ready;
        return cell && cell.editor;
    }
    Private.getEditor = getEditor;
    /**
     * Get the currently focused editor in the application,
     * checking both notebooks and consoles.
     * In the case of a notebook, it creates a new cell above the currently
     * active cell and then returns that.
     */
    async function getCurrentEditor(app, notebookTracker, consoleTracker) {
        // Get a handle on the most relevant kernel,
        // whether it is attached to a notebook or a console.
        let current = app.shell.currentWidget;
        let editor;
        if (current && notebookTracker.has(current)) {
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.NotebookActions.insertAbove(current.content);
            return getEditor(current.content.activeCell);
        }
        else if (current && consoleTracker.has(current)) {
            return getEditor(current.console.promptCell);
        }
        else if (notebookTracker.currentWidget) {
            const current = notebookTracker.currentWidget;
            _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_7__.NotebookActions.insertAbove(current.content);
            return getEditor(current.content.activeCell);
        }
        else if (consoleTracker.currentWidget) {
            const current = consoleTracker.currentWidget;
            return getEditor(current.console.promptCell);
        }
        return editor;
    }
    Private.getCurrentEditor = getCurrentEditor;
    /**
     * Get a cluster model based on the application context menu click node.
     */
    function clusterFromClick(app, manager) {
        const test = (node) => !!node.dataset.clusterId;
        const node = app.contextMenuHitTest(test);
        if (!node) {
            return undefined;
        }
        const id = node.dataset.clusterId;
        return manager.clusters.find(cluster => cluster.id === id);
    }
    Private.clusterFromClick = clusterFromClick;
})(Private || (Private = {}));


/***/ }),

/***/ "./lib/scaling.js":
/*!************************!*\
  !*** ./lib/scaling.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClusterScaling: () => (/* binding */ ClusterScaling),
/* harmony export */   showScalingDialog: () => (/* binding */ showScalingDialog)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A component for an HTML form that allows the user
 * to select scaling parameters.
 */
class ClusterScaling extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    /**
     * Construct a new ClusterScaling component.
     */
    constructor(props) {
        super(props);
        let model;
        const adaptive = !!props.initialModel.adapt;
        // If the initial model is static, enrich it
        // with placeholder values for minimum and maximum workers.
        if (!adaptive) {
            model = {
                ...props.initialModel,
                adapt: {
                    minimum: props.initialModel.workers,
                    maximum: props.initialModel.workers
                }
            };
        }
        else {
            model = props.initialModel;
        }
        this.state = { adaptive, model };
    }
    /**
     * When the component updates we take the opportunity to write
     * the state of the cluster to an external object so this can
     * be sent as the result of the dialog.
     */
    componentDidUpdate() {
        let model = { ...this.state.model };
        if (!this.state.adaptive) {
            model.adapt = null;
        }
        this.props.stateEscapeHatch(model);
    }
    /**
     * React to the number of workers changing.
     */
    onScaleChanged(event) {
        this.setState({
            model: {
                ...this.state.model,
                workers: parseInt(event.target.value, 10)
            }
        });
    }
    /**
     * React to the user selecting the adapt checkbox.
     */
    onScalingChanged(event) {
        const value = event.target.checked;
        this.setState({
            model: this.state.model,
            adaptive: value
        });
    }
    /**
     * React to the minimum slider changing. We also update the maximum
     * so that it is alway greater than or equal to the minimum.
     */
    onMinimumChanged(event) {
        const value = parseInt(event.target.value, 10);
        const minimum = Math.max(0, value);
        const maximum = Math.max(this.state.model.adapt.maximum, minimum);
        this.setState({
            model: {
                ...this.state.model,
                adapt: {
                    maximum,
                    minimum
                }
            }
        });
    }
    /**
     * React to the maximum slider changing. We also update the minimum
     * so that it is always less than or equal to the maximum.
     */
    onMaximumChanged(event) {
        const value = parseInt(event.target.value, 10);
        const maximum = Math.max(0, value);
        const minimum = Math.min(this.state.model.adapt.minimum, maximum);
        this.setState({
            model: {
                ...this.state.model,
                adapt: {
                    maximum,
                    minimum
                }
            }
        });
    }
    /**
     * Render the component..
     */
    render() {
        const model = this.state.model;
        const adapt = model.adapt;
        const adaptive = this.state.adaptive;
        const disabledClass = 'dask-mod-disabled';
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "dask-ScalingHeader" }, "Manual Scaling"),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: `dask-ScalingSection-label ${adaptive ? disabledClass : ''}` }, "Workers"),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { className: "dask-ScalingInput", disabled: adaptive, value: model.workers, type: "number", step: "1", onChange: evt => {
                            this.onScaleChanged(evt);
                        } }))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingHeader" },
                "Adaptive Scaling",
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { className: "dask-ScalingCheckbox", type: "checkbox", checked: adaptive, onChange: evt => {
                        this.onScalingChanged(evt);
                    } })),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: `dask-ScalingSection-label ${!adaptive ? disabledClass : ''}` }, "Minimum workers"),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { className: "dask-ScalingInput", disabled: !adaptive, type: "number", value: adapt.minimum, step: "1", onChange: evt => {
                            this.onMinimumChanged(evt);
                        } }))),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "dask-ScalingSection-item" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: `dask-ScalingSection-label ${!adaptive ? disabledClass : ''}` }, "Maximum workers"),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { className: "dask-ScalingInput", disabled: !adaptive, type: "number", value: adapt.maximum, step: "1", onChange: evt => {
                            this.onMaximumChanged(evt);
                        } })))));
    }
}
/**
 * Show a dialog for scaling a cluster model.
 *
 * @param model: the initial model.
 *
 * @returns a promse that resolves with the user-selected scalings for the
 *   cluster model. If they pressed the cancel button, it resolves with
 *   the original model.
 */
function showScalingDialog(model) {
    let updatedModel = { ...model };
    const escapeHatch = (update) => {
        updatedModel = update;
    };
    return (0,_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.showDialog)({
        title: `Scale ${model.name}`,
        body: (react__WEBPACK_IMPORTED_MODULE_1__.createElement(ClusterScaling, { initialModel: model, stateEscapeHatch: escapeHatch })),
        buttons: [_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.cancelButton(), _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.Dialog.okButton({ label: 'SCALE' })]
    }).then(result => {
        if (result.button.accept) {
            return updatedModel;
        }
        else {
            return model;
        }
    });
}


/***/ }),

/***/ "./lib/sidebar.js":
/*!************************!*\
  !*** ./lib/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DaskSidebar: () => (/* binding */ DaskSidebar)
/* harmony export */ });
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lumino/widgets */ "webpack/sharing/consume/default/@lumino/widgets");
/* harmony import */ var _lumino_widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lumino_widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./lib/dashboard.js");
/* harmony import */ var _clusters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clusters */ "./lib/clusters.js");



/**
 * A widget for hosting Dask dashboard launchers.
 */
class DaskSidebar extends _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.Widget {
    /**
     * Create a new Dask sidebar.
     */
    constructor(options) {
        super();
        this.addClass('dask-DaskSidebar');
        let layout = (this.layout = new _lumino_widgets__WEBPACK_IMPORTED_MODULE_0__.PanelLayout());
        // Add the dashboard component/
        this._dashboard = new _dashboard__WEBPACK_IMPORTED_MODULE_1__.DaskDashboardLauncher({
            launchItem: options.launchDashboardItem,
            linkFinder: options.linkFinder
        });
        // A callback that sets the url of the dashboard component.
        const setDashboardUrl = (url) => {
            this._dashboard.input.url = url;
        };
        const injectClientCodeForCluster = options.clientCodeInjector;
        const getClientCodeForCluster = options.clientCodeGetter;
        // Add the cluster manager component.
        this._clusters = new _clusters__WEBPACK_IMPORTED_MODULE_2__.DaskClusterManager({
            registry: options.registry,
            launchClusterId: options.launchClusterId,
            setDashboardUrl,
            injectClientCodeForCluster,
            getClientCodeForCluster
        });
        layout.addWidget(this._dashboard);
        layout.addWidget(this._clusters);
    }
    /**
     * Get the dashboard launcher associated with the sidebar.
     */
    get dashboardLauncher() {
        return this._dashboard;
    }
    /**
     * Get the cluster manager associated with the sidebar.
     */
    get clusterManager() {
        return this._clusters;
    }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./style/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./style/dask.svg?e344":
/*!************************!*\
  !*** ./style/dask.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.st0{fill:#FFC11E;}\n\t.st1{fill:#04255C;}\n\t.st2{fill:#FC6E6B;}\n\t.st3{fill:#FFFFFF;}\n\t.st4{fill:#EF1161;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M143.71,157.61l126.5-72.99c1.25-0.72,2.02-2.05,2.02-3.5l0.01-43.77c0-6.48-2.66-12.9-7.83-16.81\n\t\tc-6.69-5.06-15.28-5.56-22.33-1.48L65.13,121.17c-6.22,3.59-10.06,10.23-10.06,17.41L55,369.18c0,6.47,2.65,12.89,7.81,16.81\n\t\tc6.68,5.07,15.29,5.57,22.35,1.49l37.48-21.62c1.25-0.72,2.02-2.05,2.02-3.5l0.05-171.85C124.71,176.93,131.95,164.4,143.71,157.61\n\t\tz\"/>\n\t<path class=\"st4\" d=\"M446.95,124.53c-3.15-1.82-6.61-2.73-10.06-2.73c-3.45,0-6.9,0.91-10.05,2.73l-176.96,102.1\n\t\tc-6.2,3.58-10.06,10.25-10.06,17.41l-0.07,231.47c0,7.27,3.76,13.78,10.05,17.42c6.3,3.64,13.81,3.64,20.11,0l176.95-102.11\n\t\tc6.2-3.58,10.06-10.25,10.06-17.41L457,141.95C457,134.68,453.24,128.16,446.95,124.53z\"/>\n\t<path class=\"st2\" d=\"M240.95,211.14l116.78-67.38c1.25-0.72,2.02-2.05,2.02-3.5l0.02-50.98c0-6.48-2.66-12.9-7.83-16.81\n\t\tc-6.69-5.06-15.27-5.55-22.33-1.48l-48.43,27.95L152.64,173.1c-6.22,3.59-10.06,10.23-10.06,17.41l-0.05,174.18l-0.02,56.41\n\t\tc0,6.48,2.65,12.89,7.81,16.81c6.69,5.07,15.29,5.57,22.35,1.49l47.2-27.24c1.25-0.72,2.02-2.05,2.02-3.5l0.05-164.64\n\t\tC221.95,230.46,229.19,217.92,240.95,211.14z\"/>\n</g>\n</svg>\n";

/***/ }),

/***/ "./style/code-dark.svg":
/*!*****************************!*\
  !*** ./style/code-dark.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23E0E0E0' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath fill='none' d='M0 0h24v24H0V0z'/%3e%3cpath d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/%3e%3c/svg%3e";

/***/ }),

/***/ "./style/code-light.svg":
/*!******************************!*\
  !*** ./style/code-light.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23616161' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath fill='none' d='M0 0h24v24H0V0z'/%3e%3cpath d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/%3e%3c/svg%3e";

/***/ }),

/***/ "./style/dask.svg?ccc1":
/*!************************!*\
  !*** ./style/dask.svg ***!
  \************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e %3c!-- Generator: Adobe Illustrator 26.0.3%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512%3b' xml:space='preserve'%3e %3cstyle type='text/css'%3e .st0%7bfill:%23FFC11E%3b%7d .st1%7bfill:%2304255C%3b%7d .st2%7bfill:%23FC6E6B%3b%7d .st3%7bfill:white%3b%7d .st4%7bfill:%23EF1161%3b%7d %3c/style%3e %3cg%3e %3cpath class='st0' d='M143.71%2c157.61l126.5-72.99c1.25-0.72%2c2.02-2.05%2c2.02-3.5l0.01-43.77c0-6.48-2.66-12.9-7.83-16.81 c-6.69-5.06-15.28-5.56-22.33-1.48L65.13%2c121.17c-6.22%2c3.59-10.06%2c10.23-10.06%2c17.41L55%2c369.18c0%2c6.47%2c2.65%2c12.89%2c7.81%2c16.81 c6.68%2c5.07%2c15.29%2c5.57%2c22.35%2c1.49l37.48-21.62c1.25-0.72%2c2.02-2.05%2c2.02-3.5l0.05-171.85C124.71%2c176.93%2c131.95%2c164.4%2c143.71%2c157.61 z'/%3e %3cpath class='st4' d='M446.95%2c124.53c-3.15-1.82-6.61-2.73-10.06-2.73c-3.45%2c0-6.9%2c0.91-10.05%2c2.73l-176.96%2c102.1 c-6.2%2c3.58-10.06%2c10.25-10.06%2c17.41l-0.07%2c231.47c0%2c7.27%2c3.76%2c13.78%2c10.05%2c17.42c6.3%2c3.64%2c13.81%2c3.64%2c20.11%2c0l176.95-102.11 c6.2-3.58%2c10.06-10.25%2c10.06-17.41L457%2c141.95C457%2c134.68%2c453.24%2c128.16%2c446.95%2c124.53z'/%3e %3cpath class='st2' d='M240.95%2c211.14l116.78-67.38c1.25-0.72%2c2.02-2.05%2c2.02-3.5l0.02-50.98c0-6.48-2.66-12.9-7.83-16.81 c-6.69-5.06-15.27-5.55-22.33-1.48l-48.43%2c27.95L152.64%2c173.1c-6.22%2c3.59-10.06%2c10.23-10.06%2c17.41l-0.05%2c174.18l-0.02%2c56.41 c0%2c6.48%2c2.65%2c12.89%2c7.81%2c16.81c6.69%2c5.07%2c15.29%2c5.57%2c22.35%2c1.49l47.2-27.24c1.25-0.72%2c2.02-2.05%2c2.02-3.5l0.05-164.64 C221.95%2c230.46%2c229.19%2c217.92%2c240.95%2c211.14z'/%3e %3c/g%3e %3c/svg%3e";

/***/ })

}]);
//# sourceMappingURL=lib_index_js.26b284186c5a9feda117.js.map