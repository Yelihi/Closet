"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_screenEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1316);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2157);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8520);
/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3621);
/* harmony import */ var _sidebar_MobileSideList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5934);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_2__, _sidebar_MobileSideList__WEBPACK_IMPORTED_MODULE_7__]);
([_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_2__, _sidebar_MobileSideList__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Nav = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    isPhoneMenuClick
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.screenEvent);
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const [phoneSearchClick, onClickPhoneSearch] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(false);

  const searchSubmit = () => {};

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_sidebar_MobileSideList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(NavContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MenuContainer, {
        search: phoneSearchClick,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Menu, {
            onClick: () => dispatch((0,_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_2__/* .onPhoneMenuClick */ .Qi)())
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Search, {
            onClick: onClickPhoneSearch
          })
        }), phoneSearchClick && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(InputBox, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("form", {
            onSubmit: searchSubmit,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {
              type: "text",
              placeholder: "Search"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(InputSearch, {})
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(InfoContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(HeadBox, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            children: "Closet Official"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
            children: me?.nickname
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(IconBox, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {})
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);
const NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Nav__NavContainer",
  componentId: "sc-va0yt3-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:13px 24px;background-color:", ";", "{background-color:", ";color:", ";border-radius:8px;box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}"], ({
  theme
}) => theme.colors.brown, _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.black);
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Nav__MenuContainer",
  componentId: "sc-va0yt3-1"
})(["display:flex;justify-content:space-between;align-items:center;gap:20px;> div{&:first-child{", "}display:flex;justify-content:center;align-items:center;width:24px;height:24px;}", "{width:100%;> div{display:none;}}"], props => props.search && (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["animation:", " 0.5s forwards;"], _styles_animation__WEBPACK_IMPORTED_MODULE_6__/* .phoneSearch */ .p), _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineMenuAlt2).withConfig({
  displayName: "Nav__Menu",
  componentId: "sc-va0yt3-2"
})(["width:24px;height:24px;cursor:pointer;", "{display:none;}"], _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const Search = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineSearch).withConfig({
  displayName: "Nav__Search",
  componentId: "sc-va0yt3-3"
})(["width:24px;height:24px;cursor:pointer;", "{display:none;}"], _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Search).withConfig({
  displayName: "Nav__InputSearch",
  componentId: "sc-va0yt3-4"
})(["", "{display:block;}"], _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "Nav__InputBox",
  componentId: "sc-va0yt3-5"
})(["position:relative;display:none;color:", ";border:1px solid ", ";border-radius:16px;width:fit-content;height:fit-content;", "{display:flex;justify-content:center;align-items:center;flex-shrink:1;width:100%;> form{width:100%;> input{width:100%;height:36px;padding:7px 46px;border-radius:16px;}}> div{position:absolute;top:5px;left:15px;width:fit-content;height:fit-content;}}"], ({
  theme
}) => theme.colors.lightGrey, ({
  theme
}) => theme.colors.lightGrey, _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Nav__InfoContainer",
  componentId: "sc-va0yt3-6"
})(["display:flex;justify-content:center;align-items:center;gap:16px;", "{flex-shrink:0;margin-left:135px;}"], _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const HeadBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Nav__HeadBox",
  componentId: "sc-va0yt3-7"
})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:center;> span{font-weight:", ";font-size:12px;line-height:14px;}> p{font-weight:", ";font-size:10px;line-height:14px;}"], ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.fontWeight.Light);
const IconBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Nav__IconBox",
  componentId: "sc-va0yt3-8"
})(["display:flex;justify-content:center;align-items:center;width:36px;height:36px;border-radius:50%;background-color:", ";> div{background-image:url('/images/todo.jpg');background-repeat:no-repeat;background-size:cover;background-position:center;width:28px;height:28px;border-radius:50%;}"], ({
  theme
}) => theme.colors.white);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_CurrentYearPrice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/recycle/element/overview/OverviewCL.tsx
var OverviewCL = __webpack_require__(5232);
// EXTERNAL MODULE: external "@nivo/bar"
var bar_ = __webpack_require__(3567);
// EXTERNAL MODULE: ./styles/media.tsx
var media = __webpack_require__(8520);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/main/chart/TotalPriceBar.tsx






