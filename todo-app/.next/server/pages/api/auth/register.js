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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userModel_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userModel/Model */ \"(api)/./src/pages/api/auth/userModel/Model.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nlet JWT_SECRET_KEY;\nif (typeof process.env.SECRET_KEY === \"string\") {\n    JWT_SECRET_KEY = process.env.SECRET_KEY;\n}\nconst register = async (req, res)=>{\n    try {\n        (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        /* This is checking if the email address already exists in the database. If it does, it will return a\r\n      400 status code with the message \"Sorry a user with this email address already exists.\" */ let isEmail = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email: req.body.email\n        });\n        if (isEmail) {\n            return res.status(400).send(\"Sorry a user with this email address already exists.\");\n        }\n        /* This is checking if the username already exists in the database. If it does, it will return a\r\n       400 status code with the message \"Sorry a user with this username already exists.\" */ let isUserName = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            userName: req.body.userName\n        });\n        if (isUserName) {\n            return res.status(400).send(\"Sorry a user with this username already exists.\");\n        }\n        console.log(req.body);\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(10);\n        let secPass = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(req.body.password, salt);\n        console.log(secPass);\n        const newUser = await _userModel_Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            firstName: req.body.firstName,\n            lastName: req.body.lastName,\n            userName: req.body.username,\n            password: secPass,\n            email: req.body.email\n        });\n        const data = {\n            user: {\n                id: newUser.id\n            }\n        };\n        const authToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign(data, JWT_SECRET_KEY);\n        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_4__.serialize)(\"authToken\", authToken, {\n            httpOnly: true,\n            secure: \"development\" !== \"development\",\n            sameSite: \"strict\",\n            path: \"/\"\n        });\n        res.setHeader(\"Set-Cookie\", serialized);\n        res.status(200).json({\n            authToken\n        });\n    } catch (error) {\n        res.status(500).send(\"Some error occurred\");\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0M7QUFDVztBQUNGO0FBQ0w7QUFDbkMsSUFBSUs7QUFDSixJQUFJLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxLQUFLLFVBQVU7SUFDOUNILGlCQUFpQkMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBQ3pDLENBQUM7QUFnQkQsTUFBTUMsV0FBVyxPQUNmQyxLQUNBQyxNQUNHO0lBQ0gsSUFBSTtRQUNGUixtREFBZ0JBO1FBRWhCOzhGQUMwRixHQUMxRixJQUFJUyxVQUE2QixNQUFNVixnRUFBaUIsQ0FBQztZQUN2RFksT0FBT0osSUFBSUssSUFBSSxDQUFDRCxLQUFLO1FBQ3ZCO1FBQ0EsSUFBSUYsU0FBUztZQUNYLE9BQU9ELElBQ0pLLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7UUFDVixDQUFDO1FBQ0Q7MEZBQ3NGLEdBQ3RGLElBQUlDLGFBQWdDLE1BQU1oQixnRUFBaUIsQ0FBQztZQUMxRGlCLFVBQVVULElBQUlLLElBQUksQ0FBQ0ksUUFBUTtRQUM3QjtRQUNBLElBQUlELFlBQVk7WUFDZCxPQUFPUCxJQUNKSyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1FBQ1YsQ0FBQztRQUNERyxRQUFRQyxHQUFHLENBQUNYLElBQUlLLElBQUk7UUFFcEIsTUFBTU8sT0FBZSxNQUFNdEIsMkRBQWtCLENBQUM7UUFDOUMsSUFBSXdCLFVBQWtCLE1BQU14QixvREFBVyxDQUFDVSxJQUFJSyxJQUFJLENBQUNXLFFBQVEsRUFBRUo7UUFDM0RGLFFBQVFDLEdBQUcsQ0FBQ0c7UUFFWixNQUFNRyxVQUFVLE1BQU16QiwrREFBZ0IsQ0FBQztZQUNyQzJCLFdBQVduQixJQUFJSyxJQUFJLENBQUNjLFNBQVM7WUFDN0JDLFVBQVVwQixJQUFJSyxJQUFJLENBQUNlLFFBQVE7WUFDM0JYLFVBQVVULElBQUlLLElBQUksQ0FBQ2dCLFFBQVE7WUFDM0JMLFVBQVVGO1lBQ1ZWLE9BQU9KLElBQUlLLElBQUksQ0FBQ0QsS0FBSztRQUN2QjtRQUNBLE1BQU1rQixPQUFlO1lBQ25CQyxNQUFNO2dCQUFFQyxJQUFJUCxRQUFRTyxFQUFFO1lBQUM7UUFDekI7UUFDQSxNQUFNQyxZQUFvQmxDLHdEQUFRLENBQUMrQixNQUFNM0I7UUFDekMsTUFBTWdDLGFBQWFqQyxpREFBU0EsQ0FBQyxhQUFhK0IsV0FBVztZQUNuREcsVUFBVSxJQUFJO1lBQ2RDLFFBQVFqQyxrQkFBeUI7WUFDakNrQyxVQUFVO1lBQ1ZDLE1BQU07UUFDUjtRQUNBOUIsSUFBSStCLFNBQVMsQ0FBQyxjQUFjTDtRQUM1QjFCLElBQUlLLE1BQU0sQ0FBQyxLQUFLMkIsSUFBSSxDQUFDO1lBQUVSO1FBQVU7SUFDbkMsRUFBRSxPQUFPUyxPQUFPO1FBQ2RqQyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3JCRyxRQUFRQyxHQUFHLENBQUN1QjtJQUNkO0FBQ0Y7QUFFQSxpRUFBZW5DLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci50cz8wOWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi91c2VyTW9kZWwvTW9kZWxcIjtcclxuaW1wb3J0IGNvbm5lY3RUb01vbmdvREIgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJjb29raWVcIjtcclxubGV0IEpXVF9TRUNSRVRfS0VZOiBzdHJpbmc7XHJcbmlmICh0eXBlb2YgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSA9PT0gXCJzdHJpbmdcIikge1xyXG4gIEpXVF9TRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWTtcclxufVxyXG5leHBvcnQgdHlwZSB1c2VySUQgPSB7XHJcbiAgdXNlcjoge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcclxuICBhdXRoVG9rZW46IHN0cmluZztcclxufTtcclxuZXhwb3J0IHR5cGUgUmVxVGVzdGluZyA9IHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICB1c2VyTmFtZTogc3RyaW5nO1xyXG59O1xyXG5jb25zdCByZWdpc3RlciA9IGFzeW5jIChcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlIHwgc3RyaW5nPlxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29ubmVjdFRvTW9uZ29EQigpO1xyXG5cclxuICAgIC8qIFRoaXMgaXMgY2hlY2tpbmcgaWYgdGhlIGVtYWlsIGFkZHJlc3MgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRhdGFiYXNlLiBJZiBpdCBkb2VzLCBpdCB3aWxsIHJldHVybiBhXHJcbiAgICAgIDQwMCBzdGF0dXMgY29kZSB3aXRoIHRoZSBtZXNzYWdlIFwiU29ycnkgYSB1c2VyIHdpdGggdGhpcyBlbWFpbCBhZGRyZXNzIGFscmVhZHkgZXhpc3RzLlwiICovXHJcbiAgICBsZXQgaXNFbWFpbDogUmVxVGVzdGluZyB8IG51bGwgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7XHJcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgIH0pO1xyXG4gICAgaWYgKGlzRW1haWwpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNDAwKVxyXG4gICAgICAgIC5zZW5kKFwiU29ycnkgYSB1c2VyIHdpdGggdGhpcyBlbWFpbCBhZGRyZXNzIGFscmVhZHkgZXhpc3RzLlwiKTtcclxuICAgIH1cclxuICAgIC8qIFRoaXMgaXMgY2hlY2tpbmcgaWYgdGhlIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoZSBkYXRhYmFzZS4gSWYgaXQgZG9lcywgaXQgd2lsbCByZXR1cm4gYVxyXG4gICAgICAgNDAwIHN0YXR1cyBjb2RlIHdpdGggdGhlIG1lc3NhZ2UgXCJTb3JyeSBhIHVzZXIgd2l0aCB0aGlzIHVzZXJuYW1lIGFscmVhZHkgZXhpc3RzLlwiICovXHJcbiAgICBsZXQgaXNVc2VyTmFtZTogUmVxVGVzdGluZyB8IG51bGwgPSBhd2FpdCBVc2VyTW9kZWwuZmluZE9uZSh7XHJcbiAgICAgIHVzZXJOYW1lOiByZXEuYm9keS51c2VyTmFtZSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGlzVXNlck5hbWUpIHtcclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoNDAwKVxyXG4gICAgICAgIC5zZW5kKFwiU29ycnkgYSB1c2VyIHdpdGggdGhpcyB1c2VybmFtZSBhbHJlYWR5IGV4aXN0cy5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XHJcblxyXG4gICAgY29uc3Qgc2FsdDogc3RyaW5nID0gYXdhaXQgYmNyeXB0LmdlblNhbHRTeW5jKDEwKTtcclxuICAgIGxldCBzZWNQYXNzOiBzdHJpbmcgPSBhd2FpdCBiY3J5cHQuaGFzaChyZXEuYm9keS5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWNQYXNzKTtcclxuXHJcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZSh7XHJcbiAgICAgIGZpcnN0TmFtZTogcmVxLmJvZHkuZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogcmVxLmJvZHkubGFzdE5hbWUsXHJcbiAgICAgIHVzZXJOYW1lOiByZXEuYm9keS51c2VybmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHNlY1Bhc3MsXHJcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YTogdXNlcklEID0ge1xyXG4gICAgICB1c2VyOiB7IGlkOiBuZXdVc2VyLmlkIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXV0aFRva2VuOiBzdHJpbmcgPSBqd3Quc2lnbihkYXRhLCBKV1RfU0VDUkVUX0tFWSk7XHJcbiAgICBjb25zdCBzZXJpYWxpemVkID0gc2VyaWFsaXplKFwiYXV0aFRva2VuXCIsIGF1dGhUb2tlbiwge1xyXG4gICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxyXG4gICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICB9KTtcclxuICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIHNlcmlhbGl6ZWQpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhdXRoVG9rZW4gfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiU29tZSBlcnJvciBvY2N1cnJlZFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjtcclxuIl0sIm5hbWVzIjpbImJjcnlwdCIsImp3dCIsIlVzZXJNb2RlbCIsImNvbm5lY3RUb01vbmdvREIiLCJzZXJpYWxpemUiLCJKV1RfU0VDUkVUX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfS0VZIiwicmVnaXN0ZXIiLCJyZXEiLCJyZXMiLCJpc0VtYWlsIiwiZmluZE9uZSIsImVtYWlsIiwiYm9keSIsInN0YXR1cyIsInNlbmQiLCJpc1VzZXJOYW1lIiwidXNlck5hbWUiLCJjb25zb2xlIiwibG9nIiwic2FsdCIsImdlblNhbHRTeW5jIiwic2VjUGFzcyIsImhhc2giLCJwYXNzd29yZCIsIm5ld1VzZXIiLCJjcmVhdGUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJuYW1lIiwiZGF0YSIsInVzZXIiLCJpZCIsImF1dGhUb2tlbiIsInNpZ24iLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInBhdGgiLCJzZXRIZWFkZXIiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/register.ts\n");

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