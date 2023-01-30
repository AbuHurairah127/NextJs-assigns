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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\", {\n            params: {\n                authToken: document.cookie\n            }\n        });\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = (task)=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                task,\n                isCompleted: false\n            }\n        ]);\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"To-Do\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"TfMCsjpv6opEHPxWtCXCRYtThvk=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW50ZXJmYWNlIFRvZG8ge1xuICBpZDogbnVtYmVyO1xuICB0YXNrOiBzdHJpbmc7XG4gIGlzQ29tcGxldGVkOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFRvZG9Qcm9wcyB7XG4gIGluaXRpYWxUb2RvczogVG9kb1tdO1xufVxuY29uc3QgdG9kb3NMaXN0OiBUb2RvW10gPSBbXG4gIHsgaWQ6IDEsIHRhc2s6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICB7IGlkOiAyLCB0YXNrOiBcIkJ1eSBncm9jZXJpZXNcIiwgaXNDb21wbGV0ZWQ6IHRydWUgfSxcbiAgeyBpZDogMywgdGFzazogXCJXYXNoIHRoZSBjYXJcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG5dO1xuXG5jb25zdCBUb2RvOiBSZWFjdC5GQzxUb2RvUHJvcHM+ID0gKHsgaW5pdGlhbFRvZG9zIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJhcGkvYXV0aC91c2VyLWRhdGFcIiwge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGF1dGhUb2tlbjogZG9jdW1lbnQuY29va2llLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUodG9kb3NMaXN0KTtcbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICh0YXNrOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHsgaWQ6IERhdGUubm93KCksIHRhc2ssIGlzQ29tcGxldGVkOiBmYWxzZSB9XSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRvZG8gPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3MoXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBpc0NvbXBsZXRlZDogIXRvZG8uaXNDb21wbGV0ZWQgfSA6IHRvZG9cbiAgICAgIClcbiAgICApO1xuICB9O1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dC11c2VyXCIpO1xuICAgIFJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgVG8tRG9cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJveD5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgVG9kb1wiIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9kbyhcIkFkZCBUb2RvXCIpfT5BZGQgVG9kbzwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgIE15IFRvLURvIExpc3RcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cbiAgICAgICAgPFVub3JkZXJlZExpc3Q+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0b2RvLmlzQ29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0b2RvLnRhc2t9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUb2RvKHRvZG8uaWQpfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZSh0b2RvLmlkKX0+XG4gICAgICAgICAgICAgICAge3RvZG8uaXNDb21wbGV0ZWQgPyBcIk1hcmsgSW5jb21wbGV0ZVwiIDogXCJNYXJrIENvbXBsZXRlXCJ9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJCdXR0b24iLCJJbnB1dCIsIlRleHQiLCJMaXN0SXRlbSIsIlVub3JkZXJlZExpc3QiLCJheGlvcyIsIlJvdXRlciIsInRvZG9zTGlzdCIsImlkIiwidGFzayIsImlzQ29tcGxldGVkIiwiVG9kbyIsImluaXRpYWxUb2RvcyIsImdldCIsInBhcmFtcyIsImF1dGhUb2tlbiIsImRvY3VtZW50IiwiY29va2llIiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJEYXRlIiwibm93IiwiaGFuZGxlUmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJyZXNwb25zZSIsImRlbGV0ZSIsInB1c2giLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInR5cGUiLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});