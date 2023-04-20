"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 7370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _element_button_AButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6445);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const KeepWorking = ({
  height
}) => {
  const moveToOverview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/closet/overview');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(EmptySection, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Empty, {
      image: "/images/hard-work.png",
      imageStyle: {
        height: height
      },
      description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(EmptySpan, {
        children: "Sorry! \uC791\uC5C5\uC911\uC774\uC5D0\uC694"
      }),
      children: height > 40 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_element_button_AButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        color: "black",
        disabled: false,
        dest: "\uBA54\uC778 \uD398\uC774\uC9C0\uB85C",
        onClick: moveToOverview
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Copyright, {
      href: "https://www.flaticon.com/free-icons/hard-work",
      title: "hard work icons",
      children: "Hard work icons created by Freepik - Flaticon"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeepWorking);
const EmptySection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "KeepWorking__EmptySection",
  componentId: "sc-1742w3b-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:5px;"]);
const EmptySpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "KeepWorking__EmptySpan",
  componentId: "sc-1742w3b-1"
})(["color:", ";font-size:clamp(12px,1.3vw,18px);font-weight:", ";"], ({
  theme
}) => theme.colors.brown, ({
  theme
}) => theme.fontWeight.Medium);
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "KeepWorking__Copyright",
  componentId: "sc-1742w3b-2"
})(["font-size:10px;color:", ";font-weight:", ";"], ({
  theme
}) => theme.colors.lightGrey, ({
  theme
}) => theme.fontWeight.Light);

/***/ })

};
;