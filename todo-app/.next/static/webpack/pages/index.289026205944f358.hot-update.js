"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/navbar/navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nconst Navbar = (props)=>{\n    var _props_userData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        bgColor: \"#1d3557\",\n        height: 16,\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                color: \"#a8dadc\",\n                marginLeft: 4,\n                fontStyle: \"italic\",\n                fontWeight: \"bold\",\n                fontSize: 22,\n                children: \"Todo Application\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\components\\\\navbar\\\\navbar.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                textColor: \"white\",\n                children: [\n                    \"To-Dos of\",\n                    \" \" + ((_props_userData = props.userData) === null || _props_userData === void 0 ? void 0 : _props_userData.userName)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\components\\\\navbar\\\\navbar.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                type: \"button\",\n                marginRight: 4,\n                bgColor: \"#a8dadc\",\n                color: \"#1d3557\",\n                onClick: props.logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\components\\\\navbar\\\\navbar.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\components\\\\navbar\\\\navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQzJCO0FBZ0JyRCxNQUFNSSxTQUEwQixDQUFDQyxRQUFVO1FBb0I1QkE7SUFuQmIscUJBQ0UsOERBQUNGLGlEQUFHQTtRQUNGRyxTQUFTO1FBQ1RDLGdCQUFlO1FBQ2ZDLFNBQVM7UUFDVEMsUUFBUTtRQUNSQyxZQUFZOzswQkFFWiw4REFBQ1Qsa0RBQUlBO2dCQUNIVSxPQUFPO2dCQUNQQyxZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxZQUFZO2dCQUNaQyxVQUFVOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUNkLGtEQUFJQTtnQkFBQ2MsVUFBVTtnQkFBSUMsV0FBVztnQkFBVUMsV0FBVzs7b0JBQVM7b0JBRTFELE1BQU1aLENBQUFBLENBQUFBLGtCQUFBQSxNQUFNYSxRQUFRLGNBQWRiLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBZ0JjLFFBQVE7Ozs7Ozs7MEJBRWpDLDhEQUFDakIsb0RBQU1BO2dCQUNMa0IsTUFBSztnQkFDTEMsYUFBYTtnQkFDYmIsU0FBUztnQkFDVEcsT0FBTztnQkFDUFcsU0FBU2pCLE1BQU1rQixhQUFhOzBCQUM3Qjs7Ozs7Ozs7Ozs7O0FBS1A7S0FqQ01uQjtBQW1DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnRzeD8wNzA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGV4dCwgQnV0dG9uLCBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlckRhdGEgPSB7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgX192OiBudW1iZXI7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbn07XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgdXNlckRhdGE6IFVzZXJEYXRhIHwgbnVsbDtcclxuICBsb2dvdXRIYW5kbGVyOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgYmdDb2xvcj17XCIjMWQzNTU3XCJ9XHJcbiAgICAgIGhlaWdodD17MTZ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgY29sb3I9e1wiI2E4ZGFkY1wifVxyXG4gICAgICAgIG1hcmdpbkxlZnQ9ezR9XHJcbiAgICAgICAgZm9udFN0eWxlPXtcIml0YWxpY1wifVxyXG4gICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxyXG4gICAgICAgIGZvbnRTaXplPXsyMn1cclxuICAgICAgPlxyXG4gICAgICAgIFRvZG8gQXBwbGljYXRpb25cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gdGV4dENvbG9yPXtcIndoaXRlXCJ9PlxyXG4gICAgICAgIFRvLURvcyBvZlxyXG4gICAgICAgIHtcIiBcIiArIHByb3BzLnVzZXJEYXRhPy51c2VyTmFtZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ9ezR9XHJcbiAgICAgICAgYmdDb2xvcj17XCIjYThkYWRjXCJ9XHJcbiAgICAgICAgY29sb3I9e1wiIzFkMzU1N1wifVxyXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLmxvZ291dEhhbmRsZXJ9XHJcbiAgICAgID5cclxuICAgICAgICBMb2dvdXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0IiwiQnV0dG9uIiwiQm94IiwiTmF2YmFyIiwicHJvcHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiZ0NvbG9yIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInRleHRDb2xvciIsInVzZXJEYXRhIiwidXNlck5hbWUiLCJ0eXBlIiwibWFyZ2luUmlnaHQiLCJvbkNsaWNrIiwibG9nb3V0SGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/navbar/navbar.tsx\n"));

/***/ })

});