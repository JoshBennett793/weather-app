"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  grid-area: header;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-size: 1.75rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;;CAElB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;;CAEnB,kBAAkB;AACnB","sourcesContent":["header {\n  grid-area: header;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-size: 1.75rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/weather/main-weather-ui.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/weather/main-weather-ui.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../assets/backgrounds/river.webp */ "./assets/backgrounds/river.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Container */\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n  padding: 20px;\n}\n\n/* Content Container */\n#content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n}\n\n#top-level-data {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n}\n\n#center-data {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-1 {\n  padding: 10px;\n  height: 300px;\n  width: 300px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n}\n\n#circle-2 {\n  background-color: rgba(0, 0, 0, 0.05);\n  height: clamp(70%, 300px, 100%);\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#weather-status {\n  font-size: 1.5rem;\n}\n\n#current-temp {\n  font-size: 3rem;\n}\n\n#bottom-level-data {\n  grid-area: cards;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#feels-like-icon,\n#humidity-icon,\n#precipitation-icon,\n#wind-icon {\n  float: left;\n  margin-right: 20px;\n}\n\n#feels-like,\n#humidity,\n#precipitation,\n#wind-speed {\n  font-size: 1.3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/weather/main-weather-ui.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;EACE,eAAe;EACf,aAAa;EACb;;;;iBAIe;EACf,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,yDAAqD;EACrD,0BAA0B;EAC1B,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb;;;;iBAIe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,wDAAwD;EACxD,qDAAqD;EACrD,gDAAgD;AAClD;;AAEA;EACE,qCAAqC;EACrC,+BAA+B;EAC/B,kBAAkB;EAClB,8DAA8D;EAC9D,2DAA2D;EAC3D,sDAAsD;EACtD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;;EAIE,iBAAiB;AACnB","sourcesContent":["/* Main Container */\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n  padding: 20px;\n}\n\n/* Content Container */\n#content {\n  background-image: url(/assets/backgrounds/river.webp);\n  background-size: 100% 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n}\n\n#top-level-data {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n}\n\n#center-data {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-1 {\n  padding: 10px;\n  height: 300px;\n  width: 300px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n}\n\n#circle-2 {\n  background-color: rgba(0, 0, 0, 0.05);\n  height: clamp(70%, 300px, 100%);\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#weather-status {\n  font-size: 1.5rem;\n}\n\n#current-temp {\n  font-size: 3rem;\n}\n\n#bottom-level-data {\n  grid-area: cards;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#feels-like-icon,\n#humidity-icon,\n#precipitation-icon,\n#wind-icon {\n  float: left;\n  margin-right: 20px;\n}\n\n#feels-like,\n#humidity,\n#precipitation,\n#wind-speed {\n  font-size: 1.3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/weather/main-weather-ui.css":
/*!****************************************************!*\
  !*** ./src/components/weather/main-weather-ui.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main-weather-ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/weather/main-weather-ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/api/weather-data.js":
/*!********************************************!*\
  !*** ./src/components/api/weather-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractWeatherData": () => (/* binding */ extractWeatherData),
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "getLocationNameFromJSON": () => (/* binding */ getLocationNameFromJSON)
/* harmony export */ });
/* harmony import */ var _search_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-query */ "./src/components/search-query.js");


const getAPIkey = () => '3535c8d31233d98b7f80c26b5b76e3a6';

