/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domain/models/diary/Diary.ts":
/*!******************************************!*\
  !*** ./src/domain/models/diary/Diary.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Diary = /** @class */ (function () {\n    function Diary(id, text, createDate, updateDate) {\n        this.id = id;\n        this.text = text;\n        this.createDate = createDate;\n        this.updateDate = updateDate;\n    }\n    return Diary;\n}());\nexports.default = Diary;\n\n\n//# sourceURL=webpack:///./src/domain/models/diary/Diary.ts?");

/***/ }),

/***/ "./src/domain/models/diary/DiaryCreateDate.ts":
/*!****************************************************!*\
  !*** ./src/domain/models/diary/DiaryCreateDate.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DiaryCreateDate = /** @class */ (function () {\n    function DiaryCreateDate(value) {\n        if (value === null || value === undefined) {\n            throw new Error(\"value cannot be null or undefined.\");\n        }\n        if (new Date() > value) {\n            throw new Error(\"value cannot be less than current date.\");\n        }\n        this.value = value;\n    }\n    return DiaryCreateDate;\n}());\nexports.default = DiaryCreateDate;\n\n\n//# sourceURL=webpack:///./src/domain/models/diary/DiaryCreateDate.ts?");

/***/ }),

/***/ "./src/domain/models/diary/DiaryId.ts":
/*!********************************************!*\
  !*** ./src/domain/models/diary/DiaryId.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DiaryId = /** @class */ (function () {\n    function DiaryId(value) {\n        if (value === null || value === undefined) {\n            throw new Error(\"value cannot be null or undefined.\");\n        }\n        this.value = value;\n    }\n    return DiaryId;\n}());\nexports.default = DiaryId;\n\n\n//# sourceURL=webpack:///./src/domain/models/diary/DiaryId.ts?");

/***/ }),

/***/ "./src/domain/models/diary/DiaryText.ts":
/*!**********************************************!*\
  !*** ./src/domain/models/diary/DiaryText.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DiaryText = /** @class */ (function () {\n    function DiaryText(value) {\n        this.value = value;\n    }\n    return DiaryText;\n}());\nexports.default = DiaryText;\n\n\n//# sourceURL=webpack:///./src/domain/models/diary/DiaryText.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import UUID from 'uuid';\nvar readline = __importStar(__webpack_require__(/*! readline */ \"readline\"));\nvar Diary_1 = __importDefault(__webpack_require__(/*! @/domain/models/diary/Diary */ \"./src/domain/models/diary/Diary.ts\"));\nvar DiaryId_1 = __importDefault(__webpack_require__(/*! @/domain/models/diary/DiaryId */ \"./src/domain/models/diary/DiaryId.ts\"));\nvar DiaryText_1 = __importDefault(__webpack_require__(/*! @/domain/models/diary/DiaryText */ \"./src/domain/models/diary/DiaryText.ts\"));\nvar DiaryCreateDate_1 = __importDefault(__webpack_require__(/*! @/domain/models/diary/DiaryCreateDate */ \"./src/domain/models/diary/DiaryCreateDate.ts\"));\nvar diaries = new Array();\nprocess.stdin.resume();\nprocess.stdin.setEncoding('utf8');\nconsole.log(\"input diary text.\");\nvar reader = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\nreader.on('line', function (line) {\n    var diaryId = new DiaryId_1.default('aa');\n    var text = new DiaryText_1.default(line);\n    var now = new DiaryCreateDate_1.default(new Date());\n    diaries.push(new Diary_1.default(diaryId, text, now));\n});\nreader.on('close', function () {\n    console.log(diaries);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"readline\");\n\n//# sourceURL=webpack:///external_%22readline%22?");

/***/ })

/******/ });