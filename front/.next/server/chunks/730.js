"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 7223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8520);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const SkeletonImage = ({
  children,
  isLoading
}) => {
  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PreviewContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(PreviewImage, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PreviewTextContainer, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PreviewText, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TextBox, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Text, {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TextBox, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Text, {})]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TextBox, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Text, {})]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ButtonBox, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {})
          })]
        })]
      })
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: children
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonImage);
const PreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__PreviewContainer",
  componentId: "sc-1alw2a0-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;border:1px solid ", ";border-radius:5px;gap:30px;transition:box-shadow 0.25s ease-out;animation:boxFade 2s 1s infinite linear alternate;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}", "{width:49.5%;}@keyframes boxFade{0%{opacity:1;}50%{opacity:0.5;}100%{opacity:1;}}"], ({
  theme
}) => theme.colors.hoverGrey, _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.desktop */ .B.desktop);
const PreviewImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__PreviewImage",
  componentId: "sc-1alw2a0-1"
})(["width:55%;height:200px;background-color:", ";border-radius:5px;"], ({
  theme
}) => theme.colors.hoverGrey);
const PreviewTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__PreviewTextContainer",
  componentId: "sc-1alw2a0-2"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:30%;height:100%;margin-right:3%;"]);
const PreviewText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__PreviewText",
  componentId: "sc-1alw2a0-3"
})(["display:flex;flex-direction:column;margin-top:10px;width:100%;"]);
const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__TextBox",
  componentId: "sc-1alw2a0-4"
})(["display:inline-block;margin-bottom:5px;> span{display:inline-block;width:50%;height:12px;background-color:", ";margin-bottom:5px;}"], ({
  theme
}) => theme.colors.hoverGrey);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__Text",
  componentId: "sc-1alw2a0-5"
})(["display:flex;justify-content:flex-start;align-items:center;gap:6px;width:100%;height:20px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonImage__ButtonBox",
  componentId: "sc-1alw2a0-6"
})(["margin-top:20px;width:100%;> div{width:100%;height:25px;background-color:", ";border-radius:15px;}"], ({
  theme
}) => theme.colors.hoverGrey);

/***/ }),

/***/ 6730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1172);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_SkeletonImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7223);
/* harmony import */ var _element_button_AButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6445);
/* harmony import */ var _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7189);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8520);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7837);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_config__WEBPACK_IMPORTED_MODULE_8__]);
_config_config__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const VisionAICard = ({
  imageUploadLoding,
  src,
  index,
  isClothes,
  isCategori,
  confidence
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const onRemoveImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => () => {
    dispatch({
      type: _reducers_type__WEBPACK_IMPORTED_MODULE_11__/* .REMOVE_IMAGE */ .Po,
      data: index
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_add_SkeletonImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    isLoading: imageUploadLoding,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PreviewContainer, {
      border: isClothes,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PreviewImage, {
        src: `${src}`,
        alt: "\uC758\uB958\uC774\uBBF8\uC9C0",
        width: 600,
        height: 600,
        placeholder: "blur",
        blurDataURL: `data:image/gif;base64,${_config_config__WEBPACK_IMPORTED_MODULE_8__/* .base64URL */ .B3}`
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(PreviewTextContainer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(PreviewText, {
          children: [isClothes, isCategori, confidence].map((state, idx) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(TextBox, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                children: _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__/* .visionAICardData */ .$x[idx].intro
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(Text, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CheckCircleTwoTone, {
                  twoToneColor: state ? _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__/* .visionAICardData */ .$x[idx].good : _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__/* .visionAICardData */ .$x[idx].bad
                }), state ? _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__/* .visionAICardData */ .$x[idx].goodExplain : _add_VisionAIData__WEBPACK_IMPORTED_MODULE_6__/* .visionAICardData */ .$x[idx].badExplain]
              })]
            });
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(ButtonBox, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_element_button_AButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            color: "",
            disabled: false,
            dest: "\uC81C\uAC70",
            onClick: onRemoveImage(index)
          })
        })]
      })]
    }, src)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VisionAICard);
const PreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__PreviewContainer",
  componentId: "sc-axvezg-0"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;border:1px solid ", ";border-radius:5px;gap:30px;transition:box-shadow 0.25s ease-out;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}", "{width:49.5%;}", "{flex-direction:row;}"], ({
  theme,
  border
}) => border ? theme.colors.success : theme.colors.red, _styles_media__WEBPACK_IMPORTED_MODULE_7__/* .media.desktop */ .B.desktop, _styles_media__WEBPACK_IMPORTED_MODULE_7__/* .media.middlePhone */ .B.middlePhone);
const PreviewImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "VisionAICard__PreviewImage",
  componentId: "sc-axvezg-1"
})(["width:55%;height:auto;object-fit:cover;"]);
const PreviewTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__PreviewTextContainer",
  componentId: "sc-axvezg-2"
})(["display:flex;flex-direction:column;justify-content:space-between;align-items:c;height:100%;margin-right:3%;"]);
const PreviewText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__PreviewText",
  componentId: "sc-axvezg-3"
})(["display:flex;flex-direction:column;margin-top:10px;"]);
const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__TextBox",
  componentId: "sc-axvezg-4"
})(["display:inline-block;margin-bottom:5px;> span{display:inline-block;font-size:11px;font-weight:", ";font-family:", ";color:", ";margin-bottom:5px;}"], ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.colors.deepGrey);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__Text",
  componentId: "sc-axvezg-5"
})(["display:flex;justify-content:flex-start;align-items:center;gap:6px;font-size:14px;font-weight:", ";font-family:", ";"], ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont);
const ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VisionAICard__ButtonBox",
  componentId: "sc-axvezg-6"
})(["margin-top:20px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;