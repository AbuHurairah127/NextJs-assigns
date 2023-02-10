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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"./src/components/navbar/navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst todosList = [\n    {\n        _id: \"1\",\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        _id: \"2\",\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        _id: \"3\",\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            console.log(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (e)=>{\n        console.log(task);\n        if (!userData) return;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/tasks/add-task\", {\n            createdBy: userData._id,\n            task,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            console.log(response.data);\n            setTodos([\n                ...todos,\n                response.data\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo._id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo._id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userData: userData,\n                logoutHandler: logoutHandler\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                margin: 8,\n                padding: 5,\n                borderWidth: 1,\n                borderStyle: \"solid\",\n                borderColor: \"#023047\",\n                borderRadius: 8,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: (e)=>handleAddTodo(e),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                            type: \"text\",\n                            placeholder: \"Add Todo\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            colorScheme: \"linkedin\",\n                            marginLeft: 4,\n                            children: \"Add Todo\"\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task + \" \" + todo._id\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"BDawYkoI2/1/wUe6tdel/MLbyvw=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNuRCxrREFBSUE7Z0JBQUNvRCxVQUFVO2dCQUFJQyxXQUFXOzBCQUFVOzs7Ozs7MEJBR3pDLDhEQUFDeEQsaURBQUdBO2dCQUFDMEMsU0FBUztnQkFBUWUsZ0JBQWdCOzBCQUNwQyw0RUFBQ3BELDJEQUFhQTs4QkFDWFksTUFBTXFCLEdBQUcsQ0FBQyxDQUFDRixxQkFDViw4REFBQ2hDLHNEQUFRQTs7OENBQ1AsOERBQUNELGtEQUFJQTtvQ0FDSHVELE9BQU87d0NBQ0xDLGdCQUFnQnZCLEtBQUt4QixXQUFXLEdBQUcsaUJBQWlCLEVBQUU7b0NBQ3hEOzhDQUVDd0IsS0FBS3pCLElBQUksR0FBRyxNQUFNeUIsS0FBSzFCLEdBQUc7Ozs7Ozs4Q0FFN0IsOERBQUNULG9EQUFNQTtvQ0FBQzJELFNBQVMsSUFBTTNCLGlCQUFpQkcsS0FBSzFCLEdBQUc7OENBQUc7Ozs7Ozs4Q0FDbkQsOERBQUNULG9EQUFNQTtvQ0FBQzJELFNBQVMsSUFBTXZCLHFCQUFxQkQsS0FBSzFCLEdBQUc7OENBQ2pEMEIsS0FBS3hCLFdBQVcsR0FBRyxvQkFBb0IsZUFBZTs7Ozs7OzsyQkFWNUN3QixLQUFLMUIsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JuQztHQWhHTUc7S0FBQUE7QUFrR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIFRleHQsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBVbm9yZGVyZWRMaXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOYXZiYXIsIHsgVXNlckRhdGEgfSBmcm9tIFwiQC9jb21wb25lbnRzL25hdmJhci9uYXZiYXJcIjtcbmludGVyZmFjZSBUb2RvIHtcbiAgX2lkOiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgVG9kb1Byb3BzIHtcbiAgaW5pdGlhbFRvZG9zOiBUb2RvW107XG59XG5jb25zdCB0b2Rvc0xpc3Q6IFRvZG9bXSA9IFtcbiAgeyBfaWQ6IFwiMVwiLCB0YXNrOiBcIkNsZWFuIHRoZSBob3VzZVwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgeyBfaWQ6IFwiMlwiLCB0YXNrOiBcIkJ1eSBncm9jZXJpZXNcIiwgaXNDb21wbGV0ZWQ6IHRydWUgfSxcbiAgeyBfaWQ6IFwiM1wiLCB0YXNrOiBcIldhc2ggdGhlIGNhclwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbl07XG5jb25zdCBUb2RvOiBSZWFjdC5GQzxUb2RvUHJvcHM+ID0gKHsgaW5pdGlhbFRvZG9zIH0pID0+IHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxVc2VyRGF0YSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiYXBpL2F1dGgvdXNlci1kYXRhXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRVc2VyRGF0YShyZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS51c2VyKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcImFwaS90YXNrcy9yZWFkLWFsbC10YXNrXCIsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHVzZXJJZDogcmVzcG9uc2UuZGF0YS51c2VyLl9pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRUb2RvcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKGU6IFJlYWN0RXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc29sZS5sb2codGFzayk7XG5cbiAgICBpZiAoIXVzZXJEYXRhKSByZXR1cm47XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Rhc2tzL2FkZC10YXNrXCIsIHtcbiAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEuX2lkLFxuICAgICAgdGFzayxcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHJlc3BvbnNlLmRhdGFdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRvZG8gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgIT09IGlkKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ29tcGxldGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFRvZG9zKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICB0b2RvLl9pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGlzQ29tcGxldGVkOiAhdG9kby5pc0NvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0LXVzZXJcIik7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPE5hdmJhciB1c2VyRGF0YT17dXNlckRhdGF9IGxvZ291dEhhbmRsZXI9e2xvZ291dEhhbmRsZXJ9IC8+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICBtYXJnaW49ezh9XG4gICAgICAgIHBhZGRpbmc9ezV9XG4gICAgICAgIGJvcmRlcldpZHRoPXsxfVxuICAgICAgICBib3JkZXJTdHlsZT17XCJzb2xpZFwifVxuICAgICAgICBib3JkZXJDb2xvcj17XCIjMDIzMDQ3XCJ9XG4gICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgID5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVBZGRUb2RvKGUpfT5cbiAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCIgLz5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPXtcImxpbmtlZGluXCJ9IG1hcmdpbkxlZnQ9ezR9PlxuICAgICAgICAgICAgQWRkIFRvZG9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgIE15IFRvLURvIExpc3RcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cbiAgICAgICAgPFVub3JkZXJlZExpc3Q+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dG9kby5faWR9PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrICsgXCIgXCIgKyB0b2RvLl9pZH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5faWQpfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZSh0b2RvLl9pZCl9PlxuICAgICAgICAgICAgICAgIHt0b2RvLmlzQ29tcGxldGVkID8gXCJNYXJrIEluY29tcGxldGVcIiA6IFwiTWFyayBDb21wbGV0ZVwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0IiwiTGlzdEl0ZW0iLCJVbm9yZGVyZWRMaXN0IiwiYXhpb3MiLCJSb3V0ZXIiLCJOYXZiYXIiLCJ0b2Rvc0xpc3QiLCJfaWQiLCJ0YXNrIiwiaXNDb21wbGV0ZWQiLCJUb2RvIiwiaW5pdGlhbFRvZG9zIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInRvZG9zIiwic2V0VG9kb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJ1c2VySWQiLCJoYW5kbGVBZGRUb2RvIiwiZSIsInBvc3QiLCJjcmVhdGVkQnkiLCJzdGF0dXMiLCJoYW5kbGVSZW1vdmVUb2RvIiwiaWQiLCJmaWx0ZXIiLCJ0b2RvIiwiaGFuZGxlVG9nZ2xlQ29tcGxldGUiLCJtYXAiLCJsb2dvdXRIYW5kbGVyIiwiZGVsZXRlIiwicHVzaCIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiZm9ybSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY29sb3JTY2hlbWUiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});