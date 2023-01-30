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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        _id: \"1\",\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        _id: \"2\",\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        _id: \"3\",\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (task)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/tasks/add-task\", {\n            createdBy: userData._id,\n            task,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            console.log(response.data);\n            setTodos([\n                ...todos,\n                response.data\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n    // setTodos(todos.filter((todo) => todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n    // setTodos(\n    //   todos.map((todo) =>\n    //     todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo\n    //   )\n    // );\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: [\n                    \"To-Dos of\",\n                    \" \" + (userData === null || userData === void 0 ? void 0 : userData.userName)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"BDawYkoI2/1/wUe6tdel/MLbyvw=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLEVBQUU7b0NBQ3hEOzhDQUVDbUMsS0FBS3BDLElBQUk7Ozs7Ozs4Q0FFWiw4REFBQ1Qsb0RBQU1BO29DQUFDd0MsU0FBUyxJQUFNVixpQkFBaUJlLEtBQUtyQyxHQUFHOzhDQUFHOzs7Ozs7OENBQ25ELDhEQUFDUixvREFBTUE7b0NBQUN3QyxTQUFTLElBQU1SLHFCQUFxQmEsS0FBS3JDLEdBQUc7OENBQ2pEcUMsS0FBS25DLFdBQVcsR0FBRyxvQkFBb0IsZUFBZTs7Ozs7OzsyQkFWNUNtQyxLQUFLckMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JuQztHQXJGTUc7S0FBQUE7QUF1Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW50ZXJmYWNlIFRvZG8ge1xuICBfaWQ6IHN0cmluZztcbiAgdGFzazogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICBpbml0aWFsVG9kb3M6IFRvZG9bXTtcbn1cbmNvbnN0IHRvZG9zTGlzdDogVG9kb1tdID0gW1xuICB7IF9pZDogXCIxXCIsIHRhc2s6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICB7IF9pZDogXCIyXCIsIHRhc2s6IFwiQnV5IGdyb2Nlcmllc1wiLCBpc0NvbXBsZXRlZDogdHJ1ZSB9LFxuICB7IF9pZDogXCIzXCIsIHRhc2s6IFwiV2FzaCB0aGUgY2FyXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuXTtcbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJhcGkvYXV0aC91c2VyLWRhdGFcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3Rhc2tzL3JlYWQtYWxsLXRhc2tcIiwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdXNlcklkOiByZXNwb25zZS5kYXRhLnVzZXIuX2lkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFRvZG9zKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAodGFzazogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Rhc2tzL2FkZC10YXNrXCIsIHtcbiAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEuX2lkLFxuICAgICAgdGFzayxcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHJlc3BvbnNlLmRhdGFdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRvZG8gPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIC8vIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgLy8gc2V0VG9kb3MoXG4gICAgLy8gICB0b2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgLy8gICAgIHRvZG8uaWQgPT09IGlkID8geyAuLi50b2RvLCBpc0NvbXBsZXRlZDogIXRvZG8uaXNDb21wbGV0ZWQgfSA6IHRvZG9cbiAgICAvLyAgIClcbiAgICAvLyApO1xuICB9O1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dC11c2VyXCIpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgVG8tRG9zIG9mXG4gICAgICAgIHtcIiBcIiArIHVzZXJEYXRhPy51c2VyTmFtZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJveD5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgVG9kb1wiIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9kbyhcIkFkZCBUb2RvXCIpfT5BZGQgVG9kbzwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgIE15IFRvLURvIExpc3RcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cbiAgICAgICAgPFVub3JkZXJlZExpc3Q+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dG9kby5faWR9PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVG9kbyh0b2RvLl9pZCl9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKHRvZG8uX2lkKX0+XG4gICAgICAgICAgICAgICAge3RvZG8uaXNDb21wbGV0ZWQgPyBcIk1hcmsgSW5jb21wbGV0ZVwiIDogXCJNYXJrIENvbXBsZXRlXCJ9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJCdXR0b24iLCJJbnB1dCIsIlRleHQiLCJMaXN0SXRlbSIsIlVub3JkZXJlZExpc3QiLCJheGlvcyIsIlJvdXRlciIsInRvZG9zTGlzdCIsIl9pZCIsInRhc2siLCJpc0NvbXBsZXRlZCIsIlRvZG8iLCJpbml0aWFsVG9kb3MiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidG9kb3MiLCJzZXRUb2RvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwicGFyYW1zIiwidXNlcklkIiwiaGFuZGxlQWRkVG9kbyIsInBvc3QiLCJjcmVhdGVkQnkiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUmVtb3ZlVG9kbyIsImlkIiwiaGFuZGxlVG9nZ2xlQ29tcGxldGUiLCJsb2dvdXRIYW5kbGVyIiwiZGVsZXRlIiwicHVzaCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidXNlck5hbWUiLCJ0eXBlIiwib25DbGljayIsInBsYWNlaG9sZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFwIiwidG9kbyIsInN0eWxlIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});