async function getLocationCoords(location) {
  const weatherAPIurl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${getAPIkey()}`;
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    if (!response.ok) {
      if (response.state === 404) {
        return new Error('Location not found');
      }
      return new Error(
        `Geocode API call failed with status ${response.status}`,
      );
    }
    const weatherData = await response.json();
    const { lat } = weatherData[0];
    const { lon } = weatherData[0];
    return { lat, lon };
  } catch (err) {
    console.error(
      `Error fetching the geocoding API for location ${location}`,
      err,
    );
    return err;
  }
}

async function fetchWeatherData(
  location,
  exclude,
  unit = 'imperial',
  endpoint = 'weather',
) {
  let weatherAPIurl;
  /*
	If the 'exclude' parameter is provided, use the One Call
	API endpoint, which requires latitude and longitude
	coordinates. Retrieve the coordinates using the location
	parameter and plug them into the URL. For other endpoints, 
	use the location parameter directly.
	*/
  if (exclude) {
    const coords = await getLocationCoords(location);
    weatherAPIurl = `https://api.openweathermap.org/data/3.0/onecall?lat=${
      coords.lat
    }&lon=${coords.lon}&exclude=${exclude}&appid=${getAPIkey()}`;
  } else {
    weatherAPIurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&&units=${unit}&appid=${getAPIkey()}`;
  }
  // The function validateSearchQuery validates a string against
	// a regex pattern and checks that it is not empty.
  const searchQueryIsValid = (0,_search_query__WEBPACK_IMPORTED_MODULE_0__.validateSearchQuery)(location);
  if (!searchQueryIsValid) {
    return new Error('Invalid search query');
  }
  try {
    const response = await fetch(weatherAPIurl, { mode: 'cors' });
    if (!response.ok) {
      if (response.status === 404) {
        return new Error('Location not found');
      }
      return new Error(`API call failed with status ${response.status}`);
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(
      `Error fetching the ${endpoint} API for location ${location}: `,
      err,
    );
    return err;
  }
}

async function extractWeatherData(location, unit, property) {
  let weatherData;
  let endpoint;
  let exclude;
  let precipitation;
  switch (property) {
    case 'status':
    case 'currentTemp':
    case 'feelsLike':
    case 'humidity':
    case 'windSpeed':
      endpoint = 'weather';
      break;
    case 'precipitation':
      endpoint = 'forecast';
      break;
    case 'daily':
      endpoint = 'onecall';
      exclude = 'current,minutely,hourly,alerts';
      break;
    default:
      return new Error(`Unsupported property "${property}"`);
  }
  try {
    weatherData = await fetchWeatherData(location, exclude, unit, endpoint);
  } catch (err) {
    console.error(
      `Error fetching ${endpoint} API for location "${location}": `,
      err,
    );
    return err;
  }
  switch (property) {
    case 'status':
      return weatherData.weather[0].main;
    case 'currentTemp':
      return Math.round(weatherData.main.temp);
    case 'feelsLike':
      return Math.round(weatherData.main.feels_like);
    case 'humidity':
      return weatherData.main.humidity;
    case 'windSpeed':
      return Math.round(weatherData.wind.speed);
    case 'precipitation':
      precipitation = weatherData.list[0].pop;
      if (precipitation !== undefined) {
        const parsedPrecipitation = parseFloat(precipitation).toFixed(2);
        const formattedPrecipitation = parsedPrecipitation * 100;
        return Math.round(formattedPrecipitation);
      }
      return new Error('Could not retrieve forecasted precipitation');
    case 'daily':
      return weatherData;
    default:
      return new Error(`Unsupported property "${property}"`);
  }
}

async function getLocationNameFromJSON(location) {
  const locationData = await fetchWeatherData(location, null, 'weather');
  return locationData.name;
}


/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderWeatherData)
/* harmony export */ });
/* harmony import */ var _search_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-query */ "./src/components/search-query.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _api_weather_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/weather-data */ "./src/components/api/weather-data.js");
/* harmony import */ var _weather_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather/main-weather-ui.css */ "./src/components/weather/main-weather-ui.css");








