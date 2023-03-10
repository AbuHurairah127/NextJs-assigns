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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/navbar/navbar */ \"./src/components/navbar/navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\n\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/auth/user-data\").then((response)=>{\n            setUserData(response.data.user);\n            console.log(response.data.user);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/tasks/read-all-task\", {\n                params: {\n                    userId: response.data.user._id\n                }\n            }).then((response)=>{\n                setTodos(response.data);\n            });\n        });\n    }, []);\n    const handleAddTodo = async (e)=>{\n        e.preventDefault();\n        try {\n            setLoader(true);\n            if (!userData) return;\n            const newTodo = {\n                createdBy: userData._id,\n                task: e.target.value,\n                isCompleted: false\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"api/tasks/add-task\", newTodo);\n            if (response.status === 200) {\n                setTodos([\n                    ...todos,\n                    response.data\n                ]);\n            }\n        } catch (error) {\n            alert(error.response.data);\n        } finally{\n            setLoader(false);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo._id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo._id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        bgColor: \"#0000ff\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userData: userData,\n                logoutHandler: logoutHandler\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleAddTodo(e),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        textAlign: \"center\",\n                        marginTop: 5,\n                        color: \"#023047\",\n                        children: \"Add a new Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: \"flex\",\n                        margin: 8,\n                        padding: 5,\n                        borderWidth: 1,\n                        borderStyle: \"solid\",\n                        borderColor: \"#023047\",\n                        borderRadius: 8,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                value: todo,\n                                onChange: (e)=>setTodo(e.target.value),\n                                placeholder: \"Add Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                colorScheme: \"linkedin\",\n                                marginLeft: 4,\n                                disabled: !loader,\n                                children: !loader ? \"Add Todo\" : \"Adding A Todo\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task + \" \" + todo._id\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo._id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo._id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo._id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"ML/QOOPcwCR05piGd6oeaSHqu0g=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdEV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIElucHV0LFxuICBUZXh0LFxuICBIZWFkaW5nLFxuICBMaXN0SXRlbSxcbiAgVW5vcmRlcmVkTGlzdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyLCB7IFVzZXJEYXRhIH0gZnJvbSBcIkAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyXCI7XG5pbnRlcmZhY2UgVG9kbyB7XG4gIF9pZDogc3RyaW5nO1xuICBjcmVhdGVkQnk6IHN0cmluZztcbiAgdGFzazogc3RyaW5nO1xuICBpc0NvbXBsZXRlZDogYm9vbGVhbjtcbn1cbmludGVyZmFjZSBUb2RvUHJvcHMge1xuICBpbml0aWFsVG9kb3M6IFRvZG9bXTtcbn1cblxuY29uc3QgVG9kbzogUmVhY3QuRkM8VG9kb1Byb3BzPiA9ICh7IGluaXRpYWxUb2RvcyB9KSA9PiB7XG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihbXSk7XG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcy5nZXQoXCJhcGkvYXV0aC91c2VyLWRhdGFcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnVzZXIpO1xuXG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3Rhc2tzL3JlYWQtYWxsLXRhc2tcIiwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdXNlcklkOiByZXNwb25zZS5kYXRhLnVzZXIuX2lkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFRvZG9zKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRlcih0cnVlKTtcbiAgICAgIGlmICghdXNlckRhdGEpIHJldHVybjtcbiAgICAgIGNvbnN0IG5ld1RvZG86IHtcbiAgICAgICAgY3JlYXRlZEJ5OiBzdHJpbmc7XG4gICAgICAgIHRhc2s6IHN0cmluZztcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG4gICAgICB9ID0ge1xuICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLl9pZCxcbiAgICAgICAgdGFzazogKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Rhc2tzL2FkZC10YXNrXCIsIG5ld1RvZG8pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgcmVzcG9uc2UuZGF0YV0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVG9kbyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLl9pZCAhPT0gaWQpKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlVG9nZ2xlQ29tcGxldGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFRvZG9zKFxuICAgICAgdG9kb3MubWFwKCh0b2RvKSA9PlxuICAgICAgICB0b2RvLl9pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGlzQ29tcGxldGVkOiAhdG9kby5pc0NvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0LXVzZXJcIik7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGJnQ29sb3I9e1wiIzAwMDBmZlwifT5cbiAgICAgIDxOYXZiYXIgdXNlckRhdGE9e3VzZXJEYXRhfSBsb2dvdXRIYW5kbGVyPXtsb2dvdXRIYW5kbGVyfSAvPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVBZGRUb2RvKGUpfT5cbiAgICAgICAgPEhlYWRpbmcgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5Ub3A9ezV9IGNvbG9yPXtcIiMwMjMwNDdcIn0+XG4gICAgICAgICAgQWRkIGEgbmV3IFRvZG9cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgICAgbWFyZ2luPXs4fVxuICAgICAgICAgIHBhZGRpbmc9ezV9XG4gICAgICAgICAgYm9yZGVyV2lkdGg9ezF9XG4gICAgICAgICAgYm9yZGVyU3R5bGU9e1wic29saWRcIn1cbiAgICAgICAgICBib3JkZXJDb2xvcj17XCIjMDIzMDQ3XCJ9XG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17dG9kb31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG9kbyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wibGlua2VkaW5cIn1cbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezR9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWxvYWRlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWxvYWRlciA/IFwiQWRkIFRvZG9cIiA6IFwiQWRkaW5nIEEgVG9kb1wifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgTXkgVG8tRG8gTGlzdFxuICAgICAgPC9UZXh0PlxuICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0b2RvLl9pZH0+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0b2RvLmlzQ29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0b2RvLnRhc2sgKyBcIiBcIiArIHRvZG8uX2lkfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVG9kbyh0b2RvLl9pZCl9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKHRvZG8uX2lkKX0+XG4gICAgICAgICAgICAgICAge3RvZG8uaXNDb21wbGV0ZWQgPyBcIk1hcmsgSW5jb21wbGV0ZVwiIDogXCJNYXJrIENvbXBsZXRlXCJ9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJCdXR0b24iLCJJbnB1dCIsIlRleHQiLCJIZWFkaW5nIiwiTGlzdEl0ZW0iLCJVbm9yZGVyZWRMaXN0IiwiYXhpb3MiLCJSb3V0ZXIiLCJOYXZiYXIiLCJUb2RvIiwiaW5pdGlhbFRvZG9zIiwidG9kbyIsInNldFRvZG8iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidG9kb3MiLCJzZXRUb2RvcyIsImxvYWRlciIsInNldExvYWRlciIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsInVzZXJJZCIsIl9pZCIsImhhbmRsZUFkZFRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdUb2RvIiwiY3JlYXRlZEJ5IiwidGFzayIsInRhcmdldCIsInZhbHVlIiwiaXNDb21wbGV0ZWQiLCJwb3N0Iiwic3RhdHVzIiwiZXJyb3IiLCJhbGVydCIsImhhbmRsZVJlbW92ZVRvZG8iLCJpZCIsImZpbHRlciIsImhhbmRsZVRvZ2dsZUNvbXBsZXRlIiwibWFwIiwibG9nb3V0SGFuZGxlciIsImRlbGV0ZSIsInB1c2giLCJiZ0NvbG9yIiwiZm9ybSIsIm9uU3VibWl0IiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiY29sb3IiLCJkaXNwbGF5IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY29sb3JTY2hlbWUiLCJtYXJnaW5MZWZ0IiwiZGlzYWJsZWQiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});