"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_Intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7314);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const PageMainLayout = ({
  children,
  title,
  subTitle,
  istitle = true,
  hasEmpty,
  skeleton = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(MainContainer, {
    children: [istitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ComponentHead, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        children: subTitle
      })]
    }), istitle && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_element_Intersection__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ChildrenContainer, {
      hasEmpty: hasEmpty,
      skeleton: skeleton,
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageMainLayout);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageMainLayout__MainContainer",
  componentId: "sc-rm4gg8-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;padding:17px 24px;margin-bottom:10px;border-radius:10px;color:", ";background-color:", ";box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.white);
const ChildrenContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageMainLayout__ChildrenContainer",
  componentId: "sc-rm4gg8-1"
})(["width:100%;height:", ";margin-top:", ";", ""], props => props.hasEmpty ? '700px' : 'auto', props => props.hasEmpty ? '0' : '30px', props => props.skeleton && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["animation:boxFade 2s 1s infinite linear alternate;@keyframes boxFade{0%{opacity:1;}50%{opacity:0.5;}100%{opacity:1;}}"]));
const ComponentHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageMainLayout__ComponentHead",
  componentId: "sc-rm4gg8-2"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:center;> h1{font-size:25px;line-height:25px;font-family:", ";font-weight:", ";margin-bottom:20px;}> span{display:block;font-size:15px;line-height:18px;font-family:", ";font-weight:", ";margin-bottom:10px;white-space:pre-wrap;}"], ({
  theme
}) => theme.font.Logo, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Logo, ({
  theme
}) => theme.fontWeight.Light);

/***/ })

};
;