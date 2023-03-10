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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"./src/components/navbar/navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            console.log(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (e)=>{\n        e.preventDefault();\n        try {\n            setLoader(true);\n            if (!userData) return;\n            const newTodo = {\n                createdBy: userData._id,\n                task: e.target.value,\n                isCompleted: false\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/tasks/add-task\", newTodo);\n            if (response.status === 200) {\n                setTodos([\n                    ...todos,\n                    response.data\n                ]);\n            }\n        } catch (error) {\n            alert(error.response.data);\n        } finally{\n            setLoader(false);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo._id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo._id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        bgColor: \"#f1faee\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userData: userData,\n                logoutHandler: logoutHandler\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleAddTodo(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        textAlign: \"center\",\n                        marginTop: 5,\n                        color: \"#023047\",\n                        children: \"Add a new Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: \"flex\",\n                        margin: 8,\n                        padding: 5,\n                        borderWidth: 1,\n                        borderStyle: \"solid\",\n                        borderColor: \"#457b9d\",\n                        borderRadius: 8,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                value: todo,\n                                onChange: (e)=>setTodo(e.target.value),\n                                placeholder: \"Learn next js 13...\",\n                                borderRightRadius: 0\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                bgColor: \"#1d3557\",\n                                color: \"white\",\n                                _hover: {\n                                    bgColor: \"#457b9d\"\n                                },\n                                disabled: !loader,\n                                borderLeftRadius: 0,\n                                children: !loader ? \"Add Todo\" : \"Adding A Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            width: \"90vw\",\n                            display: \"flex\",\n                            padding: 5,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task + \" \" + todo._id\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"ML/QOOPcwCR05piGd6oeaSHqu0g=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQXNCM0I7R0FqSU1uQjtLQUFBQTtBQW1JTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3RFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbnB1dCxcbiAgVGV4dCxcbiAgSGVhZGluZyxcbiAgTGlzdEl0ZW0sXG4gIFVub3JkZXJlZExpc3QsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhciwgeyBVc2VyRGF0YSB9IGZyb20gXCJAL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhclwiO1xuaW50ZXJmYWNlIFRvZG8ge1xuICBfaWQ6IHN0cmluZztcbiAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gIHRhc2s6IHN0cmluZztcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgVG9kb1Byb3BzIHtcbiAgaW5pdGlhbFRvZG9zOiBUb2RvW107XG59XG5cbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICBjb25zdCBbdG9kbywgc2V0VG9kb10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxVc2VyRGF0YSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pO1xuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiYXBpL2F1dGgvdXNlci1kYXRhXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRVc2VyRGF0YShyZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS51c2VyKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcImFwaS90YXNrcy9yZWFkLWFsbC10YXNrXCIsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHVzZXJJZDogcmVzcG9uc2UuZGF0YS51c2VyLl9pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRUb2RvcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkZXIodHJ1ZSk7XG4gICAgICBpZiAoIXVzZXJEYXRhKSByZXR1cm47XG4gICAgICBjb25zdCBuZXdUb2RvOiB7XG4gICAgICAgIGNyZWF0ZWRCeTogc3RyaW5nO1xuICAgICAgICB0YXNrOiBzdHJpbmc7XG4gICAgICAgIGlzQ29tcGxldGVkOiBib29sZWFuO1xuICAgICAgfSA9IHtcbiAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS5faWQsXG4gICAgICAgIHRhc2s6IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS90YXNrcy9hZGQtdGFza1wiLCBuZXdUb2RvKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHJlc3BvbnNlLmRhdGFdKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlbW92ZVRvZG8gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFRvZG9zKHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5faWQgIT09IGlkKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgdG9kby5faWQgPT09IGlkID8geyAuLi50b2RvLCBpc0NvbXBsZXRlZDogIXRvZG8uaXNDb21wbGV0ZWQgfSA6IHRvZG9cbiAgICAgIClcbiAgICApO1xuICB9O1xuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFwiL2FwaS9hdXRoL2xvZ291dC11c2VyXCIpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgUm91dGVyLnB1c2goXCIvYXV0aC9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBiZ0NvbG9yPXtcIiNmMWZhZWVcIn0+XG4gICAgICA8TmF2YmFyIHVzZXJEYXRhPXt1c2VyRGF0YX0gbG9nb3V0SGFuZGxlcj17bG9nb3V0SGFuZGxlcn0gLz5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlQWRkVG9kbyhlKX0+XG4gICAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luVG9wPXs1fSBjb2xvcj17XCIjMDIzMDQ3XCJ9PlxuICAgICAgICAgIEFkZCBhIG5ldyBUb2RvXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgIG1hcmdpbj17OH1cbiAgICAgICAgICBwYWRkaW5nPXs1fVxuICAgICAgICAgIGJvcmRlcldpZHRoPXsxfVxuICAgICAgICAgIGJvcmRlclN0eWxlPXtcInNvbGlkXCJ9XG4gICAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzQ1N2I5ZFwifVxuICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RvZG99XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvZG8oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMZWFybiBuZXh0IGpzIDEzLi4uXCJcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0UmFkaXVzPXswfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBiZ0NvbG9yPXtcIiMxZDM1NTdcIn1cbiAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgYmdDb2xvcjogXCIjNDU3YjlkXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFsb2FkZXJ9XG4gICAgICAgICAgICBib3JkZXJMZWZ0UmFkaXVzPXswfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshbG9hZGVyID8gXCJBZGQgVG9kb1wiIDogXCJBZGRpbmcgQSBUb2RvXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9mb3JtPlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBNeSBUby1EbyBMaXN0XG4gICAgICA8L1RleHQ+XG4gICAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0+XG4gICAgICAgIDxVbm9yZGVyZWRMaXN0PlxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3RvZG8uX2lkfVxuICAgICAgICAgICAgICB3aWR0aD17XCI5MHZ3XCJ9XG4gICAgICAgICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxuICAgICAgICAgICAgICBwYWRkaW5nPXs1fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dG9kby50YXNrICsgXCIgXCIgKyB0b2RvLl9pZH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5faWQpfT5SZW1vdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGVDb21wbGV0ZSh0b2RvLl9pZCl9PlxuICAgICAgICAgICAgICAgIHt0b2RvLmlzQ29tcGxldGVkID8gXCJNYXJrIEluY29tcGxldGVcIiA6IFwiTWFyayBDb21wbGV0ZVwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0IiwiSGVhZGluZyIsIkxpc3RJdGVtIiwiVW5vcmRlcmVkTGlzdCIsImF4aW9zIiwiUm91dGVyIiwiTmF2YmFyIiwiVG9kbyIsImluaXRpYWxUb2RvcyIsInRvZG8iLCJzZXRUb2RvIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInRvZG9zIiwic2V0VG9kb3MiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJ1c2VySWQiLCJfaWQiLCJoYW5kbGVBZGRUb2RvIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV3VG9kbyIsImNyZWF0ZWRCeSIsInRhc2siLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzQ29tcGxldGVkIiwicG9zdCIsInN0YXR1cyIsImVycm9yIiwiYWxlcnQiLCJoYW5kbGVSZW1vdmVUb2RvIiwiaWQiLCJmaWx0ZXIiLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJkZWxldGUiLCJwdXNoIiwiYmdDb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImNvbG9yIiwiZGlzcGxheSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJvcmRlclJpZ2h0UmFkaXVzIiwiX2hvdmVyIiwiZGlzYWJsZWQiLCJib3JkZXJMZWZ0UmFkaXVzIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});