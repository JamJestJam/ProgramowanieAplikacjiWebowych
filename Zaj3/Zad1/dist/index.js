/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/_tictactoe.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/_tictactoe.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Board div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Board div div {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid black;\n  color: white;\n  font-size: 30pt;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.input {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  min-width: 500px;\n}\n.input input {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #000;\n  outline: 0;\n  font-size: 1.3rem;\n  color: #000;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n.input input::placeholder {\n  color: transparent;\n}\n.input input:placeholder-shown ~ label {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n.input input:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  border-image: linear-gradient(to right, #000, #000);\n  border-image-slice: 1;\n}\n.input input:focus ~ label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #000;\n  font-weight: 700;\n}\n.input label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/styles/_tictactoe.scss","webpack://./src/styles/__flexObj.scss","webpack://./src/styles/__inputObj.scss"],"names":[],"mappings":"AAKI;ECJA,aAAA;EDMI,mBAAA;EACA,uBAAA;AAJR;AAKQ;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAHZ;;AAQA;EEvBI,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AFmBJ;AEjBI;EACI,oBAAA;EACA,WAAA;EACA,SAAA;EACA,6BAAA;EACA,UAAA;EACA,iBAAA;EACA,WFY0B;EEX1B,cAAA;EACA,uBAAA;EACA,6BAAA;AFmBR;AEjBQ;EACI,kBAAA;AFmBZ;AEhBQ;EACI,iBAAA;EACA,YAAA;EACA,SAAA;AFkBZ;AEfQ;EACI,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mDAAA;EACA,qBAAA;AFiBZ;AEfY;EACI,kBAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,WFhBM;EEiBN,gBAAA;AFiBhB;AEZI;EACI,kBAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,WF5BgC;AA0CxC","sourcesContent":["@import '___fonts';\n@import '__flexObj';\n@import '_inputObj';\n\n.Board{\n    div{\n        @include FlexObj();\n        align-items: center;\n        justify-content: center;\n        div{\n            width: 100px;\n            height: 100px;\n            text-align: center;\n            vertical-align: middle;\n            border: 1px solid black;\n            color: white;\n            font-size: 30pt;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n    }\n}\n\n.input{\n    @include InputObj(#000, #000, #000, #000);\n}","@mixin FlexObj(){\n    display: flex;\n}\n\n@mixin FlexChild($content) {\n    justify-content: $content;\n    align-items: center;\n    display: flex;\n    flex: 1;\n}\n\n","@mixin InputObj($primary, $secondary, $white, $gray){\n    position: relative;\n    padding: 15px 0 0;\n    margin-top: 10px;\n    min-width: 500px;\n\n    input{\n        font-family: inherit;\n        width: 100%;\n        border: 0;\n        border-bottom: 2px solid $gray;\n        outline: 0;\n        font-size: 1.3rem;\n        color: $white;\n        padding: 7px 0;\n        background: transparent;\n        transition: border-color 0.2s;\n\n        &::placeholder {\n            color: transparent;\n        }\n\n        &:placeholder-shown ~ label {\n            font-size: 1.3rem;\n            cursor: text;\n            top: 20px;\n        }\n\n        &:focus{\n            padding-bottom: 6px;  \n            font-weight: 700;\n            border-width: 3px;\n            border-image: linear-gradient(to right, $primary,$secondary);\n            border-image-slice: 1;\n\n            ~label{\n                position: absolute;\n                top: 0;\n                display: block;\n                transition: 0.2s;\n                font-size: 1rem;\n                color: $primary;\n                font-weight:700;    \n            }\n        }\n    }\n\n    label{\n        position: absolute;\n        top: 0;\n        display: block;\n        transition: 0.2s;\n        font-size: 1rem;\n        color: $gray;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --Bg1: #ffffff;\n  --Bg2: #F0F0F0;\n  --Bg3: #E8E8E8;\n  --Bg4: #0381BE;\n  --MainFont: #3E465E;\n}\n\n[data-theme=Dark] {\n  --Bg1: #666;\n  --Bg2: #333;\n  --Bg3: #444;\n  --Bg4: #0381BE;\n  --MainFont: #fff;\n}\n\nbody {\n  color: var(--MainFont);\n  background-color: var(--Bg2);\n  font-size: 1.13rem;\n  margin: 0;\n}\nbody #Navbar {\n  display: flex;\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  margin-bottom: 15px;\n  font-size: 1.4rem;\n  padding: 15px;\n}\nbody #Navbar #NB1 {\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB2 {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB3 {\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB3 span {\n  cursor: pointer;\n}\nbody #Navbar #NB3 span:hover {\n  background-color: var(--Bg3);\n}\nbody #Conent {\n  display: flex;\n  margin: 0 auto;\n  width: 1200px;\n}\nbody #Conent #LeftBar {\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  width: 230px;\n}\nbody #Conent #LeftBar ul {\n  margin: 0;\n  padding: 0;\n}\nbody #Conent #LeftBar ul li {\n  cursor: pointer;\n  display: block;\n  padding: 10px;\n}\nbody #Conent #LeftBar ul li:hover {\n  background-color: var(--Bg3);\n}\nbody #Conent #Game {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex: 1;\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  margin-left: 20px;\n  width: 950px;\n  padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/styles/___colors.scss","webpack://./src/styles/styles.scss","webpack://./src/styles/_page.scss","webpack://./src/styles/___fonts.scss","webpack://./src/styles/__flexObj.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,cAAA;EACA,cAAA;EACA,cAAA;EAEA,mBAAA;ACAJ;;ADGA;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;EAEA,gBAAA;ACDJ;;ACdA;EACI,sBAAA;EACA,4BAAA;EACA,kBCCE;EDAF,SAAA;ADiBJ;ACfI;EELA,aAAA;EFOI,iCAAA;EACA,4BAAA;EACA,mBAAA;EACA,iBCLF;EDME,aAAA;ADiBR;ACfQ;EETJ,2BFU2B;EET3B,mBAAA;EACA,aAAA;EACA,OAAA;AH2BJ;AClBQ;EEZJ,uBFa2B;EEZ3B,mBAAA;EACA,aAAA;EACA,OAAA;AHiCJ;ACrBQ;EEfJ,yBFgB2B;EEf3B,mBAAA;EACA,aAAA;EACA,OAAA;AHuCJ;ACzBY;EACI,eAAA;AD2BhB;AC1BgB;EACI,4BAAA;AD4BpB;ACtBI;EE9BA,aAAA;EFgCI,cAAA;EACA,aAAA;ADwBR;ACtBQ;EACI,iCAAA;EACA,4BAAA;EACA,YAAA;ADwBZ;ACtBY;EACI,SAAA;EACA,UAAA;ADwBhB;ACvBgB;EACI,eAAA;EACA,cAAA;EACA,aAAA;ADyBpB;ACxBoB;EACI,4BAAA;AD0BxB;ACpBQ;EElDJ,uBFmD2B;EElD3B,mBAAA;EACA,aAAA;EACA,OAAA;EFiDQ,iCAAA;EACA,4BAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;ADyBZ","sourcesContent":[":root {\n    --Bg1: #ffffff;\n    --Bg2: #F0F0F0;\n    --Bg3: #E8E8E8;\n    --Bg4: #0381BE;\n\n    --MainFont: #3E465E;\n}\n\n[data-theme=\"Dark\"]{\n    --Bg1: #666;\n    --Bg2: #333;\n    --Bg3: #444;\n    --Bg4: #0381BE;\n\n    --MainFont: #fff;\n}",":root {\n  --Bg1: #ffffff;\n  --Bg2: #F0F0F0;\n  --Bg3: #E8E8E8;\n  --Bg4: #0381BE;\n  --MainFont: #3E465E;\n}\n\n[data-theme=Dark] {\n  --Bg1: #666;\n  --Bg2: #333;\n  --Bg3: #444;\n  --Bg4: #0381BE;\n  --MainFont: #fff;\n}\n\nbody {\n  color: var(--MainFont);\n  background-color: var(--Bg2);\n  font-size: 1.13rem;\n  margin: 0;\n}\nbody #Navbar {\n  display: flex;\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  margin-bottom: 15px;\n  font-size: 1.4rem;\n  padding: 15px;\n}\nbody #Navbar #NB1 {\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB2 {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB3 {\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n  flex: 1;\n}\nbody #Navbar #NB3 span {\n  cursor: pointer;\n}\nbody #Navbar #NB3 span:hover {\n  background-color: var(--Bg3);\n}\nbody #Conent {\n  display: flex;\n  margin: 0 auto;\n  width: 1200px;\n}\nbody #Conent #LeftBar {\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  width: 230px;\n}\nbody #Conent #LeftBar ul {\n  margin: 0;\n  padding: 0;\n}\nbody #Conent #LeftBar ul li {\n  cursor: pointer;\n  display: block;\n  padding: 10px;\n}\nbody #Conent #LeftBar ul li:hover {\n  background-color: var(--Bg3);\n}\nbody #Conent #Game {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex: 1;\n  box-shadow: 0 0 2px var(--Shadow);\n  background-color: var(--Bg1);\n  margin-left: 20px;\n  width: 950px;\n  padding: 5px;\n}","body{\n    color: var(--MainFont);\n    background-color: var(--Bg2);\n    font-size: $f18;\n    margin: 0;\n    \n    #Navbar{\n        @include FlexObj();\n        box-shadow: 0 0 2px var(--Shadow);\n        background-color: var(--Bg1);\n        margin-bottom: 15px;\n        font-size: $f22;\n        padding: 15px;\n        \n        #NB1{\n            @include FlexChild(flex-start);\n        }\n        #NB2{\n            @include FlexChild(center);\n        }\n        #NB3{\n            @include FlexChild(flex-end);\n            span{\n                cursor: pointer;\n                &:hover{\n                    background-color: var(--Bg3);\n                }\n            }\n        }\n    }\n    \n    #Conent{\n        @include FlexObj();\n        margin: 0 auto;\n        width: 1200px;        \n        \n        #LeftBar{\n            box-shadow: 0 0 2px var(--Shadow);\n            background-color: var(--Bg1);\n            width: 230px;\n            \n            ul{\n                margin: 0;\n                padding: 0;\n                li{\n                    cursor: pointer;\n                    display: block;\n                    padding: 10px;\n                    &:hover{\n                        background-color: var(--Bg3);\n                    }\n                }\n            }\n        }\n        \n        #Game{\n            @include FlexChild(center);\n            box-shadow: 0 0 2px var(--Shadow);\n            background-color: var(--Bg1);\n            margin-left: 20px;\n            width: 950px;\n            padding: 5px;\n        }\n    }\n}","$f10: 0.6rem;\n$f12: 0.74rem;\n$f14: 0.85rem;\n$f16: 1rem;\n$f18: 1.13rem;\n$f20: 1.25rem;\n$f22: 1.4rem;\n$f24: 1.55rem;","@mixin FlexObj(){\n    display: flex;\n}\n\n@mixin FlexChild($content) {\n    justify-content: $content;\n    align-items: center;\n    display: flex;\n    flex: 1;\n}\n\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/_tictactoe.scss":
/*!************************************!*\
  !*** ./src/styles/_tictactoe.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactoe_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./_tictactoe.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/_tictactoe.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactoe_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tictactoe_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BattleShips = void 0;
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    };
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
var Games;
(function (Games) {
    Games[Games["TicTacToe"] = 1] = "TicTacToe";
    Games[Games["BattleShips"] = 2] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./src/tictactoe/Field.ts"));
var Line_1 = __importDefault(__webpack_require__(/*! ./Line */ "./src/tictactoe/Line.ts"));
var MoveType_1 = __importDefault(__webpack_require__(/*! ./MoveType */ "./src/tictactoe/MoveType.ts"));
var Board = /** @class */ (function () {
    function Board(size, winSize) {
        var _this = this;
        this.fieldList = new Array();
        this.move = MoveType_1.default.circle;
        this.MakeMove = function (e) {
            var target = e.target;
            var id = target.id;
            // const click = this.fieldList.find((ele) => ele.Equal(id));
            var click;
            for (var i = 0; i < _this.fieldList.length; i++) {
                for (var j = 0; j < _this.fieldList.length; j++) {
                    if (_this.fieldList[i][j].element.id === target.id)
                        click = _this.fieldList[i][j];
                }
            }
            if (click && (click === null || click === void 0 ? void 0 : click.State()) == MoveType_1.default.null) {
                click.MakeMove(_this.move);
                if (_this.move == MoveType_1.default.circle)
                    _this.move = MoveType_1.default.cross;
                else
                    _this.move = MoveType_1.default.circle;
                _this.CheckWin(click.row, click.column);
            }
        };
        this.size = size;
        this.winSize = winSize;
        this.board = document.createElement("div");
        this.board.classList.add("Board");
        this.Init();
    }
    Board.prototype.Init = function () {
        this.board.innerHTML = "";
        for (var i = 0; i < this.size; i++) {
            var line = new Line_1.default();
            this.board.appendChild(line.element);
            this.fieldList[i] = new Array();
            for (var j = 0; j < this.size; j++) {
                var field = new Field_1.default(i, j);
                line.element.appendChild(field.element);
                this.fieldList[i][j] = field;
                field.element.addEventListener("click", this.MakeMove);
            }
        }
    };
    Board.prototype.CheckWin = function (row, column) {
        var horizontal = 1, vertical = 1, diagonallyX = 1, diagonallyY = 1;
        var move = this.fieldList[row][column].State();
        var l = this.size;
        for (var i = column - 1; i >= 0; i--) {
            //lewo
            if (this.fieldList[row][i].State() == move) {
                horizontal++;
            }
            else
                break;
        }
        for (var i = column + 1; i < l; i++) {
            //prawo
            if (this.fieldList[row][i].State() == move) {
                horizontal++;
            }
            else
                break;
        }
        //------------------------------------------------------------------------\\
        for (var j = row - 1; j >= 0; j--) {
            //gora
            if (this.fieldList[j][column].State() == move) {
                vertical++;
            }
            else
                break;
        }
        for (var j = row + 1; j < l; j++) {
            //dol
            if (this.fieldList[j][column].State() == move) {
                vertical++;
            }
            else
                break;
        }
        //------------------------------------------------------------------------\\
        for (var i = column - 1, j = row - 1; i >= 0 && j >= 0; i--, j--) {
            //lewo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyX++;
            }
            else
                break;
        }
        for (var i = column + 1, j = row + 1; i < l && j < l; i++, j++) {
            //prawo i dol
            if (this.fieldList[j][i].State() == move) {
                diagonallyX++;
            }
            else
                break;
        }
        //------------------------------------------------------------------------\\
        for (var i = column + 1, j = row - 1; i < l && j >= 0; i++, j--) {
            //prawo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyY++;
            }
            else
                break;
        }
        for (var i = column - 1, j = row + 1; i >= 0 && j < l; i--, j++) {
            //prawo i gora
            if (this.fieldList[j][i].State() == move) {
                diagonallyY++;
            }
            else
                break;
        }
        if (horizontal == this.winSize ||
            vertical == this.winSize ||
            diagonallyX == this.winSize ||
            diagonallyY == this.winSize) {
            alert("wygrałeś " + move);
            this.board.innerHTML = "";
            this.Init();
        }
    };
    return Board;
}());
exports.default = Board;


