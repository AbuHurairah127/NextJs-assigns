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
exports.id = "pages/api/tasks/add-task";
exports.ids = ["pages/api/tasks/add-task"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = String(process.env.DB);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n// connecting to MongoDB Database\nconst connectToMongoDB = ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(db, ()=>{\n        console.log(\"Connected to DB.\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFDekIsTUFBTUMsS0FBYUMsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxFQUFFLEVBQUU7QUFDakRMLG1EQUFZLENBQUMsZUFBZSxLQUFLO0FBQ2pDLGlDQUFpQztBQUNqQyxNQUFNTyxtQkFBbUIsSUFBWTtJQUNuQ1AsdURBQWdCLENBQUNDLElBQUksSUFBTTtRQUN6QlEsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7QUFDRjtBQUNBLGlFQUFlSCxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmV4cG9ydCBjb25zdCBkYjogc3RyaW5nID0gU3RyaW5nKHByb2Nlc3MuZW52LkRCKTtcclxubW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgZmFsc2UpO1xyXG4vLyBjb25uZWN0aW5nIHRvIE1vbmdvREIgRGF0YWJhc2VcclxuY29uc3QgY29ubmVjdFRvTW9uZ29EQiA9ICgpOiB2b2lkID0+IHtcclxuICBtb25nb29zZS5jb25uZWN0KGRiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBEQi5cIik7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb01vbmdvREI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRiIiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIkRCIiwic2V0IiwiY29ubmVjdFRvTW9uZ29EQiIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/tasks/add-task.ts":
/*!*****************************************!*\
  !*** ./src/pages/api/tasks/add-task.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _model_taskModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/taskModel */ \"(api)/./src/pages/api/tasks/model/taskModel.ts\");\n\n\n\nconst addTask = async (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const task = await _model_taskModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            task: req.body.task,\n            isCompleted: req.body.isCompleted,\n            createdBy: new (mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId)(req.body.createdBy)\n        });\n        res.status(200).json(task);\n    } catch (error) {\n        res.status(503).send(\"Some error occurred.\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL2FkZC10YXNrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1I7QUFFSztBQUVyQyxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNuRSxJQUFJO1FBQ0ZMLG1EQUFnQkE7UUFFaEIsTUFBTU0sT0FBTyxNQUFNSiwrREFBVyxDQUFDO1lBQzdCSSxNQUFNRixJQUFJSSxJQUFJLENBQUNGLElBQUk7WUFDbkJHLGFBQWFMLElBQUlJLElBQUksQ0FBQ0MsV0FBVztZQUNqQ0MsV0FBVyxJQUFJVCxnRUFBdUIsQ0FBQ0csSUFBSUksSUFBSSxDQUFDRSxTQUFTO1FBQzNEO1FBQ0FMLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNSO0lBQ3ZCLEVBQUUsT0FBT1MsT0FBTztRQUNkVixJQUFJUSxNQUFNLENBQUMsS0FBS0csSUFBSSxDQUFDO0lBQ3ZCO0FBQ0Y7QUFDQSxpRUFBZWIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS90YXNrcy9hZGQtdGFzay50cz8yOGU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0VG9Nb25nb0RCIGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2RlbC90YXNrTW9kZWxcIjtcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29ubmVjdFRvTW9uZ29EQigpO1xyXG5cclxuICAgIGNvbnN0IHRhc2sgPSBhd2FpdCBUYXNrLmNyZWF0ZSh7XHJcbiAgICAgIHRhc2s6IHJlcS5ib2R5LnRhc2ssXHJcbiAgICAgIGlzQ29tcGxldGVkOiByZXEuYm9keS5pc0NvbXBsZXRlZCxcclxuICAgICAgY3JlYXRlZEJ5OiBuZXcgbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQocmVxLmJvZHkuY3JlYXRlZEJ5KSxcclxuICAgIH0pO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odGFzayk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAzKS5zZW5kKFwiU29tZSBlcnJvciBvY2N1cnJlZC5cIik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrO1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvTW9uZ29EQiIsIm1vbmdvb3NlIiwiVGFzayIsImFkZFRhc2siLCJyZXEiLCJyZXMiLCJ0YXNrIiwiY3JlYXRlIiwiYm9keSIsImlzQ29tcGxldGVkIiwiY3JlYXRlZEJ5IiwiVHlwZXMiLCJPYmplY3RJZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tasks/add-task.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/tasks/model/taskModel.ts":
/*!************************************************!*\
  !*** ./src/pages/api/tasks/model/taskModel.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst taskSchema = new Schema({\n    task: {\n        type: String,\n        require: true\n    },\n    isCompleted: {\n        type: Boolean,\n        required: true\n    },\n    createdBy: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        require: true\n    }\n}, {\n    timestamps: true\n});\nconst Task = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Task) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Task\", taskSchema);\nTask.watch().on(\"change\", (data)=>console.log(data));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL21vZGVsL3Rhc2tNb2RlbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGFBQWEsSUFBSUQsT0FDckI7SUFDRUUsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxTQUFTLElBQUk7SUFBQztJQUNwQ0MsYUFBYTtRQUFFSCxNQUFNSTtRQUFTQyxVQUFVLElBQUk7SUFBQztJQUM3Q0MsV0FBVztRQUFFTixNQUFNSixnRUFBdUI7UUFBRU0sU0FBUyxJQUFJO0lBQUM7QUFDNUQsR0FDQTtJQUFFTyxZQUFZLElBQUk7QUFBQztBQUVyQixNQUFNQyxPQUFPZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRRTtBQUU1RFksS0FBS0csS0FBSyxHQUFHQyxFQUFFLENBQUMsVUFBVSxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGO0FBQ2hELGlFQUFlTCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL21vZGVsL3Rhc2tNb2RlbC50cz9kNDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgdGFza1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgdGFzazogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmU6IHRydWUgfSxcclxuICAgIGlzQ29tcGxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBjcmVhdGVkQnk6IHsgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlcXVpcmU6IHRydWUgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcbmNvbnN0IFRhc2sgPSBtb25nb29zZS5tb2RlbHMuVGFzayB8fCBtb25nb29zZS5tb2RlbChcIlRhc2tcIiwgdGFza1NjaGVtYSk7XHJcblxyXG5UYXNrLndhdGNoKCkub24oXCJjaGFuZ2VcIiwgKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidGFza1NjaGVtYSIsInRhc2siLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZSIsImlzQ29tcGxldGVkIiwiQm9vbGVhbiIsInJlcXVpcmVkIiwiY3JlYXRlZEJ5IiwiVHlwZXMiLCJPYmplY3RJZCIsInRpbWVzdGFtcHMiLCJUYXNrIiwibW9kZWxzIiwibW9kZWwiLCJ3YXRjaCIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tasks/model/taskModel.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/tasks/add-task.ts"));
module.exports = __webpack_exports__;

})();