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
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

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

/***/ "(api)/./src/pages/api/auth/register.ts":
/*!****************************************!*\
  !*** ./src/pages/api/auth/register.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userModel_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userModel/Model */ \"(api)/./src/pages/api/auth/userModel/Model.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nlet JWT_SECRET_KEY;\nif (typeof process.env.SECRET_KEY === \"string\") {\n    JWT_SECRET_KEY = process.env.SECRET_KEY;\n}\nconst register = async (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        /* This is checking if the email address already exists in the database. If it does, it will return a\r\n      400 status code with the message \"Sorry a user with this email address already exists.\" */ let isEmail = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email: req.body.email\n        });\n        if (isEmail) {\n            return res.status(400).send(\"Sorry a user with this email address already exists.\");\n        }\n        /* This is checking if the username already exists in the database. If it does, it will return a\r\n       400 status code with the message \"Sorry a user with this username already exists.\" */ let isUserName = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            userName: req.body.userName\n        });\n        if (isUserName) {\n            return res.status(400).send(\"Sorry a user with this username already exists.\");\n        }\n        console.log(req.body);\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(10);\n        let secPass = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(req.body.password, salt);\n        console.log(secPass);\n        const newUser = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            firstName: req.body.firstName,\n            lastName: req.body.lastName,\n            userName: req.body.username,\n            password: secPass,\n            email: req.body.email\n        });\n        const data = {\n            user: {\n                id: newUser.id\n            }\n        };\n        const authToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(data, JWT_SECRET_KEY);\n        // Setting the cookies for the user of \"authToken\"\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_4__.serialize)(\"authToken\", authToken, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            sameSite: \"strict\",\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialized);\n        res.status(200).json({\n            authToken\n        });\n    } catch (error) {\n        res.status(500).send(\"Some error occurred\");\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0M7QUFDVztBQUNGO0FBQ0w7QUFDbkMsSUFBSUs7QUFDSixJQUFJLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxLQUFLLFVBQVU7SUFDOUNILGlCQUFpQkMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQ3pDLENBQUM7QUFnQkQsTUFBTUMsV0FBVyxPQUNmQyxLQUNBQyxNQUNHO0lBQ0gsSUFBSTtRQUNGUixtREFBZ0JBO1FBRWhCOzhGQUMwRixHQUMxRixJQUFJUyxVQUE2QixNQUFNVixnRUFBaUIsQ0FBQztZQUN2RFksT0FBT0osSUFBSUssSUFBSSxDQUFDRCxLQUFLO1FBQ3ZCO1FBQ0EsSUFBSUYsU0FBUztZQUNYLE9BQU9ELElBQ0pLLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7UUFDVixDQUFDO1FBQ0Q7MEZBQ3NGLEdBQ3RGLElBQUlDLGFBQWdDLE1BQU1oQixnRUFBaUIsQ0FBQztZQUMxRGlCLFVBQVVULElBQUlLLElBQUksQ0FBQ0ksUUFBUTtRQUM3QjtRQUNBLElBQUlELFlBQVk7WUFDZCxPQUFPUCxJQUNKSyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1FBQ1YsQ0FBQztRQUNERyxRQUFRQyxHQUFHLENBQUNYLElBQUlLLElBQUk7UUFFcEIsTUFBTU8sT0FBZSxNQUFNdEIsMkRBQWtCLENBQUM7UUFDOUMsSUFBSXdCLFVBQWtCLE1BQU14QixvREFBVyxDQUFDVSxJQUFJSyxJQUFJLENBQUNXLFFBQVEsRUFBRUo7UUFDM0RGLFFBQVFDLEdBQUcsQ0FBQ0c7UUFFWixNQUFNRyxVQUFVLE1BQU16QiwrREFBZ0IsQ0FBQztZQUNyQzJCLFdBQVduQixJQUFJSyxJQUFJLENBQUNjLFNBQVM7WUFDN0JDLFVBQVVwQixJQUFJSyxJQUFJLENBQUNlLFFBQVE7WUFDM0JYLFVBQVVULElBQUlLLElBQUksQ0FBQ2dCLFFBQVE7WUFDM0JMLFVBQVVGO1lBQ1ZWLE9BQU9KLElBQUlLLElBQUksQ0FBQ0QsS0FBSztRQUN2QjtRQUNBLE1BQU1rQixPQUFlO1lBQ25CQyxNQUFNO2dCQUFFQyxJQUFJUCxRQUFRTyxFQUFFO1lBQUM7UUFDekI7UUFDQSxNQUFNQyxZQUFvQmxDLHdEQUFRLENBQUMrQixNQUFNM0I7UUFDekMsa0RBQWtEO1FBQ2xELE1BQU1nQyxhQUFpQ2pDLGlEQUFTQSxDQUFDLGFBQWErQixXQUFXO1lBQ3ZFRyxVQUFVLElBQUk7WUFDZEMsUUFBUWpDLGtCQUF5QjtZQUNqQ2tDLFVBQVU7WUFDVkMsTUFBTTtRQUNSO1FBQ0E5QixJQUFJK0IsU0FBUyxDQUFDLGNBQWNMO1FBQzVCMUIsSUFBSUssTUFBTSxDQUFDLEtBQUsyQixJQUFJLENBQUM7WUFBRVI7UUFBVTtJQUNuQyxFQUFFLE9BQU9TLE9BQU87UUFDZGpDLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDckJHLFFBQVFDLEdBQUcsQ0FBQ3VCO0lBQ2Q7QUFDRjtBQUVBLGlFQUFlbkMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL3JlZ2lzdGVyLnRzPzA5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gXCIuL3VzZXJNb2RlbC9Nb2RlbFwiO1xyXG5pbXBvcnQgY29ubmVjdFRvTW9uZ29EQiBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5sZXQgSldUX1NFQ1JFVF9LRVk6IHN0cmluZztcclxuaWYgKHR5cGVvZiBwcm9jZXNzLmVudi5TRUNSRVRfS0VZID09PSBcInN0cmluZ1wiKSB7XHJcbiAgSldUX1NFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5TRUNSRVRfS0VZO1xyXG59XHJcbmV4cG9ydCB0eXBlIHVzZXJJRCA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNlID0ge1xyXG4gIGF1dGhUb2tlbjogc3RyaW5nO1xyXG59O1xyXG5leHBvcnQgdHlwZSBSZXFUZXN0aW5nID0ge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbn07XHJcbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2UgfCBzdHJpbmc+XHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25uZWN0VG9Nb25nb0RCKCk7XHJcblxyXG4gICAgLyogVGhpcyBpcyBjaGVja2luZyBpZiB0aGUgZW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgZGF0YWJhc2UuIElmIGl0IGRvZXMsIGl0IHdpbGwgcmV0dXJuIGFcclxuICAgICAgNDAwIHN0YXR1cyBjb2RlIHdpdGggdGhlIG1lc3NhZ2UgXCJTb3JyeSBhIHVzZXIgd2l0aCB0aGlzIGVtYWlsIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMuXCIgKi9cclxuICAgIGxldCBpc0VtYWlsOiBSZXFUZXN0aW5nIHwgbnVsbCA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoaXNFbWFpbCkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgLnNlbmQoXCJTb3JyeSBhIHVzZXIgd2l0aCB0aGlzIGVtYWlsIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMuXCIpO1xyXG4gICAgfVxyXG4gICAgLyogVGhpcyBpcyBjaGVja2luZyBpZiB0aGUgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLiBJZiBpdCBkb2VzLCBpdCB3aWxsIHJldHVybiBhXHJcbiAgICAgICA0MDAgc3RhdHVzIGNvZGUgd2l0aCB0aGUgbWVzc2FnZSBcIlNvcnJ5IGEgdXNlciB3aXRoIHRoaXMgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHMuXCIgKi9cclxuICAgIGxldCBpc1VzZXJOYW1lOiBSZXFUZXN0aW5nIHwgbnVsbCA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtcclxuICAgICAgdXNlck5hbWU6IHJlcS5ib2R5LnVzZXJOYW1lLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoaXNVc2VyTmFtZSkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgLnNlbmQoXCJTb3JyeSBhIHVzZXIgd2l0aCB0aGlzIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcclxuXHJcbiAgICBjb25zdCBzYWx0OiBzdHJpbmcgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdFN5bmMoMTApO1xyXG4gICAgbGV0IHNlY1Bhc3M6IHN0cmluZyA9IGF3YWl0IGJjcnlwdC5oYXNoKHJlcS5ib2R5LnBhc3N3b3JkLCBzYWx0KTtcclxuICAgIGNvbnNvbGUubG9nKHNlY1Bhc3MpO1xyXG5cclxuICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlKHtcclxuICAgICAgZmlyc3ROYW1lOiByZXEuYm9keS5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiByZXEuYm9keS5sYXN0TmFtZSxcclxuICAgICAgdXNlck5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lLFxyXG4gICAgICBwYXNzd29yZDogc2VjUGFzcyxcclxuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkYXRhOiB1c2VySUQgPSB7XHJcbiAgICAgIHVzZXI6IHsgaWQ6IG5ld1VzZXIuaWQgfSxcclxuICAgIH07XHJcbiAgICBjb25zdCBhdXRoVG9rZW46IHN0cmluZyA9IGp3dC5zaWduKGRhdGEsIEpXVF9TRUNSRVRfS0VZKTtcclxuICAgIC8vIFNldHRpbmcgdGhlIGNvb2tpZXMgZm9yIHRoZSB1c2VyIG9mIFwiYXV0aFRva2VuXCJcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHNlcmlhbGl6ZShcImF1dGhUb2tlblwiLCBhdXRoVG9rZW4sIHtcclxuICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuICAgICAgc2FtZVNpdGU6IFwic3RyaWN0XCIsXHJcbiAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgfSk7XHJcbiAgICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBzZXJpYWxpemVkKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYXV0aFRva2VuIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWUgZXJyb3Igb2NjdXJyZWRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJqd3QiLCJVc2VyTW9kZWwiLCJjb25uZWN0VG9Nb25nb0RCIiwic2VyaWFsaXplIiwiSldUX1NFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWSIsInJlZ2lzdGVyIiwicmVxIiwicmVzIiwiaXNFbWFpbCIsImZpbmRPbmUiLCJlbWFpbCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwiaXNVc2VyTmFtZSIsInVzZXJOYW1lIiwiY29uc29sZSIsImxvZyIsInNhbHQiLCJnZW5TYWx0U3luYyIsInNlY1Bhc3MiLCJoYXNoIiwicGFzc3dvcmQiLCJuZXdVc2VyIiwiY3JlYXRlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImRhdGEiLCJ1c2VyIiwiaWQiLCJhdXRoVG9rZW4iLCJzaWduIiwic2VyaWFsaXplZCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJwYXRoIiwic2V0SGVhZGVyIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/register.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/userModel/Model.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/auth/userModel/Model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    firstName: {\n        type: String,\n        required: true\n    },\n    lastName: {\n        type: String,\n        required: true\n    },\n    userName: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvdXNlck1vZGVsL01vZGVsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUNoQyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRCxpREFBUUE7QUFFM0IsTUFBTUUsYUFBYSxJQUFJRCxPQUNyQjtJQUNFRSxXQUFXO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQzFDQyxVQUFVO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3pDRSxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3pDRyxPQUFPO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3RDSSxVQUFVO1FBQUVOLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0FBQzNDLEdBQ0E7SUFBRUssWUFBWSxJQUFJO0FBQUM7QUFFckIsTUFBTUMsWUFBWVosNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsUUFBUUU7QUFDakUsaUVBQWVVLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC91c2VyTW9kZWwvTW9kZWwudHM/NzRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgIGZpcnN0TmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsYXN0TmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB1c2VyTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlclNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwidXNlck5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/userModel/Model.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/register.ts"));
module.exports = __webpack_exports__;

})();