/***/ }),

/***/ "./src/tictactoe/Field.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Field.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var MoveType_1 = __importDefault(__webpack_require__(/*! ./MoveType */ "./src/tictactoe/MoveType.ts"));
var Field = /** @class */ (function () {
    function Field(row, column) {
        this.element = document.createElement("div");
        this.element.id = "F" + row + "_" + column;
        this.row = row;
        this.column = column;
        if ((row + column) % 2 == 0)
            this.element.style.backgroundColor = "blue";
        else
            this.element.style.backgroundColor = "aqua";
    }
    Field.prototype.Equal = function (id) {
        return id === this.element.id;
    };
    Field.prototype.State = function () {
        switch (this.element.innerText) {
            case "O":
                return MoveType_1.default.circle;
            case "X":
                return MoveType_1.default.cross;
            default:
                return MoveType_1.default.null;
        }
    };
    Field.prototype.MakeMove = function (type) {
        switch (type) {
            case MoveType_1.default.circle:
                this.element.innerText = "O";
                break;
            case MoveType_1.default.cross:
                this.element.innerText = "X";
                break;
        }
    };
    return Field;
}());
exports.default = Field;


/***/ }),

/***/ "./src/tictactoe/Line.ts":
/*!*******************************!*\
  !*** ./src/tictactoe/Line.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Line = /** @class */ (function () {
    function Line() {
        this.element = document.createElement('div');
    }
    return Line;
}());
exports.default = Line;


