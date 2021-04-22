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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --fieldBlack: #f5deb3;\n  --fieldWhite: #308030;\n  --fieldColor: #000;\n}\n\n[data-theme=Dark] {\n  --fieldBlack: #ffffff;\n  --fieldWhite: #ffffff;\n  --fieldColor: #fff;\n}\n\n.Board div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--fieldColor);\n}\n.Board div div {\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid black;\n  color: white;\n  font-size: 30pt;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Board div:nth-child(even) div:nth-child(even) {\n  background-color: var(--fieldBlack);\n}\n.Board div:nth-child(even) div:nth-child(odd) {\n  background-color: var(--fieldWhite);\n}\n.Board div:nth-child(odd) div:nth-child(even) {\n  background-color: var(--fieldWhite);\n}\n.Board div:nth-child(odd) div:nth-child(odd) {\n  background-color: var(--fieldBlack);\n}\n\n.input {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  min-width: 500px;\n}\n.input input {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #000;\n  outline: 0;\n  font-size: 1.3rem;\n  color: #000;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n.input input::placeholder {\n  color: transparent;\n}\n.input input:placeholder-shown ~ label {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n.input input:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  border-image: linear-gradient(to right, #000, #000);\n  border-image-slice: 1;\n}\n.input input:focus ~ label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #000;\n  font-weight: 700;\n}\n.input label {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/styles/___tictactoeColors.scss","webpack://./src/styles/_tictactoe.scss","webpack://./src/styles/__flexObj.scss","webpack://./src/styles/__inputObj.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,qBAAA;EACA,kBAAA;ACCJ;;ADEA;EACI,qBAAA;EACA,qBAAA;EACA,kBAAA;ACCJ;;AAFI;ECPA,aAAA;EDSI,mBAAA;EACA,uBAAA;EACA,wBAAA;AAKR;AAHQ;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAKZ;AAAgB;EACI,mCAAA;AAEpB;AAAgB;EACI,mCAAA;AAEpB;AAKgB;EACI,mCAAA;AAHpB;AAKgB;EACI,mCAAA;AAHpB;;AAUA;EElDI,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AF4CJ;AE1CI;EACI,oBAAA;EACA,WAAA;EACA,SAAA;EACA,6BAAA;EACA,UAAA;EACA,iBAAA;EACA,WFuC0B;EEtC1B,cAAA;EACA,uBAAA;EACA,6BAAA;AF4CR;AE1CQ;EACI,kBAAA;AF4CZ;AEzCQ;EACI,iBAAA;EACA,YAAA;EACA,SAAA;AF2CZ;AExCQ;EACI,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mDAAA;EACA,qBAAA;AF0CZ;AExCY;EACI,kBAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,WFWM;EEVN,gBAAA;AF0ChB;AErCI;EACI,kBAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,WFDgC;AAwCxC","sourcesContent":[":root {\n    --fieldBlack: #f5deb3;\n    --fieldWhite: #308030;\n    --fieldColor: #000;\n}\n\n[data-theme=\"Dark\"]{\n    --fieldBlack: #ffffff;\n    --fieldWhite: #ffffff;\n    --fieldColor: #fff;\n}","@import '___fonts';\n@import '__tictactoeColors';\n@import '__flexObj';\n@import '_inputObj';\n\n\n\n.Board{\n    div{\n        @include FlexObj();\n        align-items: center;\n        justify-content: center;\n        color: var(--fieldColor);\n        \n        div{\n            width: 100px;\n            height: 100px;\n            text-align: center;\n            vertical-align: middle;\n            border: 1px solid black;\n            color: white;\n            font-size: 30pt;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        &:nth-child(even){\n            div{\n                &:nth-child(even){\n                    background-color: var(--fieldBlack);\n                }\n                &:nth-child(odd){\n                    background-color: var(--fieldWhite);\n                }\n            }\n        }\n\n        &:nth-child(odd){\n            div{\n                &:nth-child(even){\n                    background-color: var(--fieldWhite);\n                }\n                &:nth-child(odd){\n                    background-color: var(--fieldBlack);\n                }\n            }\n        }\n    }\n}\n\n.input{\n    @include InputObj(#000, #000, #000, #000);\n}","@mixin FlexObj(){\n    display: flex;\n}\n\n@mixin FlexChild($content) {\n    justify-content: $content;\n    align-items: center;\n    display: flex;\n    flex: 1;\n}\n\n","@mixin InputObj($primary, $secondary, $white, $gray){\n    position: relative;\n    padding: 15px 0 0;\n    margin-top: 10px;\n    min-width: 500px;\n\n    input{\n        font-family: inherit;\n        width: 100%;\n        border: 0;\n        border-bottom: 2px solid $gray;\n        outline: 0;\n        font-size: 1.3rem;\n        color: $white;\n        padding: 7px 0;\n        background: transparent;\n        transition: border-color 0.2s;\n\n        &::placeholder {\n            color: transparent;\n        }\n\n        &:placeholder-shown ~ label {\n            font-size: 1.3rem;\n            cursor: text;\n            top: 20px;\n        }\n\n        &:focus{\n            padding-bottom: 6px;  \n            font-weight: 700;\n            border-width: 3px;\n            border-image: linear-gradient(to right, $primary,$secondary);\n            border-image-slice: 1;\n\n            ~label{\n                position: absolute;\n                top: 0;\n                display: block;\n                transition: 0.2s;\n                font-size: 1rem;\n                color: $primary;\n                font-weight:700;    \n            }\n        }\n    }\n\n    label{\n        position: absolute;\n        top: 0;\n        display: block;\n        transition: 0.2s;\n        font-size: 1rem;\n        color: $gray;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL190aWN0YWN0b2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9fdGljdGFjdG9lLnNjc3M/YzVkNSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzIwM2IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZXMuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL0JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy90aWN0YWN0b2UvRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy90aWN0YWN0b2UvTW92ZVR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS9pbnB1dERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDBCQUEwQiwwQkFBMEIsdUJBQXVCLEdBQUcsdUJBQXVCLDBCQUEwQiwwQkFBMEIsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLDZCQUE2QixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHVCQUF1QiwyQkFBMkIsNEJBQTRCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxrREFBa0Qsd0NBQXdDLEdBQUcsaURBQWlELHdDQUF3QyxHQUFHLGlEQUFpRCx3Q0FBd0MsR0FBRyxnREFBZ0Qsd0NBQXdDLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLHFCQUFxQixxQkFBcUIsR0FBRyxnQkFBZ0IseUJBQXlCLGdCQUFnQixjQUFjLGtDQUFrQyxlQUFlLHNCQUFzQixnQkFBZ0IsbUJBQW1CLDRCQUE0QixrQ0FBa0MsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsMENBQTBDLHNCQUFzQixpQkFBaUIsY0FBYyxHQUFHLHNCQUFzQix3QkFBd0IscUJBQXFCLHNCQUFzQix3REFBd0QsMEJBQTBCLEdBQUcsOEJBQThCLHVCQUF1QixXQUFXLG1CQUFtQixxQkFBcUIsb0JBQW9CLGdCQUFnQixxQkFBcUIsR0FBRyxnQkFBZ0IsdUJBQXVCLFdBQVcsbUJBQW1CLHFCQUFxQixvQkFBb0IsZ0JBQWdCLEdBQUcsT0FBTywrTkFBK04sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxX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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMseUNBQWM7QUFDekMsa0JBQWtCLG1CQUFPLENBQUMsMkRBQXVCO0FBQ2pELG9CQUFvQixtQkFBTyxDQUFDLG1FQUEyQjtBQUN2RCxtQkFBTyxDQUFDLHNEQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLDREQUE0RDtBQUM1RDtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZpZWxkQmxhY2s6ICNmNWRlYjM7XFxuICAtLWZpZWxkV2hpdGU6ICMzMDgwMzA7XFxuICAtLWZpZWxkQ29sb3I6ICMwMDA7XFxufVxcblxcbltkYXRhLXRoZW1lPURhcmtdIHtcXG4gIC0tZmllbGRCbGFjazogI2ZmZmZmZjtcXG4gIC0tZmllbGRXaGl0ZTogI2ZmZmZmZjtcXG4gIC0tZmllbGRDb2xvcjogI2ZmZjtcXG59XFxuXFxuLkJvYXJkIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWZpZWxkQ29sb3IpO1xcbn1cXG4uQm9hcmQgZGl2IGRpdiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLkJvYXJkIGRpdjpudGgtY2hpbGQoZXZlbikgZGl2Om50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZEJsYWNrKTtcXG59XFxuLkJvYXJkIGRpdjpudGgtY2hpbGQoZXZlbikgZGl2Om50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkV2hpdGUpO1xcbn1cXG4uQm9hcmQgZGl2Om50aC1jaGlsZChvZGQpIGRpdjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmllbGRXaGl0ZSk7XFxufVxcbi5Cb2FyZCBkaXY6bnRoLWNoaWxkKG9kZCkgZGl2Om50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkQmxhY2spO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTVweCAwIDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuLmlucHV0IGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogN3B4IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xcbn1cXG4uaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmlucHV0IGlucHV0OnBsYWNlaG9sZGVyLXNob3duIH4gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjdXJzb3I6IHRleHQ7XFxuICB0b3A6IDIwcHg7XFxufVxcbi5pbnB1dCBpbnB1dDpmb2N1cyB7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci13aWR0aDogM3B4O1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAsICMwMDApO1xcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcbn1cXG4uaW5wdXQgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5pbnB1dCBsYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzAwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fX190aWN0YWN0b2VDb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdGljdGFjdG9lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX19mbGV4T2JqLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX19pbnB1dE9iai5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QUFGSTtFQ1BBLGFBQUE7RURTSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUFLUjtBQUhRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBS1o7QUFBZ0I7RUFDSSxtQ0FBQTtBQUVwQjtBQUFnQjtFQUNJLG1DQUFBO0FBRXBCO0FBS2dCO0VBQ0ksbUNBQUE7QUFIcEI7QUFLZ0I7RUFDSSxtQ0FBQTtBQUhwQjs7QUFVQTtFRWxESSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRjRDSjtBRTFDSTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdGdUMwQjtFRXRDMUIsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUY0Q1I7QUUxQ1E7RUFDSSxrQkFBQTtBRjRDWjtBRXpDUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUYyQ1o7QUV4Q1E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLHFCQUFBO0FGMENaO0FFeENZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdGV007RUVWTixnQkFBQTtBRjBDaEI7QUVyQ0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0ZEZ0M7QUF3Q3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1maWVsZEJsYWNrOiAjZjVkZWIzO1xcbiAgICAtLWZpZWxkV2hpdGU6ICMzMDgwMzA7XFxuICAgIC0tZmllbGRDb2xvcjogIzAwMDtcXG59XFxuXFxuW2RhdGEtdGhlbWU9XFxcIkRhcmtcXFwiXXtcXG4gICAgLS1maWVsZEJsYWNrOiAjZmZmZmZmO1xcbiAgICAtLWZpZWxkV2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tZmllbGRDb2xvcjogI2ZmZjtcXG59XCIsXCJAaW1wb3J0ICdfX19mb250cyc7XFxuQGltcG9ydCAnX190aWN0YWN0b2VDb2xvcnMnO1xcbkBpbXBvcnQgJ19fZmxleE9iaic7XFxuQGltcG9ydCAnX2lucHV0T2JqJztcXG5cXG5cXG5cXG4uQm9hcmR7XFxuICAgIGRpdntcXG4gICAgICAgIEBpbmNsdWRlIEZsZXhPYmooKTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1maWVsZENvbG9yKTtcXG4gICAgICAgIFxcbiAgICAgICAgZGl2e1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbil7XFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkQmxhY2spO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCl7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZFdoaXRlKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCl7XFxuICAgICAgICAgICAgZGl2e1xcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKXtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZWxkV2hpdGUpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKG9kZCl7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWVsZEJsYWNrKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uaW5wdXR7XFxuICAgIEBpbmNsdWRlIElucHV0T2JqKCMwMDAsICMwMDAsICMwMDAsICMwMDApO1xcbn1cIixcIkBtaXhpbiBGbGV4T2JqKCl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtaXhpbiBGbGV4Q2hpbGQoJGNvbnRlbnQpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiAkY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuXCIsXCJAbWl4aW4gSW5wdXRPYmooJHByaW1hcnksICRzZWNvbmRhcnksICR3aGl0ZSwgJGdyYXkpe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcblxcbiAgICBpbnB1dHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyYXk7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xcblxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6cGxhY2Vob2xkZXItc2hvd24gfiBsYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xcbiAgICAgICAgICAgIHRvcDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6Zm9jdXN7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDsgIFxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAgICAgICAgICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRwcmltYXJ5LCRzZWNvbmRhcnkpO1xcbiAgICAgICAgICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcXG5cXG4gICAgICAgICAgICB+bGFiZWx7XFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDsgICAgXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGxhYmVse1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgY29sb3I6ICRncmF5O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tQmcxOiAjZmZmZmZmO1xcbiAgLS1CZzI6ICNGMEYwRjA7XFxuICAtLUJnMzogI0U4RThFODtcXG4gIC0tQmc0OiAjMDM4MUJFO1xcbiAgLS1NYWluRm9udDogIzNFNDY1RTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9RGFya10ge1xcbiAgLS1CZzE6ICM2NjY7XFxuICAtLUJnMjogIzMzMztcXG4gIC0tQmczOiAjNDQ0O1xcbiAgLS1CZzQ6ICMwMzgxQkU7XFxuICAtLU1haW5Gb250OiAjZmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1NYWluRm9udCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzIpO1xcbiAgZm9udC1zaXplOiAxLjEzcmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5ICNOYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbmJvZHkgI05hdmJhciAjTkIyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMyBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzMpO1xcbn1cXG5ib2R5ICNDb25lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEyMDBweDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICB3aWR0aDogMjMwcHg7XFxufVxcbmJvZHkgI0NvbmVudCAjTGVmdEJhciB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmczKTtcXG59XFxuYm9keSAjQ29uZW50ICNHYW1lIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1TaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmcxKTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgd2lkdGg6IDk1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19fX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19wYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX19fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fX2ZsZXhPYmouc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0FDREo7O0FDZEE7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JDQ0U7RURBRixTQUFBO0FEaUJKO0FDZkk7RUVMQSxhQUFBO0VGT0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJDTEY7RURNRSxhQUFBO0FEaUJSO0FDZlE7RUVUSiwyQkZVMkI7RUVUM0IsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBSDJCSjtBQ2xCUTtFRVpKLHVCRmEyQjtFRVozQixtQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0FIaUNKO0FDckJRO0VFZkoseUJGZ0IyQjtFRWYzQixtQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0FIdUNKO0FDekJZO0VBQ0ksZUFBQTtBRDJCaEI7QUMxQmdCO0VBQ0ksNEJBQUE7QUQ0QnBCO0FDdEJJO0VFOUJBLGFBQUE7RUZnQ0ksY0FBQTtFQUNBLGFBQUE7QUR3QlI7QUN0QlE7RUFDSSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBRHdCWjtBQ3RCWTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FEd0JoQjtBQ3ZCZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUR5QnBCO0FDeEJvQjtFQUNJLDRCQUFBO0FEMEJ4QjtBQ3BCUTtFRWxESix1QkZtRDJCO0VFbEQzQixtQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VGaURRLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEeUJaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1CZzE6ICNmZmZmZmY7XFxuICAgIC0tQmcyOiAjRjBGMEYwO1xcbiAgICAtLUJnMzogI0U4RThFODtcXG4gICAgLS1CZzQ6ICMwMzgxQkU7XFxuXFxuICAgIC0tTWFpbkZvbnQ6ICMzRTQ2NUU7XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJEYXJrXFxcIl17XFxuICAgIC0tQmcxOiAjNjY2O1xcbiAgICAtLUJnMjogIzMzMztcXG4gICAgLS1CZzM6ICM0NDQ7XFxuICAgIC0tQmc0OiAjMDM4MUJFO1xcblxcbiAgICAtLU1haW5Gb250OiAjZmZmO1xcbn1cIixcIjpyb290IHtcXG4gIC0tQmcxOiAjZmZmZmZmO1xcbiAgLS1CZzI6ICNGMEYwRjA7XFxuICAtLUJnMzogI0U4RThFODtcXG4gIC0tQmc0OiAjMDM4MUJFO1xcbiAgLS1NYWluRm9udDogIzNFNDY1RTtcXG59XFxuXFxuW2RhdGEtdGhlbWU9RGFya10ge1xcbiAgLS1CZzE6ICM2NjY7XFxuICAtLUJnMjogIzMzMztcXG4gIC0tQmczOiAjNDQ0O1xcbiAgLS1CZzQ6ICMwMzgxQkU7XFxuICAtLU1haW5Gb250OiAjZmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1NYWluRm9udCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzIpO1xcbiAgZm9udC1zaXplOiAxLjEzcmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5ICNOYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbmJvZHkgI05hdmJhciAjTkIyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5ib2R5ICNOYXZiYXIgI05CMyBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYm9keSAjTmF2YmFyICNOQjMgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzMpO1xcbn1cXG5ib2R5ICNDb25lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEyMDBweDtcXG59XFxuYm9keSAjQ29uZW50ICNMZWZ0QmFyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICB3aWR0aDogMjMwcHg7XFxufVxcbmJvZHkgI0NvbmVudCAjTGVmdEJhciB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5ib2R5ICNDb25lbnQgI0xlZnRCYXIgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmczKTtcXG59XFxuYm9keSAjQ29uZW50ICNHYW1lIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1TaGFkb3cpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmcxKTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgd2lkdGg6IDk1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cIixcImJvZHl7XFxuICAgIGNvbG9yOiB2YXIoLS1NYWluRm9udCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMik7XFxuICAgIGZvbnQtc2l6ZTogJGYxODtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBcXG4gICAgI05hdmJhcntcXG4gICAgICAgIEBpbmNsdWRlIEZsZXhPYmooKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggdmFyKC0tU2hhZG93KTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAkZjIyO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIFxcbiAgICAgICAgI05CMXtcXG4gICAgICAgICAgICBAaW5jbHVkZSBGbGV4Q2hpbGQoZmxleC1zdGFydCk7XFxuICAgICAgICB9XFxuICAgICAgICAjTkIye1xcbiAgICAgICAgICAgIEBpbmNsdWRlIEZsZXhDaGlsZChjZW50ZXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgI05CM3tcXG4gICAgICAgICAgICBAaW5jbHVkZSBGbGV4Q2hpbGQoZmxleC1lbmQpO1xcbiAgICAgICAgICAgIHNwYW57XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMyk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgXFxuICAgICNDb25lbnR7XFxuICAgICAgICBAaW5jbHVkZSBGbGV4T2JqKCk7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7ICAgICAgICBcXG4gICAgICAgIFxcbiAgICAgICAgI0xlZnRCYXJ7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCB2YXIoLS1TaGFkb3cpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJnMSk7XFxuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIHVse1xcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgICAgIGxpe1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CZzMpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAjR2FtZXtcXG4gICAgICAgICAgICBAaW5jbHVkZSBGbGV4Q2hpbGQoY2VudGVyKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHZhcigtLVNoYWRvdyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmcxKTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgICAgICB3aWR0aDogOTUwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFwiJGYxMDogMC42cmVtO1xcbiRmMTI6IDAuNzRyZW07XFxuJGYxNDogMC44NXJlbTtcXG4kZjE2OiAxcmVtO1xcbiRmMTg6IDEuMTNyZW07XFxuJGYyMDogMS4yNXJlbTtcXG4kZjIyOiAxLjRyZW07XFxuJGYyNDogMS41NXJlbTtcIixcIkBtaXhpbiBGbGV4T2JqKCl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtaXhpbiBGbGV4Q2hpbGQoJGNvbnRlbnQpIHtcXG4gICAganVzdGlmeS1jb250ZW50OiAkY29udGVudDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL190aWN0YWN0b2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSB2b2lkIDA7XG52YXIgQmF0dGxlU2hpcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmF0dGxlU2hpcHMoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU3RhdGtpXCI7XG4gICAgfVxuICAgIEJhdHRsZVNoaXBzLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfTtcbiAgICByZXR1cm4gQmF0dGxlU2hpcHM7XG59KCkpO1xuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IEJhdHRsZVNoaXBzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVzID0gdm9pZCAwO1xudmFyIEdhbWVzO1xuKGZ1bmN0aW9uIChHYW1lcykge1xuICAgIEdhbWVzW0dhbWVzW1wiVGljVGFjVG9lXCJdID0gMV0gPSBcIlRpY1RhY1RvZVwiO1xuICAgIEdhbWVzW0dhbWVzW1wiQmF0dGxlU2hpcHNcIl0gPSAyXSA9IFwiQmF0dGxlU2hpcHNcIjtcbn0pKEdhbWVzID0gZXhwb3J0cy5HYW1lcyB8fCAoZXhwb3J0cy5HYW1lcyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZWxkXCIpKTtcbnZhciBMaW5lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGluZVwiKSk7XG52YXIgTW92ZVR5cGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Nb3ZlVHlwZVwiKSk7XG52YXIgQm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm9hcmQoc2l6ZSwgd2luU2l6ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZpZWxkTGlzdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLm1vdmUgPSBNb3ZlVHlwZV8xLmRlZmF1bHQuY2lyY2xlO1xuICAgICAgICB0aGlzLk1ha2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIHZhciBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGNsaWNrID0gdGhpcy5maWVsZExpc3QuZmluZCgoZWxlKSA9PiBlbGUuRXF1YWwoaWQpKTtcbiAgICAgICAgICAgIHZhciBjbGljaztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMuZmllbGRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfdGhpcy5maWVsZExpc3QubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmZpZWxkTGlzdFtpXVtqXS5lbGVtZW50LmlkID09PSB0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljayA9IF90aGlzLmZpZWxkTGlzdFtpXVtqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2xpY2sgJiYgKGNsaWNrID09PSBudWxsIHx8IGNsaWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbGljay5TdGF0ZSgpKSA9PSBNb3ZlVHlwZV8xLmRlZmF1bHQubnVsbCkge1xuICAgICAgICAgICAgICAgIGNsaWNrLk1ha2VNb3ZlKF90aGlzLm1vdmUpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5tb3ZlID09IE1vdmVUeXBlXzEuZGVmYXVsdC5jaXJjbGUpXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1vdmUgPSBNb3ZlVHlwZV8xLmRlZmF1bHQuY3Jvc3M7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3ZlID0gTW92ZVR5cGVfMS5kZWZhdWx0LmNpcmNsZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5DaGVja1dpbihjbGljay5yb3csIGNsaWNrLmNvbHVtbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMud2luU2l6ZSA9IHdpblNpemU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmJvYXJkLmNsYXNzTGlzdC5hZGQoXCJCb2FyZFwiKTtcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgfVxuICAgIEJvYXJkLnByb3RvdHlwZS5Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gbmV3IExpbmVfMS5kZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmFwcGVuZENoaWxkKGxpbmUuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkTGlzdFtpXSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IG5ldyBGaWVsZF8xLmRlZmF1bHQoaSwgaik7XG4gICAgICAgICAgICAgICAgbGluZS5lbGVtZW50LmFwcGVuZENoaWxkKGZpZWxkLmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMaXN0W2ldW2pdID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgZmllbGQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5NYWtlTW92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJvYXJkLnByb3RvdHlwZS5DaGVja1dpbiA9IGZ1bmN0aW9uIChyb3csIGNvbHVtbikge1xuICAgICAgICB2YXIgaG9yaXpvbnRhbCA9IDEsIHZlcnRpY2FsID0gMSwgZGlhZ29uYWxseVggPSAxLCBkaWFnb25hbGx5WSA9IDE7XG4gICAgICAgIHZhciBtb3ZlID0gdGhpcy5maWVsZExpc3Rbcm93XVtjb2x1bW5dLlN0YXRlKCk7XG4gICAgICAgIHZhciBsID0gdGhpcy5zaXplO1xuICAgICAgICBmb3IgKHZhciBpID0gY29sdW1uIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIC8vbGV3b1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W3Jvd11baV0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBjb2x1bW4gKyAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAvL3ByYXdvXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3Rbcm93XVtpXS5TdGF0ZSgpID09IG1vdmUpIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXFxcXG4gICAgICAgIGZvciAodmFyIGogPSByb3cgLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgLy9nb3JhXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3Rbal1bY29sdW1uXS5TdGF0ZSgpID09IG1vdmUpIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSByb3cgKyAxOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAvL2RvbFxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W2pdW2NvbHVtbl0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdmVydGljYWwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcXFxcbiAgICAgICAgZm9yICh2YXIgaSA9IGNvbHVtbiAtIDEsIGogPSByb3cgLSAxOyBpID49IDAgJiYgaiA+PSAwOyBpLS0sIGotLSkge1xuICAgICAgICAgICAgLy9sZXdvIGkgZ29yYVxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRMaXN0W2pdW2ldLlN0YXRlKCkgPT0gbW92ZSkge1xuICAgICAgICAgICAgICAgIGRpYWdvbmFsbHlYKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IGNvbHVtbiArIDEsIGogPSByb3cgKyAxOyBpIDwgbCAmJiBqIDwgbDsgaSsrLCBqKyspIHtcbiAgICAgICAgICAgIC8vcHJhd28gaSBkb2xcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkTGlzdFtqXVtpXS5TdGF0ZSgpID09IG1vdmUpIHtcbiAgICAgICAgICAgICAgICBkaWFnb25hbGx5WCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxcXFxuICAgICAgICBmb3IgKHZhciBpID0gY29sdW1uICsgMSwgaiA9IHJvdyAtIDE7IGkgPCBsICYmIGogPj0gMDsgaSsrLCBqLS0pIHtcbiAgICAgICAgICAgIC8vcHJhd28gaSBnb3JhXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3Rbal1baV0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxseVkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gY29sdW1uIC0gMSwgaiA9IHJvdyArIDE7IGkgPj0gMCAmJiBqIDwgbDsgaS0tLCBqKyspIHtcbiAgICAgICAgICAgIC8vcHJhd28gaSBnb3JhXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3Rbal1baV0uU3RhdGUoKSA9PSBtb3ZlKSB7XG4gICAgICAgICAgICAgICAgZGlhZ29uYWxseVkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PSB0aGlzLndpblNpemUgfHxcbiAgICAgICAgICAgIHZlcnRpY2FsID09IHRoaXMud2luU2l6ZSB8fFxuICAgICAgICAgICAgZGlhZ29uYWxseVggPT0gdGhpcy53aW5TaXplIHx8XG4gICAgICAgICAgICBkaWFnb25hbGx5WSA9PSB0aGlzLndpblNpemUpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwid3lncmHFgmXFmyBcIiArIG1vdmUpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCb2FyZDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCb2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1vdmVUeXBlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTW92ZVR5cGVcIikpO1xudmFyIEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpZWxkKHJvdywgY29sdW1uKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IFwiRlwiICsgcm93ICsgXCJfXCIgKyBjb2x1bW47XG4gICAgICAgIHRoaXMucm93ID0gcm93O1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICB9XG4gICAgRmllbGQucHJvdG90eXBlLkVxdWFsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCA9PT0gdGhpcy5lbGVtZW50LmlkO1xuICAgIH07XG4gICAgRmllbGQucHJvdG90eXBlLlN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZWxlbWVudC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJPXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vdmVUeXBlXzEuZGVmYXVsdC5jaXJjbGU7XG4gICAgICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNb3ZlVHlwZV8xLmRlZmF1bHQuY3Jvc3M7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBNb3ZlVHlwZV8xLmRlZmF1bHQubnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRmllbGQucHJvdG90eXBlLk1ha2VNb3ZlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIE1vdmVUeXBlXzEuZGVmYXVsdC5jaXJjbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IFwiT1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBNb3ZlVHlwZV8xLmRlZmF1bHQuY3Jvc3M6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IFwiWFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRmllbGQ7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpbmUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICByZXR1cm4gTGluZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTW92ZVR5cGU7XG4oZnVuY3Rpb24gKE1vdmVUeXBlKSB7XG4gICAgTW92ZVR5cGVbXCJjaXJjbGVcIl0gPSBcIk9cIjtcbiAgICBNb3ZlVHlwZVtcImNyb3NzXCJdID0gXCJYXCI7XG4gICAgTW92ZVR5cGVbXCJudWxsXCJdID0gXCItXCI7XG59KShNb3ZlVHlwZSB8fCAoTW92ZVR5cGUgPSB7fSkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTW92ZVR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCb2FyZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0JvYXJkXCIpKTtcbnZhciBJbnB1dERhdGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW5wdXREYXRhKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNyZWF0ZUlucHV0ID0gZnVuY3Rpb24gKG5hbWUsIGlkKSB7XG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IG5hbWU7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIHJldHVybiBkaXY7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBpbnB1dDEgPSB0aGlzLmNyZWF0ZUlucHV0KFwiSWxvc2MgcG9sXCIsIFwiZmllbGRzXCIpO1xuICAgICAgICB2YXIgaW5wdXQyID0gdGhpcy5jcmVhdGVJbnB1dChcInd5Z3J5d2FqYWNhIGtvbWJpbmFjamFcIiwgXCJ3aW5cIik7XG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlJvenBvY3puaWogZ3LEmVwiO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbjEgPSAraW5wdXQxLmNoaWxkTm9kZXNbMF0udmFsdWU7XG4gICAgICAgICAgICB2YXIgaW4yID0gK2lucHV0MS5jaGlsZE5vZGVzWzBdLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGJvYXJkID0gbmV3IEJvYXJkXzEuZGVmYXVsdChpbjEsIGluMik7XG4gICAgICAgICAgICBpZiAoaW4xIDwgMyB8fCBpbjIgPCAzKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNaW5pbWFsbmUgd2FydG/Fm2NpIHRvIDNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgX3RoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChib2FyZC5ib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGlucHV0Mik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXREYXRhO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaWNUYWNUb2UgPSB2b2lkIDA7XG52YXIgaW5wdXREYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5wdXREYXRhXCIpKTtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvX3RpY3RhY3RvZS5zY3NzXCIpO1xudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaWNUYWNUb2UoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiS8OzxYJrbyBpIGtyennFvHlrXCI7XG4gICAgfVxuICAgIFRpY1RhY1RvZS5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IG5ldyBpbnB1dERhdGFfMS5kZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGlucHV0LmVsZW1lbnQ7XG4gICAgfTtcbiAgICByZXR1cm4gVGljVGFjVG9lO1xufSgpKTtcbmV4cG9ydHMuVGljVGFjVG9lID0gVGljVGFjVG9lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdhbWVzX2VudW1fMSA9IHJlcXVpcmUoXCIuL2dhbWVzLmVudW1cIik7XG52YXIgdGljdGFjdG9lXzEgPSByZXF1aXJlKFwiLi90aWN0YWN0b2UvdGljdGFjdG9lXCIpO1xudmFyIGJhdHRsZXNoaXBzXzEgPSByZXF1aXJlKFwiLi9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwc1wiKTtcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcbnZhciBBcHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgQXBwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWVudUNvbnRhaW5lciA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0xlZnRCYXJcIikpOyAvLyBrb250ZW5lciBtZW51IGRvc3TEmXBueWNoIGdpZXJcbiAgICAgICAgdmFyIGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0dhbWVcIik7IC8vIGtvbnRlbmVyIGfFgsOzd255IGVrcmFudSB6IGdyxIVcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTkIzPnNwYW5cIik7XG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpOyAvLyBsaXN0YSBwb3p5Y2ppIHcgbWVudSBkb3N0xJlwbnljaCBnaWVyXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ2FtZXNfZW51bV8xLkdhbWVzKS5zcGxpY2UoT2JqZWN0LmtleXMoZ2FtZXNfZW51bV8xLkdhbWVzKS5sZW5ndGggLyAyLCBPYmplY3Qua2V5cyhnYW1lc19lbnVtXzEuR2FtZXMpLmxlbmd0aCAvIDIpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gZWxlbWVudDtcbiAgICAgICAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVGljVGFjVG9lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ldyB0aWN0YWN0b2VfMS5UaWNUYWNUb2UoKS5nZXRHYW1lRWxlbWVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQmF0dGxlU2hpcHNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3IGJhdHRsZXNoaXBzXzEuQmF0dGxlU2hpcHMoKS5nZXRHYW1lRWxlbWVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSlcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ0RhcmsnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE86IFphaW1wbGVtZW50dWogd3pvcnplYyBmYWJyeWtpL21ldG9keSBmYWJyeWt1asSFY2VqLCB0YWsgYWJ5IG5hIHBvZHN0YXdpZSBrb25rcmV0bmVqIHdhcnRvxZtjaSB6IGVudW1cbiAgICAgICAgLy8gendyw7NjacSHIG9iaWVrdCBncnkuIFogdGVnbyBvYmlla3R1IG1vxbxuYSBuYXN0xJlwbmllIHBvYnJhxIcgbmF6d8SZIGdyeSBpIGRvZGHEhyBkbyBtZW51IG9yYXogbWV0b2TEmSB6d3JhY2FqxIVjxIVcbiAgICAgICAgLy8gc2FtxIUgZ3LEmSBpIHBvIGtsaWtuacSZY2l1IHcgd3licmFueSBlbGVtZW50IGxpc3R5IHd5d2/Fgnl3YcSHIGrEhSwgYWJ5IGRva2xlamHEhyB6YXdhcnRvxZvEhyBkbyBnYW1lQ29udGFpbmVyLlxuICAgICAgICAvLyBBYnkgd3nFm3dpZXRsacSHIG1lbnUgbmFsZcW8eSBuYXBpc2HEhyBwxJl0bMSZLCBrdMOzdGEgcHJ6ZWl0ZXJ1amUgcG8gd3N6eXN0a2ljaCB3YXJ0b8WbY2lhY2ggZW51bSdhXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwO1xufSgpKTtcbm5ldyBBcHAoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=