const TotalPriceBar = ({
  currentPrice,
  totalPrice
}) => {
  const priceData = (0,external_react_.useMemo)(() => {
    return [{
      totalPrice: 'Current',
      price: currentPrice
    }, {
      totalPrice: 'Total',
      price: totalPrice
    }];
  }, [totalPrice, currentPrice]);
  return /*#__PURE__*/jsx_runtime_.jsx(ChartDiv, {
    children: /*#__PURE__*/jsx_runtime_.jsx(bar_.ResponsiveBar, {
      data: priceData,
      keys: ['price'],
      indexBy: "totalPrice",
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 50
      },
      padding: 0.3,
      layout: "horizontal",
      valueScale: {
        type: 'linear'
      },
      indexScale: {
        type: 'band',
        round: true
      },
      colors: ['#f4baf4', '#f1e5f1'],
      colorBy: "indexValue",
      borderRadius: 3,
      defs: [],
      fill: [],
      borderColor: {
        from: 'color',
        modifiers: [['darker', 1.6]]
      },
      axisTop: null,
      axisRight: null,
      axisBottom: null,
      axisLeft: {
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40
      },
      enableGridY: false,
      labelSkipWidth: 12,
      labelSkipHeight: 12,
      labelTextColor: {
        from: 'color',
        modifiers: [['darker', 1.6]]
      },
      legends: [],
      role: "application",
      ariaLabel: "price chart bar",
      barAriaLabel: function (e) {
        return e.id + ': ' + e.formattedValue + ' in price: ' + e.indexValue;
      }
    })
  });
};

/* harmony default export */ const chart_TotalPriceBar = (TotalPriceBar);
const ChartDiv = external_styled_components_default().div.withConfig({
  displayName: "TotalPriceBar__ChartDiv",
  componentId: "sc-fyxf38-0"
})(["display:flex;justify-content:flex-start;align-items:center;width:85%;height:80px;", "{width:90%;height:80px;}"], media/* media.desktop */.B.desktop);
// EXTERNAL MODULE: ./components/recycle/EmptyData.tsx
var EmptyData = __webpack_require__(8672);
;// CONCATENATED MODULE: ./components/main/CurrentYearPrice.tsx








const currentYear = new Date().getFullYear();

const CurrentYearPrice = ({
  totalPrice,
  currentPrice
}) => {
  const moveToStore = (0,external_react_.useCallback)(() => {
    router_default().push('/closet/store');
  }, []);

  if (!totalPrice || !currentPrice) {
    return /*#__PURE__*/jsx_runtime_.jsx(OverviewCL/* default */.Z, {
      Subject: "TotalPrice",
      Address: "Store",
      onMove: moveToStore,
      divided: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(EmptyData/* default */.Z, {
        height: 40
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(OverviewCL/* default */.Z, {
    Subject: "TotalPrice",
    Address: "Store",
    onMove: moveToStore,
    divided: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TestContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Description, {
        children: `Current : ${currentYear}년을 기준으로 측정된 가격`
      }), /*#__PURE__*/jsx_runtime_.jsx(chart_TotalPriceBar, {
        currentPrice: currentPrice,
        totalPrice: totalPrice
      })]
    })
  });
};

/* harmony default export */ const main_CurrentYearPrice = (CurrentYearPrice);
const TestContainer = external_styled_components_default().div.withConfig({
  displayName: "CurrentYearPrice__TestContainer",
  componentId: "sc-hkcqlf-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;"]);
const Description = external_styled_components_default().span.withConfig({
  displayName: "CurrentYearPrice__Description",
  componentId: "sc-hkcqlf-1"
})(["font-size:12px;font-family:", ";font-weight:", ";margin-top:5px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium);

/***/ }),

/***/ 7582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const IntroSection = () => {
  const moveToAddPage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push('/closet/add');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(MainContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Description, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Title, {
            children: "Let's manage the messy clothes in the closet at a glance!"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ItalicParagraph, {
            children: "\"\uC800\uBC88\uC5D0 \uBE44\uC2B7\uD55C \uC637\uC744 \uC0C0\uB358\uAC83 \uAC19\uC740\uB370..?\""
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SubParagraph, {
            children: "\uD604\uBA85\uD55C \uC1FC\uD551\uC744 \uC2DC\uB3C4\uD558\uB2E4 \uBCF4\uBA74 \uC885\uC885 \uC774\uC804\uC5D0 \uAD6C\uB9E4\uD588\uB358 \uC637\uB4E4\uC758 \uC815\uBCF4\uAC00 \uD544\uC694\uD560 \uB54C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uC81C CLOSET \uC5D0 \uAC04\uB7B5\uD55C \uC815\uBCF4\uB4E4\uC744 \uB4F1\uB85D\uD568\uC73C\uB85C\uC11C \uD55C\uB208\uC5D0 \uC18C\uC720\uC911\uC778 \uC758\uB958\uC758 \uC815\uBCF4\uB97C \uD655\uC778\uD558\uC138\uC694!"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ButtonContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Addbutton, {
            color: "",
            disabled: false,
            dest: "ADD ITMES",
            onClick: moveToAddPage
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ImageBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("video", {
        src: "/images/authvideo.mp4",
        autoPlay: true,
        loop: true,
        muted: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ShadowDiv, {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroSection);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "IntroSection__MainContainer",
  componentId: "sc-6elpym-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;padding:17px 24px;margin-bottom:10px;border-radius:10px;color:", ";background-color:", ";box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.white);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "IntroSection__Container",
  componentId: "sc-6elpym-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:340px;color:", ";z-index:20;"], ({
  theme
}) => theme.colors.white);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "IntroSection__Description",
  componentId: "sc-6elpym-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "IntroSection__Title",
  componentId: "sc-6elpym-3"
})(["display:flex;font-weight:", ";font-size:clamp(20px,2vw,30px);margin-bottom:30px;"], ({
  theme
}) => theme.fontWeight.Bold);
const ItalicParagraph = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "IntroSection__ItalicParagraph",
  componentId: "sc-6elpym-4"
})(["font-style:italic;color:", ";font-weight:", ";font-family:", ";font-size:clamp(13px,1.5vw,18px);"], ({
  theme
}) => theme.colors.mainGrey, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont);
const SubParagraph = styled_components__WEBPACK_IMPORTED_MODULE_2___default().p.withConfig({
  displayName: "IntroSection__SubParagraph",
  componentId: "sc-6elpym-5"
})(["font-weight:", ";font-family:", ";font-size:clamp(11px,1.3vw,16px);margin-bottom:35px;"], ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.font.Efont);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "IntroSection__ButtonContainer",
  componentId: "sc-6elpym-6"
})(["display:flex;justify-content:flex-end;align-items:center;width:100%;height:auto;"]);
const Addbutton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
  displayName: "IntroSection__Addbutton",
  componentId: "sc-6elpym-7"
})(["border:none;padding:0 25px;transition:background-color 0.25s ease-out,color 0.25s ease-out;&:hover{background-color:black;color:white;}"]);
const ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "IntroSection__ImageBox",
  componentId: "sc-6elpym-8"
})(["position:absolute;top:0;left:0;width:100%;height:100%;border-radius:10px;> video{width:100%;height:100%;object-fit:cover;border-radius:10px;}"]);
const ShadowDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "IntroSection__ShadowDiv",
  componentId: "sc-6elpym-9"
})(["position:absolute;top:0;left:0;width:100%;height:100%;border-radius:10px;background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.05));;"]);

