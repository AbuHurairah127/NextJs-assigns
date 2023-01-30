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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response);\n            console.log(res);\n        });\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = async (task)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/tasks/add-task\", {\n            id: Date.now(),\n            task,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            setTodos([\n                ...todos,\n                {\n                    id: Date.now(),\n                    task,\n                    isCompleted: false\n                }\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: [\n                    \"To-Dos of\",\n                    userData === null || userData === void 0 ? void 0 : userData.userName\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"ji78sN/uKyF24BCyCbYMW+oYZkY=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJOzs7Ozs7OENBRVosOERBQUNULG9EQUFNQTtvQ0FBQ3dDLFNBQVMsSUFBTVosaUJBQWlCRSxLQUFLdEIsRUFBRTs4Q0FBRzs7Ozs7OzhDQUNsRCw4REFBQ1Isb0RBQU1BO29DQUFDd0MsU0FBUyxJQUFNVCxxQkFBcUJELEtBQUt0QixFQUFFOzhDQUNoRHNCLEtBQUtwQixXQUFXLEdBQUcsb0JBQW9CLGVBQWU7Ozs7Ozs7MkJBVjVDb0IsS0FBS3RCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbEM7R0EzRU1HO0tBQUFBO0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIFRleHQsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBVbm9yZGVyZWRMaXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGFzazogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICBpbml0aWFsVG9kb3M6IFRvZG9bXTtcbn1cbmNvbnN0IHRvZG9zTGlzdDogVG9kb1tdID0gW1xuICB7IGlkOiAxLCB0YXNrOiBcIkNsZWFuIHRoZSBob3VzZVwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgeyBpZDogMiwgdGFzazogXCJCdXkgZ3JvY2VyaWVzXCIsIGlzQ29tcGxldGVkOiB0cnVlIH0sXG4gIHsgaWQ6IDMsIHRhc2s6IFwiV2FzaCB0aGUgY2FyXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuXTtcbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJhcGkvYXV0aC91c2VyLWRhdGFcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKHRvZG9zTGlzdCk7XG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAodGFzazogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Rhc2tzL2FkZC10YXNrXCIsIHtcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgdGFzayxcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyBpZDogRGF0ZS5ub3coKSwgdGFzaywgaXNDb21wbGV0ZWQ6IGZhbHNlIH1dKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRvZG8gPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3MoXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBpc0NvbXBsZXRlZDogIXRvZG8uaXNDb21wbGV0ZWQgfSA6IHRvZG9cbiAgICAgIClcbiAgICApO1xuICB9O1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dC11c2VyXCIpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgVG8tRG9zIG9mXG4gICAgICAgIHt1c2VyRGF0YT8udXNlck5hbWV9XG4gICAgICA8L1RleHQ+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIFRvZG9cIiAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvZG8oXCJBZGQgVG9kb1wiKX0+QWRkIFRvZG88L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBNeSBUby1EbyBMaXN0XG4gICAgICA8L1RleHQ+XG4gICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVG9kbyh0b2RvLmlkKX0+UmVtb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlQ29tcGxldGUodG9kby5pZCl9PlxuICAgICAgICAgICAgICAgIHt0b2RvLmlzQ29tcGxldGVkID8gXCJNYXJrIEluY29tcGxldGVcIiA6IFwiTWFyayBDb21wbGV0ZVwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0IiwiTGlzdEl0ZW0iLCJVbm9yZGVyZWRMaXN0IiwiYXhpb3MiLCJSb3V0ZXIiLCJ0b2Rvc0xpc3QiLCJpZCIsInRhc2siLCJpc0NvbXBsZXRlZCIsIlRvZG8iLCJpbml0aWFsVG9kb3MiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRvZG9zIiwic2V0VG9kb3MiLCJoYW5kbGVBZGRUb2RvIiwicG9zdCIsIkRhdGUiLCJub3ciLCJzdGF0dXMiLCJoYW5kbGVSZW1vdmVUb2RvIiwiZmlsdGVyIiwidG9kbyIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlIiwibWFwIiwibG9nb3V0SGFuZGxlciIsImRlbGV0ZSIsInB1c2giLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInVzZXJOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJwbGFjZWhvbGRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});