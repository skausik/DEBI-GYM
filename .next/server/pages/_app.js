/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/GymContext.js":
/*!*******************************!*\
  !*** ./context/GymContext.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GymContext: () => (/* binding */ GymContext),\n/* harmony export */   GymProvider: () => (/* binding */ GymProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GymContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction GymProvider({ children }) {\n    const [gymData, setGymData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stats: {\n            members: 78,\n            rating: 5,\n            equipment: 30,\n            opensAt: 6\n        },\n        hours: [\n            {\n                day: \"Monday – Friday\",\n                open: \"6:00 AM\",\n                close: \"9:00 PM\"\n            },\n            {\n                day: \"Saturday\",\n                open: \"6:00 AM\",\n                close: \"8:00 PM\"\n            },\n            {\n                day: \"Sunday\",\n                open: \"7:00 AM\",\n                close: \"1:00 PM\"\n            }\n        ],\n        services: [\n            {\n                num: \"01\",\n                icon: \"\\uD83C\\uDFCB️\",\n                title: \"Strength Training\",\n                desc: \"Progressive resistance programs using free weights and machines to build raw, functional strength.\"\n            },\n            {\n                num: \"02\",\n                icon: \"\\uD83C\\uDFC3\",\n                title: \"Cardio Fitness\",\n                desc: \"Modern cardio equipment for endurance building, fat loss, and cardiovascular health.\"\n            },\n            {\n                num: \"03\",\n                icon: \"\\uD83C\\uDFAF\",\n                title: \"Personal Training\",\n                desc: \"One-on-one sessions with our expert trainers, tailored to your goals and schedule.\"\n            },\n            {\n                num: \"04\",\n                icon: \"\\uD83D\\uDCAA\",\n                title: \"Strengthening Exercises\",\n                desc: \"Targeted muscle-group workouts and functional movement patterns for a balanced body.\"\n            },\n            {\n                num: \"05\",\n                icon: \"\\uD83E\\uDDD8\",\n                title: \"Body Conditioning\",\n                desc: \"Mobility, flexibility, and recovery work to complement your main training.\"\n            },\n            {\n                num: \"06\",\n                icon: \"\\uD83D\\uDCCA\",\n                title: \"Fitness Assessment\",\n                desc: \"Track progress with structured assessments and goal-setting sessions.\"\n            }\n        ],\n        contact: {\n            phone: \"+919999322203\",\n            address: \"Raghunathpur, Chandipur\",\n            city: \"Jhargram – 721507, West Bengal\",\n            rating: \"5.0 / 5 \\xb7 78+ Reviews on Justdial\",\n            affiliation: \"M.D.P.C.A. Affiliated Gymnasium\"\n        }\n    });\n    // Load from localStorage on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const saved = localStorage.getItem(\"gymData\");\n        if (saved) {\n            try {\n                setGymData(JSON.parse(saved));\n            } catch (e) {\n                console.error(\"Failed to load gym data:\", e);\n            }\n        }\n    }, []);\n    // Save to localStorage whenever data changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"gymData\", JSON.stringify(gymData));\n    }, [\n        gymData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GymContext.Provider, {\n        value: {\n            gymData,\n            setGymData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kausik Santra\\\\Documents\\\\PROJECTS\\\\DEBI-GYM\\\\context\\\\GymContext.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0d5bUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwRDtBQUVuRCxNQUFNRywyQkFBYUgsb0RBQWFBLEdBQUU7QUFFbEMsU0FBU0ksWUFBWSxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3JDTyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hDLFNBQVM7UUFDWDtRQUNBQyxPQUFPO1lBQ0w7Z0JBQUVDLEtBQUs7Z0JBQW1CQyxNQUFNO2dCQUFXQyxPQUFPO1lBQVU7WUFDNUQ7Z0JBQUVGLEtBQUs7Z0JBQVlDLE1BQU07Z0JBQVdDLE9BQU87WUFBVTtZQUNyRDtnQkFBRUYsS0FBSztnQkFBVUMsTUFBTTtnQkFBV0MsT0FBTztZQUFVO1NBQ3BEO1FBQ0RDLFVBQVU7WUFDUjtnQkFDRUMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VILEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUNBO2dCQUNFSCxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7WUFDQTtnQkFDRUgsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VILEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUNBO2dCQUNFSCxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7U0FDRDtRQUNEQyxTQUFTO1lBQ1BDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNO1lBQ05mLFFBQVE7WUFDUmdCLGFBQWE7UUFDZjtJQUNGO0lBRUEsa0NBQWtDO0lBQ2xDeEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNeUIsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUlGLE9BQU87WUFDVCxJQUFJO2dCQUNGcEIsV0FBV3VCLEtBQUtDLEtBQUssQ0FBQ0o7WUFDeEIsRUFBRSxPQUFPSyxHQUFHO2dCQUNWQyxRQUFRQyxLQUFLLENBQUMsNEJBQTRCRjtZQUM1QztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNkNBQTZDO0lBQzdDOUIsZ0RBQVNBLENBQUM7UUFDUjBCLGFBQWFPLE9BQU8sQ0FBQyxXQUFXTCxLQUFLTSxTQUFTLENBQUM5QjtJQUNqRCxHQUFHO1FBQUNBO0tBQVE7SUFFWixxQkFDRSw4REFBQ0gsV0FBV2tDLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEM7WUFBU0M7UUFBVztrQkFDL0NGOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL2RlYmktZ3ltLW5leHQvLi9jb250ZXh0L0d5bUNvbnRleHQuanM/NWYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgR3ltQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEd5bVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtneW1EYXRhLCBzZXRHeW1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHN0YXRzOiB7XHJcbiAgICAgIG1lbWJlcnM6IDc4LFxyXG4gICAgICByYXRpbmc6IDUsXHJcbiAgICAgIGVxdWlwbWVudDogMzAsXHJcbiAgICAgIG9wZW5zQXQ6IDZcclxuICAgIH0sXHJcbiAgICBob3VyczogW1xyXG4gICAgICB7IGRheTogJ01vbmRheSDigJMgRnJpZGF5Jywgb3BlbjogJzY6MDAgQU0nLCBjbG9zZTogJzk6MDAgUE0nIH0sXHJcbiAgICAgIHsgZGF5OiAnU2F0dXJkYXknLCBvcGVuOiAnNjowMCBBTScsIGNsb3NlOiAnODowMCBQTScgfSxcclxuICAgICAgeyBkYXk6ICdTdW5kYXknLCBvcGVuOiAnNzowMCBBTScsIGNsb3NlOiAnMTowMCBQTScgfVxyXG4gICAgXSxcclxuICAgIHNlcnZpY2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBudW06ICcwMScsXHJcbiAgICAgICAgaWNvbjogJ/Cfj4vvuI8nLFxyXG4gICAgICAgIHRpdGxlOiAnU3RyZW5ndGggVHJhaW5pbmcnLFxyXG4gICAgICAgIGRlc2M6ICdQcm9ncmVzc2l2ZSByZXNpc3RhbmNlIHByb2dyYW1zIHVzaW5nIGZyZWUgd2VpZ2h0cyBhbmQgbWFjaGluZXMgdG8gYnVpbGQgcmF3LCBmdW5jdGlvbmFsIHN0cmVuZ3RoLidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG51bTogJzAyJyxcclxuICAgICAgICBpY29uOiAn8J+PgycsXHJcbiAgICAgICAgdGl0bGU6ICdDYXJkaW8gRml0bmVzcycsXHJcbiAgICAgICAgZGVzYzogJ01vZGVybiBjYXJkaW8gZXF1aXBtZW50IGZvciBlbmR1cmFuY2UgYnVpbGRpbmcsIGZhdCBsb3NzLCBhbmQgY2FyZGlvdmFzY3VsYXIgaGVhbHRoLidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG51bTogJzAzJyxcclxuICAgICAgICBpY29uOiAn8J+OrycsXHJcbiAgICAgICAgdGl0bGU6ICdQZXJzb25hbCBUcmFpbmluZycsXHJcbiAgICAgICAgZGVzYzogJ09uZS1vbi1vbmUgc2Vzc2lvbnMgd2l0aCBvdXIgZXhwZXJ0IHRyYWluZXJzLCB0YWlsb3JlZCB0byB5b3VyIGdvYWxzIGFuZCBzY2hlZHVsZS4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBudW06ICcwNCcsXHJcbiAgICAgICAgaWNvbjogJ/CfkqonLFxyXG4gICAgICAgIHRpdGxlOiAnU3RyZW5ndGhlbmluZyBFeGVyY2lzZXMnLFxyXG4gICAgICAgIGRlc2M6ICdUYXJnZXRlZCBtdXNjbGUtZ3JvdXAgd29ya291dHMgYW5kIGZ1bmN0aW9uYWwgbW92ZW1lbnQgcGF0dGVybnMgZm9yIGEgYmFsYW5jZWQgYm9keS4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBudW06ICcwNScsXHJcbiAgICAgICAgaWNvbjogJ/Cfp5gnLFxyXG4gICAgICAgIHRpdGxlOiAnQm9keSBDb25kaXRpb25pbmcnLFxyXG4gICAgICAgIGRlc2M6ICdNb2JpbGl0eSwgZmxleGliaWxpdHksIGFuZCByZWNvdmVyeSB3b3JrIHRvIGNvbXBsZW1lbnQgeW91ciBtYWluIHRyYWluaW5nLidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG51bTogJzA2JyxcclxuICAgICAgICBpY29uOiAn8J+TiicsXHJcbiAgICAgICAgdGl0bGU6ICdGaXRuZXNzIEFzc2Vzc21lbnQnLFxyXG4gICAgICAgIGRlc2M6ICdUcmFjayBwcm9ncmVzcyB3aXRoIHN0cnVjdHVyZWQgYXNzZXNzbWVudHMgYW5kIGdvYWwtc2V0dGluZyBzZXNzaW9ucy4nXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgIHBob25lOiAnKzkxOTk5OTMyMjIwMycsXHJcbiAgICAgIGFkZHJlc3M6ICdSYWdodW5hdGhwdXIsIENoYW5kaXB1cicsXHJcbiAgICAgIGNpdHk6ICdKaGFyZ3JhbSDigJMgNzIxNTA3LCBXZXN0IEJlbmdhbCcsXHJcbiAgICAgIHJhdGluZzogJzUuMCAvIDUgwrcgNzgrIFJldmlld3Mgb24gSnVzdGRpYWwnLFxyXG4gICAgICBhZmZpbGlhdGlvbjogJ00uRC5QLkMuQS4gQWZmaWxpYXRlZCBHeW1uYXNpdW0nXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gTG9hZCBmcm9tIGxvY2FsU3RvcmFnZSBvbiBtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdneW1EYXRhJylcclxuICAgIGlmIChzYXZlZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldEd5bURhdGEoSlNPTi5wYXJzZShzYXZlZCkpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBneW0gZGF0YTonLCBlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIFNhdmUgdG8gbG9jYWxTdG9yYWdlIHdoZW5ldmVyIGRhdGEgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3ltRGF0YScsIEpTT04uc3RyaW5naWZ5KGd5bURhdGEpKVxyXG4gIH0sIFtneW1EYXRhXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHeW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGd5bURhdGEsIHNldEd5bURhdGEgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR3ltQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkd5bUNvbnRleHQiLCJHeW1Qcm92aWRlciIsImNoaWxkcmVuIiwiZ3ltRGF0YSIsInNldEd5bURhdGEiLCJzdGF0cyIsIm1lbWJlcnMiLCJyYXRpbmciLCJlcXVpcG1lbnQiLCJvcGVuc0F0IiwiaG91cnMiLCJkYXkiLCJvcGVuIiwiY2xvc2UiLCJzZXJ2aWNlcyIsIm51bSIsImljb24iLCJ0aXRsZSIsImRlc2MiLCJjb250YWN0IiwicGhvbmUiLCJhZGRyZXNzIiwiY2l0eSIsImFmZmlsaWF0aW9uIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/GymContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_GymContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GymContext */ \"./context/GymContext.js\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GymContext__WEBPACK_IMPORTED_MODULE_3__.GymProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kausik Santra\\\\Documents\\\\PROJECTS\\\\DEBI-GYM\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kausik Santra\\\\Documents\\\\PROJECTS\\\\DEBI-GYM\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kausik Santra\\\\Documents\\\\PROJECTS\\\\DEBI-GYM\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kausik Santra\\\\Documents\\\\PROJECTS\\\\DEBI-GYM\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ3VCO0FBRXBDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILDREQUFXQTs7MEJBQ1YsOERBQUNELGtEQUFJQTswQkFDSCw0RUFBQ0s7b0JBQUtDLE1BQUs7b0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ0o7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGViaS1neW0tbmV4dC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBHeW1Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvR3ltQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3ltUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9HeW1Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJHeW1Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();