async function renderWeatherData() {
  let unit;

  const location = (0,_search_query__WEBPACK_IMPORTED_MODULE_0__.getLocationFromUserInput)() ?? 'Minneapolis';
  (0,_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const properties = [
    'status',
    'currentTemp',
    'feelsLike',
    'humidity',
    'precipitation',
    'windSpeed',
		'daily',
  ];

  try {
    const weatherData = await Promise.all(
      properties.map((property) =>
        (0,_api_weather_data__WEBPACK_IMPORTED_MODULE_2__.extractWeatherData)(location, (unit = 'imperial'), property),
      ),
    );

    const statusEl = document.getElementById('weather-status');
    const currentTempEl = document.getElementById('current-temp');
    const feelsLikeEl = document.getElementById('feels-like-temp');
    const humidityEl = document.getElementById('humidity-percentage');
    const precipitationEl = document.getElementById('precipitation-percentage');
    const windSpeedEl = document.getElementById('wind-speed-percentage');

    const [status, currentTemp, feelsLike, humidity, precipitation, windSpeed, daily] =
      weatherData;

    statusEl.textContent = status;
    currentTempEl.textContent = `${currentTemp}°`;
    feelsLikeEl.textContent = `${feelsLike}°`;
    humidityEl.textContent = `${humidity}%`;
    precipitationEl.textContent = `${precipitation}%`;
    windSpeedEl.textContent =
      unit === 'imperial' ? `${windSpeed} MPH` : `${windSpeed} KM/H`;
  } catch (err) {
    console.error('There was an error writing weather data to the DOM: ', err);
  }
}


/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeLocation)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");


async function writeLocation() {
  const locationTitle = document.getElementById('header-location-title');

  const { getLocationFromUserInput } = await __webpack_require__.e(/*! import() */ "src_components_search-query_js").then(__webpack_require__.bind(__webpack_require__, /*! ../search-query */ "./src/components/search-query.js"));
  const userInput = getLocationFromUserInput();

  const { getLocationNameFromJSON } = await __webpack_require__.e(/*! import() */ "src_components_api_weather-data_js").then(__webpack_require__.bind(__webpack_require__, /*! ../api/weather-data */ "./src/components/api/weather-data.js"));
  const locationName = await getLocationNameFromJSON(userInput);
  locationTitle.textContent = `${locationName ?? 'Minneapolis'}`;
}


/***/ }),

/***/ "./src/components/search-query.js":
/*!****************************************!*\
  !*** ./src/components/search-query.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationFromUserInput": () => (/* binding */ getLocationFromUserInput),
/* harmony export */   "validateSearchQuery": () => (/* binding */ validateSearchQuery)
/* harmony export */ });
const searchBar = document.getElementById('location');

const getLocationFromUserInput = () => searchBar.value || 'Minneapolis';

