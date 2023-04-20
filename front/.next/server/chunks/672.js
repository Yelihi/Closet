"use strict";
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 1672:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1172);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(440);
/* harmony import */ var _element_Intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7314);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8520);
/* harmony import */ var _pages_closet_overview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Nav__WEBPACK_IMPORTED_MODULE_3__, _pages_closet_overview__WEBPACK_IMPORTED_MODULE_6__]);
([_Nav__WEBPACK_IMPORTED_MODULE_3__, _pages_closet_overview__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const PageLayout = ({
  children
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch({
      type: _reducers_type__WEBPACK_IMPORTED_MODULE_8__/* .RESET_MENU_CLICK */ .Mw
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_pages_closet_overview__WEBPACK_IMPORTED_MODULE_6__.NavRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_element_Intersection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "PageLayout__Container",
  componentId: "sc-1thgz1j-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:auto;gap:50px;padding:24px 0;", "{width:calc(100vw - 115px);gap:10px;padding:24px;}", "{width:calc(100vw - 315px);}"], _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet, _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.desktop */ .B.desktop);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;