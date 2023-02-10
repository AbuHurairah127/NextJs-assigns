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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"./src/components/navbar/navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst todosList = [\n    {\n        _id: \"1\",\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        _id: \"2\",\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        _id: \"3\",\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            console.log(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (e)=>{\n        e.preventDefault();\n        if (!userData) return;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/tasks/add-task\", {\n            createdBy: userData._id,\n            task: e.target.value,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            console.log(response.data);\n            setTodos([\n                ...todos,\n                response.data\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo._id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo._id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userData: userData,\n                logoutHandler: logoutHandler\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleAddTodo(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        textAlign: \"center\",\n                        marginTop: 5,\n                        color: \"#023047\",\n                        children: \"Add a new Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: \"flex\",\n                        margin: 8,\n                        padding: 5,\n                        borderWidth: 1,\n                        borderStyle: \"solid\",\n                        borderColor: \"#023047\",\n                        borderRadius: 8,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                placeholder: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                colorScheme: \"linkedin\",\n                                marginLeft: 4,\n                                children: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task + \" \" + todo._id\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"BDawYkoI2/1/wUe6tdel/MLbyvw=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NFO0FBUzVDO0FBQ0E7QUFDTztBQUM2QjtBQVM5RCxNQUFNYSxZQUFvQjtJQUN4QjtRQUFFQyxLQUFLO1FBQUtDLE1BQU07UUFBbUJDLGFBQWEsS0FBSztJQUFDO0lBQ3hEO1FBQUVGLEtBQUs7UUFBS0MsTUFBTTtRQUFpQkMsYUFBYSxJQUFJO0lBQUM7SUFDckQ7UUFBRUYsS0FBSztRQUFLQyxNQUFNO1FBQWdCQyxhQUFhLEtBQUs7SUFBQztDQUN0RDtBQUNELE1BQU1DLE9BQTRCLFNBQXNCO1FBQXJCLEVBQUVDLGFBQVksRUFBRTs7SUFDakQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBa0IsSUFBSTtJQUM5RCxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLGlEQUFTLENBQUMsc0JBQXNCYyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNqREwsWUFBWUssU0FBU0MsSUFBSSxDQUFDQyxJQUFJO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNDLElBQUksQ0FBQ0MsSUFBSTtZQUU5QmpCLGlEQUNNLENBQUMsMkJBQTJCO2dCQUM5Qm9CLFFBQVE7b0JBQ05DLFFBQVFOLFNBQVNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDYixHQUFHO2dCQUNoQztZQUNGLEdBQ0NVLElBQUksQ0FBQyxDQUFDQyxXQUFhO2dCQUNsQkgsU0FBU0csU0FBU0MsSUFBSTtZQUN4QjtRQUNKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sZ0JBQWdCLE9BQU9DLElBQXdDO1FBQ25FQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUksQ0FBQ2YsVUFBVTtRQUVmLE1BQU1NLFdBQVcsTUFBTWYsa0RBQVUsQ0FBQyxzQkFBc0I7WUFDdEQwQixXQUFXakIsU0FBU0wsR0FBRztZQUN2QkMsTUFBTSxFQUFHc0IsTUFBTSxDQUFzQkMsS0FBSztZQUMxQ3RCLGFBQWEsS0FBSztRQUNwQjtRQUNBLElBQUlTLFNBQVNjLE1BQU0sS0FBSyxLQUFLO1lBQzNCWCxRQUFRQyxHQUFHLENBQUNKLFNBQVNDLElBQUk7WUFFekJKLFNBQVM7bUJBQUlEO2dCQUFPSSxTQUFTQyxJQUFJO2FBQUM7UUFDcEMsQ0FBQztJQUNIO0lBQ0EsTUFBTWMsbUJBQW1CLENBQUNDLEtBQWU7UUFDdkNuQixTQUFTRCxNQUFNcUIsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUs3QixHQUFHLEtBQUsyQjtJQUMvQztJQUVBLE1BQU1HLHVCQUF1QixDQUFDSCxLQUFlO1FBQzNDbkIsU0FDRUQsTUFBTXdCLEdBQUcsQ0FBQyxDQUFDRixPQUNUQSxLQUFLN0IsR0FBRyxLQUFLMkIsS0FBSztnQkFBRSxHQUFHRSxJQUFJO2dCQUFFM0IsYUFBYSxDQUFDMkIsS0FBSzNCLFdBQVc7WUFBQyxJQUFJMkIsSUFBSTtJQUcxRTtJQUNBLE1BQU1HLGdCQUFnQixVQUFZO1FBQ2hDLE1BQU1yQixXQUFXLE1BQU1mLHVEQUFZLENBQUM7UUFDcEMsSUFBSWUsU0FBU2MsTUFBTSxLQUFLLEtBQUs7WUFDM0I1Qix1REFBVyxDQUFDO1FBQ2QsQ0FBQztJQUNIO0lBQ0EscUJBQ0UsOERBQUNSLGlEQUFHQTs7MEJBQ0YsOERBQUNTLGlFQUFNQTtnQkFBQ08sVUFBVUE7Z0JBQVUyQixlQUFlQTs7Ozs7OzBCQUMzQyw4REFBQ0c7Z0JBQUtDLFVBQVUsQ0FBQ2pCLElBQU1ELGNBQWNDOztrQ0FDbkMsOERBQUMxQixxREFBT0E7d0JBQUM0QyxXQUFXO3dCQUFVQyxXQUFXO3dCQUFHQyxPQUFPO2tDQUFXOzs7Ozs7a0NBRzlELDhEQUFDbEQsaURBQUdBO3dCQUNGbUQsU0FBUzt3QkFDVEMsUUFBUTt3QkFDUkMsU0FBUzt3QkFDVEMsYUFBYTt3QkFDYkMsYUFBYTt3QkFDYkMsYUFBYTt3QkFDYkMsY0FBYzs7MENBRWQsOERBQUN2RCxtREFBS0E7Z0NBQUN3RCxNQUFLO2dDQUFPQyxhQUFZOzs7Ozs7MENBQy9CLDhEQUFDMUQsb0RBQU1BO2dDQUFDeUQsTUFBSztnQ0FBU0UsYUFBYTtnQ0FBWUMsWUFBWTswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtsRSw4REFBQzFELGtEQUFJQTtnQkFBQzJELFVBQVU7Z0JBQUlkLFdBQVc7MEJBQVU7Ozs7OzswQkFHekMsOERBQUNoRCxpREFBR0E7Z0JBQUNtRCxTQUFTO2dCQUFRWSxnQkFBZ0I7MEJBQ3BDLDRFQUFDekQsMkRBQWFBOzhCQUNYWSxNQUFNd0IsR0FBRyxDQUFDLENBQUNGLHFCQUNWLDhEQUFDbkMsc0RBQVFBOzs4Q0FDUCw4REFBQ0Ysa0RBQUlBO29DQUNINkQsT0FBTzt3Q0FDTEMsZ0JBQWdCekIsS0FBSzNCLFdBQVcsR0FBRyxpQkFBaUIsRUFBRTtvQ0FDeEQ7OENBRUMyQixLQUFLNUIsSUFBSSxHQUFHLE1BQU00QixLQUFLN0IsR0FBRzs7Ozs7OzhDQUU3Qiw4REFBQ1Ysb0RBQU1BO29DQUFDaUUsU0FBUyxJQUFNN0IsaUJBQWlCRyxLQUFLN0IsR0FBRzs4Q0FBRzs7Ozs7OzhDQUNuRCw4REFBQ1Ysb0RBQU1BO29DQUFDaUUsU0FBUyxJQUFNekIscUJBQXFCRCxLQUFLN0IsR0FBRzs4Q0FDakQ2QixLQUFLM0IsV0FBVyxHQUFHLG9CQUFvQixlQUFlOzs7Ozs7OzJCQVY1QzJCLEtBQUs3QixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQm5DO0dBbkdNRztLQUFBQTtBQXFHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3RFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciwgeyBVc2VyRGF0YSB9IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xuaW50ZXJmYWNlIFRvZG8ge1xuICBfaWQ6IHN0cmluZztcbiAgdGFzazogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICBpbml0aWFsVG9kb3M6IFRvZG9bXTtcbn1cbmNvbnN0IHRvZG9zTGlzdDogVG9kb1tdID0gW1xuICB7IF9pZDogXCIxXCIsIHRhc2s6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICB7IF9pZDogXCIyXCIsIHRhc2s6IFwiQnV5IGdyb2Nlcmllc1wiLCBpc0NvbXBsZXRlZDogdHJ1ZSB9LFxuICB7IF9pZDogXCIzXCIsIHRhc2s6IFwiV2FzaCB0aGUgY2FyXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuXTtcbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJhcGkvYXV0aC91c2VyLWRhdGFcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnVzZXIpO1xuXG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3Rhc2tzL3JlYWQtYWxsLXRhc2tcIiwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdXNlcklkOiByZXNwb25zZS5kYXRhLnVzZXIuX2lkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFRvZG9zKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF1c2VyRGF0YSkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Rhc2tzL2FkZC10YXNrXCIsIHtcbiAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEuX2lkLFxuICAgICAgdGFzazogKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgcmVzcG9uc2UuZGF0YV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVG9kbyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVDb21wbGV0ZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VG9kb3MoXG4gICAgICB0b2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgIHRvZG8uX2lkID09PSBpZCA/IHsgLi4udG9kbywgaXNDb21wbGV0ZWQ6ICF0b2RvLmlzQ29tcGxldGVkIH0gOiB0b2RvXG4gICAgICApXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcIi9hcGkvYXV0aC9sb2dvdXQtdXNlclwiKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2F1dGgvbG9naW5cIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8TmF2YmFyIHVzZXJEYXRhPXt1c2VyRGF0YX0gbG9nb3V0SGFuZGxlcj17bG9nb3V0SGFuZGxlcn0gLz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlQWRkVG9kbyhlKX0+XG4gICAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luVG9wPXs1fSBjb2xvcj17XCIjMDIzMDQ3XCJ9PlxuICAgICAgICAgIEFkZCBhIG5ldyBUb2RvXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgIG1hcmdpbj17OH1cbiAgICAgICAgICBwYWRkaW5nPXs1fVxuICAgICAgICAgIGJvcmRlcldpZHRoPXsxfVxuICAgICAgICAgIGJvcmRlclN0eWxlPXtcInNvbGlkXCJ9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzAyMzA0N1wifVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkIFRvZG9cIiAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yU2NoZW1lPXtcImxpbmtlZGluXCJ9IG1hcmdpbkxlZnQ9ezR9PlxuICAgICAgICAgICAgQWRkIFRvZG9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8VGV4dCBmb250U2l6ZT17MjB9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+XG4gICAgICAgIE15IFRvLURvIExpc3RcbiAgICAgIDwvVGV4dD5cbiAgICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifT5cbiAgICAgICAgPFVub3JkZXJlZExpc3Q+XG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dG9kby5faWR9PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrICsgXCIgXCIgKyB0b2RvLl9pZH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5faWQpfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZSh0b2RvLl9pZCl9PlxuICAgICAgICAgICAgICAgIHt0b2RvLmlzQ29tcGxldGVkID8gXCJNYXJrIEluY29tcGxldGVcIiA6IFwiTWFyayBDb21wbGV0ZVwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0IiwiSGVhZGluZyIsIkxpc3RJdGVtIiwiVW5vcmRlcmVkTGlzdCIsImF4aW9zIiwiUm91dGVyIiwiTmF2YmFyIiwidG9kb3NMaXN0IiwiX2lkIiwidGFzayIsImlzQ29tcGxldGVkIiwiVG9kbyIsImluaXRpYWxUb2RvcyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ0b2RvcyIsInNldFRvZG9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicGFyYW1zIiwidXNlcklkIiwiaGFuZGxlQWRkVG9kbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjcmVhdGVkQnkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXR1cyIsImhhbmRsZVJlbW92ZVRvZG8iLCJpZCIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJkZWxldGUiLCJwdXNoIiwiZm9ybSIsIm9uU3VibWl0IiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiY29sb3IiLCJkaXNwbGF5IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNvbG9yU2NoZW1lIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});