const validateSearchQuery = (searchQuery) => {
  const searchRegex =
    /^([a-zA-Z\d\s+]*)(,\s*([a-zA-Z]{2})?)?(,\s+([a-zA-Z]{2})?)?$/;
  return searchQuery.length === 0 || searchRegex.test(searchQuery);
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.js");


(0,_components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"])();

const searchIcon = document.querySelector('button');

searchIcon.addEventListener('click', _components_app_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/backgrounds/river.webp":
/*!***************************************!*\
  !*** ./assets/backgrounds/river.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18a07ee560d709f523a3.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekkyRDs7QUFFZDs7QUFFWTs7QUFFakI7O0FBRXpCO0FBQ2Y7O0FBRUEsbUJBQW1CLHVFQUF3QjtBQUMzQyxFQUFFLDBEQUFhOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0MsaUNBQWlDLFVBQVU7QUFDM0MsZ0NBQWdDLFNBQVM7QUFDekMscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQSwrQkFBK0IsV0FBVyxVQUFVLFdBQVc7QUFDL0QsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ec0I7O0FBRVA7QUFDZjs7QUFFQSxVQUFVLDJCQUEyQixRQUFRLHNMQUF5QjtBQUN0RTs7QUFFQSxVQUFVLDBCQUEwQixRQUFRLGtNQUE2QjtBQUN6RTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFTzs7QUFFQTtBQUNQO0FBQ0EscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JxRDs7QUFFckQsK0RBQWlCOztBQUVqQjs7QUFFQSxxQ0FBcUMsMkRBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci9tYWluLXdlYXRoZXItdWkuY3NzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9mN2ZhIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcz81OGIyIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXF1ZXJ5LmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjs7Q0FFbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2JhY2tncm91bmRzL3JpdmVyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIENvbnRhaW5lciAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IENvbnRhaW5lciAqL1xcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxufVxcblxcbiN0b3AtbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjZW50ZXItZGF0YSB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLTEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG5cXG4jY2lyY2xlLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGhlaWdodDogY2xhbXAoNzAlLCAzMDBweCwgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NpcmNsZS1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNib3R0b20tbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGNhcmRzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2ZlZWxzLWxpa2UtaWNvbixcXG4jaHVtaWRpdHktaWNvbixcXG4jcHJlY2lwaXRhdGlvbi1pY29uLFxcbiN3aW5kLWljb24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbiNmZWVscy1saWtlLFxcbiNodW1pZGl0eSxcXG4jcHJlY2lwaXRhdGlvbixcXG4jd2luZC1zcGVlZCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci9tYWluLXdlYXRoZXItdWkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2I7Ozs7aUJBSWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UseURBQXFEO0VBQ3JELDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYjs7OztpQkFJZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQix3REFBd0Q7RUFDeEQscURBQXFEO0VBQ3JELGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCwyREFBMkQ7RUFDM0Qsc0RBQXNEO0VBQ3RELGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBDb250YWluZXIgKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2NhcmRzIGNhcmRzIGNhcmRzJ1xcbiAgICAvIDFmciAyZnIgMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCBDb250YWluZXIgKi9cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kcy9yaXZlci53ZWJwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWFpbiBtYWluIG1haW4nXFxuICAgICdjYXJkcyBjYXJkcyBjYXJkcydcXG4gICAgLyAxZnIgMmZyIDFmcjtcXG59XFxuXFxuI3RvcC1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NlbnRlci1kYXRhIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaXJjbGUtMSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcblxcbiNjaXJjbGUtMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgaGVpZ2h0OiBjbGFtcCg3MCUsIDMwMHB4LCAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2JvdHRvbS1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogY2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZmVlbHMtbGlrZS1pY29uLFxcbiNodW1pZGl0eS1pY29uLFxcbiNwcmVjaXBpdGF0aW9uLWljb24sXFxuI3dpbmQtaWNvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuI2ZlZWxzLWxpa2UsXFxuI2h1bWlkaXR5LFxcbiNwcmVjaXBpdGF0aW9uLFxcbiN3aW5kLXNwZWVkIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLXdlYXRoZXItdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLXdlYXRoZXItdWkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuY29uc3QgZ2V0QVBJa2V5ID0gKCkgPT4gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2JztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgR2VvY29kZSBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHsgbGF0IH0gPSB3ZWF0aGVyRGF0YVswXTtcbiAgICBjb25zdCB7IGxvbiB9ID0gd2VhdGhlckRhdGFbMF07XG4gICAgcmV0dXJuIHsgbGF0LCBsb24gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgZ2VvY29kaW5nIEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn1gLFxuICAgICAgZXJyLFxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShcbiAgbG9jYXRpb24sXG4gIGV4Y2x1ZGUsXG4gIHVuaXQgPSAnaW1wZXJpYWwnLFxuICBlbmRwb2ludCA9ICd3ZWF0aGVyJyxcbikge1xuICBsZXQgd2VhdGhlckFQSXVybDtcbiAgLypcblx0SWYgdGhlICdleGNsdWRlJyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHVzZSB0aGUgT25lIENhbGxcblx0QVBJIGVuZHBvaW50LCB3aGljaCByZXF1aXJlcyBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG5cdGNvb3JkaW5hdGVzLiBSZXRyaWV2ZSB0aGUgY29vcmRpbmF0ZXMgdXNpbmcgdGhlIGxvY2F0aW9uXG5cdHBhcmFtZXRlciBhbmQgcGx1ZyB0aGVtIGludG8gdGhlIFVSTC4gRm9yIG90aGVyIGVuZHBvaW50cywgXG5cdHVzZSB0aGUgbG9jYXRpb24gcGFyYW1ldGVyIGRpcmVjdGx5LlxuXHQqL1xuICBpZiAoZXhjbHVkZSkge1xuICAgIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldExvY2F0aW9uQ29vcmRzKGxvY2F0aW9uKTtcbiAgICB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke1xuICAgICAgY29vcmRzLmxhdFxuICAgIH0mbG9uPSR7Y29vcmRzLmxvbn0mZXhjbHVkZT0ke2V4Y2x1ZGV9JmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgfSBlbHNlIHtcbiAgICB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8ke2VuZHBvaW50fT9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JmFwcGlkPSR7Z2V0QVBJa2V5KCl9YDtcbiAgfVxuICAvLyBUaGUgZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2hRdWVyeSB2YWxpZGF0ZXMgYSBzdHJpbmcgYWdhaW5zdFxuXHQvLyBhIHJlZ2V4IHBhdHRlcm4gYW5kIGNoZWNrcyB0aGF0IGl0IGlzIG5vdCBlbXB0eS5cbiAgY29uc3Qgc2VhcmNoUXVlcnlJc1ZhbGlkID0gdmFsaWRhdGVTZWFyY2hRdWVyeShsb2NhdGlvbik7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBzZWFyY2ggcXVlcnknKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn06IGAsXG4gICAgICBlcnIsXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleHRyYWN0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIHByb3BlcnR5KSB7XG4gIGxldCB3ZWF0aGVyRGF0YTtcbiAgbGV0IGVuZHBvaW50O1xuICBsZXQgZXhjbHVkZTtcbiAgbGV0IHByZWNpcGl0YXRpb247XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgZW5kcG9pbnQgPSAnd2VhdGhlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIGVuZHBvaW50ID0gJ2ZvcmVjYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhaWx5JzpcbiAgICAgIGVuZHBvaW50ID0gJ29uZWNhbGwnO1xuICAgICAgZXhjbHVkZSA9ICdjdXJyZW50LG1pbnV0ZWx5LGhvdXJseSxhbGVydHMnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHByb3BlcnR5IFwiJHtwcm9wZXJ0eX1cImApO1xuICB9XG4gIHRyeSB7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCBleGNsdWRlLCB1bml0LCBlbmRwb2ludCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiBcIiR7bG9jYXRpb259XCI6IGAsXG4gICAgICBlcnIsXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kLnNwZWVkKTtcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIHByZWNpcGl0YXRpb24gPSB3ZWF0aGVyRGF0YS5saXN0WzBdLnBvcDtcbiAgICAgIGlmIChwcmVjaXBpdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUHJlY2lwaXRhdGlvbiA9IHBhcnNlRmxvYXQocHJlY2lwaXRhdGlvbikudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZvcm1hdHRlZFByZWNpcGl0YXRpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ291bGQgbm90IHJldHJpZXZlIGZvcmVjYXN0ZWQgcHJlY2lwaXRhdGlvbicpO1xuICAgIGNhc2UgJ2RhaWx5JzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZUZyb21KU09OKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIG51bGwsICd3ZWF0aGVyJyk7XG4gIHJldHVybiBsb2NhdGlvbkRhdGEubmFtZTtcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCB9IGZyb20gJy4uL3NlYXJjaC1xdWVyeSc7XG5cbmltcG9ydCB3cml0ZUxvY2F0aW9uIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xuXG5pbXBvcnQgeyBleHRyYWN0V2VhdGhlckRhdGEgfSBmcm9tICcuLi9hcGkvd2VhdGhlci1kYXRhJztcblxuaW1wb3J0ICcuLi93ZWF0aGVyL21haW4td2VhdGhlci11aS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZW5kZXJXZWF0aGVyRGF0YSgpIHtcbiAgbGV0IHVuaXQ7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQoKSA/PyAnTWlubmVhcG9saXMnO1xuICB3cml0ZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAnc3RhdHVzJyxcbiAgICAnY3VycmVudFRlbXAnLFxuICAgICdmZWVsc0xpa2UnLFxuICAgICdodW1pZGl0eScsXG4gICAgJ3ByZWNpcGl0YXRpb24nLFxuICAgICd3aW5kU3BlZWQnLFxuXHRcdCdkYWlseScsXG4gIF07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PlxuICAgICAgICBleHRyYWN0V2VhdGhlckRhdGEobG9jYXRpb24sICh1bml0ID0gJ2ltcGVyaWFsJyksIHByb3BlcnR5KSxcbiAgICAgICksXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItc3RhdHVzJyk7XG4gICAgY29uc3QgY3VycmVudFRlbXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRlbXAnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXRlbXAnKTtcbiAgICBjb25zdCBodW1pZGl0eUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5LXBlcmNlbnRhZ2UnKTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlY2lwaXRhdGlvbi1wZXJjZW50YWdlJyk7XG4gICAgY29uc3Qgd2luZFNwZWVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGVlZC1wZXJjZW50YWdlJyk7XG5cbiAgICBjb25zdCBbc3RhdHVzLCBjdXJyZW50VGVtcCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgcHJlY2lwaXRhdGlvbiwgd2luZFNwZWVkLCBkYWlseV0gPVxuICAgICAgd2VhdGhlckRhdGE7XG5cbiAgICBzdGF0dXNFbC50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICBjdXJyZW50VGVtcEVsLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXB9wrBgO1xuICAgIGZlZWxzTGlrZUVsLnRleHRDb250ZW50ID0gYCR7ZmVlbHNMaWtlfcKwYDtcbiAgICBodW1pZGl0eUVsLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XG4gICAgcHJlY2lwaXRhdGlvbkVsLnRleHRDb250ZW50ID0gYCR7cHJlY2lwaXRhdGlvbn0lYDtcbiAgICB3aW5kU3BlZWRFbC50ZXh0Q29udGVudCA9XG4gICAgICB1bml0ID09PSAnaW1wZXJpYWwnID8gYCR7d2luZFNwZWVkfSBNUEhgIDogYCR7d2luZFNwZWVkfSBLTS9IYDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHdyaXRpbmcgd2VhdGhlciBkYXRhIHRvIHRoZSBET006ICcsIGVycik7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9oZWFkZXIuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gd3JpdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbG9jYXRpb24tdGl0bGUnKTtcblxuICBjb25zdCB7IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCB9ID0gYXdhaXQgaW1wb3J0KCcuLi9zZWFyY2gtcXVlcnknKTtcbiAgY29uc3QgdXNlcklucHV0ID0gZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0KCk7XG5cbiAgY29uc3QgeyBnZXRMb2NhdGlvbk5hbWVGcm9tSlNPTiB9ID0gYXdhaXQgaW1wb3J0KCcuLi9hcGkvd2VhdGhlci1kYXRhJyk7XG4gIGNvbnN0IGxvY2F0aW9uTmFtZSA9IGF3YWl0IGdldExvY2F0aW9uTmFtZUZyb21KU09OKHVzZXJJbnB1dCk7XG4gIGxvY2F0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbk5hbWUgPz8gJ01pbm5lYXBvbGlzJ31gO1xufVxuIiwiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG4iLCJpbXBvcnQgcmVuZGVyV2VhdGhlckRhdGEgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xuXG5yZW5kZXJXZWF0aGVyRGF0YSgpO1xuXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbnNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJXZWF0aGVyRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=