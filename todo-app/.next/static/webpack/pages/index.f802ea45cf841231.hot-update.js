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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nconst todosList = [\n    {\n        id: 1,\n        task: \"Clean the house\",\n        isCompleted: false\n    },\n    {\n        id: 2,\n        task: \"Buy groceries\",\n        isCompleted: true\n    },\n    {\n        id: 3,\n        task: \"Wash the car\",\n        isCompleted: false\n    }\n];\nconst Todo = (param)=>{\n    let { initialTodos  } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"api/auth/user-data\");\n    }, []);\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todosList);\n    const handleAddTodo = async (task)=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"api/tasks/add-task\", {\n            id: Date.now(),\n            task,\n            isCompleted: false\n        });\n        if (response.status === 200) {\n            setTodos([\n                ...todos,\n                {\n                    id: Date.now(),\n                    task,\n                    isCompleted: false\n                }\n            ]);\n        }\n    };\n    const handleRemoveTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const handleToggleComplete = (id)=>{\n        setTodos(todos.map((todo)=>todo.id === id ? {\n                ...todo,\n                isCompleted: !todo.isCompleted\n            } : todo));\n    };\n    const logoutHandler = async ()=>{\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/auth/logout-user\");\n        if (response.status === 200) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/auth/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"To-Do\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                type: \"button\",\n                onClick: logoutHandler,\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>handleAddTodo(\"Add Todo\"),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                fontSize: 20,\n                textAlign: \"center\",\n                children: \"My To-Do List\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.UnorderedList, {\n                    children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                    style: {\n                                        textDecoration: todo.isCompleted ? \"line-through\" : \"\"\n                                    },\n                                    children: todo.task\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleRemoveTodo(todo.id),\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: ()=>handleToggleComplete(todo.id),\n                                    children: todo.isCompleted ? \"Mark Incomplete\" : \"Mark Complete\"\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Learning\\\\Assignments PIAIC\\\\next-js-assigns\\\\todo-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"TfMCsjpv6opEHPxWtCXCRYtThvk=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxDO0dBckVNRztLQUFBQTtBQXVFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIElucHV0LFxuICBUZXh0LFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgVW5vcmRlcmVkTGlzdCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbnRlcmZhY2UgVG9kbyB7XG4gIGlkOiBudW1iZXI7XG4gIHRhc2s6IHN0cmluZztcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XG59XG5pbnRlcmZhY2UgVG9kb1Byb3BzIHtcbiAgaW5pdGlhbFRvZG9zOiBUb2RvW107XG59XG5jb25zdCB0b2Rvc0xpc3Q6IFRvZG9bXSA9IFtcbiAgeyBpZDogMSwgdGFzazogXCJDbGVhbiB0aGUgaG91c2VcIiwgaXNDb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIHsgaWQ6IDIsIHRhc2s6IFwiQnV5IGdyb2Nlcmllc1wiLCBpc0NvbXBsZXRlZDogdHJ1ZSB9LFxuICB7IGlkOiAzLCB0YXNrOiBcIldhc2ggdGhlIGNhclwiLCBpc0NvbXBsZXRlZDogZmFsc2UgfSxcbl07XG5cbmNvbnN0IFRvZG86IFJlYWN0LkZDPFRvZG9Qcm9wcz4gPSAoeyBpbml0aWFsVG9kb3MgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcImFwaS9hdXRoL3VzZXItZGF0YVwiKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUodG9kb3NMaXN0KTtcbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9IGFzeW5jICh0YXNrOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvdGFza3MvYWRkLXRhc2tcIiwge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICB0YXNrLFxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgc2V0VG9kb3MoWy4uLnRvZG9zLCB7IGlkOiBEYXRlLm5vdygpLCB0YXNrLCBpc0NvbXBsZXRlZDogZmFsc2UgfV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZUNvbXBsZXRlID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRUb2RvcyhcbiAgICAgIHRvZG9zLm1hcCgodG9kbykgPT5cbiAgICAgICAgdG9kby5pZCA9PT0gaWQgPyB7IC4uLnRvZG8sIGlzQ29tcGxldGVkOiAhdG9kby5pc0NvbXBsZXRlZCB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoXCIvYXBpL2F1dGgvbG9nb3V0LXVzZXJcIik7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPFRleHQgZm9udFNpemU9ezIwfSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PlxuICAgICAgICBUby1Eb1xuICAgICAgPC9UZXh0PlxuICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17bG9nb3V0SGFuZGxlcn0+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8Qm94PlxuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvXCIgLz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb2RvKFwiQWRkIFRvZG9cIil9PkFkZCBUb2RvPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxUZXh0IGZvbnRTaXplPXsyMH0gdGV4dEFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgTXkgVG8tRG8gTGlzdFxuICAgICAgPC9UZXh0PlxuICAgICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9PlxuICAgICAgICA8VW5vcmRlcmVkTGlzdD5cbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IHRvZG8uaXNDb21wbGV0ZWQgPyBcImxpbmUtdGhyb3VnaFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RvZG8udGFza31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRvZG8odG9kby5pZCl9PlJlbW92ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZUNvbXBsZXRlKHRvZG8uaWQpfT5cbiAgICAgICAgICAgICAgICB7dG9kby5pc0NvbXBsZXRlZCA/IFwiTWFyayBJbmNvbXBsZXRlXCIgOiBcIk1hcmsgQ29tcGxldGVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dCIsIkxpc3RJdGVtIiwiVW5vcmRlcmVkTGlzdCIsImF4aW9zIiwiUm91dGVyIiwidG9kb3NMaXN0IiwiaWQiLCJ0YXNrIiwiaXNDb21wbGV0ZWQiLCJUb2RvIiwiaW5pdGlhbFRvZG9zIiwiZ2V0IiwidG9kb3MiLCJzZXRUb2RvcyIsImhhbmRsZUFkZFRvZG8iLCJyZXNwb25zZSIsInBvc3QiLCJEYXRlIiwibm93Iiwic3RhdHVzIiwiaGFuZGxlUmVtb3ZlVG9kbyIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVUb2dnbGVDb21wbGV0ZSIsIm1hcCIsImxvZ291dEhhbmRsZXIiLCJkZWxldGUiLCJwdXNoIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwib25DbGljayIsInBsYWNlaG9sZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});