/***/ }),

/***/ 3758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5232);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7837);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8520);
/* harmony import */ var _recycle_EmptyData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_config__WEBPACK_IMPORTED_MODULE_5__]);
_config_config__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const LastItem = ({
  item
}) => {
  const moveToDetail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/closet/details/${item.id}`);
  }, []);

  if (!item) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      Subject: "Last Item",
      Address: "Detail",
      onMove: moveToDetail,
      divided: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_recycle_EmptyData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        height: 40
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    Subject: "Last Item",
    Address: "Detail",
    onMove: moveToDetail,
    divided: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(LastItemSection, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ImageDiv, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ThumbnailWrapper, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Thumbnail, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Centered, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(CImage, {
                src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .backUrl */ .TA}/${item.Images[0].src}`,
                alt: item.productName,
                width: 100,
                height: 100,
                placeholder: "blur",
                blurDataURL: `data:image/gif;base64,${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .base64URL */ .B3}`
              })
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(DetailDiv, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ItemName, {
          children: `${item.productName}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Purchase, {
          children: `구매 날짜 : ${item.purchaseDay.substring(0, 7)}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Price, {
          children: `구매 가격 : ${item.price.toLocaleString('ko-KR')}`
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastItem);
const LastItemSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "LastItem__LastItemSection",
  componentId: "sc-qz7vz1-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LastItem__ImageDiv",
  componentId: "sc-qz7vz1-1"
})(["width:95px;height:95px;"]);
const DetailDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LastItem__DetailDiv",
  componentId: "sc-qz7vz1-2"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end;width:50%;height:auto;", "{align-items:flex-start;}"], _styles_media__WEBPACK_IMPORTED_MODULE_6__/* .media.tablet */ .B.tablet);
