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
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Container */\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n  padding: 20px;\n}\n\n/* Content Container */\n#content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n}\n\n#top-level-data {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n}\n\n#center-data {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-1 {\n  padding: 10px;\n  height: 300px;\n  width: 300px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n}\n\n#circle-2 {\n  background-color: rgba(0, 0, 0, 0.05);\n  height: clamp(70%, 300px, 100%);\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 80px;\n}\n\n#weather-status {\n  font-size: 1.5rem;\n}\n\n#current-temp {\n  font-size: 3rem;\n}\n\n#bottom-level-data {\n  grid-area: cards;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#feels-like-icon,\n#humidity-icon,\n#precipitation-icon,\n#wind-icon {\n  float: left;\n  margin-right: 20px;\n}\n\n#feels-like,\n#humidity,\n#precipitation,\n#wind-speed {\n  font-size: 1.3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/weather/main-weather-ui.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;EACE,eAAe;EACf,aAAa;EACb;;;;iBAIe;EACf,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,yDAAqD;EACrD,0BAA0B;EAC1B,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,aAAa;EACb;;;;iBAIe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,wDAAwD;EACxD,qDAAqD;EACrD,gDAAgD;AAClD;;AAEA;EACE,qCAAqC;EACrC,+BAA+B;EAC/B,kBAAkB;EAClB,8DAA8D;EAC9D,2DAA2D;EAC3D,sDAAsD;EACtD,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;;EAIE,iBAAiB;AACnB","sourcesContent":["/* Main Container */\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n  padding: 20px;\n}\n\n/* Content Container */\n#content {\n  background-image: url(/assets/backgrounds/river.webp);\n  background-size: 100% 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template:\n    'header header header'\n    'main main main'\n    'cards cards cards'\n    / 1fr 2fr 1fr;\n}\n\n#top-level-data {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n}\n\n#center-data {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-1 {\n  padding: 10px;\n  height: 300px;\n  width: 300px;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.45);\n}\n\n#circle-2 {\n  background-color: rgba(0, 0, 0, 0.05);\n  height: clamp(70%, 300px, 100%);\n  border-radius: 50%;\n  -webkit-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  -moz-box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  box-shadow: inset 0px 0px 45px 0px rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#circle-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 80px;\n}\n\n#weather-status {\n  font-size: 1.5rem;\n}\n\n#current-temp {\n  font-size: 3rem;\n}\n\n#bottom-level-data {\n  grid-area: cards;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n#feels-like-icon,\n#humidity-icon,\n#precipitation-icon,\n#wind-icon {\n  float: left;\n  margin-right: 20px;\n}\n\n#feels-like,\n#humidity,\n#precipitation,\n#wind-speed {\n  font-size: 1.3rem;\n}\n"],"sourceRoot":""}]);
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


const weatherAPIkey = '3535c8d31233d98b7f80c26b5b76e3a6';

