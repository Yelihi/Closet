"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 3954:
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
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8520);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1672);
/* harmony import */ var _recycle_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4232);
/* harmony import */ var _recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9668);
/* harmony import */ var _ATable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(528);
/* harmony import */ var _CardBoard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9149);
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5902);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_4__, _ATable__WEBPACK_IMPORTED_MODULE_7__, _CardBoard__WEBPACK_IMPORTED_MODULE_8__]);
([_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_4__, _ATable__WEBPACK_IMPORTED_MODULE_7__, _CardBoard__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SkeletonStore = ({
  children,
  loadItemsLoading,
  deleteItemLoding,
  windowWidth
}) => {
  if (loadItemsLoading || deleteItemLoding) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_recycle_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          istitle: false,
          skeleton: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(HandleContainer, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CustomBread, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(TitleSection, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("dl", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Title, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(SubTitle, {})]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(CardSection, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineDatabase, {
                className: "icon"
              }),
              DataTitle: "skeleton",
              isLoading: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineDatabase, {
                className: "icon"
              }),
              DataTitle: "skeleton",
              isLoading: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
              Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineDatabase, {
                className: "icon"
              }),
              DataTitle: "skeleton",
              isLoading: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(AddSection, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(DictionaryBox, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("dt", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("dd", {})]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(AddButton, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {})
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(MenuSection, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(ItemsStoreSection, {
            children: [windowWidth === 'desktop' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ATable__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              headData: _TableData__WEBPACK_IMPORTED_MODULE_9__/* .StoreHeader */ .D,
              itemsData: [],
              isDelete: true,
              isLoading: true
            }) : null, windowWidth === 'phone' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_CardBoard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
              itemData: [],
              isLoading: true,
              isItemsLoading: true
            }) : null]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Space, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {})]
        })
      })
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: children
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonStore);
const Animation = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonStore__Animation",
  componentId: "sc-qk8brs-0"
})([""]);
const HandleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__HandleContainer",
  componentId: "sc-qk8brs-1"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:15px 0;"]);
const CustomBread = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonStore__CustomBread",
  componentId: "sc-qk8brs-2"
})(["margin-bottom:30px;width:20%;height:20px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__TitleSection",
  componentId: "sc-qk8brs-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;margin-bottom:20px;> dl{width:100%;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dt.withConfig({
  displayName: "SkeletonStore__Title",
  componentId: "sc-qk8brs-4"
})(["width:50%;height:25px;background-color:", ";margin-bottom:20px;"], ({
  theme
}) => theme.colors.hoverGrey);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dd.withConfig({
  displayName: "SkeletonStore__SubTitle",
  componentId: "sc-qk8brs-5"
})(["display:block;width:70%;height:60px;background-color:", ";margin-bottom:10px;"], ({
  theme
}) => theme.colors.hoverGrey);
const CardSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__CardSection",
  componentId: "sc-qk8brs-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:auto;gap:15px;margin-bottom:20px;", "{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:15px;}"], _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.tablet */ .B.tablet);
const AddSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__AddSection",
  componentId: "sc-qk8brs-7"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;margin-bottom:10px;"]);
const DictionaryBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dl.withConfig({
  displayName: "SkeletonStore__DictionaryBox",
  componentId: "sc-qk8brs-8"
})(["width:100%;> dt{width:10%;height:18px;background-color:", ";margin-bottom:8px;}> dd{width:20%;height:18px;background-color:", ";}"], ({
  theme
}) => theme.colors.hoverGrey, ({
  theme
}) => theme.colors.hoverGrey);
const AddButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonStore__AddButton",
  componentId: "sc-qk8brs-9"
})(["display:flex;justify-content:center;align-items:center;width:100px;height:30px;gap:5px;padding:8px;background-color:", ";border:none;border-radius:5px;transition:box-shadow 0.2s ease-out;box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;> div{display:none;}", "{> div{display:block;}}"], ({
  theme
}) => theme.colors.hoverGrey, _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.middlePhone */ .B.middlePhone);
const MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__MenuSection",
  componentId: "sc-qk8brs-10"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:30px;padding:10px;background-color:", ";border:1px solid ", ";border-radius:20px;margin-bottom:20px;"], ({
  theme
}) => theme.colors.hoverGrey, ({
  theme
}) => theme.colors.mainGrey);
const ItemsStoreSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "SkeletonStore__ItemsStoreSection",
  componentId: "sc-qk8brs-11"
})(["display:flex;flex-direction:column;width:100%;height:100%;gap:10px;> div{display:flex;justify-content:flex-end;align-items:center;width:100%;}"]);
const Space = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonStore__Space",
  componentId: "sc-qk8brs-12"
})(["width:100%;height:50px;background-color:white;> div{width:100px;height:50px;background-color:white;}"]);
const SpinDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "SkeletonStore__SpinDiv",
  componentId: "sc-qk8brs-13"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:5px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;