const ItemName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "LastItem__ItemName",
  componentId: "sc-qz7vz1-3"
})(["font-size:clamp(13px,1,1vw,15px);font-family:", ";font-weight:", ";margin-bottom:15px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium);
const Purchase = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "LastItem__Purchase",
  componentId: "sc-qz7vz1-4"
})(["font-size:clamp(11px,1vw,13px);font-family:", ";font-weight:", ";color:", ";margin-bottom:5px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.colors.lightGrey);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Purchase).withConfig({
  displayName: "LastItem__Price",
  componentId: "sc-qz7vz1-5"
})([""]);
const ThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LastItem__ThumbnailWrapper",
  componentId: "sc-qz7vz1-6"
})(["width:100%;"]);
const Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LastItem__Thumbnail",
  componentId: "sc-qz7vz1-7"
})(["position:relative;padding-top:100%;overflow:hidden;border-radius:20px;"]);
const Centered = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "LastItem__Centered",
  componentId: "sc-qz7vz1-8"
})(["position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translate(50%,50%);-ms-transform:translate(50%,50%);transform:translate(50%,50%);"]);
const CImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "LastItem__CImage",
  componentId: "sc-qz7vz1-9"
})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5232);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7837);
/* harmony import */ var _recycle_EmptyData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_config__WEBPACK_IMPORTED_MODULE_5__]);
_config_config__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const RecentlyItem = ({
  items
}) => {
  const moveToStore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/closet/store');
  }, []);
  const moveToDetailsPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => () => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/closet/details/${id}`);
  }, []);

  if (items.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      Subject: "Recently Eroll",
      Address: "Store",
      onMove: moveToStore,
      divided: false,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_recycle_EmptyData__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        height: 80
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_recycle_element_overview_OverviewCL__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    Subject: "Recently Eroll",
    Address: "Store",
    onMove: moveToStore,
    divided: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ListSection, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DescriptionSpan, {
        children: "\uAC00\uC7A5 \uCD5C\uADFC\uC5D0 \uC800\uC7A5\uD558\uC2E0 \uC758\uB958 \uC911 5\uAC00\uC9C0\uB97C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DescriptionDiv, {
        children: "\uD074\uB9AD\uD558\uC2DC\uBA74 \uC0C1\uC138\uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4"
      }), items.map(item => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ListContainer, {
          onClick: moveToDetailsPage(item.id),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ImageContainer, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ThumbnailWrapper, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Thumbnail, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Centered, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CImage, {
                    src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .backUrl */ .TA}/${item.Images[0].src}`,
                    alt: item.productName,
                    width: 100,
                    height: 100,
                    placeholder: "blur",
                    blurDataURL: `data:image/gif;base64,${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .base64URL */ .B3}`
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(NameContainer, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: item.productName
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              children: item.categori
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(PriceContainer, {
            children: item.price.toLocaleString('ko-KR')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(DateContainer, {
            children: `${item.purchaseDay.substring(0, 7)}`
          })]
        }, item.id);
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentlyItem);
const ListSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "RecentlyItem__ListSection",
  componentId: "sc-1wa2vo0-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;height:auto;"]);
const DescriptionSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "RecentlyItem__DescriptionSpan",
  componentId: "sc-1wa2vo0-1"
})(["font-size:12px;font-family:", ";font-weight:", ";margin-top:5px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium);
const DescriptionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DescriptionSpan).withConfig({
  displayName: "RecentlyItem__DescriptionDiv",
  componentId: "sc-1wa2vo0-2"
})(["color:", ";margin-bottom:5px;"], ({
  theme
}) => theme.colors.middleGrey);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__ListContainer",
  componentId: "sc-1wa2vo0-3"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:auto;padding:5px 5px;border-radius:10px;transition:box-shadow 0.1s ease-out;cursor:pointer;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}"]);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__ImageContainer",
  componentId: "sc-1wa2vo0-4"
})(["width:40px;height:40px;margin-right:20px;"]);
const NameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__NameContainer",
  componentId: "sc-1wa2vo0-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:35%;height:auto;> span{font-size:14px;font-family:", ";font-weight:", ";}> p{font-size:11px;font-family:", ";font-weight:", ";color:", ";}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.middleGrey);
const PriceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__PriceContainer",
  componentId: "sc-1wa2vo0-6"
})(["width:25%;height:auto;font-size:13px;font-family:", ";font-weight:", ";"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
const DateContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(PriceContainer).withConfig({
  displayName: "RecentlyItem__DateContainer",
  componentId: "sc-1wa2vo0-7"
})([""]);
const ThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__ThumbnailWrapper",
  componentId: "sc-1wa2vo0-8"
})(["width:100%;"]);
const Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__Thumbnail",
  componentId: "sc-1wa2vo0-9"
})(["position:relative;padding-top:100%;overflow:hidden;border-radius:20px;"]);
const Centered = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "RecentlyItem__Centered",
  componentId: "sc-1wa2vo0-10"
})(["position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translate(50%,50%);-ms-transform:translate(50%,50%);transform:translate(50%,50%);"]);
const CImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_3___default())).withConfig({
  displayName: "RecentlyItem__CImage",
  componentId: "sc-1wa2vo0-11"
})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_TotalData)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@nivo/pie"
var pie_ = __webpack_require__(7556);
// EXTERNAL MODULE: ./styles/media.tsx
var media = __webpack_require__(8520);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/main/chart/TotalPie.tsx