async function fetchWeatherData(
  location,
  unit = 'imperial',
  endpoint = 'weather'
) {
  const weatherAPIurl = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${location}&&units=${unit}&APPID=${weatherAPIkey}`;
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
      err
    );
    return err;
  }
}

async function extractWeatherData(location, unit, property) {
  let weatherData;
  let endpoint;
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
    default:
      return new Error(`Unsupported property "${property}"`);
  }
  try {
    weatherData = await fetchWeatherData(location, unit, endpoint);
  } catch (err) {
    console.error(
      `Error fetching ${endpoint} API for location "${location}": `,
      err
    );
    return err;
  }
  switch (property) {
    case 'status':
      return weatherData.weather[0].main;
    case 'currentTemp':
      return weatherData.main.temp;
    case 'feelsLike':
      return weatherData.main.feels_like;
    case 'humidity':
      return weatherData.main.humidity;
    case 'windSpeed':
      return weatherData.wind.speed;
    case 'precipitation':
      precipitation = weatherData.list[0].pop;
      if (precipitation !== undefined) {
        const parsedPrecipitation = parseFloat(precipitation).toFixed(1);
        const formattedPrecipitation = parsedPrecipitation * 100;
        return formattedPrecipitation;
      }
      return new Error('Could not retrieve forecasted precipitation');
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
/* harmony import */ var _api_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/weather-data */ "./src/components/api/weather-data.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _search_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-query */ "./src/components/search-query.js");
/* harmony import */ var _weather_main_weather_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather/main-weather-ui.css */ "./src/components/weather/main-weather-ui.css");








async function writeWeatherData(location, unit, properties) {
  try {
    const weatherData = await Promise.all(
      properties.map((property) => (0,_api_weather_data__WEBPACK_IMPORTED_MODULE_0__.extractWeatherData)(location, unit, property))
    );

    const statusEl = document.getElementById('weather-status');
    const currentTempEl = document.getElementById('current-temp');
    const feelsLikeEl = document.getElementById('feels-like-temp');
    const humidityEl = document.getElementById('humidity-percentage');
    const precipitationEl = document.getElementById('precipitation-percentage');
    const windSpeedEl = document.getElementById('wind-speed-percentage');

    const [status, currentTemp, feelsLike, humidity, precipitation, windSpeed] =
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

async function renderWeatherData() {
  const location = (0,_search_query__WEBPACK_IMPORTED_MODULE_2__.getLocationFromUserInput)() ?? 'Minneapolis';

  (0,_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const properties = [
    'status',
    'currentTemp',
    'feelsLike',
    'humidity',
    'windSpeed',
    'precipitation',
  ];
  await writeWeatherData(location, 'imperial', properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2YsbUJBQW1CLHVFQUF3Qjs7QUFFM0MsRUFBRSwwREFBYTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEc0I7O0FBRVA7QUFDZjs7QUFFQSxVQUFVLDJCQUEyQixRQUFRLHNMQUF5QjtBQUN0RTs7QUFFQSxVQUFVLDBCQUEwQixRQUFRLGtNQUE2QjtBQUN6RTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFTzs7QUFFQTtBQUNQO0FBQ0EscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUU7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JxRDs7QUFFckQsK0RBQWlCOztBQUVqQjs7QUFFQSxxQ0FBcUMsMkRBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci9tYWluLXdlYXRoZXItdWkuY3NzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9mN2ZhIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcz81OGIyIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXF1ZXJ5LmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjs7Q0FFbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2JhY2tncm91bmRzL3JpdmVyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIENvbnRhaW5lciAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IENvbnRhaW5lciAqL1xcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxufVxcblxcbiN0b3AtbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjZW50ZXItZGF0YSB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLTEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG5cXG4jY2lyY2xlLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGhlaWdodDogY2xhbXAoNzAlLCAzMDBweCwgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NpcmNsZS1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG59XFxuXFxuI3dlYXRoZXItc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2JvdHRvbS1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogY2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZmVlbHMtbGlrZS1pY29uLFxcbiNodW1pZGl0eS1pY29uLFxcbiNwcmVjaXBpdGF0aW9uLWljb24sXFxuI3dpbmQtaWNvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuI2ZlZWxzLWxpa2UsXFxuI2h1bWlkaXR5LFxcbiNwcmVjaXBpdGF0aW9uLFxcbiN3aW5kLXNwZWVkIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL21haW4td2VhdGhlci11aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYjs7OztpQkFJZTtFQUNmLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSx5REFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiOzs7O2lCQUllO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHdEQUF3RDtFQUN4RCxxREFBcUQ7RUFDckQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDJEQUEyRDtFQUMzRCxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBDb250YWluZXIgKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2NhcmRzIGNhcmRzIGNhcmRzJ1xcbiAgICAvIDFmciAyZnIgMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCBDb250YWluZXIgKi9cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kcy9yaXZlci53ZWJwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWFpbiBtYWluIG1haW4nXFxuICAgICdjYXJkcyBjYXJkcyBjYXJkcydcXG4gICAgLyAxZnIgMmZyIDFmcjtcXG59XFxuXFxuI3RvcC1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NlbnRlci1kYXRhIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaXJjbGUtMSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcblxcbiNjaXJjbGUtMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgaGVpZ2h0OiBjbGFtcCg3MCUsIDMwMHB4LCAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jYm90dG9tLWxldmVsLWRhdGEge1xcbiAgZ3JpZC1hcmVhOiBjYXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNmZWVscy1saWtlLWljb24sXFxuI2h1bWlkaXR5LWljb24sXFxuI3ByZWNpcGl0YXRpb24taWNvbixcXG4jd2luZC1pY29uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jZmVlbHMtbGlrZSxcXG4jaHVtaWRpdHksXFxuI3ByZWNpcGl0YXRpb24sXFxuI3dpbmQtc3BlZWQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4td2VhdGhlci11aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4td2VhdGhlci11aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5jb25zdCB3ZWF0aGVyQVBJa2V5ID0gJzM1MzVjOGQzMTIzM2Q5OGI3ZjgwYzI2YjViNzZlM2E2JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoXG4gIGxvY2F0aW9uLFxuICB1bml0ID0gJ2ltcGVyaWFsJyxcbiAgZW5kcG9pbnQgPSAnd2VhdGhlcidcbikge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8ke2VuZHBvaW50fT9xPSR7bG9jYXRpb259JiZ1bml0cz0ke3VuaXR9JkFQUElEPSR7d2VhdGhlckFQSWtleX1gO1xuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KGxvY2F0aW9uKTtcbiAgaWYgKCFzZWFyY2hRdWVyeUlzVmFsaWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHNlYXJjaCBxdWVyeScpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiAke2xvY2F0aW9ufTogYCxcbiAgICAgIGVyclxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0cmFjdFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0eSkge1xuICBsZXQgd2VhdGhlckRhdGE7XG4gIGxldCBlbmRwb2ludDtcbiAgbGV0IHByZWNpcGl0YXRpb247XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgZW5kcG9pbnQgPSAnd2VhdGhlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIGVuZHBvaW50ID0gJ2ZvcmVjYXN0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxuICB0cnkge1xuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgZW5kcG9pbnQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gXCIke2xvY2F0aW9ufVwiOiBgLFxuICAgICAgZXJyXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIHN3aXRjaCAocHJvcGVydHkpIHtcbiAgICBjYXNlICdzdGF0dXMnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlO1xuICAgIGNhc2UgJ2h1bWlkaXR5JzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcbiAgICBjYXNlICdwcmVjaXBpdGF0aW9uJzpcbiAgICAgIHByZWNpcGl0YXRpb24gPSB3ZWF0aGVyRGF0YS5saXN0WzBdLnBvcDtcbiAgICAgIGlmIChwcmVjaXBpdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkUHJlY2lwaXRhdGlvbiA9IHBhcnNlRmxvYXQocHJlY2lwaXRhdGlvbikudG9GaXhlZCgxKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUHJlY2lwaXRhdGlvbiA9IHBhcnNlZFByZWNpcGl0YXRpb24gKiAxMDA7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQ291bGQgbm90IHJldHJpZXZlIGZvcmVjYXN0ZWQgcHJlY2lwaXRhdGlvbicpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgbnVsbCwgJ3dlYXRoZXInKTtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YS5uYW1lO1xufVxuIiwiaW1wb3J0IHsgZXh0cmFjdFdlYXRoZXJEYXRhIH0gZnJvbSAnLi4vYXBpL3dlYXRoZXItZGF0YSc7XG5cbmltcG9ydCB3cml0ZUxvY2F0aW9uIGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xuXG5pbXBvcnQgeyBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5pbXBvcnQgJy4uL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlV2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIHByb3BlcnRpZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiBleHRyYWN0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIHByb3BlcnR5KSlcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1zdGF0dXMnKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGVtcCcpO1xuICAgIGNvbnN0IGZlZWxzTGlrZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UtdGVtcCcpO1xuICAgIGNvbnN0IGh1bWlkaXR5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktcGVyY2VudGFnZScpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9uLXBlcmNlbnRhZ2UnKTtcbiAgICBjb25zdCB3aW5kU3BlZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkLXBlcmNlbnRhZ2UnKTtcblxuICAgIGNvbnN0IFtzdGF0dXMsIGN1cnJlbnRUZW1wLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBwcmVjaXBpdGF0aW9uLCB3aW5kU3BlZWRdID1cbiAgICAgIHdlYXRoZXJEYXRhO1xuXG4gICAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgY3VycmVudFRlbXBFbC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wfcKwYDtcbiAgICBmZWVsc0xpa2VFbC50ZXh0Q29udGVudCA9IGAke2ZlZWxzTGlrZX3CsGA7XG4gICAgaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGAke2h1bWlkaXR5fSVgO1xuICAgIHByZWNpcGl0YXRpb25FbC50ZXh0Q29udGVudCA9IGAke3ByZWNpcGl0YXRpb259JWA7XG4gICAgd2luZFNwZWVkRWwudGV4dENvbnRlbnQgPVxuICAgICAgdW5pdCA9PT0gJ2ltcGVyaWFsJyA/IGAke3dpbmRTcGVlZH0gTVBIYCA6IGAke3dpbmRTcGVlZH0gS00vSGA7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciB3cml0aW5nIHdlYXRoZXIgZGF0YSB0byB0aGUgRE9NOiAnLCBlcnIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEYXRhKCkge1xuICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCgpID8/ICdNaW5uZWFwb2xpcyc7XG5cbiAgd3JpdGVMb2NhdGlvbigpO1xuXG4gIGNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAgJ3N0YXR1cycsXG4gICAgJ2N1cnJlbnRUZW1wJyxcbiAgICAnZmVlbHNMaWtlJyxcbiAgICAnaHVtaWRpdHknLFxuICAgICd3aW5kU3BlZWQnLFxuICAgICdwcmVjaXBpdGF0aW9uJyxcbiAgXTtcbiAgYXdhaXQgd3JpdGVXZWF0aGVyRGF0YShsb2NhdGlvbiwgJ2ltcGVyaWFsJywgcHJvcGVydGllcyk7XG59XG4iLCJpbXBvcnQgJy4vaGVhZGVyLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlTG9jYXRpb24oKSB7XG4gIGNvbnN0IGxvY2F0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWxvY2F0aW9uLXRpdGxlJyk7XG5cbiAgY29uc3QgeyBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgfSA9IGF3YWl0IGltcG9ydCgnLi4vc2VhcmNoLXF1ZXJ5Jyk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCgpO1xuXG4gIGNvbnN0IHsgZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04gfSA9IGF3YWl0IGltcG9ydCgnLi4vYXBpL3dlYXRoZXItZGF0YScpO1xuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBhd2FpdCBnZXRMb2NhdGlvbk5hbWVGcm9tSlNPTih1c2VySW5wdXQpO1xuICBsb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25OYW1lID8/ICdNaW5uZWFwb2xpcyd9YDtcbn1cbiIsImNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0ID0gKCkgPT4gc2VhcmNoQmFyLnZhbHVlIHx8ICdNaW5uZWFwb2xpcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNlYXJjaFF1ZXJ5ID0gKHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFJlZ2V4ID1cbiAgICAvXihbYS16QS1aXFxkXFxzK10qKSgsXFxzKihbYS16QS1aXXsyfSk/KT8oLFxccysoW2EtekEtWl17Mn0pPyk/JC87XG4gIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgfHwgc2VhcmNoUmVnZXgudGVzdChzZWFyY2hRdWVyeSk7XG59O1xuIiwiaW1wb3J0IHJlbmRlcldlYXRoZXJEYXRhIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcblxucmVuZGVyV2VhdGhlckRhdGEoKTtcblxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5zZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyV2VhdGhlckRhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9