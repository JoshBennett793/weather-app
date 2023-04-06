"use strict";
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["menu"],{

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/menu/menu.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/menu/menu.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue-light-bg: #1a96b9;\n  --blue-dark-bg: #13738d;\n  --red-light-bg: #c25050;\n  --red-dark-bg: #9c3e3e;\n}\n\n/* General Styles */\n#menu-container {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\tgap: 3em;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.menu-item.search,\nform {\n\tmargin: 120px 0 0 30px;\n}\n\n.menu-item.background-selector {\n\tmargin: 40px 0 0 30px;\n}\n\n.menu-item {\n  width: fit-content;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  transform: translateX(5%) scale(1.1);\n}\n\n/* Content Slide Animation */\n#content {\n  transition: transform 0.3s ease-in-out;\n}\n\n#content.menu-open {\n  border-radius: 25px;\n  transform: translateX(50%) scale(0.9);\n}\n\n/* Wave General Styles and Variations */\n#wave {\n  position: absolute;\n  bottom: 49%;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n#wave svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 150px;\n}\n\n#menu-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 50%;\n  width: 100%;\n}\n\n#wave.river .shape-fill {\n  fill: var(--blue-dark-bg);\n}\n\n#menu-divider.river {\n  background: var(--blue-dark-bg);\n}\n\n#menu-divider.city {\n  background: var(--red-dark-bg);\n}\n\n#wave.city .shape-fill {\n  fill: var(--red-dark-bg);\n}\n\n/* Menu Color Variations */\n#menu-container.river {\n  background: var(--blue-light-bg);\n}\n\n#menu-container.city {\n  background: var(--red-light-bg);\n}\n\n/* Form Styles */\nform {\n  position: absolute;\n  width: 25ch;\n}\n\ninput {\n  position: absolute;\n  visibility: hidden;\n  color: black;\n\n  border: none;\n  border-radius: 5px;\n  height: 1.5rem;\n  width: 25ch;\n  padding: 5px 10px;\n}\n\ninput:focus {\n  outline: thin dotted;\n}\n\ninput.invalid {\n  border: 1px solid #900;\n  background-color: #fdd;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  position: absolute;\n  bottom: 0;\n\n  font-size: 70%;\n  background-color: #900;\n  border-radius: 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nbutton {\n  width: 24px;\n  height: 24px;\n  visibility: hidden;\n  position: absolute;\n  top: 5px;\n  right: 25px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n/* Hamburger Menu Icon */\n\n#hamburger-icon {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  height: 30px;\n  width: 30px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n#hamburger-icon div {\n  height: 3px;\n  width: 30px;\n  background: white;\n  border-radius: 25px;\n  transition: transform 0.3s ease-in-out;\n}\n\n/* Hamburger Icon Animation */\n\n#hamburger-icon.active div:nth-child(1) {\n  transform: translate(0, 10px) rotate(45deg);\n}\n\n#hamburger-icon.active div:nth-child(2) {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n#hamburger-icon.active div:nth-child(3) {\n  transform: translate(0, -10px) rotate(-45deg);\n}\n\n#hamburger-icon.not-active div:nth-child(1) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.not-active div:nth-child(2) {\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n}\n\n#hamburger-icon.not-active div:nth-child(3) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.active,\n#hamburger-icon.not-active {\n  animation-duration: 0.3s;\n  animation-timing-function: ease-in-out;\n}\n\n/* For desktop */\n\n/* Small Viewport */\n@media screen and (min-width: 768px) {\n  #content.menu-open {\n    transform: translateX(20%) scale(0.9);\n  }\n}\n\n/* Widescreen */\n@media screen and (min-width: 1440px) {\n  #content.menu-open {\n    transform: translateX(8%) scale(0.9);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/menu/menu.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;CACZ,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,sBAAsB;AACvB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,4BAA4B;AAC5B;EACE,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA,uCAAuC;AACvC;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,WAAW;EACX,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,0BAA0B;AAC1B;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;;EAEZ,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,UAAU;;EAEV,kBAAkB;EAClB,SAAS;;EAET,cAAc;EACd,sBAAsB;EACtB,kBAAkB;;EAElB,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA,wBAAwB;;AAExB;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,YAAY;EACZ,WAAW;EACX,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,6BAA6B;;AAE7B;EACE,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA,gBAAgB;;AAEhB,mBAAmB;AACnB;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA,eAAe;AACf;EACE;IACE,oCAAoC;EACtC;AACF","sourcesContent":[":root {\n  --blue-light-bg: #1a96b9;\n  --blue-dark-bg: #13738d;\n  --red-light-bg: #c25050;\n  --red-dark-bg: #9c3e3e;\n}\n\n/* General Styles */\n#menu-container {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n\tgap: 3em;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.menu-item.search,\nform {\n\tmargin: 120px 0 0 30px;\n}\n\n.menu-item.background-selector {\n\tmargin: 40px 0 0 30px;\n}\n\n.menu-item {\n  width: fit-content;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  transform: translateX(5%) scale(1.1);\n}\n\n/* Content Slide Animation */\n#content {\n  transition: transform 0.3s ease-in-out;\n}\n\n#content.menu-open {\n  border-radius: 25px;\n  transform: translateX(50%) scale(0.9);\n}\n\n/* Wave General Styles and Variations */\n#wave {\n  position: absolute;\n  bottom: 49%;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n#wave svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 150px;\n}\n\n#menu-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 50%;\n  width: 100%;\n}\n\n#wave.river .shape-fill {\n  fill: var(--blue-dark-bg);\n}\n\n#menu-divider.river {\n  background: var(--blue-dark-bg);\n}\n\n#menu-divider.city {\n  background: var(--red-dark-bg);\n}\n\n#wave.city .shape-fill {\n  fill: var(--red-dark-bg);\n}\n\n/* Menu Color Variations */\n#menu-container.river {\n  background: var(--blue-light-bg);\n}\n\n#menu-container.city {\n  background: var(--red-light-bg);\n}\n\n/* Form Styles */\nform {\n  position: absolute;\n  width: 25ch;\n}\n\ninput {\n  position: absolute;\n  visibility: hidden;\n  color: black;\n\n  border: none;\n  border-radius: 5px;\n  height: 1.5rem;\n  width: 25ch;\n  padding: 5px 10px;\n}\n\ninput:focus {\n  outline: thin dotted;\n}\n\ninput.invalid {\n  border: 1px solid #900;\n  background-color: #fdd;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  position: absolute;\n  bottom: 0;\n\n  font-size: 70%;\n  background-color: #900;\n  border-radius: 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nbutton {\n  width: 24px;\n  height: 24px;\n  visibility: hidden;\n  position: absolute;\n  top: 5px;\n  right: 25px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n/* Hamburger Menu Icon */\n\n#hamburger-icon {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  height: 30px;\n  width: 30px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n#hamburger-icon div {\n  height: 3px;\n  width: 30px;\n  background: white;\n  border-radius: 25px;\n  transition: transform 0.3s ease-in-out;\n}\n\n/* Hamburger Icon Animation */\n\n#hamburger-icon.active div:nth-child(1) {\n  transform: translate(0, 10px) rotate(45deg);\n}\n\n#hamburger-icon.active div:nth-child(2) {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n#hamburger-icon.active div:nth-child(3) {\n  transform: translate(0, -10px) rotate(-45deg);\n}\n\n#hamburger-icon.not-active div:nth-child(1) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.not-active div:nth-child(2) {\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n}\n\n#hamburger-icon.not-active div:nth-child(3) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.active,\n#hamburger-icon.not-active {\n  animation-duration: 0.3s;\n  animation-timing-function: ease-in-out;\n}\n\n/* For desktop */\n\n/* Small Viewport */\n@media screen and (min-width: 768px) {\n  #content.menu-open {\n    transform: translateX(20%) scale(0.9);\n  }\n}\n\n/* Widescreen */\n@media screen and (min-width: 1440px) {\n  #content.menu-open {\n    transform: translateX(8%) scale(0.9);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/menu/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/app */ "./src/components/app/app.js");
/* harmony import */ var _search_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-query */ "./src/components/search-query.js");
/* harmony import */ var _api_weather_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/weather-data */ "./src/components/api/weather-data.js");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.css */ "./src/components/menu/menu.css");








