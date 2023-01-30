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
exports.id = "pages/api/auth/logout-user";
exports.ids = ["pages/api/auth/logout-user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./src/pages/api/auth/logout-user.ts":
/*!*******************************************!*\
  !*** ./src/pages/api/auth/logout-user.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst logoutUser = async (req, res)=>{\n    const { cookies  } = req;\n    try {\n        const jwt = cookies.authToken;\n        if (!jwt) {\n            return res.status(200).send(\"You are already not logged in!\");\n        } else {\n            const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"authToken\", \"\", {\n                httpOnly: true,\n                secure: \"development\" !== \"development\",\n                sameSite: \"strict\",\n                path: \"/\"\n            });\n            res.setHeader(\"Set-Cookie\", serialized);\n            res.status(200).send(\"You have successfully logged out.\");\n        }\n    } catch (error) {\n        res;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoutUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LXVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBR25DLE1BQU1DLGFBQWEsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ3RFLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdGO0lBQ3BCLElBQUk7UUFDRixNQUFNRyxNQUFNRCxRQUFRRSxTQUFTO1FBQzdCLElBQUksQ0FBQ0QsS0FBSztZQUNSLE9BQU9GLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDOUIsT0FBTztZQUNMLE1BQU1DLGFBQWlDVCxpREFBU0EsQ0FBQyxhQUFhLElBQUk7Z0JBQ2hFVSxVQUFVLElBQUk7Z0JBQ2RDLFFBQVFDLGtCQUF5QjtnQkFDakNDLFVBQVU7Z0JBQ1ZDLE1BQU07WUFDUjtZQUNBWCxJQUFJWSxTQUFTLENBQUMsY0FBY047WUFDNUJOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNILEVBQUUsT0FBT1EsT0FBTztRQUNkYjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZUYsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL2xvZ291dC11c2VyLnRzPzU3ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmNvbnN0IGxvZ291dFVzZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IGNvb2tpZXMgfSA9IHJlcTtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgand0ID0gY29va2llcy5hdXRoVG9rZW47XHJcbiAgICBpZiAoIWp3dCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJZb3UgYXJlIGFscmVhZHkgbm90IGxvZ2dlZCBpbiFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzZXJpYWxpemVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBzZXJpYWxpemUoXCJhdXRoVG9rZW5cIiwgXCJcIiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIHNlcmlhbGl6ZWQpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0LlwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ291dFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJzZXJpYWxpemUiLCJsb2dvdXRVc2VyIiwicmVxIiwicmVzIiwiY29va2llcyIsImp3dCIsImF1dGhUb2tlbiIsInN0YXR1cyIsInNlbmQiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJwYXRoIiwic2V0SGVhZGVyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/logout-user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/logout-user.ts"));
module.exports = __webpack_exports__;

})();