/***/ }),

/***/ "./src/tictactoe/MoveType.ts":
/*!***********************************!*\
  !*** ./src/tictactoe/MoveType.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MoveType;
(function (MoveType) {
    MoveType["circle"] = "O";
    MoveType["cross"] = "X";
    MoveType["null"] = "-";
})(MoveType || (MoveType = {}));
exports.default = MoveType;


/***/ }),

/***/ "./src/tictactoe/inputData.ts":
/*!************************************!*\
  !*** ./src/tictactoe/inputData.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Board_1 = __importDefault(__webpack_require__(/*! ./Board */ "./src/tictactoe/Board.ts"));
var InputData = /** @class */ (function () {
    function InputData() {
        var _this = this;
        this.createInput = function (name, id) {
            var div = document.createElement("div");
            var input = document.createElement("input");
            var label = document.createElement("label");
            div.classList.add("input");
            label.textContent = name;
            input.placeholder = name;
            input.type = "number";
            input.id = id;
            div.appendChild(input);
            div.appendChild(label);
            return div;
        };
        this.element = document.createElement("div");
        var input1 = this.createInput("Ilosc pol", "fields");
        var input2 = this.createInput("wygrywajaca kombinacja", "win");
        var button = document.createElement("button");
        button.textContent = "Rozpocznij grę";
        button.addEventListener("click", function () {
            var in1 = +input1.childNodes[0].value;
            var in2 = +input1.childNodes[0].value;
            var board = new Board_1.default(in1, in2);
            if (in1 < 3 || in2 < 3) {
                alert("Minimalne wartości to 3");
            }
            else {
                _this.element.innerHTML = "";
                _this.element.appendChild(board.board);
            }
        });
        this.element.appendChild(input1);
        this.element.appendChild(input2);
        this.element.appendChild(button);
    }
    return InputData;
}());
exports.default = InputData;


