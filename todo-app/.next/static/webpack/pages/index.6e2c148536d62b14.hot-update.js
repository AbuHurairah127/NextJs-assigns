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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\");\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = async (task)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/tasks/add-task\", {\n            id: Date.now(),\n            task,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            setTodos([\n                ...todos,\n                {\n                    id: Date.now(),\n                    task,\n                    isCompleted: false\n                }\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"To-Do\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"ji78sN/uKyF24BCyCbYMW+oYZkY=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUQ7QUFTekI7QUFDQTtBQUNPO0FBU2pDLE1BQU1XLFlBQW9CO0lBQ3hCO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFtQkMsYUFBYSxLQUFLO0lBQUM7SUFDckQ7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWlCQyxhQUFhLElBQUk7SUFBQztJQUNsRDtRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBZ0JDLGFBQWEsS0FBSztJQUFDO0NBQ25EO0FBRUQsTUFBTUMsT0FBNEIsU0FBc0I7UUFBckIsRUFBRUMsYUFBWSxFQUFFOztJQUNqRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDLElBQUk7SUFFN0NDLGdEQUFTQSxDQUFDLElBQU07UUFDZE8saURBQVMsQ0FBQztJQUNaLEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQUNVO0lBQ25DLE1BQU1XLGdCQUFnQixPQUFPVCxPQUFpQjtRQUM1QyxNQUFNVSxXQUFXLE1BQU1kLGtEQUFVLENBQUMsc0JBQXNCO1lBQ3RERyxJQUFJYSxLQUFLQyxHQUFHO1lBQ1piO1lBQ0FDLGFBQWEsS0FBSztRQUNwQjtRQUNBLElBQUlTLFNBQVNJLE1BQU0sS0FBSyxLQUFLO1lBQzNCTixTQUFTO21CQUFJRDtnQkFBTztvQkFBRVIsSUFBSWEsS0FBS0MsR0FBRztvQkFBSWI7b0JBQU1DLGFBQWEsS0FBSztnQkFBQzthQUFFO1FBQ25FLENBQUM7SUFDSDtJQUNBLE1BQU1jLG1CQUFtQixDQUFDaEIsS0FBZTtRQUN2Q1MsU0FBU0QsTUFBTVMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtsQixFQUFFLEtBQUtBO0lBQzlDO0lBRUEsTUFBTW1CLHVCQUF1QixDQUFDbkIsS0FBZTtRQUMzQ1MsU0FDRUQsTUFBTVksR0FBRyxDQUFDLENBQUNGLE9BQ1RBLEtBQUtsQixFQUFFLEtBQUtBLEtBQUs7Z0JBQUUsR0FBR2tCLElBQUk7Z0JBQUVoQixhQUFhLENBQUNnQixLQUFLaEIsV0FBVztZQUFDLElBQUlnQixJQUFJO0lBR3pFO0lBQ0EsTUFBTUcsZ0JBQWdCLFVBQVk7UUFDaEMsTUFBTVYsV0FBVyxNQUFNZCx1REFBWSxDQUFDO1FBQ3BDLElBQUljLFNBQVNJLE1BQU0sS0FBSyxLQUFLO1lBQzNCakIsdURBQVcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDUCxpREFBR0E7OzBCQUNGLDhEQUFDRyxrREFBSUE7Z0JBQUM4QixVQUFVO2dCQUFJQyxXQUFXOzBCQUFVOzs7Ozs7MEJBR3pDLDhEQUFDakMsb0RBQU1BO2dCQUFDa0MsTUFBSztnQkFBU0MsU0FBU047MEJBQWU7Ozs7OzswQkFHOUMsOERBQUM5QixpREFBR0E7O2tDQUNGLDhEQUFDRSxtREFBS0E7d0JBQUNpQyxNQUFLO3dCQUFPRSxhQUFZOzs7Ozs7a0NBQy9CLDhEQUFDcEMsb0RBQU1BO3dCQUFDbUMsU0FBUyxJQUFNakIsY0FBYztrQ0FBYTs7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQ2hCLGtEQUFJQTtnQkFBQzhCLFVBQVU7Z0JBQUlDLFdBQVc7MEJBQVU7Ozs7OzswQkFHekMsOERBQUNsQyxpREFBR0E7Z0JBQUNzQyxTQUFTO2dCQUFRQyxnQkFBZ0I7MEJBQ3BDLDRFQUFDbEMsMkRBQWFBOzhCQUNYWSxNQUFNWSxHQUFHLENBQUMsQ0FBQ0YscUJBQ1YsOERBQUN2QixzREFBUUE7OzhDQUNQLDhEQUFDRCxrREFBSUE7b0NBQ0hxQyxPQUFPO3dDQUNMQyxnQkFBZ0JkLEtBQUtoQixXQUFXLEdBQUcsaUJBQWlCLEVBQUU7b0NBQ3hEOzhDQUVDZ0IsS0FBS2pCLElBQUk7Ozs7Ozs4Q0FFWiw4REFBQ1Qsb0RBQU1BO29DQUFDbUMsU0FBUyxJQUFNWCxpQkFBaUJFLEtBQUtsQixFQUFFOzhDQUFHOzs7Ozs7OENBQ2xELDhEQUFDUixvREFBTUE7b0NBQUNtQyxTQUFTLElBQU1SLHFCQUFxQkQsS0FBS2xCLEVBQUU7OENBQ2hEa0IsS0FBS2hCLFdBQVcsR0FBRyxvQkFBb0IsZUFBZTs7Ozs7OzsyQkFWNUNnQixLQUFLbEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JsQztHQXZFTUc7S0FBQUE7QUF5RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgTGlzdCxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW50ZXJmYWNlIFRvZG8ge1xuICBpZDogbnVtYmVyO1xuICB0YXNrOiBzdHJpbmc7XG4gIGlzQ29tcGxldGVkOiBib29sZWFuO1xufVxuaW50ZXJmYWNlIFRvZG9Qcm9wcyB7XG4gIGluaXRpYWxUb2RvczogVG9kb1tdO1xufVxuY29uc3QgdG9kb3NMaXN0OiBUb2RvW10gPSBbXG4gIHsgaWQ6IDEsIHRhc2s6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuICB7IGlkOiAyLCB0YXNrOiBcIkJ1eSBncm9jZXJpZXNcIiwgaXNDb21wbGV0ZWQ6IHRydWUgfSxcbiAgeyBpZDogMywgdGFzazogXCJXYXNoIHRoZSBjYXJcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG5dO1xuXG5jb25zdCBUb2RvOiBSZWFjdC5GQzxUb2RvUHJvcHM+ID0gKHsgaW5pdGlhbFRvZG9zIH0pID0+IHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcImFwaS9hdXRoL3VzZXItZGF0YVwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUodG9kb3NMaXN0KTtcbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IGFzeW5jICh0YXNrOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvdGFza3MvYWRkLXRhc2tcIiwge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICB0YXNrLFxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB7IGlkOiBEYXRlLm5vdygpLCB0YXNrLCBpc0NvbXBsZXRlZDogZmFsc2UgfV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgdG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGlzQ29tcGxldGVkOiAhdG9kby5pc0NvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0LXVzZXJcIik7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBUby1Eb1xuICAgICAgPC9UZXh0PlxuICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCIgLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb2RvKFwiQWRkIFRvZG9cIil9PkFkZCBUb2RvPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgTXkgVG8tRG8gTGlzdFxuICAgICAgPC9UZXh0PlxuICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uaXNDb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RvZG8udGFza31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5pZCl9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKHRvZG8uaWQpfT5cbiAgICAgICAgICAgICAgICB7dG9kby5pc0NvbXBsZXRlZCA/IFwiTWFyayBJbmNvbXBsZXRlXCIgOiBcIk1hcmsgQ29tcGxldGVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dCIsIkxpc3RJdGVtIiwiVW5vcmRlcmVkTGlzdCIsImF4aW9zIiwiUm91dGVyIiwidG9kb3NMaXN0IiwiaWQiLCJ0YXNrIiwiaXNDb21wbGV0ZWQiLCJUb2RvIiwiaW5pdGlhbFRvZG9zIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImdldCIsInRvZG9zIiwic2V0VG9kb3MiLCJoYW5kbGVBZGRUb2RvIiwicmVzcG9uc2UiLCJwb3N0IiwiRGF0ZSIsIm5vdyIsInN0YXR1cyIsImhhbmRsZVJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJ0b2RvIiwiaGFuZGxlVG9nZ2xlQ29tcGxldGUiLCJtYXAiLCJsb2dvdXRIYW5kbGVyIiwiZGVsZXRlIiwicHVzaCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidHlwZSIsIm9uQ2xpY2siLCJwbGFjZWhvbGRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0eWxlIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});