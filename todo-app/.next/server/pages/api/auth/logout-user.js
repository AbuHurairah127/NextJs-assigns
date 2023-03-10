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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst logoutUser = async (req, res)=>{\n    const { cookies  } = req;\n    try {\n        const jwt = cookies.authToken;\n        console.log(\"\\uD83D\\uDE80 ~ file: logout-user.ts:9 ~ logoutUser ~ jwt:\", jwt);\n        if (!jwt) {\n            return res.status(200).send(\"You are already not logged in!\");\n        } else {\n            const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"authToken\", \"\", {\n                httpOnly: true,\n                secure: \"development\" !== \"development\",\n                sameSite: \"strict\",\n                path: \"/\"\n            });\n            res.setHeader(\"Set-Cookie\", serialized);\n            res.status(200).send(\"You have successfully logged out.\");\n        }\n    } catch (error) {\n        res.status(500).json(\"Internal Server Error\");\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoutUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvbG9nb3V0LXVzZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBR25DLE1BQU1DLGFBQWEsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ3RFLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdGO0lBQ3BCLElBQUk7UUFDRixNQUFNRyxNQUFNRCxRQUFRRSxTQUFTO1FBQzdCQyxRQUFRQyxHQUFHLENBQUMsNkRBQW1ESDtRQUMvRCxJQUFJLENBQUNBLEtBQUs7WUFDUixPQUFPRixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzlCLE9BQU87WUFDTCxNQUFNQyxhQUFpQ1gsaURBQVNBLENBQUMsYUFBYSxJQUFJO2dCQUNoRVksVUFBVSxJQUFJO2dCQUNkQyxRQUFRQyxrQkFBeUI7Z0JBQ2pDQyxVQUFVO2dCQUNWQyxNQUFNO1lBQ1I7WUFDQWIsSUFBSWMsU0FBUyxDQUFDLGNBQWNOO1lBQzVCUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxFQUFFLE9BQU9RLE9BQU87UUFDZGYsSUFBSU0sTUFBTSxDQUFDLEtBQUtVLElBQUksQ0FBQztRQUNyQlosUUFBUUMsR0FBRyxDQUFDVTtJQUNkO0FBQ0Y7QUFFQSxpRUFBZWpCLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9sb2dvdXQtdXNlci50cz81N2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJjb29raWVcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5jb25zdCBsb2dvdXRVc2VyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc3QgeyBjb29raWVzIH0gPSByZXE7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGp3dCA9IGNvb2tpZXMuYXV0aFRva2VuO1xyXG4gICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogbG9nb3V0LXVzZXIudHM6OSB+IGxvZ291dFVzZXIgfiBqd3Q6XCIsIGp3dCk7XHJcbiAgICBpZiAoIWp3dCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJZb3UgYXJlIGFscmVhZHkgbm90IGxvZ2dlZCBpbiFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBzZXJpYWxpemVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBzZXJpYWxpemUoXCJhdXRoVG9rZW5cIiwgXCJcIiwge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcclxuICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIHNlcmlhbGl6ZWQpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0LlwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0VXNlcjtcclxuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsImxvZ291dFVzZXIiLCJyZXEiLCJyZXMiLCJjb29raWVzIiwiand0IiwiYXV0aFRva2VuIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJzZXJpYWxpemVkIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2FtZVNpdGUiLCJwYXRoIiwic2V0SGVhZGVyIiwiZXJyb3IiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/logout-user.ts\n");

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