/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Field_1 = __importDefault(__webpack_require__(/*! ./Field */ \"./src/Field.ts\"));\r\nvar Line_1 = __importDefault(__webpack_require__(/*! ./Line */ \"./src/Line.ts\"));\r\nvar MoveType_1 = __importDefault(__webpack_require__(/*! ./MoveType */ \"./src/MoveType.ts\"));\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        var _this = this;\r\n        this.fieldList = new Array();\r\n        this.move = MoveType_1.default.circle;\r\n        this.MakeMove = function (e) {\r\n            var target = e.target;\r\n            var id = target.id;\r\n            var click = _this.fieldList.find(function (ele) { return ele.Equal(id); });\r\n            if (click && (click === null || click === void 0 ? void 0 : click.State()) == MoveType_1.default.null) {\r\n                click.MakeMove(_this.move);\r\n                if (_this.move == MoveType_1.default.circle)\r\n                    _this.move = MoveType_1.default.cross;\r\n                else\r\n                    _this.move = MoveType_1.default.circle;\r\n                _this.CheckWin(click.row, click.column);\r\n            }\r\n        };\r\n        this.size = size;\r\n        this.board = document.createElement(\"div\");\r\n        this.board.classList.add(\"Board\");\r\n        document.body.appendChild(this.board);\r\n        this.Init();\r\n    }\r\n    Board.prototype.Init = function () {\r\n        this.board.innerHTML = \"\";\r\n        for (var i = 0; i < this.size; i++) {\r\n            var line = new Line_1.default();\r\n            this.board.appendChild(line.element);\r\n            for (var j = 0; j < this.size; j++) {\r\n                var field = new Field_1.default(i, j);\r\n                line.element.appendChild(field.element);\r\n                this.fieldList.push(field);\r\n                field.element.addEventListener(\"click\", this.MakeMove);\r\n            }\r\n        }\r\n    };\r\n    Board.prototype.CheckWin = function (row, column) {\r\n        for (var i = 0; i < 3; i++) {\r\n            for (var j = 0; j < 3; j++) {\r\n            }\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar MoveType_1 = __importDefault(__webpack_require__(/*! ./MoveType */ \"./src/MoveType.ts\"));\r\nvar Field = /** @class */ (function () {\r\n    function Field(row, column) {\r\n        this.element = document.createElement(\"div\");\r\n        this.element.classList.add(\"Field\");\r\n        this.element.id = \"F\" + row + \"_\" + column;\r\n        this.row = row;\r\n        this.column = column;\r\n        if ((row + column) % 2 == 0)\r\n            this.element.style.backgroundColor = \"blue\";\r\n        else\r\n            this.element.style.backgroundColor = \"aqua\";\r\n    }\r\n    Field.prototype.Equal = function (id) {\r\n        return id === this.element.id;\r\n    };\r\n    Field.prototype.State = function () {\r\n        switch (this.element.innerText) {\r\n            case \"O\":\r\n                return MoveType_1.default.circle;\r\n            case \"X\":\r\n                return MoveType_1.default.cross;\r\n            default:\r\n                return MoveType_1.default.null;\r\n        }\r\n    };\r\n    Field.prototype.MakeMove = function (type) {\r\n        switch (type) {\r\n            case MoveType_1.default.circle:\r\n                this.element.innerText = \"O\";\r\n                break;\r\n            case MoveType_1.default.cross:\r\n                this.element.innerText = \"X\";\r\n                break;\r\n        }\r\n    };\r\n    return Field;\r\n}());\r\nexports.default = Field;\r\n\n\n//# sourceURL=webpack:///./src/Field.ts?");

/***/ }),

/***/ "./src/Line.ts":
/*!*********************!*\
  !*** ./src/Line.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Line = /** @class */ (function () {\r\n    function Line() {\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add(\"Line\");\r\n    }\r\n    return Line;\r\n}());\r\nexports.default = Line;\r\n\n\n//# sourceURL=webpack:///./src/Line.ts?");

/***/ }),

/***/ "./src/MoveType.ts":
/*!*************************!*\
  !*** ./src/MoveType.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar MoveType;\r\n(function (MoveType) {\r\n    MoveType[MoveType[\"circle\"] = 0] = \"circle\";\r\n    MoveType[MoveType[\"cross\"] = 1] = \"cross\";\r\n    MoveType[MoveType[\"null\"] = 2] = \"null\";\r\n})(MoveType || (MoveType = {}));\r\nexports.default = MoveType;\r\n\n\n//# sourceURL=webpack:///./src/MoveType.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Board_1 = __importDefault(__webpack_require__(/*! ./Board */ \"./src/Board.ts\"));\r\nnew Board_1.default(5);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;