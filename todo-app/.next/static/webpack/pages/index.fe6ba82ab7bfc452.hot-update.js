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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authToken = js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"authToken\");\n        console.log(\"\\uD83D\\uDE80 ~ file: index.tsx:32 ~ useEffect ~ authToken\", authToken);\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = (task)=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                task,\n                isCompleted: false\n            }\n        ]);\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"To-Do\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"TfMCsjpv6opEHPxWtCXCRYtThvk=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbnRlcmZhY2UgVG9kbyB7XG4gIGlkOiBudW1iZXI7XG4gIHRhc2s6IHN0cmluZztcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgVG9kb1Byb3BzIHtcbiAgaW5pdGlhbFRvZG9zOiBUb2RvW107XG59XG5jb25zdCB0b2Rvc0xpc3Q6IFRvZG9bXSA9IFtcbiAgeyBpZDogMSwgdGFzazogXCJDbGVhbiB0aGUgaG91c2VcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIHsgaWQ6IDIsIHRhc2s6IFwiQnV5IGdyb2Nlcmllc1wiLCBpc0NvbXBsZXRlZDogdHJ1ZSB9LFxuICB7IGlkOiAzLCB0YXNrOiBcIldhc2ggdGhlIGNhclwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbl07XG5cbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGNvb2tpZS5nZXQoXCJhdXRoVG9rZW5cIik7XG4gICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXgudHN4OjMyIH4gdXNlRWZmZWN0IH4gYXV0aFRva2VuXCIsIGF1dGhUb2tlbik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHRvZG9zTGlzdCk7XG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSAodGFzazogc3RyaW5nKSA9PiB7XG4gICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB7IGlkOiBEYXRlLm5vdygpLCB0YXNrLCBpc0NvbXBsZXRlZDogZmFsc2UgfV0pO1xuICB9O1xuICBjb25zdCBoYW5kbGVSZW1vdmVUb2RvID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ29tcGxldGUgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFRvZG9zKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICB0b2RvLmlkID09PSBpZCA/IHsgLi4udG9kbywgaXNDb21wbGV0ZWQ6ICF0b2RvLmlzQ29tcGxldGVkIH0gOiB0b2RvXG4gICAgICApXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcIi9hcGkvYXV0aC9sb2dvdXQtdXNlclwiKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgIFRvLURvXG4gICAgICA8L1RleHQ+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIFRvZG9cIiAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvZG8oXCJBZGQgVG9kb1wiKX0+QWRkIFRvZG88L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBNeSBUby1EbyBMaXN0XG4gICAgICA8L1RleHQ+XG4gICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVG9kbyh0b2RvLmlkKX0+UmVtb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlQ29tcGxldGUodG9kby5pZCl9PlxuICAgICAgICAgICAgICAgIHt0b2RvLmlzQ29tcGxldGVkID8gXCJNYXJrIEluY29tcGxldGVcIiA6IFwiTWFyayBDb21wbGV0ZVwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0IiwiTGlzdEl0ZW0iLCJVbm9yZGVyZWRMaXN0IiwiYXhpb3MiLCJSb3V0ZXIiLCJjb29raWUiLCJ0b2Rvc0xpc3QiLCJpZCIsInRhc2siLCJpc0NvbXBsZXRlZCIsIlRvZG8iLCJpbml0aWFsVG9kb3MiLCJhdXRoVG9rZW4iLCJnZXQiLCJjb25zb2xlIiwibG9nIiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJEYXRlIiwibm93IiwiaGFuZGxlUmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJyZXNwb25zZSIsImRlbGV0ZSIsInN0YXR1cyIsInB1c2giLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInR5cGUiLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});