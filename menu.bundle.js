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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue-light-bg: #1a96b9;\n  --blue-dark-bg: #13738d;\n  --red-light-bg: #c25050;\n  --red-dark-bg: #9c3e3e;\n}\n\n/* General Styles */\n#menu-container {\n  position: absolute;\n\n  height: 100vh;\n  width: 100%;\n  /* padding: 60px 30px; */\n\t/* margin: 120px 0 0 30px; */\n\n\tgap: 3em;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.menu-item.search,\nform {\n\tmargin: 120px 0 0 30px;\n}\n\n.menu-item.background-selector {\n\tmargin: 40px 0 0 30px;\n}\n\n.menu-item {\n  width: fit-content;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  transform: translateX(5%) scale(1.1);\n}\n\n/* Content Slide Animation */\n#content {\n  transition: transform 0.3s ease-in-out;\n}\n\n#content.menu-open {\n  border-radius: 25px;\n  transform: translateX(50%) scale(0.9);\n}\n\n/* Wave General Styles and Variations */\n#wave {\n  position: absolute;\n  bottom: 49%;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n#wave svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 150px;\n}\n\n#menu-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 50%;\n  width: 100%;\n}\n\n#wave.river .shape-fill {\n  fill: var(--blue-dark-bg);\n}\n\n#menu-divider.river {\n  background: var(--blue-dark-bg);\n}\n\n#menu-divider.city {\n  background: var(--red-dark-bg);\n}\n\n#wave.city .shape-fill {\n  fill: var(--red-dark-bg);\n}\n\n/* Menu Color Variations */\n#menu-container.river {\n  background: var(--blue-light-bg);\n}\n\n#menu-container.city {\n  background: var(--red-light-bg);\n}\n\n/* Form Styles */\nform {\n  position: absolute;\n  width: 25ch;\n}\n\ninput {\n  position: absolute;\n  visibility: hidden;\n  color: black;\n\n  border: none;\n  border-radius: 5px;\n  height: 1.5rem;\n  width: 25ch;\n  padding: 5px 10px;\n}\n\ninput:focus {\n  outline: thin dotted;\n}\n\ninput.invalid {\n  border: 1px solid #900;\n  background-color: #fdd;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  position: absolute;\n  bottom: 0;\n\n  font-size: 70%;\n  background-color: #900;\n  border-radius: 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nbutton {\n  width: 24px;\n  height: 24px;\n  visibility: hidden;\n  position: absolute;\n  top: 5px;\n  right: 25px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n/* Hamburger Menu Icon */\n\n#hamburger-icon {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  height: 30px;\n  width: 30px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n#hamburger-icon div {\n  height: 3px;\n  width: 30px;\n  background: white;\n  border-radius: 25px;\n  transition: transform 0.3s ease-in-out;\n}\n\n/* Hamburger Icon Animation */\n\n#hamburger-icon.active div:nth-child(1) {\n  transform: translate(0, 10px) rotate(45deg);\n}\n\n#hamburger-icon.active div:nth-child(2) {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n}\n\n#hamburger-icon.active div:nth-child(3) {\n  transform: translate(0, -10px) rotate(-45deg);\n}\n\n#hamburger-icon.not-active div:nth-child(1) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.not-active div:nth-child(2) {\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n}\n\n#hamburger-icon.not-active div:nth-child(3) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.active,\n#hamburger-icon.not-active {\n  animation-duration: 0.3s;\n  animation-timing-function: ease-in-out;\n}\n\n/* For desktop */\n\n/* Small Viewport */\n@media screen and (min-width: 768px) {\n  #content.menu-open {\n    transform: translateX(20%) scale(0.9);\n  }\n}\n\n/* Widescreen */\n@media screen and (min-width: 1440px) {\n  #content.menu-open {\n    transform: translateX(8%) scale(0.9);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/menu/menu.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;;EAElB,aAAa;EACb,WAAW;EACX,wBAAwB;CACzB,4BAA4B;;CAE5B,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;;CAEC,sBAAsB;AACvB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,4BAA4B;AAC5B;EACE,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;AACvC;;AAEA,uCAAuC;AACvC;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,WAAW;EACX,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,0BAA0B;AAC1B;EACE,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;AACjC;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;;EAEZ,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,UAAU;;EAEV,kBAAkB;EAClB,SAAS;;EAET,cAAc;EACd,sBAAsB;EACtB,kBAAkB;;EAElB,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,eAAe;AACjB;;AAEA,wBAAwB;;AAExB;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,YAAY;EACZ,WAAW;EACX,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA,6BAA6B;;AAE7B;EACE,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,gEAAgE;AAClE;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,gEAAgE;AAClE;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA,gBAAgB;;AAEhB,mBAAmB;AACnB;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA,eAAe;AACf;EACE;IACE,oCAAoC;EACtC;AACF","sourcesContent":[":root {\n  --blue-light-bg: #1a96b9;\n  --blue-dark-bg: #13738d;\n  --red-light-bg: #c25050;\n  --red-dark-bg: #9c3e3e;\n}\n\n/* General Styles */\n#menu-container {\n  position: absolute;\n\n  height: 100vh;\n  width: 100%;\n  /* padding: 60px 30px; */\n\t/* margin: 120px 0 0 30px; */\n\n\tgap: 3em;\n}\n\n#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.menu-item.search,\nform {\n\tmargin: 120px 0 0 30px;\n}\n\n.menu-item.background-selector {\n\tmargin: 40px 0 0 30px;\n}\n\n.menu-item {\n  width: fit-content;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n}\n\n.menu-item:hover {\n  transform: translateX(5%) scale(1.1);\n}\n\n/* Content Slide Animation */\n#content {\n  transition: transform 0.3s ease-in-out;\n}\n\n#content.menu-open {\n  border-radius: 25px;\n  transform: translateX(50%) scale(0.9);\n}\n\n/* Wave General Styles and Variations */\n#wave {\n  position: absolute;\n  bottom: 49%;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n}\n\n#wave svg {\n  position: relative;\n  display: block;\n  width: calc(100% + 1.3px);\n  height: 150px;\n}\n\n#menu-divider {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 50%;\n  width: 100%;\n}\n\n#wave.river .shape-fill {\n  fill: var(--blue-dark-bg);\n}\n\n#menu-divider.river {\n  background: var(--blue-dark-bg);\n}\n\n#menu-divider.city {\n  background: var(--red-dark-bg);\n}\n\n#wave.city .shape-fill {\n  fill: var(--red-dark-bg);\n}\n\n/* Menu Color Variations */\n#menu-container.river {\n  background: var(--blue-light-bg);\n}\n\n#menu-container.city {\n  background: var(--red-light-bg);\n}\n\n/* Form Styles */\nform {\n  position: absolute;\n  width: 25ch;\n}\n\ninput {\n  position: absolute;\n  visibility: hidden;\n  color: black;\n\n  border: none;\n  border-radius: 5px;\n  height: 1.5rem;\n  width: 25ch;\n  padding: 5px 10px;\n}\n\ninput:focus {\n  outline: thin dotted;\n}\n\ninput.invalid {\n  border: 1px solid #900;\n  background-color: #fdd;\n}\n\n.error {\n  width: 100%;\n  padding: 0;\n\n  position: absolute;\n  bottom: 0;\n\n  font-size: 70%;\n  background-color: #900;\n  border-radius: 5px;\n\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\nbutton {\n  width: 24px;\n  height: 24px;\n  visibility: hidden;\n  position: absolute;\n  top: 5px;\n  right: 25px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n/* Hamburger Menu Icon */\n\n#hamburger-icon {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  height: 30px;\n  width: 30px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n#hamburger-icon div {\n  height: 3px;\n  width: 30px;\n  background: white;\n  border-radius: 25px;\n  transition: transform 0.3s ease-in-out;\n}\n\n/* Hamburger Icon Animation */\n\n#hamburger-icon.active div:nth-child(1) {\n  transform: translate(0, 10px) rotate(45deg);\n}\n\n#hamburger-icon.active div:nth-child(2) {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n}\n\n#hamburger-icon.active div:nth-child(3) {\n  transform: translate(0, -10px) rotate(-45deg);\n}\n\n#hamburger-icon.not-active div:nth-child(1) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.not-active div:nth-child(2) {\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;\n}\n\n#hamburger-icon.not-active div:nth-child(3) {\n  transform: translate(0, 0) rotate(0);\n}\n\n#hamburger-icon.active,\n#hamburger-icon.not-active {\n  animation-duration: 0.3s;\n  animation-timing-function: ease-in-out;\n}\n\n/* For desktop */\n\n/* Small Viewport */\n@media screen and (min-width: 768px) {\n  #content.menu-open {\n    transform: translateX(20%) scale(0.9);\n  }\n}\n\n/* Widescreen */\n@media screen and (min-width: 1440px) {\n  #content.menu-open {\n    transform: translateX(8%) scale(0.9);\n  }\n}\n"],"sourceRoot":""}]);
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
    (0,_app_app__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherDataOrError);
		// Timeout necessary to allow API data to render before form resets
    setTimeout(() => {
      form.reset();
    }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHNCQUFzQixvQkFBb0IsNEJBQTRCLHdCQUF3Qix5QkFBeUIsR0FBRyxTQUFTLG1HQUFtRyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsa0NBQWtDLHNCQUFzQixvQkFBb0IsNEJBQTRCLHdCQUF3Qix5QkFBeUIsR0FBRyxxQkFBcUI7QUFDeGdCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCw2QkFBNkIsNEJBQTRCLDRCQUE0QiwyQkFBMkIsR0FBRywyQ0FBMkMsdUJBQXVCLG9CQUFvQixnQkFBZ0IsMkJBQTJCLGlDQUFpQyxpQkFBaUIsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsb0NBQW9DLDBCQUEwQixHQUFHLGdCQUFnQix1QkFBdUIsb0JBQW9CLDJDQUEyQyxHQUFHLHNCQUFzQix5Q0FBeUMsR0FBRyw2Q0FBNkMsMkNBQTJDLEdBQUcsd0JBQXdCLHdCQUF3QiwwQ0FBMEMsR0FBRyxxREFBcUQsdUJBQXVCLGdCQUFnQixZQUFZLGdCQUFnQixxQkFBcUIsbUJBQW1CLEdBQUcsZUFBZSx1QkFBdUIsbUJBQW1CLDhCQUE4QixrQkFBa0IsR0FBRyxtQkFBbUIsdUJBQXVCLGNBQWMsWUFBWSxnQkFBZ0IsZ0JBQWdCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLHlCQUF5QixvQ0FBb0MsR0FBRyx3QkFBd0IsbUNBQW1DLEdBQUcsNEJBQTRCLDZCQUE2QixHQUFHLHdEQUF3RCxxQ0FBcUMsR0FBRywwQkFBMEIsb0NBQW9DLEdBQUcsNkJBQTZCLHVCQUF1QixnQkFBZ0IsR0FBRyxXQUFXLHVCQUF1Qix1QkFBdUIsaUJBQWlCLG1CQUFtQix1QkFBdUIsbUJBQW1CLGdCQUFnQixzQkFBc0IsR0FBRyxpQkFBaUIseUJBQXlCLEdBQUcsbUJBQW1CLDJCQUEyQiwyQkFBMkIsR0FBRyxZQUFZLGdCQUFnQixlQUFlLHlCQUF5QixjQUFjLHFCQUFxQiwyQkFBMkIsdUJBQXVCLDZCQUE2QixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsdUJBQXVCLHVCQUF1QixhQUFhLGdCQUFnQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixHQUFHLGtEQUFrRCxvQkFBb0IsY0FBYyxlQUFlLGlCQUFpQixnQkFBZ0IsZUFBZSxrQkFBa0IsMkJBQTJCLGtDQUFrQyxvQkFBb0IsR0FBRyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixzQkFBc0Isd0JBQXdCLDJDQUEyQyxHQUFHLCtFQUErRSxnREFBZ0QsR0FBRyw2Q0FBNkMsZUFBZSxxRUFBcUUsR0FBRyw2Q0FBNkMsa0RBQWtELEdBQUcsaURBQWlELHlDQUF5QyxHQUFHLGlEQUFpRCxlQUFlLHFFQUFxRSxHQUFHLGlEQUFpRCx5Q0FBeUMsR0FBRyx5REFBeUQsNkJBQTZCLDJDQUEyQyxHQUFHLHFGQUFxRix3QkFBd0IsNENBQTRDLEtBQUssR0FBRyw2REFBNkQsd0JBQXdCLDJDQUEyQyxLQUFLLEdBQUcsU0FBUywrRkFBK0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLEdBQUcsMkNBQTJDLHVCQUF1QixvQkFBb0IsZ0JBQWdCLDJCQUEyQixpQ0FBaUMsaUJBQWlCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLEdBQUcsOEJBQThCLDJCQUEyQixHQUFHLG9DQUFvQywwQkFBMEIsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsR0FBRyxzQkFBc0IseUNBQXlDLEdBQUcsNkNBQTZDLDJDQUEyQyxHQUFHLHdCQUF3Qix3QkFBd0IsMENBQTBDLEdBQUcscURBQXFELHVCQUF1QixnQkFBZ0IsWUFBWSxnQkFBZ0IscUJBQXFCLG1CQUFtQixHQUFHLGVBQWUsdUJBQXVCLG1CQUFtQiw4QkFBOEIsa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixjQUFjLFlBQVksZ0JBQWdCLGdCQUFnQixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyx5QkFBeUIsb0NBQW9DLEdBQUcsd0JBQXdCLG1DQUFtQyxHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyx3REFBd0QscUNBQXFDLEdBQUcsMEJBQTBCLG9DQUFvQyxHQUFHLDZCQUE2Qix1QkFBdUIsZ0JBQWdCLEdBQUcsV0FBVyx1QkFBdUIsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsaUJBQWlCLHlCQUF5QixHQUFHLG1CQUFtQiwyQkFBMkIsMkJBQTJCLEdBQUcsWUFBWSxnQkFBZ0IsZUFBZSx5QkFBeUIsY0FBYyxxQkFBcUIsMkJBQTJCLHVCQUF1Qiw2QkFBNkIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsYUFBYSxnQkFBZ0IsNEJBQTRCLGlCQUFpQixvQkFBb0IsR0FBRyxrREFBa0Qsb0JBQW9CLGNBQWMsZUFBZSxpQkFBaUIsZ0JBQWdCLGVBQWUsa0JBQWtCLDJCQUEyQixrQ0FBa0Msb0JBQW9CLEdBQUcseUJBQXlCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLHdCQUF3QiwyQ0FBMkMsR0FBRywrRUFBK0UsZ0RBQWdELEdBQUcsNkNBQTZDLGVBQWUscUVBQXFFLEdBQUcsNkNBQTZDLGtEQUFrRCxHQUFHLGlEQUFpRCx5Q0FBeUMsR0FBRyxpREFBaUQsZUFBZSxxRUFBcUUsR0FBRyxpREFBaUQseUNBQXlDLEdBQUcseURBQXlELDZCQUE2QiwyQ0FBMkMsR0FBRyxxRkFBcUYsd0JBQXdCLDRDQUE0QyxLQUFLLEdBQUcsNkRBQTZELHdCQUF3QiwyQ0FBMkMsS0FBSyxHQUFHLHFCQUFxQjtBQUNoaFQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLG9KQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzRUFBc0Usb0JBQW9CLGtCQUFrQixpSEFBaUgsa0JBQWtCLEdBQUcsdUNBQXVDLHNFQUFzRSwrQkFBK0IsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsaUJBQWlCLGtCQUFrQixpSEFBaUgsR0FBRyxxQkFBcUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMsR0FBRyxrQkFBa0Isb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0Isa0JBQWtCLGlCQUFpQix5Q0FBeUMsdUJBQXVCLDZEQUE2RCwwREFBMEQscURBQXFELEdBQUcsZUFBZSwwQ0FBMEMsb0NBQW9DLHVCQUF1QixtRUFBbUUsZ0VBQWdFLDJEQUEyRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyx3QkFBd0IscUJBQXFCLGtCQUFrQixtQ0FBbUMsMEJBQTBCLEdBQUcsMEVBQTBFLGdCQUFnQix1QkFBdUIsR0FBRyw0REFBNEQsc0JBQXNCLEdBQUcsU0FBUyxvSEFBb0gsTUFBTSxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVEsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLHNEQUFzRCxvQkFBb0Isa0JBQWtCLGlIQUFpSCxrQkFBa0IsR0FBRyx1Q0FBdUMsMERBQTBELCtCQUErQix1QkFBdUIsV0FBVyxZQUFZLGtCQUFrQixpQkFBaUIsa0JBQWtCLGlIQUFpSCxHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxHQUFHLGtCQUFrQixvQkFBb0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQixrQkFBa0IsaUJBQWlCLHlDQUF5Qyx1QkFBdUIsNkRBQTZELDBEQUEwRCxxREFBcUQsR0FBRyxlQUFlLDBDQUEwQyxvQ0FBb0MsdUJBQXVCLG1FQUFtRSxnRUFBZ0UsMkRBQTJELGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixzQkFBc0IsR0FBRyxxQkFBcUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLHdCQUF3QixxQkFBcUIsa0JBQWtCLG1DQUFtQywwQkFBMEIsR0FBRywwRUFBMEUsZ0JBQWdCLHVCQUF1QixHQUFHLDREQUE0RCxzQkFBc0IsR0FBRyxxQkFBcUI7QUFDLzJKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUFtSDtBQUNuSDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGdHQUFPOzs7O0FBSTZEO0FBQ3JGLE9BQU8saUVBQWUsZ0dBQU8sSUFBSSx1R0FBYyxHQUFHLHVHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0Q7O0FBRXREOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsU0FBUyxLQUFLLFNBQVMsVUFBVSxLQUFLLFNBQVMsY0FBYztBQUNoSSw2QkFBNkIsa0VBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0JBQWdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDRCQUE0QixVQUFVLG1CQUFtQixTQUFTO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx3QkFBd0IsVUFBVSxvQkFBb0IsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZ5RDs7QUFFWjs7QUFFYzs7QUFFbkI7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxxRUFBa0I7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQyxpQ0FBaUMsVUFBVTtBQUMzQyxnQ0FBZ0MsU0FBUztBQUN6QyxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBLCtCQUErQixXQUFXLFVBQVUsV0FBVztBQUMvRCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2YsbUJBQW1CLHVFQUF3Qjs7QUFFM0MsRUFBRSwwREFBYTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEc0I7O0FBRVA7QUFDZjs7QUFFQSxVQUFVLDJCQUEyQixRQUFRLHNMQUF5QjtBQUN0RTs7QUFFQSxVQUFVLDBCQUEwQixRQUFRLGtNQUE2QjtBQUN6RTtBQUNBLGlDQUFpQyw4QkFBOEI7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7O0FBRVc7O0FBRUM7O0FBRW5DOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsa0VBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUVBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJLG9EQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsU0FBUztBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7O0FBRU87O0FBRUE7QUFDUDtBQUNBLHFDQUFxQyxFQUFFLG1CQUFtQixFQUFFO0FBQzVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY3NzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXIvbWFpbi13ZWF0aGVyLXVpLmNzcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/ZjdmYSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuY3NzPzVjMjQiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci9tYWluLXdlYXRoZXItdWkuY3NzPzU4YjIiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NyYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9hcGkvd2VhdGhlci1kYXRhLmpzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRmb250LXNpemU6IDEuNzVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCOztDQUVsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsa0JBQWtCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG5cXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWUtbGlnaHQtYmc6ICMxYTk2Yjk7XFxuICAtLWJsdWUtZGFyay1iZzogIzEzNzM4ZDtcXG4gIC0tcmVkLWxpZ2h0LWJnOiAjYzI1MDUwO1xcbiAgLS1yZWQtZGFyay1iZzogIzljM2UzZTtcXG59XFxuXFxuLyogR2VuZXJhbCBTdHlsZXMgKi9cXG4jbWVudS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogcGFkZGluZzogNjBweCAzMHB4OyAqL1xcblxcdC8qIG1hcmdpbjogMTIwcHggMCAwIDMwcHg7ICovXFxuXFxuXFx0Z2FwOiAzZW07XFxufVxcblxcbiNtZW51IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tZW51LWl0ZW0uc2VhcmNoLFxcbmZvcm0ge1xcblxcdG1hcmdpbjogMTIwcHggMCAwIDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0uYmFja2dyb3VuZC1zZWxlY3RvciB7XFxuXFx0bWFyZ2luOiA0MHB4IDAgMCAzMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1JSkgc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogQ29udGVudCBTbGlkZSBBbmltYXRpb24gKi9cXG4jY29udGVudCB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2NvbnRlbnQubWVudS1vcGVuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKSBzY2FsZSgwLjkpO1xcbn1cXG5cXG4vKiBXYXZlIEdlbmVyYWwgU3R5bGVzIGFuZCBWYXJpYXRpb25zICovXFxuI3dhdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA0OSU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxufVxcblxcbiN3YXZlIHN2ZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxLjNweCk7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4jbWVudS1kaXZpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jd2F2ZS5yaXZlciAuc2hhcGUtZmlsbCB7XFxuICBmaWxsOiB2YXIoLS1ibHVlLWRhcmstYmcpO1xcbn1cXG5cXG4jbWVudS1kaXZpZGVyLnJpdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyay1iZyk7XFxufVxcblxcbiNtZW51LWRpdmlkZXIuY2l0eSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtZGFyay1iZyk7XFxufVxcblxcbiN3YXZlLmNpdHkgLnNoYXBlLWZpbGwge1xcbiAgZmlsbDogdmFyKC0tcmVkLWRhcmstYmcpO1xcbn1cXG5cXG4vKiBNZW51IENvbG9yIFZhcmlhdGlvbnMgKi9cXG4jbWVudS1jb250YWluZXIucml2ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1saWdodC1iZyk7XFxufVxcblxcbiNtZW51LWNvbnRhaW5lci5jaXR5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1saWdodC1iZyk7XFxufVxcblxcbi8qIEZvcm0gU3R5bGVzICovXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjVjaDtcXG59XFxuXFxuaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgY29sb3I6IGJsYWNrO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMjVjaDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcXG59XFxuXFxuaW5wdXQuaW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG5cXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogSGFtYnVyZ2VyIE1lbnUgSWNvbiAqL1xcblxcbiNoYW1idXJnZXItaWNvbiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDMwcHg7XFxuICBsZWZ0OiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICB6LWluZGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uIGRpdiB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIEhhbWJ1cmdlciBJY29uIEFuaW1hdGlvbiAqL1xcblxcbiNoYW1idXJnZXItaWNvbi5hY3RpdmUgZGl2Om50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24uYWN0aXZlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5hY3RpdmUgZGl2Om50aC1jaGlsZCgzKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5ub3QtYWN0aXZlIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDApO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSxcXG4jaGFtYnVyZ2VyLWljb24ubm90LWFjdGl2ZSB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogRm9yIGRlc2t0b3AgKi9cXG5cXG4vKiBTbWFsbCBWaWV3cG9ydCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKSBzY2FsZSgwLjkpO1xcbiAgfVxcbn1cXG5cXG4vKiBXaWRlc2NyZWVuICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XFxuICAjY29udGVudC5tZW51LW9wZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOCUpIHNjYWxlKDAuOSk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsV0FBVztFQUNYLHdCQUF3QjtDQUN6Qiw0QkFBNEI7O0NBRTVCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZOztFQUVaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7O0VBRVYsa0JBQWtCO0VBQ2xCLFNBQVM7O0VBRVQsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7O0VBRWxCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsd0JBQXdCOztBQUV4QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOztBQUVBLDZCQUE2Qjs7QUFFN0I7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsc0NBQXNDO0FBQ3hDOztBQUVBLGdCQUFnQjs7QUFFaEIsbUJBQW1CO0FBQ25CO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLG9DQUFvQztFQUN0QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmx1ZS1saWdodC1iZzogIzFhOTZiOTtcXG4gIC0tYmx1ZS1kYXJrLWJnOiAjMTM3MzhkO1xcbiAgLS1yZWQtbGlnaHQtYmc6ICNjMjUwNTA7XFxuICAtLXJlZC1kYXJrLWJnOiAjOWMzZTNlO1xcbn1cXG5cXG4vKiBHZW5lcmFsIFN0eWxlcyAqL1xcbiNtZW51LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBwYWRkaW5nOiA2MHB4IDMwcHg7ICovXFxuXFx0LyogbWFyZ2luOiAxMjBweCAwIDAgMzBweDsgKi9cXG5cXG5cXHRnYXA6IDNlbTtcXG59XFxuXFxuI21lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1lbnUtaXRlbS5zZWFyY2gsXFxuZm9ybSB7XFxuXFx0bWFyZ2luOiAxMjBweCAwIDAgMzBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS5iYWNrZ3JvdW5kLXNlbGVjdG9yIHtcXG5cXHRtYXJnaW46IDQwcHggMCAwIDMwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUlKSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBDb250ZW50IFNsaWRlIEFuaW1hdGlvbiAqL1xcbiNjb250ZW50IHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jY29udGVudC5tZW51LW9wZW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHNjYWxlKDAuOSk7XFxufVxcblxcbi8qIFdhdmUgR2VuZXJhbCBTdHlsZXMgYW5kIFZhcmlhdGlvbnMgKi9cXG4jd2F2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDQ5JTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuI3dhdmUgc3ZnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDEuM3B4KTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbiNtZW51LWRpdmlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN3YXZlLnJpdmVyIC5zaGFwZS1maWxsIHtcXG4gIGZpbGw6IHZhcigtLWJsdWUtZGFyay1iZyk7XFxufVxcblxcbiNtZW51LWRpdmlkZXIucml2ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1kYXJrLWJnKTtcXG59XFxuXFxuI21lbnUtZGl2aWRlci5jaXR5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1kYXJrLWJnKTtcXG59XFxuXFxuI3dhdmUuY2l0eSAuc2hhcGUtZmlsbCB7XFxuICBmaWxsOiB2YXIoLS1yZWQtZGFyay1iZyk7XFxufVxcblxcbi8qIE1lbnUgQ29sb3IgVmFyaWF0aW9ucyAqL1xcbiNtZW51LWNvbnRhaW5lci5yaXZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWxpZ2h0LWJnKTtcXG59XFxuXFxuI21lbnUtY29udGFpbmVyLmNpdHkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWxpZ2h0LWJnKTtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNWNoO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjb2xvcjogYmxhY2s7XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNWNoO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IHRoaW4gZG90dGVkO1xcbn1cXG5cXG5pbnB1dC5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcblxcbiAgZm9udC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmVycm9yLmFjdGl2ZSB7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBIYW1idXJnZXIgTWVudSBJY29uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzBweDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24gZGl2IHtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogSGFtYnVyZ2VyIEljb24gQW5pbWF0aW9uICovXFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5hY3RpdmUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLmFjdGl2ZSBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuI2hhbWJ1cmdlci1pY29uLm5vdC1hY3RpdmUgZGl2Om50aC1jaGlsZCgxKSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCk7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5ub3QtYWN0aXZlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNoYW1idXJnZXItaWNvbi5ub3QtYWN0aXZlIGRpdjpudGgtY2hpbGQoMykge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDApO1xcbn1cXG5cXG4jaGFtYnVyZ2VyLWljb24uYWN0aXZlLFxcbiNoYW1idXJnZXItaWNvbi5ub3QtYWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4vKiBGb3IgZGVza3RvcCAqL1xcblxcbi8qIFNtYWxsIFZpZXdwb3J0ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICNjb250ZW50Lm1lbnUtb3BlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpIHNjYWxlKDAuOSk7XFxuICB9XFxufVxcblxcbi8qIFdpZGVzY3JlZW4gKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcXG4gICNjb250ZW50Lm1lbnUtb3BlbiB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4JSkgc2NhbGUoMC45KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2JhY2tncm91bmRzL3JpdmVyLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIENvbnRhaW5lciAqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4vKiBDb250ZW50IENvbnRhaW5lciAqL1xcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnY2FyZHMgY2FyZHMgY2FyZHMnXFxuICAgIC8gMWZyIDJmciAxZnI7XFxufVxcblxcbiN0b3AtbGV2ZWwtZGF0YSB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjZW50ZXItZGF0YSB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLTEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG5cXG4jY2lyY2xlLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGhlaWdodDogY2xhbXAoNzAlLCAzMDBweCwgMTAwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NpcmNsZS1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogODBweDtcXG59XFxuXFxuI3dlYXRoZXItc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2JvdHRvbS1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogY2FyZHM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jZmVlbHMtbGlrZS1pY29uLFxcbiNodW1pZGl0eS1pY29uLFxcbiNwcmVjaXBpdGF0aW9uLWljb24sXFxuI3dpbmQtaWNvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuI2ZlZWxzLWxpa2UsXFxuI2h1bWlkaXR5LFxcbiNwcmVjaXBpdGF0aW9uLFxcbiN3aW5kLXNwZWVkIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyL21haW4td2VhdGhlci11aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1CO0FBQ25CO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYjs7OztpQkFJZTtFQUNmLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSx5REFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiOzs7O2lCQUllO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHdEQUF3RDtFQUN4RCxxREFBcUQ7RUFDckQsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDJEQUEyRDtFQUMzRCxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBDb250YWluZXIgKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2NhcmRzIGNhcmRzIGNhcmRzJ1xcbiAgICAvIDFmciAyZnIgMWZyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogQ29udGVudCBDb250YWluZXIgKi9cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kcy9yaXZlci53ZWJwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWFpbiBtYWluIG1haW4nXFxuICAgICdjYXJkcyBjYXJkcyBjYXJkcydcXG4gICAgLyAxZnIgMmZyIDFmcjtcXG59XFxuXFxuI3RvcC1sZXZlbC1kYXRhIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NlbnRlci1kYXRhIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaXJjbGUtMSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcblxcbiNjaXJjbGUtMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgaGVpZ2h0OiBjbGFtcCg3MCUsIDMwMHB4LCAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2lyY2xlLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiNjdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4jYm90dG9tLWxldmVsLWRhdGEge1xcbiAgZ3JpZC1hcmVhOiBjYXJkcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNmZWVscy1saWtlLWljb24sXFxuI2h1bWlkaXR5LWljb24sXFxuI3ByZWNpcGl0YXRpb24taWNvbixcXG4jd2luZC1pY29uIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4jZmVlbHMtbGlrZSxcXG4jaHVtaWRpdHksXFxuI3ByZWNpcGl0YXRpb24sXFxuI3dpbmQtc3BlZWQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLXdlYXRoZXItdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLXdlYXRoZXItdWkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuY29uc3Qgd2VhdGhlckFQSWtleSA9ICczNTM1YzhkMzEyMzNkOThiN2Y4MGMyNmI1Yjc2ZTNhNic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKFxuICBsb2NhdGlvbixcbiAgdW5pdCA9ICdpbXBlcmlhbCcsXG4gIGVuZHBvaW50ID0gJ3dlYXRoZXInXG4pIHtcbiAgY29uc3Qgd2VhdGhlckFQSXVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJHtlbmRwb2ludH0/cT0ke2xvY2F0aW9ufSYmdW5pdHM9JHt1bml0fSZBUFBJRD0ke3dlYXRoZXJBUElrZXl9YDtcbiAgY29uc3Qgc2VhcmNoUXVlcnlJc1ZhbGlkID0gdmFsaWRhdGVTZWFyY2hRdWVyeShsb2NhdGlvbik7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBzZWFyY2ggcXVlcnknKTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2VhdGhlckFQSXVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQVBJIGNhbGwgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgRXJyb3IgZmV0Y2hpbmcgdGhlICR7ZW5kcG9pbnR9IEFQSSBmb3IgbG9jYXRpb24gJHtsb2NhdGlvbn06IGAsXG4gICAgICBlcnJcbiAgICApO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dHJhY3RXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdCwgcHJvcGVydHkpIHtcbiAgbGV0IHdlYXRoZXJEYXRhO1xuICBsZXQgZW5kcG9pbnQ7XG4gIGxldCBwcmVjaXBpdGF0aW9uO1xuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICBjYXNlICdjdXJyZW50VGVtcCc6XG4gICAgY2FzZSAnZmVlbHNMaWtlJzpcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgY2FzZSAnd2luZFNwZWVkJzpcbiAgICAgIGVuZHBvaW50ID0gJ3dlYXRoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBlbmRwb2ludCA9ICdmb3JlY2FzdCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbiAgdHJ5IHtcbiAgICB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQsIGVuZHBvaW50KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBFcnJvciBmZXRjaGluZyAke2VuZHBvaW50fSBBUEkgZm9yIGxvY2F0aW9uIFwiJHtsb2NhdGlvbn1cIjogYCxcbiAgICAgIGVyclxuICAgICk7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgIHJldHVybiB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgY2FzZSAnY3VycmVudFRlbXAnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4udGVtcDtcbiAgICBjYXNlICdmZWVsc0xpa2UnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgICBjYXNlICdodW1pZGl0eSc6XG4gICAgICByZXR1cm4gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBjYXNlICd3aW5kU3BlZWQnOlxuICAgICAgcmV0dXJuIHdlYXRoZXJEYXRhLndpbmQuc3BlZWQ7XG4gICAgY2FzZSAncHJlY2lwaXRhdGlvbic6XG4gICAgICBwcmVjaXBpdGF0aW9uID0gd2VhdGhlckRhdGEubGlzdFswXS5wb3A7XG4gICAgICBpZiAocHJlY2lwaXRhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFByZWNpcGl0YXRpb24gPSBwYXJzZUZsb2F0KHByZWNpcGl0YXRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFByZWNpcGl0YXRpb24gPSBwYXJzZWRQcmVjaXBpdGF0aW9uICogMTAwO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkUHJlY2lwaXRhdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0NvdWxkIG5vdCByZXRyaWV2ZSBmb3JlY2FzdGVkIHByZWNpcGl0YXRpb24nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgcHJvcGVydHkgXCIke3Byb3BlcnR5fVwiYCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uTmFtZUZyb21KU09OKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIG51bGwsICd3ZWF0aGVyJyk7XG4gIHJldHVybiBsb2NhdGlvbkRhdGEubmFtZTtcbn1cbiIsImltcG9ydCB7IGV4dHJhY3RXZWF0aGVyRGF0YSB9IGZyb20gJy4uL2FwaS93ZWF0aGVyLWRhdGEnO1xuXG5pbXBvcnQgd3JpdGVMb2NhdGlvbiBmcm9tICcuLi9oZWFkZXIvaGVhZGVyJztcblxuaW1wb3J0IHsgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0IH0gZnJvbSAnLi4vc2VhcmNoLXF1ZXJ5JztcblxuaW1wb3J0ICcuLi93ZWF0aGVyL21haW4td2VhdGhlci11aS5jc3MnO1xuXG5hc3luYyBmdW5jdGlvbiB3cml0ZVdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0aWVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4gZXh0cmFjdFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0LCBwcm9wZXJ0eSkpXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXR1c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItc3RhdHVzJyk7XG4gICAgY29uc3QgY3VycmVudFRlbXBFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRlbXAnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXRlbXAnKTtcbiAgICBjb25zdCBodW1pZGl0eUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5LXBlcmNlbnRhZ2UnKTtcbiAgICBjb25zdCBwcmVjaXBpdGF0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlY2lwaXRhdGlvbi1wZXJjZW50YWdlJyk7XG4gICAgY29uc3Qgd2luZFNwZWVkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1zcGVlZC1wZXJjZW50YWdlJyk7XG5cbiAgICBjb25zdCBbc3RhdHVzLCBjdXJyZW50VGVtcCwgZmVlbHNMaWtlLCBodW1pZGl0eSwgcHJlY2lwaXRhdGlvbiwgd2luZFNwZWVkXSA9XG4gICAgICB3ZWF0aGVyRGF0YTtcblxuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgIGN1cnJlbnRUZW1wRWwudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcH3CsGA7XG4gICAgZmVlbHNMaWtlRWwudGV4dENvbnRlbnQgPSBgJHtmZWVsc0xpa2V9wrBgO1xuICAgIGh1bWlkaXR5RWwudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0lYDtcbiAgICBwcmVjaXBpdGF0aW9uRWwudGV4dENvbnRlbnQgPSBgJHtwcmVjaXBpdGF0aW9ufSVgO1xuICAgIHdpbmRTcGVlZEVsLnRleHRDb250ZW50ID1cbiAgICAgIHVuaXQgPT09ICdpbXBlcmlhbCcgPyBgJHt3aW5kU3BlZWR9IE1QSGAgOiBgJHt3aW5kU3BlZWR9IEtNL0hgO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3Igd3JpdGluZyB3ZWF0aGVyIGRhdGEgdG8gdGhlIERPTTogJywgZXJyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZW5kZXJXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQoKSA/PyAnTWlubmVhcG9saXMnO1xuXG4gIHdyaXRlTG9jYXRpb24oKTtcblxuICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICdzdGF0dXMnLFxuICAgICdjdXJyZW50VGVtcCcsXG4gICAgJ2ZlZWxzTGlrZScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAnd2luZFNwZWVkJyxcbiAgICAncHJlY2lwaXRhdGlvbicsXG4gIF07XG4gIGF3YWl0IHdyaXRlV2VhdGhlckRhdGEobG9jYXRpb24sICdpbXBlcmlhbCcsIHByb3BlcnRpZXMpO1xufVxuIiwiaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB3cml0ZUxvY2F0aW9uKCkge1xuICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2NhdGlvbi10aXRsZScpO1xuXG4gIGNvbnN0IHsgZ2V0TG9jYXRpb25Gcm9tVXNlcklucHV0IH0gPSBhd2FpdCBpbXBvcnQoJy4uL3NlYXJjaC1xdWVyeScpO1xuICBjb25zdCB1c2VySW5wdXQgPSBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQoKTtcblxuICBjb25zdCB7IGdldExvY2F0aW9uTmFtZUZyb21KU09OIH0gPSBhd2FpdCBpbXBvcnQoJy4uL2FwaS93ZWF0aGVyLWRhdGEnKTtcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gYXdhaXQgZ2V0TG9jYXRpb25OYW1lRnJvbUpTT04odXNlcklucHV0KTtcbiAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uTmFtZSA/PyAnTWlubmVhcG9saXMnfWA7XG59XG4iLCJpbXBvcnQgcmVuZGVyV2VhdGhlckRhdGEgZnJvbSAnLi4vYXBwL2FwcCc7XG5cbmltcG9ydCB7IHZhbGlkYXRlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9zZWFyY2gtcXVlcnknO1xuXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXJEYXRhIH0gZnJvbSAnLi4vYXBpL3dlYXRoZXItZGF0YSc7XG5cbmltcG9ydCAnLi9tZW51LmNzcyc7XG5cbmNvbnN0IGJhY2tncm91bmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1zZWxlY3RvcicpO1xuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xuY29uc3Qgc2VhcmNoU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbmNvbnN0IHRvZ2dsZVNlYXJjaEJhclZpc2liaWxpdHkgPSAoKSA9PiB7XG4gIHNlYXJjaEJhci5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICBzZWFyY2hCYXIuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gIHNlYXJjaFN1Ym1pdEJ0bi5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICBzZWFyY2hTdWJtaXRCdG4uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG59O1xuXG5zZWFyY2hCdG4ub25jbGljayA9ICgpID0+IHtcbiAgdG9nZ2xlU2VhcmNoQmFyVmlzaWJpbGl0eSgpO1xuICBzZWFyY2hCYXIuc2VsZWN0KCk7XG59O1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3Qgc2VhcmNoRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmVycm9yJyk7XG5cbmNvbnN0IGZvcm1TdWJtaXNzaW9uSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzZWFyY2hRdWVyeUlzVmFsaWQgPSB2YWxpZGF0ZVNlYXJjaFF1ZXJ5KHNlYXJjaEJhci52YWx1ZSk7XG4gIGlmICghc2VhcmNoUXVlcnlJc1ZhbGlkKSB7XG4gICAgc2VhcmNoQmFyLmNsYXNzTmFtZSA9ICdpbnZhbGlkJztcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAnUGxlYXNlIGVudGVyIGEgdmFsaWQgc2VhcmNoIGZvcm1hdC4gKGkuZS4gXCJjaXR5XCIsIFwiY2l0eSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIsIG9yIFwiemlwY29kZSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIpJztcbiAgICBzZWFyY2hFcnJvci5jbGFzc05hbWUgPSAnZXJyb3IgYWN0aXZlJztcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hCYXIuY2xhc3NOYW1lID0gJ3ZhbGlkJztcbiAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHNlYXJjaEVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gIH1cbiAgY29uc3Qgd2VhdGhlckRhdGFPckVycm9yID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShzZWFyY2hCYXIudmFsdWUpO1xuICBpZiAod2VhdGhlckRhdGFPckVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICBpZiAod2VhdGhlckRhdGFPckVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ0xvY2F0aW9uIG5vdCBmb3VuZCcpKSB7XG4gICAgICBzZWFyY2hFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICAgICdMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uLiAoSGludDogQ2hlY2sgZm9yIHNwZWxsaW5nIGVycm9ycy4pJztcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoRXJyb3IudGV4dENvbnRlbnQgPVxuICAgICAgICAnUGxlYXNlIHJlY2hlY2sgdGhlIHNlYXJjaCBmb3JtYXQgYW5kIHRyeSBhZ2Fpbi4gKGkuZS4gXCJjaXR5XCIsIFwiY2l0eSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIsIG9yIFwiemlwY29kZSwgMiBsZXR0ZXIgY291bnRyeSBjb2RlXCIpJztcbiAgICB9XG4gICAgc2VhcmNoQmFyLmNsYXNzTmFtZSA9ICdpbnZhbGlkJztcbiAgICBzZWFyY2hFcnJvci5jbGFzc05hbWUgPSAnZXJyb3IgYWN0aXZlJztcbiAgfSBlbHNlIHtcbiAgICB0b2dnbGVTZWFyY2hCYXJWaXNpYmlsaXR5KCk7XG4gICAgcmVuZGVyV2VhdGhlckRhdGEod2VhdGhlckRhdGFPckVycm9yKTtcblx0XHQvLyBUaW1lb3V0IG5lY2Vzc2FyeSB0byBhbGxvdyBBUEkgZGF0YSB0byByZW5kZXIgYmVmb3JlIGZvcm0gcmVzZXRzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn07XG5cbmZvcm0ub25zdWJtaXQgPSBmb3JtU3VibWlzc2lvbkhhbmRsZXI7XG5cbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hTdWJtaXRCdG4uY2xpY2soKTtcbiAgfVxufSk7XG5cbmNvbnN0IGdldFdlYnBGaWxlTmFtZUZyb21CYWNrZ3JvdW5kID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyQmFja2dyb3VuZEltZyA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGNvbnRlbnRDb250YWluZXIpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgY29uc3Qgd2VicEZpbGVOYW1lID1cbiAgICBjb250ZW50Q29udGFpbmVyQmFja2dyb3VuZEltZy5tYXRjaCgvXFxiKFxcdyspXFwud2VicFxcYi8pWzFdO1xuICByZXR1cm4gd2VicEZpbGVOYW1lO1xufTtcblxuY29uc3QgdG9nZ2xlTWVudUJhY2tncm91bmRDb2xvciA9ICgpID0+IHtcbiAgY29uc3QgW21lbnUsIHdhdmUsIG1lbnVEaXZpZGVyXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJyNtZW51LWNvbnRhaW5lciwgI3dhdmUsICNtZW51LWRpdmlkZXInXG4gICk7XG4gIFttZW51LCB3YXZlLCBtZW51RGl2aWRlcl0uZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc05hbWUgPSBnZXRXZWJwRmlsZU5hbWVGcm9tQmFja2dyb3VuZCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoKSA9PiB7XG4gIGxldCBwbmdGaWxlTmFtZSA9IGdldFdlYnBGaWxlTmFtZUZyb21CYWNrZ3JvdW5kKCk7XG4gIGNvbnN0IGZpbGVOYW1lID0gcG5nRmlsZU5hbWUgPT09ICdyaXZlcicgPyAnY2l0eScgOiAncml2ZXInO1xuICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoL2Fzc2V0cy9iYWNrZ3JvdW5kcy8ke2ZpbGVOYW1lfS53ZWJwKWA7XG4gIHBuZ0ZpbGVOYW1lID0gZmlsZU5hbWU7XG59O1xuXG5iYWNrZ3JvdW5kQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gIGNoYW5nZUJhY2tncm91bmQoKTtcbiAgdG9nZ2xlTWVudUJhY2tncm91bmRDb2xvcigpO1xufTtcblxuY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlci1pY29uJyk7XG5cbmhhbWJ1cmdlci5vbmNsaWNrID0gKCkgPT4ge1xuICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdub3QtYWN0aXZlJyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJyk7XG59O1xuIiwiY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbkZyb21Vc2VySW5wdXQgPSAoKSA9PiBzZWFyY2hCYXIudmFsdWUgfHwgJ01pbm5lYXBvbGlzJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2VhcmNoUXVlcnkgPSAoc2VhcmNoUXVlcnkpID0+IHtcbiAgY29uc3Qgc2VhcmNoUmVnZXggPVxuICAgIC9eKFthLXpBLVpcXGRcXHMrXSopKCxcXHMqKFthLXpBLVpdezJ9KT8pPygsXFxzKyhbYS16QS1aXXsyfSk/KT8kLztcbiAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBzZWFyY2hSZWdleC50ZXN0KHNlYXJjaFF1ZXJ5KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=