const TotalPie = ({
  item
}) => {
  const Key = Object.entries(item);
  const Color = ['hsl(309, 70%, 50%)', 'hsl(309, 70%, 50%)', 'hsl(180, 70%, 50%)', 'hsl(327, 70%, 50%)', 'hsl(168, 70%, 50%)', 'hsl(150, 70%, 50%)'];
  const Data = Key.map((cate, idx) => {
    return {
      id: cate[0],
      label: cate[0],
      value: cate[1],
      color: Color[idx]
    };
  });
  return /*#__PURE__*/jsx_runtime_.jsx(PieContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(pie_.ResponsivePie, {
      data: Data,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      },
      innerRadius: 0.4,
      padAngle: 2,
      cornerRadius: 3,
      fit: false,
      activeOuterRadiusOffset: 8,
      colors: {
        scheme: 'purple_blue'
      },
      borderWidth: 1,
      borderColor: {
        from: 'color',
        modifiers: [['darker', 0.2]]
      },
      enableArcLinkLabels: false,
      arcLinkLabelsSkipAngle: 11,
      arcLinkLabelsTextColor: "#333333",
      arcLinkLabelsOffset: -1,
      arcLinkLabelsDiagonalLength: 15,
      arcLinkLabelsStraightLength: 23,
      arcLinkLabelsThickness: 2,
      arcLinkLabelsColor: {
        from: 'color'
      },
      arcLabel: "id",
      arcLabelsSkipAngle: 10,
      arcLabelsTextColor: {
        from: 'color',
        modifiers: [['darker', 2]]
      },
      defs: [{
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      }, {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }],
      fill: [{
        match: {
          id: 'ruby'
        },
        id: 'dots'
      }, {
        match: {
          id: 'c'
        },
        id: 'dots'
      }, {
        match: {
          id: 'go'
        },
        id: 'dots'
      }, {
        match: {
          id: 'python'
        },
        id: 'dots'
      }, {
        match: {
          id: 'scala'
        },
        id: 'lines'
      }, {
        match: {
          id: 'lisp'
        },
        id: 'lines'
      }, {
        match: {
          id: 'elixir'
        },
        id: 'lines'
      }, {
        match: {
          id: 'javascript'
        },
        id: 'lines'
      }],
      legends: []
    })
  });
};

/* harmony default export */ const chart_TotalPie = (TotalPie);
const PieContainer = external_styled_components_default().div.withConfig({
  displayName: "TotalPie__PieContainer",
  componentId: "sc-9c2wff-0"
})(["width:70%;height:70%;", "{width:180px;height:180px;}"], media/* media.desktop */.B.desktop);
// EXTERNAL MODULE: ./components/recycle/element/overview/OverviewCL.tsx
var OverviewCL = __webpack_require__(5232);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./components/recycle/EmptyData.tsx
var EmptyData = __webpack_require__(8672);
;// CONCATENATED MODULE: ./components/main/TotalData.tsx









