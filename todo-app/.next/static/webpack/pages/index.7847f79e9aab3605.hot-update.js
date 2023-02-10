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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"./src/components/navbar/navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst todosList = [\n    {\n        _id: \"1\",\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        _id: \"2\",\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        _id: \"3\",\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            console.log(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (e)=>{\n        e.preventDefault();\n        console.log(e);\n        if (!userData) return;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/tasks/add-task\", {\n            createdBy: userData._id,\n            task: e.target.value,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            console.log(response.data);\n            setTodos([\n                ...todos,\n                response.data\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo._id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo._id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userData: userData,\n                logoutHandler: logoutHandler\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleAddTodo(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        children: \"Add a new Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: \"flex\",\n                        margin: 8,\n                        padding: 5,\n                        borderWidth: 1,\n                        borderStyle: \"solid\",\n                        borderColor: \"#023047\",\n                        borderRadius: 8,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                placeholder: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                colorScheme: \"linkedin\",\n                                marginLeft: 4,\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task + \" \" + todo._id\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"BDawYkoI2/1/wUe6tdel/MLbyvw=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQ0FDL0IsOERBQUN2RCxvREFBTUE7Z0NBQUNzRCxNQUFLO2dDQUFTRSxhQUFhO2dDQUFZQyxZQUFZOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2xFLDhEQUFDdkQsa0RBQUlBO2dCQUFDd0QsVUFBVTtnQkFBSUMsV0FBVzswQkFBVTs7Ozs7OzBCQUd6Qyw4REFBQzVELGlEQUFHQTtnQkFBQ2dELFNBQVM7Z0JBQVFhLGdCQUFnQjswQkFDcEMsNEVBQUN2RCwyREFBYUE7OEJBQ1hZLE1BQU13QixHQUFHLENBQUMsQ0FBQ0YscUJBQ1YsOERBQUNuQyxzREFBUUE7OzhDQUNQLDhEQUFDRixrREFBSUE7b0NBQ0gyRCxPQUFPO3dDQUNMQyxnQkFBZ0J2QixLQUFLM0IsV0FBVyxHQUFHLGlCQUFpQixFQUFFO29DQUN4RDs4Q0FFQzJCLEtBQUs1QixJQUFJLEdBQUcsTUFBTTRCLEtBQUs3QixHQUFHOzs7Ozs7OENBRTdCLDhEQUFDVixvREFBTUE7b0NBQUMrRCxTQUFTLElBQU0zQixpQkFBaUJHLEtBQUs3QixHQUFHOzhDQUFHOzs7Ozs7OENBQ25ELDhEQUFDVixvREFBTUE7b0NBQUMrRCxTQUFTLElBQU12QixxQkFBcUJELEtBQUs3QixHQUFHOzhDQUNqRDZCLEtBQUszQixXQUFXLEdBQUcsb0JBQW9CLGVBQWU7Ozs7Ozs7MkJBVjVDMkIsS0FBSzdCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbkM7R0FsR01HO0tBQUFBO0FBb0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdEV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIElucHV0LFxuICBUZXh0LFxuICBIZWFkaW5nLFxuICBMaXN0SXRlbSxcbiAgVW5vcmRlcmVkTGlzdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyLCB7IFVzZXJEYXRhIH0gZnJvbSBcIkAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCI7XG5pbnRlcmZhY2UgVG9kbyB7XG4gIF9pZDogc3RyaW5nO1xuICB0YXNrOiBzdHJpbmc7XG4gIGlzQ29tcGxldGVkOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFRvZG9Qcm9wcyB7XG4gIGluaXRpYWxUb2RvczogVG9kb1tdO1xufVxuY29uc3QgdG9kb3NMaXN0OiBUb2RvW10gPSBbXG4gIHsgX2lkOiBcIjFcIiwgdGFzazogXCJDbGVhbiB0aGUgaG91c2VcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIHsgX2lkOiBcIjJcIiwgdGFzazogXCJCdXkgZ3JvY2VyaWVzXCIsIGlzQ29tcGxldGVkOiB0cnVlIH0sXG4gIHsgX2lkOiBcIjNcIiwgdGFzazogXCJXYXNoIHRoZSBjYXJcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG5dO1xuY29uc3QgVG9kbzogUmVhY3QuRkM8VG9kb1Byb3BzPiA9ICh7IGluaXRpYWxUb2RvcyB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGU8VXNlckRhdGEgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcImFwaS9hdXRoL3VzZXItZGF0YVwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VXNlckRhdGEocmVzcG9uc2UuZGF0YS51c2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudXNlcik7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCJhcGkvdGFza3MvcmVhZC1hbGwtdGFza1wiLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHJlc3BvbnNlLmRhdGEudXNlci5faWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0VG9kb3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhlKTtcblxuICAgIGlmICghdXNlckRhdGEpIHJldHVybjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvdGFza3MvYWRkLXRhc2tcIiwge1xuICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS5faWQsXG4gICAgICB0YXNrOiAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCByZXNwb25zZS5kYXRhXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVSZW1vdmVUb2RvID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUb2Rvcyh0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uX2lkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCBpc0NvbXBsZXRlZDogIXRvZG8uaXNDb21wbGV0ZWQgfSA6IHRvZG9cbiAgICAgIClcbiAgICApO1xuICB9O1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dC11c2VyXCIpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxOYXZiYXIgdXNlckRhdGE9e3VzZXJEYXRhfSBsb2dvdXRIYW5kbGVyPXtsb2dvdXRIYW5kbGVyfSAvPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVBZGRUb2RvKGUpfT5cbiAgICAgICAgPEhlYWRpbmc+QWRkIGEgbmV3IFRvZG88L0hlYWRpbmc+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PXtcImZsZXhcIn1cbiAgICAgICAgICBtYXJnaW49ezh9XG4gICAgICAgICAgcGFkZGluZz17NX1cbiAgICAgICAgICBib3JkZXJXaWR0aD17MX1cbiAgICAgICAgICBib3JkZXJTdHlsZT17XCJzb2xpZFwifVxuICAgICAgICAgIGJvcmRlckNvbG9yPXtcIiMwMjMwNDdcIn1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCIgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvclNjaGVtZT17XCJsaW5rZWRpblwifSBtYXJnaW5MZWZ0PXs0fT5cbiAgICAgICAgICAgIEFkZCBUb2RvXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBNeSBUby1EbyBMaXN0XG4gICAgICA8L1RleHQ+XG4gICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e3RvZG8uX2lkfT5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uaXNDb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RvZG8udGFzayArIFwiIFwiICsgdG9kby5faWR9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVUb2RvKHRvZG8uX2lkKX0+UmVtb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlQ29tcGxldGUodG9kby5faWQpfT5cbiAgICAgICAgICAgICAgICB7dG9kby5pc0NvbXBsZXRlZCA/IFwiTWFyayBJbmNvbXBsZXRlXCIgOiBcIk1hcmsgQ29tcGxldGVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dCIsIkhlYWRpbmciLCJMaXN0SXRlbSIsIlVub3JkZXJlZExpc3QiLCJheGlvcyIsIlJvdXRlciIsIk5hdmJhciIsInRvZG9zTGlzdCIsIl9pZCIsInRhc2siLCJpc0NvbXBsZXRlZCIsIlRvZG8iLCJpbml0aWFsVG9kb3MiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidG9kb3MiLCJzZXRUb2RvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsInVzZXJJZCIsImhhbmRsZUFkZFRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY3JlYXRlZEJ5IiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0dXMiLCJoYW5kbGVSZW1vdmVUb2RvIiwiaWQiLCJmaWx0ZXIiLCJ0b2RvIiwiaGFuZGxlVG9nZ2xlQ29tcGxldGUiLCJtYXAiLCJsb2dvdXRIYW5kbGVyIiwiZGVsZXRlIiwicHVzaCIsImZvcm0iLCJvblN1Ym1pdCIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY29sb3JTY2hlbWUiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});