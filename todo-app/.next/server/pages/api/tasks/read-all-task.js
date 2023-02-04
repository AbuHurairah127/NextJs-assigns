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
exports.id = "pages/api/tasks/read-all-task";
exports.ids = ["pages/api/tasks/read-all-task"];
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

/***/ "(api)/./src/pages/api/tasks/model/taskModel.ts":
/*!************************************************!*\
  !*** ./src/pages/api/tasks/model/taskModel.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst taskSchema = new Schema({\n    task: {\n        type: String,\n        require: true\n    },\n    isCompleted: {\n        type: Boolean,\n        required: true\n    },\n    createdBy: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        require: true\n    }\n}, {\n    timestamps: true\n});\nconst Task = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Task) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Task\", taskSchema);\nTask.watch().on(\"change\", (data)=>console.log(data));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL21vZGVsL3Rhc2tNb2RlbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGFBQWEsSUFBSUQsT0FDckI7SUFDRUUsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxTQUFTLElBQUk7SUFBQztJQUNwQ0MsYUFBYTtRQUFFSCxNQUFNSTtRQUFTQyxVQUFVLElBQUk7SUFBQztJQUM3Q0MsV0FBVztRQUFFTixNQUFNSixnRUFBdUI7UUFBRU0sU0FBUyxJQUFJO0lBQUM7QUFDNUQsR0FDQTtJQUFFTyxZQUFZLElBQUk7QUFBQztBQUVyQixNQUFNQyxPQUFPZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRRTtBQUU1RFksS0FBS0csS0FBSyxHQUFHQyxFQUFFLENBQUMsVUFBVSxDQUFDQyxPQUFTQyxRQUFRQyxHQUFHLENBQUNGO0FBQ2hELGlFQUFlTCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL21vZGVsL3Rhc2tNb2RlbC50cz9kNDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgdGFza1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgdGFzazogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmU6IHRydWUgfSxcclxuICAgIGlzQ29tcGxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBjcmVhdGVkQnk6IHsgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsIHJlcXVpcmU6IHRydWUgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcbmNvbnN0IFRhc2sgPSBtb25nb29zZS5tb2RlbHMuVGFzayB8fCBtb25nb29zZS5tb2RlbChcIlRhc2tcIiwgdGFza1NjaGVtYSk7XHJcblxyXG5UYXNrLndhdGNoKCkub24oXCJjaGFuZ2VcIiwgKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidGFza1NjaGVtYSIsInRhc2siLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZSIsImlzQ29tcGxldGVkIiwiQm9vbGVhbiIsInJlcXVpcmVkIiwiY3JlYXRlZEJ5IiwiVHlwZXMiLCJPYmplY3RJZCIsInRpbWVzdGFtcHMiLCJUYXNrIiwibW9kZWxzIiwibW9kZWwiLCJ3YXRjaCIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tasks/model/taskModel.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/tasks/read-all-task.ts":
/*!**********************************************!*\
  !*** ./src/pages/api/tasks/read-all-task.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var _model_taskModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/taskModel */ \"(api)/./src/pages/api/tasks/model/taskModel.ts\");\n\n\nconst readAllTasks = async (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const tasks = await _model_taskModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            createdBy: req.query.userId\n        });\n        res.status(200).json(tasks);\n    } catch (error) {\n        res.status(503).send(\"Some error occurred.\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readAllTasks);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL3JlYWQtYWxsLXRhc2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBRUg7QUFFckMsTUFBTUUsZUFBZSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDeEUsSUFBSTtRQUNGSixtREFBZ0JBO1FBQ2hCLE1BQU1LLFFBQVEsTUFBTUosNkRBQVMsQ0FBQztZQUFFTSxXQUFXSixJQUFJSyxLQUFLLENBQUNDLE1BQU07UUFBQztRQUM1REwsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047SUFDdkIsRUFBRSxPQUFPTyxPQUFPO1FBQ2RSLElBQUlNLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7SUFDdkI7QUFDRjtBQUNBLGlFQUFlWCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcGFnZXMvYXBpL3Rhc2tzL3JlYWQtYWxsLXRhc2sudHM/N2MzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdFRvTW9uZ29EQiBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZGVsL3Rhc2tNb2RlbFwiO1xyXG5cclxuY29uc3QgcmVhZEFsbFRhc2tzID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbm5lY3RUb01vbmdvREIoKTtcclxuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgVGFzay5maW5kKHsgY3JlYXRlZEJ5OiByZXEucXVlcnkudXNlcklkIH0pO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24odGFza3MpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMykuc2VuZChcIlNvbWUgZXJyb3Igb2NjdXJyZWQuXCIpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVhZEFsbFRhc2tzO1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdFRvTW9uZ29EQiIsIlRhc2siLCJyZWFkQWxsVGFza3MiLCJyZXEiLCJyZXMiLCJ0YXNrcyIsImZpbmQiLCJjcmVhdGVkQnkiLCJxdWVyeSIsInVzZXJJZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tasks/read-all-task.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/tasks/read-all-task.ts"));
module.exports = __webpack_exports__;

})();