const TotalData = ({
  data,
  total
}) => {
  const moveToStore = (0,external_react_.useCallback)(() => {
    router_default().push('/closet/store');
  }, []);

  if (Object.keys(data).length === 0) {
    return /*#__PURE__*/jsx_runtime_.jsx(OverviewCL/* default */.Z, {
      Subject: "total quantity",
      Address: "Store",
      onMove: moveToStore,
      divided: false,
      children: /*#__PURE__*/jsx_runtime_.jsx(EmptyData/* default */.Z, {
        height: 80
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(OverviewCL/* default */.Z, {
    Subject: "total quantity",
    Address: "Store",
    onMove: moveToStore,
    divided: false,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TotalDiv, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: total
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\uBC8C"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(DestDiv, {
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\uD604\uC7AC\uAE4C\uC9C0 \uC800\uC7A5\uB41C \uBAA8\uB4E0 \uC758\uB958 \uBC0F \uC2E0\uBC1C\uC758 \uC218\uB7C9\uC785\uB2C8\uB2E4"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(chart_TotalPie, {
      item: data
    })]
  });
};

/* harmony default export */ const main_TotalData = (TotalData);
const TotalDiv = external_styled_components_default().div.withConfig({
  displayName: "TotalData__TotalDiv",
  componentId: "sc-1sk4t6x-0"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:auto;gap:3px;margin-bottom:10px;> span{font-size:clamp(33px,3.6vw,55px);font-weight:", ";font-family:", ";}> p{font-size:clamp(17px,1.8vw,30px);font-weight:", ";font-family:", ";color:", ";margin-top:10px;}"], ({
  theme
}) => theme.fontWeight.Bold, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.colors.lightGrey);
const DestDiv = external_styled_components_default().div.withConfig({
  displayName: "TotalData__DestDiv",
  componentId: "sc-1sk4t6x-1"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;> p{font-size:10px;font-weight:", ";font-family:", ";color:", ";margin-top:2px;margin-bottom:10px;}"], ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.colors.lightGrey);

/***/ }),

/***/ 5551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1172);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Background = () => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  const isClickOnMenu = e => {
    if (e.target === containerRef.current) {
      dispatch({
        type: _reducers_type__WEBPACK_IMPORTED_MODULE_4__/* .RESET_MENU_CLICK */ .Mw
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(BackgroundContainer, {
    ref: containerRef,
    onClick: isClickOnMenu
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);
const BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Background__BackgroundContainer",
  componentId: "sc-13u62nl-0"
})(["position:absolute;top:0;left:0;width:100%;height:100vh;background-color:rgba(0,0,0,0.2);"]);

/***/ }),

/***/ 8672:
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








const EmptyData = ({
  height
}) => {
  const moveToAddPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/closet/add');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(EmptySection, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Empty, {
      image: "/images/closet.png",
      imageStyle: {
        height: height
      },
      description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(EmptySpan, {
        children: "\uC800\uC7A5\uB41C \uC758\uB958\uAC00 \uC5C6\uC5B4\uC694..!"
      }),
      children: height > 40 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_element_button_AButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        color: "black",
        disabled: false,
        dest: "\uC800\uC7A5 \uD398\uC774\uC9C0\uB85C",
        onClick: moveToAddPage
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Copyright, {
      href: "https://www.flaticon.com/free-icons/closet",
      title: "closet icons",
      children: "Closet icons created by Freepik - Flaticon"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyData);
const EmptySection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "EmptyData__EmptySection",
  componentId: "sc-9273ld-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:5px;"]);
const EmptySpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "EmptyData__EmptySpan",
  componentId: "sc-9273ld-1"
})(["color:", ";font-size:clamp(12px,1.3vw,18px);font-weight:", ";"], ({
  theme
}) => theme.colors.brown, ({
  theme
}) => theme.fontWeight.Medium);
const Copyright = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "EmptyData__Copyright",
  componentId: "sc-9273ld-2"
})(["font-size:10px;color:", ";font-weight:", ";"], ({
  theme
}) => theme.colors.lightGrey, ({
  theme
}) => theme.fontWeight.Light);

/***/ }),

/***/ 5232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const OverviewCL = ({
  children,
  Subject,
  Address,
  onMove,
  divided = false
}) => {
  const iconStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return {
      width: '12px',
      height: '12px'
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(MainContainer, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
      divide: divided,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HeadSection, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
          children: Subject
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(AddButton, {
          onClick: onMove,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbTransferIn, {
            style: iconStyle
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            children: Address
          })]
        })]
      }), children]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewCL);
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "OverviewCL__MainContainer",
  componentId: "sc-paq2vq-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;padding:17px 24px;margin-bottom:10px;border-radius:10px;color:", ";background-color:", ";box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.white);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "OverviewCL__Container",
  componentId: "sc-paq2vq-1"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:", ";"], props => props.divide ? '140px' : '340px');
const HeadSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "OverviewCL__HeadSection",
  componentId: "sc-paq2vq-2"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;margin-bottom:10px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "OverviewCL__Title",
  componentId: "sc-paq2vq-3"
})(["font-size:12px;font-weight:", ";"], ({
  theme
}) => theme.fontWeight.Bold);
const AddButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "OverviewCL__AddButton",
  componentId: "sc-paq2vq-4"
})(["display:flex;justify-content:center;align-items:center;gap:5px;padding:8px;border:1px solid ", ";border-radius:5px;cursor:pointer;transition:box-shadow 0.2s ease-out;> div{font-size:11px;}&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}"], ({
  theme
}) => theme.colors.mainGrey);

/***/ }),