/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacToe = void 0;
var inputData_1 = __importDefault(__webpack_require__(/*! ./inputData */ "./src/tictactoe/inputData.ts"));
__webpack_require__(/*! ../styles/_tictactoe.scss */ "./src/styles/_tictactoe.scss");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        var input = new inputData_1.default();
        console.log(input);
        return input.element;
    };
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var games_enum_1 = __webpack_require__(/*! ./games.enum */ "./src/games.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ "./src/tictactoe/tictactoe.ts");
var battleships_1 = __webpack_require__(/*! ./battleships/battleships */ "./src/battleships/battleships.ts");
__webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
var App = /** @class */ (function () {
    function App() {
        this.init();
    }
    App.prototype.init = function () {
        var menuContainer = (document.querySelector("#LeftBar")); // kontener menu dostępnych gier
        var gameContainer = document.querySelector("#Game"); // kontener główny ekranu z grą
        var button = document.querySelector("#NB3>span");
        var list = document.createElement("ul"); // lista pozycji w menu dostępnych gier
        var keys = Object.keys(games_enum_1.Games).splice(Object.keys(games_enum_1.Games).length / 2, Object.keys(games_enum_1.Games).length / 2);
        keys.forEach(function (element) {
            var li = document.createElement("li");
            list.appendChild(li);
            li.innerText = element;
            li.addEventListener("click", function () {
                gameContainer.innerHTML = "";
                switch (element) {
                    case "TicTacToe":
                        gameContainer.appendChild(new tictactoe_1.TicTacToe().getGameElement());
                        break;
                    case "BattleShips":
                        gameContainer.appendChild(new battleships_1.BattleShips().getGameElement());
                        break;
                }
            });
        });
        button.addEventListener("click", function () {
            if (document.body.hasAttribute('data-theme'))
                document.body.removeAttribute('data-theme');
            else
                document.body.setAttribute('data-theme', 'Dark');
        });
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        menuContainer.appendChild(list);
        // document.body.appendChild(menuContainer);
        // document.body.appendChild(gameContainer);
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL190aWN0YWN0b2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9fdGljdGFjdG9lLnNjc3M/YzVkNSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzIwM2IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90aWN0YWN0b2UvRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy90aWN0YWN0b2UvTW92ZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9pbnB1dERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIsaUJBQWlCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLFlBQVksdUJBQXVCLHNCQUFzQixxQkFBcUIscUJBQXFCLEdBQUcsZ0JBQWdCLHlCQUF5QixnQkFBZ0IsY0FBYyxrQ0FBa0MsZUFBZSxzQkFBc0IsZ0JBQWdCLG1CQUFtQiw0QkFBNEIsa0NBQWtDLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLDBDQUEwQyxzQkFBc0IsaUJBQWlCLGNBQWMsR0FBRyxzQkFBc0Isd0JBQXdCLHFCQUFxQixzQkFBc0Isd0RBQXdELDBCQUEwQixHQUFHLDhCQUE4Qix1QkFBdUIsV0FBVyxtQkFBbUIscUJBQXFCLG9CQUFvQixnQkFBZ0IscUJBQXFCLEdBQUcsZ0JBQWdCLHVCQUF1QixXQUFXLG1CQUFtQixxQkFBcUIsb0JBQW9CLGdCQUFnQixHQUFHLE9BQU8sOEtBQThLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0s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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkJvYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uQm9hcmQgZGl2IGRpdiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxufVxcbi5pbnB1dCBpbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDdweCAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcXG59XFxuLmlucHV0IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5pbnB1dCBpbnB1dDpwbGFjZWhvbGRlci1zaG93biB+IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgdG9wOiAyMHB4O1xcbn1cXG4uaW5wdXQgaW5wdXQ6Zm9jdXMge1xcbiAgcGFkZGluZy1ib3R0b206IDZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItd2lkdGg6IDNweDtcXG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwLCAjMDAwKTtcXG4gIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG59XFxuLmlucHV0IGlucHV0OmZvY3VzIH4gbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uaW5wdXQgbGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3RpY3RhY3RvZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19fZmxleE9iai5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19faW5wdXRPYmouc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLSTtFQ0pBLGFBQUE7RURNSSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFLUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhaOztBQVFBO0VFdkJJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FGbUJKO0FFakJJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0ZZMEI7RUVYMUIsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUZtQlI7QUVqQlE7RUFDSSxrQkFBQTtBRm1CWjtBRWhCUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUZrQlo7QUVmUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7QUZpQlo7QUVmWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXRmhCTTtFRWlCTixnQkFBQTtBRmlCaEI7QUVaSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXRjVCZ0M7QUEwQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ19fX2ZvbnRzJztcXG5AaW1wb3J0ICdfX2ZsZXhPYmonO1xcbkBpbXBvcnQgJ19pbnB1dE9iaic7XFxuXFxuLkJvYXJke1xcbiAgICBkaXZ7XFxuICAgICAgICBAaW5jbHVkZSBGbGV4T2JqKCk7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBkaXZ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBwdDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmlucHV0e1xcbiAgICBAaW5jbHVkZSBJbnB1dE9iaigjMDAwLCAjMDAwLCAjMDAwLCAjMDAwKTtcXG59XCIsXCJAbWl4aW4gRmxleE9iaigpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5AbWl4aW4gRmxleENoaWxkKCRjb250ZW50KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogJGNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcblwiLFwiQG1peGluIElucHV0T2JqKCRwcmltYXJ5LCAkc2Vjb25kYXJ5LCAkd2hpdGUsICRncmF5KXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG5cXG4gICAgaW5wdXR7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRncmF5O1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIHBhZGRpbmc6IDdweCAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcXG5cXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOnBsYWNlaG9sZGVyLXNob3duIH4gbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgICAgICAgICB0b3A6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmZvY3Vze1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7ICBcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeSwkc2Vjb25kYXJ5KTtcXG4gICAgICAgICAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxuXFxuICAgICAgICAgICAgfmxhYmVse1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDo3MDA7ICAgIFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBsYWJlbHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGNvbG9yOiAkZ3JheTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLUJnMTogI2ZmZmZmZjtcXG4gIC0tQmcyOiAjRjBGMEYwO1xcbiAgLS1CZzM6ICNFOEU4RTg7XFxuICAtLUJnNDogIzAzODFCRTtcXG4gIC0tTWFpbkZvbnQ6ICMzRTQ2NUU7XFxufVxcblxcbltkYXRhLXRoZW1lPURhcmtdIHtcXG4gIC0tQmcxOiAjNjY2O1xcbiAgLS1CZzI6ICMzMzM7XFxuICAtLUJnMzogIzQ0NDtcXG4gIC0tQmc0OiAjMDM4MUJFO1xcbiAgLS1NYWluRm9udDogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tTWFpbkZvbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmcyKTtcXG4gIGZvbnQtc2l6ZTogMS4xM3JlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSAjTmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuYm9keSAjTmF2YmFyICNOQjEge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgI05hdmJhciAjTkIzIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmczKTtcXG59XFxuYm9keSAjQ29uZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMjAwcHg7XFxufVxcbmJvZHkgI0NvbmVudCAjTGVmdEJhciB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgd2lkdGg6IDIzMHB4O1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHVsIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMyk7XFxufVxcbmJvZHkgI0NvbmVudCAjR2FtZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHdpZHRoOiA5NTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fX19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fcGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19fX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX19mbGV4T2JqLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtBQ0RKOztBQ2RBO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQ0NFO0VEQUYsU0FBQTtBRGlCSjtBQ2ZJO0VFTEEsYUFBQTtFRk9JLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQ0xGO0VETUUsYUFBQTtBRGlCUjtBQ2ZRO0VFVEosMkJGVTJCO0VFVDNCLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUgyQko7QUNsQlE7RUVaSix1QkZhMkI7RUVaM0IsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBSGlDSjtBQ3JCUTtFRWZKLHlCRmdCMkI7RUVmM0IsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBSHVDSjtBQ3pCWTtFQUNJLGVBQUE7QUQyQmhCO0FDMUJnQjtFQUNJLDRCQUFBO0FENEJwQjtBQ3RCSTtFRTlCQSxhQUFBO0VGZ0NJLGNBQUE7RUFDQSxhQUFBO0FEd0JSO0FDdEJRO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUR3Qlo7QUN0Qlk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBRHdCaEI7QUN2QmdCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEeUJwQjtBQ3hCb0I7RUFDSSw0QkFBQTtBRDBCeEI7QUNwQlE7RUVsREosdUJGbUQyQjtFRWxEM0IsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFRmlEUSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRHlCWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tQmcxOiAjZmZmZmZmO1xcbiAgICAtLUJnMjogI0YwRjBGMDtcXG4gICAgLS1CZzM6ICNFOEU4RTg7XFxuICAgIC0tQmc0OiAjMDM4MUJFO1xcblxcbiAgICAtLU1haW5Gb250OiAjM0U0NjVFO1xcbn1cXG5cXG5bZGF0YS10aGVtZT1cXFwiRGFya1xcXCJde1xcbiAgICAtLUJnMTogIzY2NjtcXG4gICAgLS1CZzI6ICMzMzM7XFxuICAgIC0tQmczOiAjNDQ0O1xcbiAgICAtLUJnNDogIzAzODFCRTtcXG5cXG4gICAgLS1NYWluRm9udDogI2ZmZjtcXG59XCIsXCI6cm9vdCB7XFxuICAtLUJnMTogI2ZmZmZmZjtcXG4gIC0tQmcyOiAjRjBGMEYwO1xcbiAgLS1CZzM6ICNFOEU4RTg7XFxuICAtLUJnNDogIzAzODFCRTtcXG4gIC0tTWFpbkZvbnQ6ICMzRTQ2NUU7XFxufVxcblxcbltkYXRhLXRoZW1lPURhcmtdIHtcXG4gIC0tQmcxOiAjNjY2O1xcbiAgLS1CZzI6ICMzMzM7XFxuICAtLUJnMzogIzQ0NDtcXG4gIC0tQmc0OiAjMDM4MUJFO1xcbiAgLS1NYWluRm9udDogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tTWFpbkZvbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmcyKTtcXG4gIGZvbnQtc2l6ZTogMS4xM3JlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSAjTmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuYm9keSAjTmF2YmFyICNOQjEge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMgc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJvZHkgI05hdmJhciAjTkIzIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmczKTtcXG59XFxuYm9keSAjQ29uZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMjAwcHg7XFxufVxcbmJvZHkgI0NvbmVudCAjTGVmdEJhciB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgd2lkdGg6IDIzMHB4O1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHVsIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMyk7XFxufVxcbmJvZHkgI0NvbmVudCAjR2FtZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHdpZHRoOiA5NTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XCIsXCJib2R5e1xcbiAgICBjb2xvcjogdmFyKC0tTWFpbkZvbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzIpO1xcbiAgICBmb250LXNpemU6ICRmMTg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgXFxuICAgICNOYXZiYXJ7XFxuICAgICAgICBAaW5jbHVkZSBGbGV4T2JqKCk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogJGYyMjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBcXG4gICAgICAgICNOQjF7XFxuICAgICAgICAgICAgQGluY2x1ZGUgRmxleENoaWxkKGZsZXgtc3RhcnQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI05CMntcXG4gICAgICAgICAgICBAaW5jbHVkZSBGbGV4Q2hpbGQoY2VudGVyKTtcXG4gICAgICAgIH1cXG4gICAgICAgICNOQjN7XFxuICAgICAgICAgICAgQGluY2x1ZGUgRmxleENoaWxkKGZsZXgtZW5kKTtcXG4gICAgICAgICAgICBzcGFue1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzMpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIFxcbiAgICAjQ29uZW50e1xcbiAgICAgICAgQGluY2x1ZGUgRmxleE9iaigpO1xcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB3aWR0aDogMTIwMHB4OyAgICAgICAgXFxuICAgICAgICBcXG4gICAgICAgICNMZWZ0QmFye1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzEpO1xcbiAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB1bHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICBsaXtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmczKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgI0dhbWV7XFxuICAgICAgICAgICAgQGluY2x1ZGUgRmxleENoaWxkKGNlbnRlcik7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1TaGFkb3cpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDk1MHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIiRmMTA6IDAuNnJlbTtcXG4kZjEyOiAwLjc0cmVtO1xcbiRmMTQ6IDAuODVyZW07XFxuJGYxNjogMXJlbTtcXG4kZjE4OiAxLjEzcmVtO1xcbiRmMjA6IDEuMjVyZW07XFxuJGYyMjogMS40cmVtO1xcbiRmMjQ6IDEuNTVyZW07XCIsXCJAbWl4aW4gRmxleE9iaigpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5AbWl4aW4gRmxleENoaWxkKCRjb250ZW50KSB7XFxuICAgIGp1c3RpZnktY29udGVudDogJGNvbnRlbnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9fdGljdGFjdG9lLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xudmFyIEJhdHRsZVNoaXBzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJhdHRsZVNoaXBzKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlN0YXRraVwiO1xuICAgIH1cbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSGVsbG8gQmF0dGxlU2hpcHNcIikpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH07XG4gICAgcmV0dXJuIEJhdHRsZVNoaXBzO1xufSgpKTtcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSBCYXR0bGVTaGlwcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lcyA9IHZvaWQgMDtcbnZhciBHYW1lcztcbihmdW5jdGlvbiAoR2FtZXMpIHtcbiAgICBHYW1lc1tHYW1lc1tcIlRpY1RhY1RvZVwiXSA9IDFdID0gXCJUaWNUYWNUb2VcIjtcbiAgICBHYW1lc1tHYW1lc1tcIkJhdHRsZVNoaXBzXCJdID0gMl0gPSBcIkJhdHRsZVNoaXBzXCI7XG59KShHYW1lcyA9IGV4cG9ydHMuR2FtZXMgfHwgKGV4cG9ydHMuR2FtZXMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRmllbGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9GaWVsZFwiKSk7XG52YXIgTGluZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpbmVcIikpO1xudmFyIE1vdmVUeXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW92ZVR5cGVcIikpO1xudmFyIEJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJvYXJkKHNpemUsIHdpblNpemUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5maWVsZExpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gTW92ZVR5cGVfMS5kZWZhdWx0LmNpcmNsZTtcbiAgICAgICAgdGhpcy5NYWtlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgaWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICAvLyBjb25zdCBjbGljayA9IHRoaXMuZmllbGRMaXN0LmZpbmQoKGVsZSkgPT4gZWxlLkVxdWFsKGlkKSk7XG4gICAgICAgICAgICB2YXIgY2xpY2s7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmZpZWxkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX3RoaXMuZmllbGRMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5maWVsZExpc3RbaV1bal0uZWxlbWVudC5pZCA9PT0gdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2sgPSBfdGhpcy5maWVsZExpc3RbaV1bal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsaWNrICYmIChjbGljayA9PT0gbnVsbCB8fCBjbGljayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xpY2suU3RhdGUoKSkgPT0gTW92ZVR5cGVfMS5kZWZhdWx0Lm51bGwpIHtcbiAgICAgICAgICAgICAgICBjbGljay5NYWtlTW92ZShfdGhpcy5tb3ZlKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMubW92ZSA9PSBNb3ZlVHlwZV8xLmRlZmF1bHQuY2lyY2xlKVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3ZlID0gTW92ZVR5cGVfMS5kZWZhdWx0LmNyb3NzO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubW92ZSA9IE1vdmVUeXBlXzEuZGVmYXVsdC5jaXJjbGU7XG4gICAgICAgICAgICAgICAgX3RoaXMuQ2hlY2tXaW4oY2xpY2sucm93LCBjbGljay5jb2x1bW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLndpblNpemUgPSB3aW5TaXplO1xuICAgICAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5ib2FyZC5jbGFzc0xpc3QuYWRkKFwiQm9hcmRcIik7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgIH1cbiAgICBCb2FyZC5wcm90b3R5cGUuSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbGluZSA9IG5ldyBMaW5lXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5hcHBlbmRDaGlsZChsaW5lLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5maWVsZExpc3RbaV0gPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBuZXcgRmllbGRfMS5kZWZhdWx0KGksIGopO1xuICAgICAgICAgICAgICAgIGxpbmUuZWxlbWVudC5hcHBlbmRDaGlsZChmaWVsZC5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGlzdFtpXVtqXSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIGZpZWxkLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuTWFrZU1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBCb2FyZC5wcm90b3R5cGUuQ2hlY2tXaW4gPSBmdW5jdGlvbiAocm93LCBjb2x1bW4pIHtcbiAgICAgICAgdmFyIGhvcml6b250YWwgPSAxLCB2ZXJ0aWNhbCA9IDEsIGRpYWdvbmFsbHlYID0gMSwgZGlhZ29uYWxseVkgPSAxO1xuICAgICAgICB2YXIgbW92ZSA9IHRoaXMuZmllbGRMaXN0W3Jvd11bY29sdW1uXS5TdGF0ZSgpO1xuICAgICAgICB2YXIgbCA9IHRoaXMuc2l6ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGNvbHVtbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAvL2xld29cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkTGlzdFtyb3ddW2ldLlN0YXRlKCkgPT0gbW92ZSkge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gY29sdW1uICsgMTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgLy9wcmF3b1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W3Jvd11baV0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxcXFxuICAgICAgICBmb3IgKHZhciBqID0gcm93IC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIC8vZ29yYVxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W2pdW2NvbHVtbl0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gcm93ICsgMTsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgLy9kb2xcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkTGlzdFtqXVtjb2x1bW5dLlN0YXRlKCkgPT0gbW92ZSkge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXFxcXG4gICAgICAgIGZvciAodmFyIGkgPSBjb2x1bW4gLSAxLCBqID0gcm93IC0gMTsgaSA+PSAwICYmIGogPj0gMDsgaS0tLCBqLS0pIHtcbiAgICAgICAgICAgIC8vbGV3byBpIGdvcmFcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkTGlzdFtqXVtpXS5TdGF0ZSgpID09IG1vdmUpIHtcbiAgICAgICAgICAgICAgICBkaWFnb25hbGx5WCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBjb2x1bW4gKyAxLCBqID0gcm93ICsgMTsgaSA8IGwgJiYgaiA8IGw7IGkrKywgaisrKSB7XG4gICAgICAgICAgICAvL3ByYXdvIGkgZG9sXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3Rbal1baV0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxseVgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcXFxcbiAgICAgICAgZm9yICh2YXIgaSA9IGNvbHVtbiArIDEsIGogPSByb3cgLSAxOyBpIDwgbCAmJiBqID49IDA7IGkrKywgai0tKSB7XG4gICAgICAgICAgICAvL3ByYXdvIGkgZ29yYVxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W2pdW2ldLlN0YXRlKCkgPT0gbW92ZSkge1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsbHlZKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IGNvbHVtbiAtIDEsIGogPSByb3cgKyAxOyBpID49IDAgJiYgaiA8IGw7IGktLSwgaisrKSB7XG4gICAgICAgICAgICAvL3ByYXdvIGkgZ29yYVxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W2pdW2ldLlN0YXRlKCkgPT0gbW92ZSkge1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsbHlZKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvcml6b250YWwgPT0gdGhpcy53aW5TaXplIHx8XG4gICAgICAgICAgICB2ZXJ0aWNhbCA9PSB0aGlzLndpblNpemUgfHxcbiAgICAgICAgICAgIGRpYWdvbmFsbHlYID09IHRoaXMud2luU2l6ZSB8fFxuICAgICAgICAgICAgZGlhZ29uYWxseVkgPT0gdGhpcy53aW5TaXplKSB7XG4gICAgICAgICAgICBhbGVydChcInd5Z3JhxYJlxZsgXCIgKyBtb3ZlKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQm9hcmQ7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQm9hcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNb3ZlVHlwZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01vdmVUeXBlXCIpKTtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGaWVsZChyb3csIGNvbHVtbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBcIkZcIiArIHJvdyArIFwiX1wiICsgY29sdW1uO1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIGlmICgocm93ICsgY29sdW1uKSAlIDIgPT0gMClcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYXF1YVwiO1xuICAgIH1cbiAgICBGaWVsZC5wcm90b3R5cGUuRXF1YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGlkID09PSB0aGlzLmVsZW1lbnQuaWQ7XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5lbGVtZW50LmlubmVyVGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcIk9cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTW92ZVR5cGVfMS5kZWZhdWx0LmNpcmNsZTtcbiAgICAgICAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vdmVUeXBlXzEuZGVmYXVsdC5jcm9zcztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vdmVUeXBlXzEuZGVmYXVsdC5udWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGaWVsZC5wcm90b3R5cGUuTWFrZU1vdmUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTW92ZVR5cGVfMS5kZWZhdWx0LmNpcmNsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gXCJPXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE1vdmVUeXBlXzEuZGVmYXVsdC5jcm9zczpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBGaWVsZDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExpbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGluZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIHJldHVybiBMaW5lO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNb3ZlVHlwZTtcbihmdW5jdGlvbiAoTW92ZVR5cGUpIHtcbiAgICBNb3ZlVHlwZVtcImNpcmNsZVwiXSA9IFwiT1wiO1xuICAgIE1vdmVUeXBlW1wiY3Jvc3NcIl0gPSBcIlhcIjtcbiAgICBNb3ZlVHlwZVtcIm51bGxcIl0gPSBcIi1cIjtcbn0pKE1vdmVUeXBlIHx8IChNb3ZlVHlwZSA9IHt9KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNb3ZlVHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJvYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQm9hcmRcIikpO1xudmFyIElucHV0RGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnB1dERhdGEoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3JlYXRlSW5wdXQgPSBmdW5jdGlvbiAobmFtZSwgaWQpIHtcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gbmFtZTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIGlucHV0MSA9IHRoaXMuY3JlYXRlSW5wdXQoXCJJbG9zYyBwb2xcIiwgXCJmaWVsZHNcIik7XG4gICAgICAgIHZhciBpbnB1dDIgPSB0aGlzLmNyZWF0ZUlucHV0KFwid3lncnl3YWphY2Ega29tYmluYWNqYVwiLCBcIndpblwiKTtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm96cG9jem5paiBncsSZXCI7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluMSA9ICtpbnB1dDEuY2hpbGROb2Rlc1swXS52YWx1ZTtcbiAgICAgICAgICAgIHZhciBpbjIgPSAraW5wdXQxLmNoaWxkTm9kZXNbMF0udmFsdWU7XG4gICAgICAgICAgICB2YXIgYm9hcmQgPSBuZXcgQm9hcmRfMS5kZWZhdWx0KGluMSwgaW4yKTtcbiAgICAgICAgICAgIGlmIChpbjEgPCAzIHx8IGluMiA8IDMpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIk1pbmltYWxuZSB3YXJ0b8WbY2kgdG8gM1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJvYXJkLmJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dDEpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBJbnB1dERhdGE7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXREYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRpY1RhY1RvZSA9IHZvaWQgMDtcbnZhciBpbnB1dERhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbnB1dERhdGFcIikpO1xucmVxdWlyZShcIi4uL3N0eWxlcy9fdGljdGFjdG9lLnNjc3NcIik7XG52YXIgVGljVGFjVG9lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJLw7PFgmtvIGkga3J6ecW8eWtcIjtcbiAgICB9XG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gbmV3IGlucHV0RGF0YV8xLmRlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgICAgICByZXR1cm4gaW5wdXQuZWxlbWVudDtcbiAgICB9O1xuICAgIHJldHVybiBUaWNUYWNUb2U7XG59KCkpO1xuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2FtZXNfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZXMuZW51bVwiKTtcbnZhciB0aWN0YWN0b2VfMSA9IHJlcXVpcmUoXCIuL3RpY3RhY3RvZS90aWN0YWN0b2VcIik7XG52YXIgYmF0dGxlc2hpcHNfMSA9IHJlcXVpcmUoXCIuL2JhdHRsZXNoaXBzL2JhdHRsZXNoaXBzXCIpO1xucmVxdWlyZShcIi4vc3R5bGVzL3N0eWxlcy5zY3NzXCIpO1xudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHAoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZW51Q29udGFpbmVyID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTGVmdEJhclwiKSk7IC8vIGtvbnRlbmVyIG1lbnUgZG9zdMSZcG55Y2ggZ2llclxuICAgICAgICB2YXIgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjR2FtZVwiKTsgLy8ga29udGVuZXIgZ8WCw7N3bnkgZWtyYW51IHogZ3LEhVxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNOQjM+c3BhblwiKTtcbiAgICAgICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7IC8vIGxpc3RhIHBvenljamkgdyBtZW51IGRvc3TEmXBueWNoIGdpZXJcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhnYW1lc19lbnVtXzEuR2FtZXMpLnNwbGljZShPYmplY3Qua2V5cyhnYW1lc19lbnVtXzEuR2FtZXMpLmxlbmd0aCAvIDIsIE9iamVjdC5rZXlzKGdhbWVzX2VudW1fMS5HYW1lcykubGVuZ3RoIC8gMik7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBlbGVtZW50O1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJUaWNUYWNUb2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3IHRpY3RhY3RvZV8xLlRpY1RhY1RvZSgpLmdldEdhbWVFbGVtZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJCYXR0bGVTaGlwc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXcgYmF0dGxlc2hpcHNfMS5CYXR0bGVTaGlwcygpLmdldEdhbWVFbGVtZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS10aGVtZScpKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnRGFyaycpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogWmFpbXBsZW1lbnR1aiB3em9yemVjIGZhYnJ5a2kvbWV0b2R5IGZhYnJ5a3VqxIVjZWosIHRhayBhYnkgbmEgcG9kc3Rhd2llIGtvbmtyZXRuZWogd2FydG/Fm2NpIHogZW51bVxuICAgICAgICAvLyB6d3LDs2NpxIcgb2JpZWt0IGdyeS4gWiB0ZWdvIG9iaWVrdHUgbW/FvG5hIG5hc3TEmXBuaWUgcG9icmHEhyBuYXp3xJkgZ3J5IGkgZG9kYcSHIGRvIG1lbnUgb3JheiBtZXRvZMSZIHp3cmFjYWrEhWPEhVxuICAgICAgICAvLyBzYW3EhSBncsSZIGkgcG8ga2xpa25pxJljaXUgdyB3eWJyYW55IGVsZW1lbnQgbGlzdHkgd3l3b8WCeXdhxIcgasSFLCBhYnkgZG9rbGVqYcSHIHphd2FydG/Fm8SHIGRvIGdhbWVDb250YWluZXIuXG4gICAgICAgIC8vIEFieSB3ecWbd2lldGxpxIcgbWVudSBuYWxlxbx5IG5hcGlzYcSHIHDEmXRsxJksIGt0w7N0YSBwcnplaXRlcnVqZSBwbyB3c3p5c3RraWNoIHdhcnRvxZtjaWFjaCBlbnVtJ2FcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lQ29udGFpbmVyKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHA7XG59KCkpO1xubmV3IEFwcCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==