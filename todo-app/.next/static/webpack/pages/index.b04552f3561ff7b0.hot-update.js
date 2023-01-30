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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\");\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = (task)=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                task,\n                isCompleted: false\n            }\n        ]);\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"To-Do\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"TfMCsjpv6opEHPxWtCXCRYtThvk=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUQ7QUFTekI7QUFDQTtBQUNPO0FBU2pDLE1BQU1XLFlBQW9CO0lBQ3hCO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFtQkMsYUFBYSxLQUFLO0lBQUM7SUFDckQ7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWlCQyxhQUFhLElBQUk7SUFBQztJQUNsRDtRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBZ0JDLGFBQWEsS0FBSztJQUFDO0NBQ25EO0FBRUQsTUFBTUMsT0FBNEIsU0FBc0I7UUFBckIsRUFBRUMsYUFBWSxFQUFFOztJQUNqRGQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTyxpREFBUyxDQUFDO0lBQ1osR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQ1U7SUFDbkMsTUFBTVMsZ0JBQWdCLENBQUNQLE9BQWlCO1FBQ3RDTSxTQUFTO2VBQUlEO1lBQU87Z0JBQUVOLElBQUlTLEtBQUtDLEdBQUc7Z0JBQUlUO2dCQUFNQyxhQUFhLEtBQUs7WUFBQztTQUFFO0lBQ25FO0lBQ0EsTUFBTVMsbUJBQW1CLENBQUNYLEtBQWU7UUFDdkNPLFNBQVNELE1BQU1NLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLYixFQUFFLEtBQUtBO0lBQzlDO0lBRUEsTUFBTWMsdUJBQXVCLENBQUNkLEtBQWU7UUFDM0NPLFNBQ0VELE1BQU1TLEdBQUcsQ0FBQyxDQUFDRixPQUNUQSxLQUFLYixFQUFFLEtBQUtBLEtBQUs7Z0JBQUUsR0FBR2EsSUFBSTtnQkFBRVgsYUFBYSxDQUFDVyxLQUFLWCxXQUFXO1lBQUMsSUFBSVcsSUFBSTtJQUd6RTtJQUNBLE1BQU1HLGdCQUFnQixVQUFZO1FBQ2hDLE1BQU1DLFdBQVcsTUFBTXBCLHVEQUFZLENBQUM7UUFDcENDLHVEQUFXLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDUCxpREFBR0E7OzBCQUNGLDhEQUFDRyxrREFBSUE7Z0JBQUMwQixVQUFVO2dCQUFJQyxXQUFXOzBCQUFVOzs7Ozs7MEJBR3pDLDhEQUFDN0Isb0RBQU1BO2dCQUFDOEIsTUFBSztnQkFBU0MsU0FBU1A7MEJBQWU7Ozs7OzswQkFHOUMsOERBQUN6QixpREFBR0E7O2tDQUNGLDhEQUFDRSxtREFBS0E7d0JBQUM2QixNQUFLO3dCQUFPRSxhQUFZOzs7Ozs7a0NBQy9CLDhEQUFDaEMsb0RBQU1BO3dCQUFDK0IsU0FBUyxJQUFNZixjQUFjO2tDQUFhOzs7Ozs7Ozs7Ozs7MEJBRXBELDhEQUFDZCxrREFBSUE7Z0JBQUMwQixVQUFVO2dCQUFJQyxXQUFXOzBCQUFVOzs7Ozs7MEJBR3pDLDhEQUFDOUIsaURBQUdBO2dCQUFDa0MsU0FBUztnQkFBUUMsZ0JBQWdCOzBCQUNwQyw0RUFBQzlCLDJEQUFhQTs4QkFDWFUsTUFBTVMsR0FBRyxDQUFDLENBQUNGLHFCQUNWLDhEQUFDbEIsc0RBQVFBOzs4Q0FDUCw4REFBQ0Qsa0RBQUlBO29DQUNIaUMsT0FBTzt3Q0FDTEMsZ0JBQWdCZixLQUFLWCxXQUFXLEdBQUcsaUJBQWlCLEVBQUU7b0NBQ3hEOzhDQUVDVyxLQUFLWixJQUFJOzs7Ozs7OENBRVosOERBQUNULG9EQUFNQTtvQ0FBQytCLFNBQVMsSUFBTVosaUJBQWlCRSxLQUFLYixFQUFFOzhDQUFHOzs7Ozs7OENBQ2xELDhEQUFDUixvREFBTUE7b0NBQUMrQixTQUFTLElBQU1ULHFCQUFxQkQsS0FBS2IsRUFBRTs4Q0FDaERhLEtBQUtYLFdBQVcsR0FBRyxvQkFBb0IsZUFBZTs7Ozs7OzsyQkFWNUNXLEtBQUtiLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbEM7R0E1RE1HO0tBQUFBO0FBOEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSW5wdXQsXG4gIFRleHQsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBVbm9yZGVyZWRMaXN0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGFzazogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICBpbml0aWFsVG9kb3M6IFRvZG9bXTtcbn1cbmNvbnN0IHRvZG9zTGlzdDogVG9kb1tdID0gW1xuICB7IGlkOiAxLCB0YXNrOiBcIkNsZWFuIHRoZSBob3VzZVwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbiAgeyBpZDogMiwgdGFzazogXCJCdXkgZ3JvY2VyaWVzXCIsIGlzQ29tcGxldGVkOiB0cnVlIH0sXG4gIHsgaWQ6IDMsIHRhc2s6IFwiV2FzaCB0aGUgY2FyXCIsIGlzQ29tcGxldGVkOiBmYWxzZSB9LFxuXTtcblxuY29uc3QgVG9kbzogUmVhY3QuRkM8VG9kb1Byb3BzPiA9ICh7IGluaXRpYWxUb2RvcyB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiYXBpL2F1dGgvdXNlci1kYXRhXCIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZSh0b2Rvc0xpc3QpO1xuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKHRhc2s6IHN0cmluZykgPT4ge1xuICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyBpZDogRGF0ZS5ub3coKSwgdGFzaywgaXNDb21wbGV0ZWQ6IGZhbHNlIH1dKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgdG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGlzQ29tcGxldGVkOiAhdG9kby5pc0NvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0LXVzZXJcIik7XG4gICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBUby1Eb1xuICAgICAgPC9UZXh0PlxuICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCIgLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb2RvKFwiQWRkIFRvZG9cIil9PkFkZCBUb2RvPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgTXkgVG8tRG8gTGlzdFxuICAgICAgPC9UZXh0PlxuICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uaXNDb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RvZG8udGFza31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5pZCl9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKHRvZG8uaWQpfT5cbiAgICAgICAgICAgICAgICB7dG9kby5pc0NvbXBsZXRlZCA/IFwiTWFyayBJbmNvbXBsZXRlXCIgOiBcIk1hcmsgQ29tcGxldGVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dCIsIkxpc3RJdGVtIiwiVW5vcmRlcmVkTGlzdCIsImF4aW9zIiwiUm91dGVyIiwidG9kb3NMaXN0IiwiaWQiLCJ0YXNrIiwiaXNDb21wbGV0ZWQiLCJUb2RvIiwiaW5pdGlhbFRvZG9zIiwiZ2V0IiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJEYXRlIiwibm93IiwiaGFuZGxlUmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJyZXNwb25zZSIsImRlbGV0ZSIsInB1c2giLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInR5cGUiLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});