/***/ 6913:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8183);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ListName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const MobileList = () => {
  const {
    0: clickDrop,
    1: setClickDrop
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const onClickDrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setClickDrop(prev => !prev);
  }, []);

  const logout = () => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .logoutRequestAction */ .vR)());
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ListContainer, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
      children: _ListName__WEBPACK_IMPORTED_MODULE_6__/* .sidebarList.map */ .g.map((prop, i) => {
        return i === 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ListBox, {
            direction: true,
            onClick: onClickDrop,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                children: [prop.icon, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                  children: prop.name
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineKeyboardArrowDown, {
                className: "logo"
              })]
            })
          }, i), _ListName__WEBPACK_IMPORTED_MODULE_6__/* .dropList.map */ .$.map((prop, j) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: prop.path,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(DropListBox, {
                clickDrop: clickDrop,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                  children: prop.icon
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                  children: prop.name
                })]
              })
            }, j);
          })]
        }) : i == 5 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: prop.path,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ListBox, {
            direction: false,
            onClick: logout,
            children: [prop.icon, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
              children: prop.name
            })]
          })
        }, i) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: prop.path,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(ListBox, {
            direction: false,
            children: [prop.icon, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
              children: prop.name
            })]
          })
        }, i);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileList);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MobileList__ListContainer",
  componentId: "sc-1p82wrt-0"
})(["width:100%;height:fit-content;a{color:", ";}"], ({
  theme
}) => theme.colors.white);
const ListBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MobileList__ListBox",
  componentId: "sc-1p82wrt-1"
})(["width:100%;height:auto;margin:4px 0;padding:9px 30px 9px 30px;font-size:14px;font-weight:", ";li{display:block;}", " .logo{width:20px;height:20px;margin-right:6px;}&:hover{border-left:2px solid white;background-color:rgba(0,0,0,0.5);}"], ({
  theme
}) => theme.fontWeight.Regular, props => props.direction ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;> div{display:flex;justify-content:space-between;align-items:center;width:100%;> div{display:flex;justify-content:flex-start;align-items:center;}}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;justify-content:flex-start;align-items:center;"]));
const DropListBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "MobileList__DropListBox",
  componentId: "sc-1p82wrt-2"
})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:0;padding:0 30px;background-color:rgba(0,0,0,0.5);overflow:hidden;transition:all 0.2s ease-out;> div{opacity:0;transition:all 0.2s ease-out;}> li{display:block;opacity:0;transition:all 0.2s ease-out;}", " .logo{width:20px;height:20px;margin-right:6px;}&:hover{border-left:2px solid white;background-color:rgba(0,0,0,0.8);}"], props => props.clickDrop ? (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["height:38px;padding-top:9px;padding-bottom:9px;> div{opacity:1;}> li{opacity:1;}"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["height:0px;padding-top:0;padding-bottom:0;> div{opacity:0;}> li{opacity:0;}"]));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_screenEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1316);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _recycle_Background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5551);
/* harmony import */ var _MobileList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6913);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8520);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_4__, _MobileList__WEBPACK_IMPORTED_MODULE_7__]);
([_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_4__, _MobileList__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MobileSideList = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    isPhoneMenuClick
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.screenEvent);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [isPhoneMenuClick && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_recycle_Background__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(PhoneMenuContainer, {
      isPhoneMenuClick: isPhoneMenuClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(PhoneMenuBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MenuIcon, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            onClick: () => dispatch((0,_reducers_screenEvent__WEBPACK_IMPORTED_MODULE_4__/* .onPhoneMenuClick */ .Qi)()),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineArrowBackIosNew, {
              className: "logo"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/images/smallLogo.png",
            alt: "\uB85C\uACE0",
            width: 36,
            height: 36
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(ListBox, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_MobileList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileSideList);
const PhoneMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "MobileSideList__PhoneMenuContainer",
  componentId: "sc-1py04a1-0"
})(["position:absolute;top:0;left:-200px;width:200px;height:100vh;background-color:", ";z-index:1;transition:left 0.25s ease-out;", " ", "{display:none;}"], ({
  theme
}) => theme.colors.brown, props => props.isPhoneMenuClick && (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["left:0px;"]), _styles_media__WEBPACK_IMPORTED_MODULE_8__/* .media.tablet */ .B.tablet);
const PhoneMenuBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "MobileSideList__PhoneMenuBox",
  componentId: "sc-1py04a1-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;"]);
const MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "MobileSideList__MenuIcon",
  componentId: "sc-1py04a1-2"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:13px 24px;.logo{width:25px;height:25px;margin-top:5px;cursor:pointer;}"]);
const ListBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "MobileSideList__ListBox",
  componentId: "sc-1py04a1-3"
})(["margin-top:50px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useToggle(state) {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setToggle(prev => !prev);
  }, []);
  return [toggle, onToggle];
}

/***/ }),

