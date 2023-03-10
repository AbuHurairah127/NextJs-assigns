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
exports.id = "pages/api/auth/user-data";
exports.ids = ["pages/api/auth/user-data"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

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

/***/ "(api)/./src/pages/api/auth/user-data.ts":
/*!*****************************************!*\
  !*** ./src/pages/api/auth/user-data.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var _userModel_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userModel/Model */ \"(api)/./src/pages/api/auth/userModel/Model.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/auth */ \"(api)/./src/pages/api/utils/auth.ts\");\n\n\n\nconst userData = async (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_utils_auth__WEBPACK_IMPORTED_MODULE_2__.authUser)(req, res);\n        const userId = req.user;\n        const user = await _userModel_Model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(userId).select(\"-password\");\n        res.status(200).json({\n            user\n        });\n    } catch (error) {\n        res.status(500).json(\"Internal server error\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvdXNlci1kYXRhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFRTtBQUNEO0FBS3pDLE1BQU1HLFdBQVcsT0FBT0MsS0FBOEJDLE1BQXlCO0lBQzdFLElBQUk7UUFDRkwsbURBQWdCQTtRQUNoQkUscURBQVFBLENBQUNFLEtBQUtDO1FBRWQsTUFBTUMsU0FBNkJGLElBQUlHLElBQUk7UUFDM0MsTUFBTUEsT0FBTyxNQUFNTixpRUFBa0IsQ0FBQ0ssUUFBUUcsTUFBTSxDQUFDO1FBRXJESixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVKO1FBQUs7SUFDOUIsRUFBRSxPQUFPSyxPQUFPO1FBQ2RQLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFDdkI7QUFDRjtBQUNBLGlFQUFlUixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvdXNlci1kYXRhLnRzP2ZmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RUb01vbmdvREIgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSwgTmV4dEFwaVJlcXVlc3QgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuL3VzZXJNb2RlbC9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBhdXRoVXNlciB9IGZyb20gXCIuLi91dGlscy9hdXRoXCI7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElHZXRVc2VyQXV0aEluZm9SZXF1ZXN0IGV4dGVuZHMgTmV4dEFwaVJlcXVlc3Qge1xyXG4gIHVzZXI/OiBzdHJpbmc7IC8vIG9yIGFueSBvdGhlciB0eXBlXHJcbn1cclxuY29uc3QgdXNlckRhdGEgPSBhc3luYyAocmVxOiBJR2V0VXNlckF1dGhJbmZvUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29ubmVjdFRvTW9uZ29EQigpO1xyXG4gICAgYXV0aFVzZXIocmVxLCByZXMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJJZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gcmVxLnVzZXI7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRCeUlkKHVzZXJJZCkuc2VsZWN0KFwiLXBhc3N3b3JkXCIpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlciB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIik7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB1c2VyRGF0YTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb01vbmdvREIiLCJVc2VyTW9kZWwiLCJhdXRoVXNlciIsInVzZXJEYXRhIiwicmVxIiwicmVzIiwidXNlcklkIiwidXNlciIsImZpbmRCeUlkIiwic2VsZWN0Iiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/user-data.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/userModel/Model.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/auth/userModel/Model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    firstName: {\n        type: String,\n        required: true\n    },\n    lastName: {\n        type: String,\n        required: true\n    },\n    userName: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvdXNlck1vZGVsL01vZGVsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRCxpREFBUUE7QUFFM0IsTUFBTUUsYUFBYSxJQUFJRCxPQUNyQjtJQUNFRSxXQUFXO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQzFDQyxVQUFVO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3pDRSxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3pDRyxPQUFPO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3RDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0FBQzNDLEdBQ0E7SUFBRUssWUFBWSxJQUFJO0FBQUM7QUFFckIsTUFBTUMsWUFBWVosNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsUUFBUUU7QUFDakUsaUVBQWVVLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC91c2VyTW9kZWwvTW9kZWwudHM/NzRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGZpcnN0TmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsYXN0TmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB1c2VyTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlclNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/userModel/Model.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/utils/auth.ts":
/*!*************************************!*\
  !*** ./src/pages/api/utils/auth.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authUser\": () => (/* binding */ authUser)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\nconst JWT_SECRET_KEY = process.env.SECRET_KEY;\n\nconst authUser = (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(req.headers.cookie || \"\");\n        const token = cookies.authToken;\n        let data;\n        if (!token) {\n            res.status(401).send(\"Access Denied\");\n        } else {\n            if (typeof JWT_SECRET_KEY === \"string\" && typeof token === \"string\") {\n                data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET_KEY);\n                req.user = data.user.id;\n            }\n        }\n    } catch (error) {\n        res.status(401).send(\"Access Denied\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3V0aWxzL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ1A7QUFHeEMsTUFBTUUsaUJBQXFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7QUFDMUI7QUFNaEMsTUFBTUUsV0FBVyxDQUN0QkMsS0FDQUMsTUFDRztJQUNILElBQUk7UUFDRlIsbURBQWdCQTtRQUNoQixNQUFNUyxVQUFVSiw2Q0FBS0EsQ0FBQ0UsSUFBSUcsT0FBTyxDQUFDQyxNQUFNLElBQUk7UUFDNUMsTUFBTUMsUUFBUUgsUUFBUUksU0FBUztRQUUvQixJQUFJQztRQUNKLElBQUksQ0FBQ0YsT0FBTztZQUNWSixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLE9BQU9mLG1CQUFtQixZQUFZLE9BQU9XLFVBQVUsVUFBVTtnQkFDbkVFLE9BQU9mLDBEQUFVLENBQUNhLE9BQU9YO2dCQUN6Qk0sSUFBSVcsSUFBSSxHQUFHSixLQUFLSSxJQUFJLENBQUNDLEVBQUU7WUFDekIsQ0FBQztRQUNILENBQUM7SUFDSCxFQUFFLE9BQU9DLE9BQU87UUFDZFosSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN2QjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wYWdlcy9hcGkvdXRpbHMvYXV0aC50cz84ZDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QsIHsgSnd0UGF5bG9hZCB9IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IGNvbm5lY3RUb01vbmdvREIgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IElHZXRVc2VyQXV0aEluZm9SZXF1ZXN0IH0gZnJvbSBcIi4uL2F1dGgvdXNlci1kYXRhXCI7XHJcbmNvbnN0IEpXVF9TRUNSRVRfS0VZOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBwcm9jZXNzLmVudi5TRUNSRVRfS0VZO1xyXG5pbXBvcnQgY29va2llLCB7IHBhcnNlIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIERhdGEgZXh0ZW5kcyBKd3RQYXlsb2FkIHtcclxuICB1c2VyOiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IGF1dGhVc2VyID0gKFxyXG4gIHJlcTogSUdldFVzZXJBdXRoSW5mb1JlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2VcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbm5lY3RUb01vbmdvREIoKTtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZShyZXEuaGVhZGVycy5jb29raWUgfHwgXCJcIik7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuYXV0aFRva2VuO1xyXG5cclxuICAgIGxldCBkYXRhOiBKd3RQYXlsb2FkIHwgc3RyaW5nO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChcIkFjY2VzcyBEZW5pZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZW9mIEpXVF9TRUNSRVRfS0VZID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGRhdGEgPSBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUX0tFWSkgYXMgSnd0UGF5bG9hZDtcclxuICAgICAgICByZXEudXNlciA9IGRhdGEudXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZChcIkFjY2VzcyBEZW5pZWRcIik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiand0IiwiY29ubmVjdFRvTW9uZ29EQiIsIkpXVF9TRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJwYXJzZSIsImF1dGhVc2VyIiwicmVxIiwicmVzIiwiY29va2llcyIsImhlYWRlcnMiLCJjb29raWUiLCJ0b2tlbiIsImF1dGhUb2tlbiIsImRhdGEiLCJzdGF0dXMiLCJzZW5kIiwidmVyaWZ5IiwidXNlciIsImlkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/utils/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/user-data.ts"));
module.exports = __webpack_exports__;

})();