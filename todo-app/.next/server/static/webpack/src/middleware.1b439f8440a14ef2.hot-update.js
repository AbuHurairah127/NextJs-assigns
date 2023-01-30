"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getJWTSecretKey\": () => (/* binding */ getJWTSecretKey),\n/* harmony export */   \"verifyAuth\": () => (/* binding */ verifyAuth)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\nconst getJWTSecretKey = ()=>{\n    const SECRET_KEY = process.env.SECRET_KEY;\n    if (!SECRET_KEY || SECRET_KEY.length === 0) {\n        throw new Error(\"Secret key not found.\");\n    }\n    return SECRET_KEY;\n};\nasync function verifyAuth(token) {\n    try {\n        const verified = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(getJWTSecretKey()));\n        return verified.payload;\n    } catch (error) {\n        throw new Error(\"Your token has expired.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQztBQUtuQyxNQUFNQyxrQkFBa0IsSUFBYztJQUMzQyxNQUFNQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7SUFDekMsSUFBSSxDQUFDQSxjQUFjQSxXQUFXRyxNQUFNLEtBQUssR0FBRztRQUMxQyxNQUFNLElBQUlDLE1BQU0seUJBQXlCO0lBQzNDLENBQUM7SUFDRCxPQUFPSjtBQUNULEVBQUU7QUFFSyxlQUFlSyxXQUFXQyxLQUFhLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVQsK0NBQVNBLENBQzlCUSxPQUNBLElBQUlFLGNBQWNDLE1BQU0sQ0FBQ1Y7UUFHM0IsT0FBT1EsU0FBU0csT0FBTztJQUN6QixFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNLElBQUlQLE1BQU0sMkJBQTJCO0lBQzdDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGp3dFZlcmlmeSwgU2lnbkpXVCB9IGZyb20gXCJqb3NlXCI7XHJcbmludGVyZmFjZSBVc2VySnd0UGF5bG9hZCB7XHJcbiAganRpOiBzdHJpbmc7XHJcbiAgaWF0OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldEpXVFNlY3JldEtleSA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5TRUNSRVRfS0VZO1xyXG4gIGlmICghU0VDUkVUX0tFWSB8fCBTRUNSRVRfS0VZLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2VjcmV0IGtleSBub3QgZm91bmQuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gU0VDUkVUX0tFWTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBdXRoKHRva2VuOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdmVyaWZpZWQgPSBhd2FpdCBqd3RWZXJpZnkoXHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZ2V0SldUU2VjcmV0S2V5KCkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB2ZXJpZmllZC5wYXlsb2FkIGFzIFVzZXJKd3RQYXlsb2FkO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3VyIHRva2VuIGhhcyBleHBpcmVkLlwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImp3dFZlcmlmeSIsImdldEpXVFNlY3JldEtleSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwibGVuZ3RoIiwiRXJyb3IiLCJ2ZXJpZnlBdXRoIiwidG9rZW4iLCJ2ZXJpZmllZCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicGF5bG9hZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/auth.ts\n");

/***/ })

});