/***/ 98:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavRow": () => (/* binding */ NavRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8520);
/* harmony import */ var _util_addHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9818);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5998);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4780);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1172);
/* harmony import */ var _components_main_IntroSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7582);
/* harmony import */ var _components_main_TotalData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4358);
/* harmony import */ var _components_main_RecentlyItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(967);
/* harmony import */ var _components_main_CurrentYearPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(267);
/* harmony import */ var _components_main_LastItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3758);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(440);
/* harmony import */ var _components_recycle_element_Intersection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7314);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7837);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__, redux_saga__WEBPACK_IMPORTED_MODULE_6__, _store_configureStore__WEBPACK_IMPORTED_MODULE_7__, _components_main_RecentlyItem__WEBPACK_IMPORTED_MODULE_10__, _components_main_LastItem__WEBPACK_IMPORTED_MODULE_12__, _components_Nav__WEBPACK_IMPORTED_MODULE_13__, _config_config__WEBPACK_IMPORTED_MODULE_15__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_5__, redux_saga__WEBPACK_IMPORTED_MODULE_6__, _store_configureStore__WEBPACK_IMPORTED_MODULE_7__, _components_main_RecentlyItem__WEBPACK_IMPORTED_MODULE_10__, _components_main_LastItem__WEBPACK_IMPORTED_MODULE_12__, _components_Nav__WEBPACK_IMPORTED_MODULE_13__, _config_config__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const Overview = () => {
  const {
    data,
    error,
    isLoading
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_15__/* .backUrl */ .TA}/posts/overview`, _config_config__WEBPACK_IMPORTED_MODULE_15__/* .mutateFetcher */ .Y$);
  if (isLoading) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(NavRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_recycle_element_Intersection__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(IntroRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_main_IntroSection__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(DataRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_main_TotalData__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        data: data.categori,
        total: data.totalNumber
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ResRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_main_RecentlyItem__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        items: data.lastDatas
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(InfoRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_main_LastItem__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        item: data.theOldestData
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(LastDataRow, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_components_main_CurrentYearPrice__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        totalPrice: data.totalPrice,
        currentPrice: data.currentYearPrice
      })
    })]
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getServerSideProps */ .Z.getServerSideProps(store => async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers.Cookie = cookie;
  }

  store.dispatch({
    // store에서 dispatch 하는 api
    type: _reducers_type__WEBPACK_IMPORTED_MODULE_17__/* .LOAD_TO_MY_INFO_REQUEST */ .YE
  });
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_6__.END);
  await store.sagaTask?.toPromise();

  if (store.getState().user.me) {
    return {
      redirect: {
        destination: '/userlogin',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo((0,_util_addHead__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Overview, 'closet', '이 페이지는 전체 데이터를 요약해주는 메인 페이지입니다')));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__Container",
  componentId: "sc-p5yg64-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:auto;gap:30px;padding:0;", "{display:grid;grid-template-rows:60px 1px 0.45fr 0.45fr;grid-template-columns:0.65fr 0.35fr;grid-template-areas:'nav nav' 'inter inter' 'intro data' 'recently myinfo' 'recently lastData';gap:1.5rem;height:100%;padding:24px;}"], _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const NavRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__NavRow",
  componentId: "sc-p5yg64-1"
})(["grid-area:nav;position:fixed;display:flex;align-items:center;top:0;left:0;width:100%;height:auto;background-color:", ";z-index:30;", "{display:flex;align-items:center;position:relative;height:auto;border-radius:10px;}"], ({
  theme
}) => theme.colors.white, _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const IntroRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__IntroRow",
  componentId: "sc-p5yg64-2"
})(["grid-area:intro;display:flex;align-items:center;margin-top:50px;width:100%;height:auto;", "{display:flex;align-items:center;height:auto;margin-top:0;}"], _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const DataRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__DataRow",
  componentId: "sc-p5yg64-3"
})(["grid-area:data;display:flex;align-items:center;width:100%;height:auto;", "{display:flex;align-items:center;height:auto;}"], _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const ResRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__ResRow",
  componentId: "sc-p5yg64-4"
})(["grid-area:recently;display:flex;align-items:center;width:100%;height:auto;", "{display:flex;align-items:center;height:auto;}"], _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const InfoRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "overview__InfoRow",
  componentId: "sc-p5yg64-5"
})(["grid-area:myinfo;display:flex;align-items:center;width:100%;height:auto;", "{display:flex;align-items:center;height:auto;}"], _styles_media__WEBPACK_IMPORTED_MODULE_3__/* .media.tablet */ .B.tablet);
const LastDataRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(InfoRow).withConfig({
  displayName: "overview__LastDataRow",
  componentId: "sc-p5yg64-6"
})(["grid-area:lastData;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ phoneSearch)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const phoneSearch = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{width:100%;gap:20px;}50%{width:50%;gap:10px}100%{width:0;gap:0}"]);

/***/ }),

/***/ 9818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const addHead = (Components, title, description) => {
  const HOC = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
        name: "description",
        content: description
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Components, _objectSpread({}, props))]
  });

  return HOC;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHead);

/***/ })

};
;