"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = String(process.env.DB);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n// connecting to MongoDB Database\nconst connectToMongoDB = ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(db, ()=>{\n        console.log(\"MongoDB is working Properly\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUN6QixNQUFNQyxLQUFhQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLEVBQUUsRUFBRTtBQUNqREwsbURBQVksQ0FBQyxlQUFlLEtBQUs7QUFDakMsaUNBQWlDO0FBQ2pDLE1BQU1PLG1CQUFtQixJQUFZO0lBQ25DUCx1REFBZ0IsQ0FBQ0MsSUFBSSxJQUFNO1FBQ3pCUSxRQUFRQyxHQUFHLENBQUM7SUFDZDtBQUNGO0FBQ0EsaUVBQWVILGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5leHBvcnQgY29uc3QgZGI6IHN0cmluZyA9IFN0cmluZyhwcm9jZXNzLmVudi5EQik7XHJcbm1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIGZhbHNlKTtcclxuLy8gY29ubmVjdGluZyB0byBNb25nb0RCIERhdGFiYXNlXHJcbmNvbnN0IGNvbm5lY3RUb01vbmdvREIgPSAoKTogdm9pZCA9PiB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChkYiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJNb25nb0RCIGlzIHdvcmtpbmcgUHJvcGVybHlcIik7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb01vbmdvREI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiIiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkRCIiwic2V0IiwiY29ubmVjdFRvTW9uZ29EQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/hello.ts":
/*!********************************!*\
  !*** ./src/pages/api/hello.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/db */ \"(api)/./lib/db.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n    (0,lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hlbGxvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkVBQTZFO0FBQ3ZDO0FBT3ZCLFNBQVNDLFFBQ3RCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQUEsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxNQUFNO0lBQVc7SUFDeENOLGtEQUFnQkE7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS9oZWxsby50cz9iMmE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgY29ubmVjdFRvTW9uZ29EQiBmcm9tIFwibGliL2RiXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBcIkpvaG4gRG9lXCIgfSk7XG4gIGNvbm5lY3RUb01vbmdvREIoKTtcbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9Nb25nb0RCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();