const backgroundBtn = document.querySelector('.background-selector');
const contentContainer = document.getElementById('content');
const searchBtn = document.querySelector('.search');
const searchBar = document.querySelector("input[type='text']");
const searchSubmitBtn = document.querySelector('button');

const toggleSearchBarVisibility = () => {
  searchBar.style.visibility =
    searchBar.style.visibility === 'visible' ? 'hidden' : 'visible';
  searchSubmitBtn.style.visibility =
    searchSubmitBtn.style.visibility === 'visible' ? 'hidden' : 'visible';
};

searchBtn.onclick = () => {
  toggleSearchBarVisibility();
  searchBar.select();
};

const form = document.querySelector('form');
const searchError = document.querySelector('span.error');

const formSubmissionHandler = async (event) => {
  event.preventDefault();
  const searchQueryIsValid = (0,_search_query__WEBPACK_IMPORTED_MODULE_1__.validateSearchQuery)(searchBar.value);
  if (!searchQueryIsValid) {
    searchBar.className = 'invalid';
    searchError.textContent =
      'Please enter a valid search format. (i.e. "city", "city, 2 letter country code", or "zipcode, 2 letter country code")';
    searchError.className = 'error active';
  } else {
    searchBar.className = 'valid';
    searchError.textContent = '';
    searchError.className = 'error';
  }
  const weatherDataOrError = await (0,_api_weather_data__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData)(searchBar.value);
  if (weatherDataOrError instanceof Error) {
    if (weatherDataOrError.message.includes('Location not found')) {
      searchError.textContent =
        'Location not found. Please enter a valid location. (Hint: Check for spelling errors.)';
    } else {
      searchError.textContent =
        'Please recheck the search format and try again. (i.e. "city", "city, 2 letter country code", or "zipcode, 2 letter country code")';
    }
    searchBar.className = 'invalid';
    searchError.className = 'error active';
  } else {
    toggleSearchBarVisibility();
    await (0,_app_app__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherDataOrError);
    form.reset();
  }
};

form.onsubmit = formSubmissionHandler;

searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchSubmitBtn.click();
  }
});

const getWebpFileNameFromBackground = () => {
  const contentContainerBackgroundImg = window
    .getComputedStyle(contentContainer)
    .getPropertyValue('background-image');
  const webpFileName =
    contentContainerBackgroundImg.match(/\b(\w+)\.webp\b/)[1];
  return webpFileName;
};

const toggleMenuBackgroundColor = () => {
  const [menu, wave, menuDivider] = document.querySelectorAll(
    '#menu-container, #wave, #menu-divider'
  );
  [menu, wave, menuDivider].forEach((el) => {
    el.className = getWebpFileNameFromBackground();
  });
};

const changeBackground = () => {
  let pngFileName = getWebpFileNameFromBackground();
  const fileName = pngFileName === 'river' ? 'city' : 'river';
  contentContainer.style.backgroundImage = `url(/assets/backgrounds/${fileName}.webp)`;
  pngFileName = fileName;
};

backgroundBtn.onclick = () => {
  changeBackground();
  toggleMenuBackgroundColor();
};

