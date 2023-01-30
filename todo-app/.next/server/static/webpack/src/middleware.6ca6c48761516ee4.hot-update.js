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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getJWTSecretKey\": () => (/* binding */ getJWTSecretKey),\n/* harmony export */   \"verifyAuth\": () => (/* binding */ verifyAuth)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n\nconst getJWTSecretKey = ()=>{\n    const SECRET_KEY = process.env.SECRET_KEY;\n    if (!SECRET_KEY || SECRET_KEY.length === 0) {\n        throw new Error(\"Secret key not found.\");\n    }\n    return SECRET_KEY;\n};\nasync function verifyAuth(token) {\n    try {\n        const verified = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, new TextEncoder().encode(getJWTSecretKey()));\n        console.log(verified.payload);\n        return verified.payload;\n    } catch (error) {\n        throw new Error(\"Your token has expired.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMwQztBQUtuQyxNQUFNQyxrQkFBa0IsSUFBYztJQUMzQyxNQUFNQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7SUFDekMsSUFBSSxDQUFDQSxjQUFjQSxXQUFXRyxNQUFNLEtBQUssR0FBRztRQUMxQyxNQUFNLElBQUlDLE1BQU0seUJBQXlCO0lBQzNDLENBQUM7SUFDRCxPQUFPSjtBQUNULEVBQUU7QUFFSyxlQUFlSyxXQUFXQyxLQUFhLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTVQsK0NBQVNBLENBQzlCUSxPQUNBLElBQUlFLGNBQWNDLE1BQU0sQ0FBQ1Y7UUFFM0JXLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0ssT0FBTztRQUU1QixPQUFPTCxTQUFTSyxPQUFPO0lBQ3pCLEVBQUUsT0FBT0MsT0FBTztRQUNkLE1BQU0sSUFBSVQsTUFBTSwyQkFBMkI7SUFDN0M7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgand0VmVyaWZ5LCBTaWduSldUIH0gZnJvbSBcImpvc2VcIjtcclxuaW50ZXJmYWNlIFVzZXJKd3RQYXlsb2FkIHtcclxuICBqdGk6IHN0cmluZztcclxuICBpYXQ6IG51bWJlcjtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0SldUU2VjcmV0S2V5ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVk7XHJcbiAgaWYgKCFTRUNSRVRfS0VZIHx8IFNFQ1JFVF9LRVkubGVuZ3RoID09PSAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZWNyZXQga2V5IG5vdCBmb3VuZC5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBTRUNSRVRfS0VZO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUF1dGgodG9rZW46IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IGp3dFZlcmlmeShcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShnZXRKV1RTZWNyZXRLZXkoKSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh2ZXJpZmllZC5wYXlsb2FkKTtcclxuXHJcbiAgICByZXR1cm4gdmVyaWZpZWQucGF5bG9hZCBhcyBVc2VySnd0UGF5bG9hZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91ciB0b2tlbiBoYXMgZXhwaXJlZC5cIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJqd3RWZXJpZnkiLCJnZXRKV1RTZWNyZXRLZXkiLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsImxlbmd0aCIsIkVycm9yIiwidmVyaWZ5QXV0aCIsInRva2VuIiwidmVyaWZpZWQiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/auth.ts\n");

/***/ })

});