const hamburger = document.getElementById('hamburger-icon');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('not-active');
  contentContainer.classList.toggle('menu-open');
};


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/menu/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHNCQUFzQixvQkFBb0IsNEJBQTRCLHdCQUF3Qix5QkFBeUIsR0FBRyxTQUFTLG1HQUFtRyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsa0NBQWtDLHNCQUFzQixvQkFBb0IsNEJBQTRCLHdCQUF3Qix5QkFBeUIsR0FBRyxxQkFBcUI7QUFDeGdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCw2QkFBNkIsNEJBQTRCLDRCQUE0QiwyQkFBMkIsR0FBRywyQ0FBMkMsdUJBQXVCLGtCQUFrQixnQkFBZ0IsYUFBYSxHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQixHQUFHLDhCQUE4QiwyQkFBMkIsR0FBRyxvQ0FBb0MsMEJBQTBCLEdBQUcsZ0JBQWdCLHVCQUF1QixvQkFBb0IsMkNBQTJDLEdBQUcsc0JBQXNCLHlDQUF5QyxHQUFHLDZDQUE2QywyQ0FBMkMsR0FBRyx3QkFBd0Isd0JBQXdCLDBDQUEwQyxHQUFHLHFEQUFxRCx1QkFBdUIsZ0JBQWdCLFlBQVksZ0JBQWdCLHFCQUFxQixtQkFBbUIsR0FBRyxlQUFlLHVCQUF1QixtQkFBbUIsOEJBQThCLGtCQUFrQixHQUFHLG1CQUFtQix1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixnQkFBZ0IsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcseUJBQXlCLG9DQUFvQyxHQUFHLHdCQUF3QixtQ0FBbUMsR0FBRyw0QkFBNEIsNkJBQTZCLEdBQUcsd0RBQXdELHFDQUFxQyxHQUFHLDBCQUEwQixvQ0FBb0MsR0FBRyw2QkFBNkIsdUJBQXVCLGdCQUFnQixHQUFHLFdBQVcsdUJBQXVCLHVCQUF1QixpQkFBaUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsZ0JBQWdCLHNCQUFzQixHQUFHLGlCQUFpQix5QkFBeUIsR0FBRyxtQkFBbUIsMkJBQTJCLDJCQUEyQixHQUFHLFlBQVksZ0JBQWdCLGVBQWUseUJBQXlCLGNBQWMscUJBQXFCLDJCQUEyQix1QkFBdUIsNkJBQTZCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLGFBQWEsZ0JBQWdCLDRCQUE0QixpQkFBaUIsb0JBQW9CLEdBQUcsa0RBQWtELG9CQUFvQixjQUFjLGVBQWUsaUJBQWlCLGdCQUFnQixlQUFlLGtCQUFrQiwyQkFBMkIsa0NBQWtDLG9CQUFvQixHQUFHLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLHNCQUFzQix3QkFBd0IsMkNBQTJDLEdBQUcsK0VBQStFLGdEQUFnRCxHQUFHLDZDQUE2QyxlQUFlLHlDQUF5QyxHQUFHLDZDQUE2QyxrREFBa0QsR0FBRyxpREFBaUQseUNBQXlDLEdBQUcsaURBQWlELGVBQWUseUNBQXlDLEdBQUcsaURBQWlELHlDQUF5QyxHQUFHLHlEQUF5RCw2QkFBNkIsMkNBQTJDLEdBQUcscUZBQXFGLHdCQUF3Qiw0Q0FBNEMsS0FBSyxHQUFHLDZEQUE2RCx3QkFBd0IsMkNBQTJDLEtBQUssR0FBRyxTQUFTLCtGQUErRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDJCQUEyQixHQUFHLDJDQUEyQyx1QkFBdUIsa0JBQWtCLGdCQUFnQixhQUFhLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLEdBQUcsOEJBQThCLDJCQUEyQixHQUFHLG9DQUFvQywwQkFBMEIsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsR0FBRyxzQkFBc0IseUNBQXlDLEdBQUcsNkNBQTZDLDJDQUEyQyxHQUFHLHdCQUF3Qix3QkFBd0IsMENBQTBDLEdBQUcscURBQXFELHVCQUF1QixnQkFBZ0IsWUFBWSxnQkFBZ0IscUJBQXFCLG1CQUFtQixHQUFHLGVBQWUsdUJBQXVCLG1CQUFtQiw4QkFBOEIsa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixjQUFjLFlBQVksZ0JBQWdCLGdCQUFnQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyx5QkFBeUIsb0NBQW9DLEdBQUcsd0JBQXdCLG1DQUFtQyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyx3REFBd0QscUNBQXFDLEdBQUcsMEJBQTBCLG9DQUFvQyxHQUFHLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLEdBQUcsV0FBVyx1QkFBdUIsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsaUJBQWlCLHlCQUF5QixHQUFHLG1CQUFtQiwyQkFBMkIsMkJBQTJCLEdBQUcsWUFBWSxnQkFBZ0IsZUFBZSx5QkFBeUIsY0FBYyxxQkFBcUIsMkJBQTJCLHVCQUF1Qiw2QkFBNkIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsYUFBYSxnQkFBZ0IsNEJBQTRCLGlCQUFpQixvQkFBb0IsR0FBRyxrREFBa0Qsb0JBQW9CLGNBQWMsZUFBZSxpQkFBaUIsZ0JBQWdCLGVBQWUsa0JBQWtCLDJCQUEyQixrQ0FBa0Msb0JBQW9CLEdBQUcseUJBQXlCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQ0FBMkMsR0FBRywrRUFBK0UsZ0RBQWdELEdBQUcsNkNBQTZDLGVBQWUseUNBQXlDLEdBQUcsNkNBQTZDLGtEQUFrRCxHQUFHLGlEQUFpRCx5Q0FBeUMsR0FBRyxpREFBaUQsZUFBZSx5Q0FBeUMsR0FBRyxpREFBaUQseUNBQXlDLEdBQUcseURBQXlELDZCQUE2QiwyQ0FBMkMsR0FBRyxxRkFBcUYsd0JBQXdCLDRDQUE0QyxLQUFLLEdBQUcsNkRBQTZELHdCQUF3QiwyQ0FBMkMsS0FBSyxHQUFHLHFCQUFxQjtBQUNod1M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLG9KQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzRUFBc0Usb0JBQW9CLGtCQUFrQixpSEFBaUgsa0JBQWtCLEdBQUcsdUNBQXVDLHNFQUFzRSwrQkFBK0IsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsaUJBQWlCLGtCQUFrQixpSEFBaUgsR0FBRyxxQkFBcUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMsR0FBRyxrQkFBa0Isb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0Isa0JBQWtCLGlCQUFpQix5Q0FBeUMsdUJBQXVCLDZEQUE2RCwwREFBMEQscURBQXFELEdBQUcsZUFBZSwwQ0FBMEMsb0NBQW9DLHVCQUF1QixtRUFBbUUsZ0VBQWdFLDJEQUEyRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLHdCQUF3QixxQkFBcUIsa0JBQWtCLG1DQUFtQywwQkFBMEIsR0FBRywwRUFBMEUsZ0JBQWdCLHVCQUF1QixHQUFHLDREQUE0RCxzQkFBc0IsR0FBRyxTQUFTLG9IQUFvSCxNQUFNLFVBQVUsVUFBVSxRQUFRLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLHNEQUFzRCxvQkFBb0Isa0JBQWtCLGlIQUFpSCxrQkFBa0IsR0FBRyx1Q0FBdUMsMERBQTBELCtCQUErQix1QkFBdUIsV0FBVyxZQUFZLGtCQUFrQixpQkFBaUIsa0JBQWtCLGlIQUFpSCxHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxHQUFHLGtCQUFrQixvQkFBb0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQixrQkFBa0IsaUJBQWlCLHlDQUF5Qyx1QkFBdUIsNkRBQTZELDBEQUEwRCxxREFBcUQsR0FBRyxlQUFlLDBDQUEwQyxvQ0FBb0MsdUJBQXVCLG1FQUFtRSxnRUFBZ0UsMkRBQTJELGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsd0JBQXdCLHFCQUFxQixrQkFBa0IsbUNBQW1DLDBCQUEwQixHQUFHLDBFQUEwRSxnQkFBZ0IsdUJBQXVCLEdBQUcsNERBQTRELHNCQUFzQixHQUFHLHFCQUFxQjtBQUN0eko7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQW1IO0FBQ25IO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ0dBQU87Ozs7QUFJNkQ7QUFDckYsT0FBTyxpRUFBZSxnR0FBTyxJQUFJLHVHQUFjLEdBQUcsdUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzRDs7QUFFdEQ7O0FBRUE7QUFDQSwwRUFBMEUsU0FBUyxpQkFBaUIsWUFBWTtBQUNoSDtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLE1BQU07QUFDbEIsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLFNBQVMsWUFBWTtBQUMvRCxJQUFJO0FBQ0osK0RBQStELFNBQVMsS0FBSyxTQUFTLFVBQVUsS0FBSyxTQUFTLFlBQVk7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtFQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw0QkFBNEIsVUFBVSxtQkFBbUIsU0FBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3QixVQUFVLG9CQUFvQixTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekkyRDs7QUFFZDs7QUFFWTs7QUFFakI7O0FBRXpCO0FBQ2Y7O0FBRUEsbUJBQW1CLHVFQUF3QjtBQUMzQyxFQUFFLDBEQUFhOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0MsaUNBQWlDLFVBQVU7QUFDM0MsZ0NBQWdDLFNBQVM7QUFDekMscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQSwrQkFBK0IsV0FBVyxVQUFVLFdBQVc7QUFDL0QsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ec0I7O0FBRVA7QUFDZjs7QUFFQSxVQUFVLDJCQUEyQixRQUFRLHNMQUF5QjtBQUN0RTs7QUFFQSxVQUFVLDBCQUEwQixRQUFRLGtNQUE2QjtBQUN6RTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7O0FBRVc7O0FBRUM7O0FBRW5DOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsa0VBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUVBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxVQUFVLG9EQUFpQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLFNBQVM7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekdBOztBQUVPOztBQUVBO0FBQ1A7QUFDQSxxQ0FBcUMsRUFBRSxtQkFBbUIsRUFBRTtBQUM1RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNzcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL21haW4td2VhdGhlci11aS5jc3MiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzP2Y3ZmEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNzcz81YzI0Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcz81OGIyIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvYXBpL3dlYXRoZXItZGF0YS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC1xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjs7Q0FFbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7O0NBRW5CLGtCQUFrQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlLWxpZ2h0LWJnOiAjMWE5NmI5O1xcbiAgLS1ibHVlLWRhcmstYmc6ICMxMzczOGQ7XFxuICAtLXJlZC1saWdodC1iZzogI2MyNTA1MDtcXG4gIC0tcmVkLWRhcmstYmc6ICM5YzNlM2U7XFxufVxcblxcbi8qIEdlbmVyYWwgU3R5bGVzICovXFxuI21lbnUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXHRnYXA6IDNlbTtcXG59XFxuXFxuI21lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtaXRlbS5zZWFyY2gsXFxuZm9ybSB7XFxuXFx0bWFyZ2luOiAxMjBweCAwIDAgMzBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS5iYWNrZ3JvdW5kLXNlbGVjdG9yIHtcXG5cXHRtYXJnaW46IDQwcHggMCAwIDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBDb250ZW50IFNsaWRlIEFuaW1hdGlvbiAqL1xcbiNjb250ZW50IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jY29udGVudC5tZW51LW9wZW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIFdhdmUgR2VuZXJhbCBTdHlsZXMgYW5kIFZhcmlhdGlvbnMgKi9cXG4jd2F2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDQ5JTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuI3dhdmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbiNtZW51LWRpdmlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN3YXZlLnJpdmVyIC5zaGFwZS1maWxsIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUtZGFyay1iZyk7XFxufVxcblxcbiNtZW51LWRpdmlkZXIucml2ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrLWJnKTtcXG59XFxuXFxuI21lbnUtZGl2aWRlci5jaXR5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1kYXJrLWJnKTtcXG59XFxuXFxuI3dhdmUuY2l0eSAuc2hhcGUtZmlsbCB7XFxuICBmaWxsOiB2YXIoLS1yZWQtZGFyay1iZyk7XFxufVxcblxcbi8qIE1lbnUgQ29sb3IgVmFyaWF0aW9ucyAqL1xcbiNtZW51LWNvbnRhaW5lci5yaXZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWxpZ2h0LWJnKTtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyLmNpdHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWxpZ2h0LWJnKTtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNWNoO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNWNoO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG5pbnB1dC5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgZm9udC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIYW1idXJnZXIgTWVudSBJY29uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24gZGl2IHtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogSGFtYnVyZ2VyIEljb24gQW5pbWF0aW9uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5hY3RpdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24uYWN0aXZlIGRpdjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLm5vdC1hY3RpdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSxcXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9yIGRlc2t0b3AgKi9cXG5cXG4vKiBTbWFsbCBWaWV3cG9ydCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKSBzY2FsZSgwLjkpO1xcbiAgfVxcbn1cXG5cXG4vKiBXaWRlc2NyZWVuICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOCUpIHNjYWxlKDAuOSk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0NBQ1osUUFBUTtBQUNUOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDOztBQUVBLHVDQUF1QztBQUN2QztFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7O0VBRVosWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIsU0FBUzs7RUFFVCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUEsNkJBQTZCOztBQUU3QjtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUEsZ0JBQWdCOztBQUVoQixtQkFBbUI7QUFDbkI7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGOztBQUVBLGVBQWU7QUFDZjtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ibHVlLWxpZ2h0LWJnOiAjMWE5NmI5O1xcbiAgLS1ibHVlLWRhcmstYmc6ICMxMzczOGQ7XFxuICAtLXJlZC1saWdodC1iZzogI2MyNTA1MDtcXG4gIC0tcmVkLWRhcmstYmc6ICM5YzNlM2U7XFxufVxcblxcbi8qIEdlbmVyYWwgU3R5bGVzICovXFxuI21lbnUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXHRnYXA6IDNlbTtcXG59XFxuXFxuI21lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtaXRlbS5zZWFyY2gsXFxuZm9ybSB7XFxuXFx0bWFyZ2luOiAxMjBweCAwIDAgMzBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS5iYWNrZ3JvdW5kLXNlbGVjdG9yIHtcXG5cXHRtYXJnaW46IDQwcHggMCAwIDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBDb250ZW50IFNsaWRlIEFuaW1hdGlvbiAqL1xcbiNjb250ZW50IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jY29udGVudC5tZW51LW9wZW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIFdhdmUgR2VuZXJhbCBTdHlsZXMgYW5kIFZhcmlhdGlvbnMgKi9cXG4jd2F2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDQ5JTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuI3dhdmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbiNtZW51LWRpdmlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN3YXZlLnJpdmVyIC5zaGFwZS1maWxsIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUtZGFyay1iZyk7XFxufVxcblxcbiNtZW51LWRpdmlkZXIucml2ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrLWJnKTtcXG59XFxuXFxuI21lbnUtZGl2aWRlci5jaXR5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1kYXJrLWJnKTtcXG59XFxuXFxuI3dhdmUuY2l0eSAuc2hhcGUtZmlsbCB7XFxuICBmaWxsOiB2YXIoLS1yZWQtZGFyay1iZyk7XFxufVxcblxcbi8qIE1lbnUgQ29sb3IgVmFyaWF0aW9ucyAqL1xcbiNtZW51LWNvbnRhaW5lci5yaXZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWxpZ2h0LWJnKTtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyLmNpdHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWxpZ2h0LWJnKTtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNWNoO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNWNoO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG5pbnB1dC5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgZm9udC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIYW1idXJnZXIgTWVudSBJY29uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24gZGl2IHtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogSGFtYnVyZ2VyIEljb24gQW5pbWF0aW9uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5hY3RpdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24uYWN0aXZlIGRpdjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLm5vdC1hY3RpdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSxcXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9yIGRlc2t0b3AgKi9cXG5cXG4vKiBTbWFsbCBWaWV3cG9ydCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKSBzY2FsZSgwLjkpO1xcbiAgfVxcbn1cXG5cXG4vKiBXaWRlc2NyZWVuICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOCUpIHNjYWxlKDAuOSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kcy9yaXZlci53ZWJwXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTWFpbiBDb250YWluZXIgKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2NhcmRzIGNhcmRzIGNhcmRzJ1xcbiAgICAvIDFmciAyZnIgMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCBDb250YWluZXIgKi9cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2NhcmRzIGNhcmRzIGNhcmRzJ1xcbiAgICAvIDFmciAyZnIgMWZyO1xcbn1cXG5cXG4jdG9wLWxldmVsLWRhdGEge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY2VudGVyLWRhdGEge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NpcmNsZS0xIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuXFxuI2NpcmNsZS0yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBoZWlnaHQ6IGNsYW1wKDcwJSwgMzAwcHgsIDEwMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaXJjbGUtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jYm90dG9tLWxldmVsLWRhdGEge1xcbiAgZ3JpZC1hcmVhOiBjYXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNmZWVscy1saWtlLWljb24sXFxuI2h1bWlkaXR5LWljb24sXFxuI3ByZWNpcGl0YXRpb24taWNvbixcXG4jd2luZC1pY29uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jZmVlbHMtbGlrZSxcXG4jaHVtaWRpdHksXFxuI3ByZWNpcGl0YXRpb24sXFxuI3dpbmQtc3BlZWQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiOzs7O2lCQUllO0VBQ2YsYUFBYTtBQUNmOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlEQUFxRDtFQUNyRCwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2I7Ozs7aUJBSWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsd0RBQXdEO0VBQ3hELHFEQUFxRDtFQUNyRCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsMkRBQTJEO0VBQzNELHNEQUFzRDtFQUN0RCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0VBSUUsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1haW4gQ29udGFpbmVyICovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWFpbiBtYWluIG1haW4nXFxuICAgICdjYXJkcyBjYXJkcyBjYXJkcydcXG4gICAgLyAxZnIgMmZyIDFmcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIENvbnRlbnQgQ29udGFpbmVyICovXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvYmFja2dyb3VuZHMvcml2ZXIud2VicCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxufVxcblxcbiN0b3AtbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjZW50ZXItZGF0YSB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLTEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG5cXG4jY2lyY2xlLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGhlaWdodDogY2xhbXAoNzAlLCAzMDBweCwgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NpcmNsZS1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI2N1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNib3R0b20tbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGNhcmRzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI2ZlZWxzLWxpa2UtaWNvbixcXG4jaHVtaWRpdHktaWNvbixcXG4jcHJlY2lwaXRhdGlvbi1pY29uLFxcbiN3aW5kLWljb24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbiNmZWVscy1saWtlLFxcbiNodW1pZGl0eSxcXG4jcHJlY2lwaXRhdGlvbixcXG4jd2luZC1zcGVlZCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4td2VhdGhlci11aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4td2VhdGhlci11aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5jb25zdCBnZXRBUElrZXkgPSAoKSA9PiAnMzUzNWM4ZDMxMjMzZDk4YjdmODBjMjZiNWI3NmUzYTYnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkNvb3Jkcyhsb2NhdGlvbikge1xuICBjb25zdCB3ZWF0aGVyQVBJdXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9MSZhcHBpZD0ke2dldEFQSWtleSgpfWA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdGUgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBHZW9jb2RlIEFQSSBjYWxsIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gLFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgeyBsYXQgfSA9IHdlYXRoZXJEYXRhWzBdO1xuICAgIGNvbnN0IHsgbG9uIH0gPSB3ZWF0aGVyRGF0YVswXTtcbiAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYEVycm9yIGZldGNoaW5nIHRoZSBnZW9jb2RpbmcgQVBJIGZvciBsb2NhdGlvbiAke2xvY2F0aW9ufWAsXG4gICAgICBlcnIsXG4gICAgKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKFxuICBsb2NhdGlvbixcbiAgZXhjbHVkZSxcbiAgdW5pdCA9ICdpbXBlcmlhbCcsXG4gIGVuZHBvaW50ID0gJ3dlYXRoZXInLFxuKSB7XG4gIGxldCB3ZWF0aGVyQVBJdXJsO1xuICAvKlxuXHRJZiB0aGUgJ2V4Y2x1ZGUnIHBhcmFtZXRlciBpcyBwcm92aWRlZCwgdXNlIHRoZSBPbmUgQ2FsbFxuXHRBUEkgZW5kcG9pbnQsIHdoaWNoIHJlcXVpcmVzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGVcblx0Y29vcmRpbmF0ZXMuIFJldHJpZXZlIHRoZSBjb29yZGluYXRlcyB1c2luZyB0aGUgbG9jYXRpb25cblx0cGFyYW1ldGVyIGFuZCBwbHVnIHRoZW0gaW50byB0aGUgVVJMLiBGb3Igb3RoZXIgZW5kcG9pbnRzLCBcblx0dXNlIHRoZSBsb2NhdGlvbiBwYXJhbWV0ZXIgZGlyZWN0bHkuXG5cdCovXG4gIGlmIChleGNsdWRlKSB7XG4gICAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0TG9jYXRpb25Db29yZHMobG9jYXRpb24pO1xuICAgIHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7XG4gICAgICBjb29yZHMubGF0XG4gICAgfSZsb249JHtjb29yZHMubG9ufSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJBUEl1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41LyR7ZW5kcG9pbnR9P3E9JHtsb2NhdGlvbn0mJnVuaXRzPSR7dW5pdH0mYXBwaWQ9JHtnZXRBUElrZXkoKX1gO1xuICB9XG4gIC8vIFRoZSBmdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IHZhbGlkYXRlcyBhIHN0cmluZyBhZ2FpbnN0XG5cdC8vIGEgcmVnZXggcGF0dGVybiBhbmQgY2hlY2tzIHRoYXQgaXQgaXMgbm90IGVtcHR5LlxuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KGxvY2F0aW9uKTtcbiAgaWYgKCFzZWFyY2hRdWVyeUlzVmFsaWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkIHNlYXJjaCBxdWVyeScpO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3ZWF0aGVyQVBJdXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignTG9jYXRpb24gbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBBUEkgY2FsbCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyB0aGUgJHtlbmRwb2ludH0gQVBJIGZvciBsb2NhdGlvbiAke2xvY2F0aW9ufTogYCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgcHJvcGVydHkpIHtcbiAgbGV0IHdlYXRoZXJEYXRhO1xuICBsZXQgZW5kcG9pbnQ7XG4gIGxldCBleGNsdWRlO1xuICBsZXQgcHJlY2lwaXRhdGlvbjtcbiAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgIGNhc2UgJ2ZlZWxzTGlrZSc6XG4gICAgY2FzZSAnaHVtaWRpdHknOlxuICAgIGNhc2UgJ3dpbmRTcGVlZCc6XG4gICAgICBlbmRwb2ludCA9ICd3ZWF0aGVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZWNpcGl0YXRpb24nOlxuICAgICAgZW5kcG9pbnQgPSAnZm9yZWNhc3QnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGFpbHknOlxuICAgICAgZW5kcG9pbnQgPSAnb25lY2FsbCc7XG4gICAgICBleGNsdWRlID0gJ2N1cnJlbnQsbWludXRlbHksaG91cmx5LGFsZXJ0cyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbiAgdHJ5IHtcbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIGV4Y2x1ZGUsIHVuaXQsIGVuZHBvaW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uIFwiJHtsb2NhdGlvbn1cIjogYCxcbiAgICAgIGVycixcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgIGNhc2UgJ3N0YXR1cyc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIGNhc2UgJ2N1cnJlbnRUZW1wJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgY2FzZSAnaHVtaWRpdHknOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmQuc3BlZWQpO1xuICAgIGNhc2UgJ3ByZWNpcGl0YXRpb24nOlxuICAgICAgcHJlY2lwaXRhdGlvbiA9IHdlYXRoZXJEYXRhLmxpc3RbMF0ucG9wO1xuICAgICAgaWYgKHByZWNpcGl0YXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwYXJzZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VGbG9hdChwcmVjaXBpdGF0aW9uKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRQcmVjaXBpdGF0aW9uID0gcGFyc2VkUHJlY2lwaXRhdGlvbiAqIDEwMDtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZm9ybWF0dGVkUHJlY2lwaXRhdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdDb3VsZCBub3QgcmV0cmlldmUgZm9yZWNhc3RlZCBwcmVjaXBpdGF0aW9uJyk7XG4gICAgY2FzZSAnZGFpbHknOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBwcm9wZXJ0eSBcIiR7cHJvcGVydHl9XCJgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04obG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbiwgbnVsbCwgJ3dlYXRoZXInKTtcbiAgcmV0dXJuIGxvY2F0aW9uRGF0YS5uYW1lO1xufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuaW1wb3J0IHdyaXRlTG9jYXRpb24gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XG5cbmltcG9ydCB7IGV4dHJhY3RXZWF0aGVyRGF0YSB9IGZyb20gJy4uL2FwaS93ZWF0aGVyLWRhdGEnO1xuXG5pbXBvcnQgJy4uL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJEYXRhKCkge1xuICBsZXQgdW5pdDtcblxuICBjb25zdCBsb2NhdGlvbiA9IGdldExvY2F0aW9uRnJvbVVzZXJJbnB1dCgpID8/ICdNaW5uZWFwb2xpcyc7XG4gIHdyaXRlTG9jYXRpb24oKTtcblxuICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICdzdGF0dXMnLFxuICAgICdjdXJyZW50VGVtcCcsXG4gICAgJ2ZlZWxzTGlrZScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAncHJlY2lwaXRhdGlvbicsXG4gICAgJ3dpbmRTcGVlZCcsXG5cdFx0J2RhaWx5JyxcbiAgXTtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+XG4gICAgICAgIGV4dHJhY3RXZWF0aGVyRGF0YShsb2NhdGlvbiwgKHVuaXQgPSAnaW1wZXJpYWwnKSwgcHJvcGVydHkpLFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlci1zdGF0dXMnKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGVtcCcpO1xuICAgIGNvbnN0IGZlZWxzTGlrZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UtdGVtcCcpO1xuICAgIGNvbnN0IGh1bWlkaXR5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktcGVyY2VudGFnZScpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXBpdGF0aW9uLXBlcmNlbnRhZ2UnKTtcbiAgICBjb25zdCB3aW5kU3BlZWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkLXBlcmNlbnRhZ2UnKTtcblxuICAgIGNvbnN0IFtzdGF0dXMsIGN1cnJlbnRUZW1wLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBwcmVjaXBpdGF0aW9uLCB3aW5kU3BlZWQsIGRhaWx5XSA9XG4gICAgICB3ZWF0aGVyRGF0YTtcblxuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgIGN1cnJlbnRUZW1wRWwudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcH3CsGA7XG4gICAgZmVlbHNMaWtlRWwudGV4dENvbnRlbnQgPSBgJHtmZWVsc0xpa2V9wrBgO1xuICAgIGh1bWlkaXR5RWwudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0lYDtcbiAgICBwcmVjaXBpdGF0aW9uRWwudGV4dENvbnRlbnQgPSBgJHtwcmVjaXBpdGF0aW9ufSVgO1xuICAgIHdpbmRTcGVlZEVsLnRleHRDb250ZW50ID1cbiAgICAgIHVuaXQgPT09ICdpbXBlcmlhbCcgPyBgJHt3aW5kU3BlZWR9IE1QSGAgOiBgJHt3aW5kU3BlZWR9IEtNL0hgO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3Igd3JpdGluZyB3ZWF0aGVyIGRhdGEgdG8gdGhlIERPTTogJywgZXJyKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB3cml0ZUxvY2F0aW9uKCkge1xuICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2NhdGlvbi10aXRsZScpO1xuXG4gIGNvbnN0IHsgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0IH0gPSBhd2FpdCBpbXBvcnQoJy4uL3NlYXJjaC1xdWVyeScpO1xuICBjb25zdCB1c2VySW5wdXQgPSBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQoKTtcblxuICBjb25zdCB7IGdldExvY2F0aW9uTmFtZUZyb21KU09OIH0gPSBhd2FpdCBpbXBvcnQoJy4uL2FwaS93ZWF0aGVyLWRhdGEnKTtcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gYXdhaXQgZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04odXNlcklucHV0KTtcbiAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uTmFtZSA/PyAnTWlubmVhcG9saXMnfWA7XG59XG4iLCJpbXBvcnQgcmVuZGVyV2VhdGhlckRhdGEgZnJvbSAnLi4vYXBwL2FwcCc7XG5cbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSAnLi4vYXBpL3dlYXRoZXItZGF0YSc7XG5cbmltcG9ydCAnLi9tZW51LmNzcyc7XG5cbmNvbnN0IGJhY2tncm91bmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1zZWxlY3RvcicpO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xuY29uc3Qgc2VhcmNoU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbmNvbnN0IHRvZ2dsZVNlYXJjaEJhclZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIHNlYXJjaEJhci5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICBzZWFyY2hCYXIuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gIHNlYXJjaFN1Ym1pdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICBzZWFyY2hTdWJtaXRCdG4uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG59O1xuXG5zZWFyY2hCdG4ub25jbGljayA9ICgpID0+IHtcbiAgdG9nZ2xlU2VhcmNoQmFyVmlzaWJpbGl0eSgpO1xuICBzZWFyY2hCYXIuc2VsZWN0KCk7XG59O1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmVycm9yJyk7XG5cbmNvbnN0IGZvcm1TdWJtaXNzaW9uSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KHNlYXJjaEJhci52YWx1ZSk7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgc2VhcmNoQmFyLmNsYXNzTmFtZSA9ICdpbnZhbGlkJztcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAnUGxlYXNlIGVudGVyIGEgdmFsaWQgc2VhcmNoIGZvcm1hdC4gKGkuZS4gXCJjaXR5XCIsIFwiY2l0eSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIsIG9yIFwiemlwY29kZSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIpJztcbiAgICBzZWFyY2hFcnJvci5jbGFzc05hbWUgPSAnZXJyb3IgYWN0aXZlJztcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hCYXIuY2xhc3NOYW1lID0gJ3ZhbGlkJztcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHNlYXJjaEVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gIH1cbiAgY29uc3Qgd2VhdGhlckRhdGFPckVycm9yID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShzZWFyY2hCYXIudmFsdWUpO1xuICBpZiAod2VhdGhlckRhdGFPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBpZiAod2VhdGhlckRhdGFPckVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpKSB7XG4gICAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAgICdMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uLiAoSGludDogQ2hlY2sgZm9yIHNwZWxsaW5nIGVycm9ycy4pJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoRXJyb3IudGV4dENvbnRlbnQgPVxuICAgICAgICAnUGxlYXNlIHJlY2hlY2sgdGhlIHNlYXJjaCBmb3JtYXQgYW5kIHRyeSBhZ2Fpbi4gKGkuZS4gXCJjaXR5XCIsIFwiY2l0eSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIsIG9yIFwiemlwY29kZSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIpJztcbiAgICB9XG4gICAgc2VhcmNoQmFyLmNsYXNzTmFtZSA9ICdpbnZhbGlkJztcbiAgICBzZWFyY2hFcnJvci5jbGFzc05hbWUgPSAnZXJyb3IgYWN0aXZlJztcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGVTZWFyY2hCYXJWaXNpYmlsaXR5KCk7XG4gICAgYXdhaXQgcmVuZGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGFPckVycm9yKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cbn07XG5cbmZvcm0ub25zdWJtaXQgPSBmb3JtU3VibWlzc2lvbkhhbmRsZXI7XG5cbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hTdWJtaXRCdG4uY2xpY2soKTtcbiAgfVxufSk7XG5cbmNvbnN0IGdldFdlYnBGaWxlTmFtZUZyb21CYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyQmFja2dyb3VuZEltZyA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGNvbnRlbnRDb250YWluZXIpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgY29uc3Qgd2VicEZpbGVOYW1lID1cbiAgICBjb250ZW50Q29udGFpbmVyQmFja2dyb3VuZEltZy5tYXRjaCgvXFxiKFxcdyspXFwud2VicFxcYi8pWzFdO1xuICByZXR1cm4gd2VicEZpbGVOYW1lO1xufTtcblxuY29uc3QgdG9nZ2xlTWVudUJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgY29uc3QgW21lbnUsIHdhdmUsIG1lbnVEaXZpZGVyXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJyNtZW51LWNvbnRhaW5lciwgI3dhdmUsICNtZW51LWRpdmlkZXInXG4gICk7XG4gIFttZW51LCB3YXZlLCBtZW51RGl2aWRlcl0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc05hbWUgPSBnZXRXZWJwRmlsZU5hbWVGcm9tQmFja2dyb3VuZCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGxldCBwbmdGaWxlTmFtZSA9IGdldFdlYnBGaWxlTmFtZUZyb21CYWNrZ3JvdW5kKCk7XG4gIGNvbnN0IGZpbGVOYW1lID0gcG5nRmlsZU5hbWUgPT09ICdyaXZlcicgPyAnY2l0eScgOiAncml2ZXInO1xuICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kcy8ke2ZpbGVOYW1lfS53ZWJwKWA7XG4gIHBuZ0ZpbGVOYW1lID0gZmlsZU5hbWU7XG59O1xuXG5iYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNoYW5nZUJhY2tncm91bmQoKTtcbiAgdG9nZ2xlTWVudUJhY2tncm91bmRDb2xvcigpO1xufTtcblxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1pY29uJyk7XG5cbmhhbWJ1cmdlci5vbmNsaWNrID0gKCkgPT4ge1xuICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdub3QtYWN0aXZlJyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG59O1xuIiwiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=