"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8706);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4260);
/* harmony import */ var _sidebar_SideList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5518);
/* harmony import */ var _sidebar_SideProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sidebar_SideList__WEBPACK_IMPORTED_MODULE_8__]);
_sidebar_SideList__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const SearchModal = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(462), __webpack_require__.e(614)]).then(__webpack_require__.bind(__webpack_require__, 8614)), {
    loadableGenerated: {
        modules: [
            "../components/AppLayout.tsx -> " + "./search/SearchModal"
        ]
    }
});
const Background = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 563).then(__webpack_require__.bind(__webpack_require__, 3563)), {
    loadableGenerated: {
        modules: [
            "../components/AppLayout.tsx -> " + "./recycle/Background"
        ]
    }
});
const AppLayout = ({ children  })=>{
    const { isSearchClick  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.screenEvent);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AppLay, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchModal, {}),
                isSearchClick && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MenuContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SideBar, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StickyBox, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideProfile__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_SideList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainFooterBox, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Main, {
                                    children: children
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);
const AppLay = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_6__.Layout).withConfig({
    displayName: "AppLayout__AppLay",
    componentId: "sc-c134bc6d-0"
})`
  /* min-height: 200%; */
  width: 100%;
`;
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "AppLayout__MenuContainer",
    componentId: "sc-c134bc6d-1"
})`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${({ theme  })=>theme.colors.white};
`;
const MainFooterBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "AppLayout__MainFooterBox",
    componentId: "sc-c134bc6d-2"
})`
  width: 100%;
  height: auto;
`;
const Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "AppLayout__Main",
    componentId: "sc-c134bc6d-3"
})`
  width: 100%;
  height: auto;
  background: ${({ theme  })=>theme.colors.white};
  color: ${({ theme  })=>theme.colors.white};
`;
const SideBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "AppLayout__SideBar",
    componentId: "sc-c134bc6d-4"
})`
  display: none;
  width: fit-content;
  height: auto;
  background: ${({ theme  })=>theme.colors.brown};
  ${_styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
  }
  ${_styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.desktop */ .B.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
  }
`;
const StickyBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "AppLayout__StickyBox",
    componentId: "sc-c134bc6d-5"
})`
  position: sticky;
  top: -1px;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _recycle_element_Intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _sidebar_ListName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1109);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);







const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterHead, {
                children: "CLOSET"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterListBox, {
                children: _sidebar_ListName__WEBPACK_IMPORTED_MODULE_5__/* .sidebarList.filter */ .g.filter((v, i)=>i < 5).map((elem, j)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: elem.path,
                        children: elem.name
                    }, j);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_recycle_element_Intersection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterBox, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyRightDiv, {
                        children: "\xa92023Yelihi.All rights reserved."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterLinkBox, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://github.com/Yelihi",
                                target: "_blank",
                                "aria-label": "깃허브페이지로",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaGithub, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://twitter.com/yelihi19_lg",
                                target: "_blank",
                                "aria-label": "트위터페이지로",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTwitter, {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().footer.withConfig({
    displayName: "Footer__FooterContainer",
    componentId: "sc-9b878268-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 30px 25px;
  background-color: ${({ theme  })=>theme.colors.white};
  color: ${({ theme  })=>theme.colors.black};
  border-top: 1px solid rgba(30, 40, 51, 0.0671438); ;
`;
const FooterHead = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "Footer__FooterHead",
    componentId: "sc-9b878268-1"
})`
  font-family: ${({ theme  })=>theme.font.Logo};
  font-weight: ${({ theme  })=>theme.fontWeight.Medium};
  font-size: 20px;
  color: ${({ theme  })=>theme.colors.black};
  margin-bottom: 12px;
`;
const FooterListBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "Footer__FooterListBox",
    componentId: "sc-9b878268-2"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
  > a {
    color: ${({ theme  })=>theme.colors.black};
    font-family: ${({ theme  })=>theme.font.Logo};
    font-weight: ${({ theme  })=>theme.fontWeight.Light};
    font-size: 13px;
    cursor: pointer;
  }
`;
const FooterBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "Footer__FooterBox",
    componentId: "sc-9b878268-3"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const CopyRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "Footer__CopyRightDiv",
    componentId: "sc-9b878268-4"
})`
  font-size: 12px;
  font-weight: ${({ theme  })=>theme.fontWeight.Light};
  font-family: ${({ theme  })=>theme.font.Efont};
`;
const FooterLinkBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "Footer__FooterLinkBox",
    componentId: "sc-9b878268-5"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  a {
    color: ${({ theme  })=>theme.colors.black};
    font-size: 14px;
    cursor: pointer;
  }
`;


/***/ }),

/***/ 7074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ TransitionPageLoading)
});

// UNUSED EXPORTS: BackgroundContainer, Center

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./hooks/useLottieAnimation.tsx + 1 modules
var useLottieAnimation = __webpack_require__(3852);
;// CONCATENATED MODULE: ./public/AnimaionJson/mainLoading.json
const mainLoading_namespaceObject = JSON.parse('{"nm":"Comp 2","ddd":0,"h":300,"w":300,"meta":{"g":"@lottiefiles/toolkit-js 0.26.1"},"layers":[{"ty":0,"nm":"Comp 1","sr":1,"st":62,"op":152,"ip":62,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[150,175,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":200,"h":100,"refId":"comp_0","ind":1},{"ty":0,"nm":"Comp 1","sr":1,"st":30,"op":120,"ip":30,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.069,"y":0.995},"s":[100,100,100],"t":62},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":76},{"s":[80,80,100],"t":94}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.182,"y":1},"s":[150,175,0],"t":62,"ti":[0,8.58333301544189,0],"to":[0,-8.58333301544189,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.182,"y":0.182},"s":[150,123.5,0],"t":76,"ti":[0,0,0],"to":[0,0,0]},{"s":[150,123.5,0],"t":94}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":62},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":76},{"s":[60],"t":94}],"ix":11}},"ef":[],"w":200,"h":100,"refId":"comp_0","ind":2},{"ty":0,"nm":"Comp 1","sr":1,"st":-2,"op":88,"ip":-2,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.069,"y":0.995},"s":[100,100,100],"t":30},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":44},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":62},{"s":[50,50,100],"t":76}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.182,"y":1},"s":[150,175,0],"t":30,"ti":[0,8.58333301544189,0],"to":[0,-8.58333301544189,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.182,"y":0.182},"s":[150,123.5,0],"t":44,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.167,"y":0},"i":{"x":0.182,"y":1},"s":[150,123.5,0],"t":62,"ti":[0,6.16666650772095,0],"to":[0,-6.16666650772095,0]},{"s":[150,86.5,0],"t":76}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":44},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":62},{"s":[0],"t":76}],"ix":11}},"ef":[],"w":200,"h":100,"refId":"comp_0","ind":3},{"ty":0,"nm":"Comp 1","sr":1,"st":-33,"op":57,"ip":-33,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.069,"y":0.995},"s":[100,100,100],"t":-1},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":13},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":31},{"s":[50,50,100],"t":45}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.182,"y":1},"s":[150,175,0],"t":-1,"ti":[0,8.58333301544189,0],"to":[0,-8.58333301544189,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.182,"y":0.182},"s":[150,123.5,0],"t":13,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.167,"y":0},"i":{"x":0.182,"y":1},"s":[150,123.5,0],"t":31,"ti":[0,6.16666650772095,0],"to":[0,-6.16666650772095,0]},{"s":[150,86.5,0],"t":45}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":-1},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":13},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":31},{"s":[0],"t":45}],"ix":11}},"ef":[],"w":200,"h":100,"refId":"comp_0","ind":4},{"ty":0,"nm":"Comp 1","sr":1,"st":-76,"op":14,"ip":-76,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.069,"y":0.995},"s":[100,100,100],"t":-35},{"o":{"x":0.333,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":-21},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[80,80,100],"t":-1},{"s":[50,50,100],"t":13}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.182,"y":1},"s":[150,175,0],"t":-35,"ti":[0,8.58333301544189,0],"to":[0,-8.58333301544189,0]},{"o":{"x":0.167,"y":0.167},"i":{"x":0.182,"y":0.182},"s":[150,123.5,0],"t":-21,"ti":[0,0,0],"to":[0,0,0]},{"o":{"x":0.167,"y":0},"i":{"x":0.182,"y":1},"s":[150,123.5,0],"t":-1,"ti":[0,6.16666650772095,0],"to":[0,-6.16666650772095,0]},{"s":[150,86.5,0],"t":13}],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":-35},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":-21},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[60],"t":-1},{"s":[0],"t":13}],"ix":11}},"ef":[],"w":200,"h":100,"refId":"comp_0","ind":5}],"v":"5.1.6","fr":30,"op":94,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":4,"nm":"Shape Layer 3","sr":1,"st":0,"op":118,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-30,-6.544,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.651,"y":0.998},"s":[0,75.476,100],"t":9},{"o":{"x":0.379,"y":0.013},"i":{"x":0.524,"y":0.97},"s":[110,75.476,100],"t":21},{"s":[100,75.476,100],"t":29}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[81,59.26,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":2,"ix":4},"s":{"a":0,"k":[85.26,14.271],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9412,0.949,0.9608],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[12.63,-8.364],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":0,"op":166,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-30,-6.544,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.651,"y":0.997},"s":[0,75.476,100],"t":3},{"o":{"x":0.379,"y":0.027},"i":{"x":0.524,"y":0.94},"s":[90,75.476,100],"t":15},{"s":[85,75.476,100],"t":23}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[81,41.26,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":2,"ix":4},"s":{"a":0,"k":[85.26,14.271],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.9412,0.949,0.9608],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[12.63,-8.364],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":166,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-66.789,-32.789,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.044,"y":0.991},"s":[0,0,100],"t":0},{"s":[93,93,100],"t":12}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[48.961,49.211,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":4,"ix":4},"s":{"a":0,"k":[38.422,38.422],"ix":2}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0.8941,0.902,0.9216],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[-66.789,-32.789],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3}]}]}');
;// CONCATENATED MODULE: ./components/TransitionPageLoading.tsx





const options = {
    src: mainLoading_namespaceObject,
    loop: true,
    autoplay: true,
    style: {
        width: "30rem",
        height: "30rem"
    }
};
function TransitionPageLoading() {
    const Loading = (0,useLottieAnimation/* default */.Z)(options);
    return /*#__PURE__*/ jsx_runtime_.jsx(BackgroundContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Center, {
            children: Loading
        })
    });
}
const BackgroundContainer = external_styled_components_default().div.withConfig({
    displayName: "TransitionPageLoading__BackgroundContainer",
    componentId: "sc-a9c2f34-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0);
  opacity: 0.6;
  z-index: 40;
`;
const Center = external_styled_components_default().div.withConfig({
    displayName: "TransitionPageLoading__Center",
    componentId: "sc-a9c2f34-1"
})`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 40;
`;


/***/ }),

/***/ 5518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4195);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8706);
/* harmony import */ var _hooks_useBreakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7508);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ListName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_5__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const SideList = ()=>{
    const [clickDrop, setClickDrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { desktop  } = (0,_hooks_useBreakpoints__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const onClickDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setClickDrop((prev)=>!prev);
    }, []);
    const logout = ()=>{
        dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_5__/* .logoutRequestAction */ .vR)());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListContainer, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: _ListName__WEBPACK_IMPORTED_MODULE_9__/* .sidebarList.map */ .g.map((prop, i)=>{
                return i === 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Column, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListBox, {
                            direction: "true",
                            onClick: onClickDrop,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            prop.icon,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: prop.name
                                            })
                                        ]
                                    }),
                                    desktop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdOutlineKeyboardArrowDown, {
                                        className: "logo"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DropListContainer, {
                            clickDrop: clickDrop,
                            children: _ListName__WEBPACK_IMPORTED_MODULE_9__/* .dropList.map */ .$.map((prop, j)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: prop.path,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DropListBox, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: prop.icon
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: prop.name
                                            })
                                        ]
                                    })
                                }, j);
                            })
                        })
                    ]
                }, i) : i == 5 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: prop.path,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListBox, {
                        direction: "false",
                        onClick: logout,
                        children: [
                            prop.icon,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: prop.name
                            })
                        ]
                    })
                }, i) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: prop.path,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListBox, {
                        direction: "false",
                        children: [
                            prop.icon,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: prop.name
                            })
                        ]
                    })
                }, i);
            })
        }, "desktopSidebar")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideList);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "SideList__ListContainer",
    componentId: "sc-97cfb6f5-0"
})`
  width: 100%;
  height: fit-content;
  ${_styles_media__WEBPACK_IMPORTED_MODULE_6__/* .media.tablet */ .B.tablet} {
    position: sticky;
    position: -webkit-sticky;
    top: -1px;
  }

  a {
    color: ${({ theme  })=>theme.colors.white};
  }
`;
const Column = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "SideList__Column",
    componentId: "sc-97cfb6f5-1"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ListBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "SideList__ListBox",
    componentId: "sc-97cfb6f5-2"
})`
  width: 100%;
  height: auto;
  margin: 4px 0;
  padding: 9px 30px 9px 30px;
  font-size: 14px;
  font-weight: ${({ theme  })=>theme.fontWeight.Regular};
  overflow: hidden;

  li {
    display: none;
  }

  ${(props)=>props.direction === "true" ? styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            > div {
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
          }
        ` : styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}

  .logo {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  ${_styles_media__WEBPACK_IMPORTED_MODULE_6__/* .media.desktop */ .B.desktop} {
    li {
      display: block;
    }

    .logo {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
  }
`;
const DropListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "SideList__DropListContainer",
    componentId: "sc-97cfb6f5-3"
})`
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 0;
  transition: height 0.25s ease-out;

  > a {
    width: 100%;
  }

  ${(props)=>props.clickDrop ? styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: flex;
          height: 100%;
        ` : styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
          display: none;
          height: 0;
        `}
`;
const DropListBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "SideList__DropListBox",
    componentId: "sc-97cfb6f5-4"
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 30px;
  padding-top: 9px;
  padding-bottom: 9px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.25s ease-out;

  > div {
    opacity: 0.99;
  }

  > li {
    opacity: 0;
  }

  .logo {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${_styles_media__WEBPACK_IMPORTED_MODULE_6__/* .media.desktop */ .B.desktop} {
    padding-top: 9px;
    padding-bottom: 9px;

    > li {
      display: block;
      opacity: 0.999;
    }

    .logo {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7508);





const SideProfile = ()=>{
    const { desktop  } = (0,_hooks_useBreakpoints__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageContainer, {
        children: desktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/images/newClosetLogo.png",
            alt: "로고",
            width: 120,
            height: 130,
            priority: true
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/images/smallLogo.png",
            alt: "로고",
            width: 50,
            height: 50,
            priority: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideProfile);
const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "SideProfile__ImageContainer",
    componentId: "sc-d8877abb-0"
})`
  margin-top: 50px;
  margin-bottom: 50px;
`;


/***/ }),

/***/ 7508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useBreakpoints)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/useMediaQuery.tsx

function useMediaQuery(query) {
    const [matches, setMatches] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const handler = (event)=>setMatches(event.matches);
        mediaQuery.addEventListener("change", handler);
        return ()=>mediaQuery.removeEventListener("change", handler);
    }, []);
    return matches;
}

;// CONCATENATED MODULE: ./hooks/useBreakpoints.tsx

function useBreakpoints() {
    const breakpoints = {
        phone: useMediaQuery("(max-width: 786px)"),
        tablet: useMediaQuery("(max-width: 1022px)"),
        desktop: useMediaQuery("(min-width: 1300px)"),
        active: "phone"
    };
    if (breakpoints.phone) breakpoints.active = "phone";
    if (breakpoints.tablet) breakpoints.active = "tablet";
    if (breakpoints.desktop) breakpoints.active = "desktop";
    return breakpoints;
}


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5535);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4542);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4601);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7956);
/* harmony import */ var _components_TransitionPageLoading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _store_configureStore__WEBPACK_IMPORTED_MODULE_8__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _store_configureStore__WEBPACK_IMPORTED_MODULE_8__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MyApp = ({ Component , pageProps  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isTransitionLoading, setIsTransitionLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isPhoneMenuClick , isSearchClick  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.screenEvent);
    const getLayout = Component.getLayout || ((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: page
        }));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const start = ()=>{
            setIsTransitionLoading(true);
        };
        const end = ()=>{
            setIsTransitionLoading(false);
        };
        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", end);
        router.events.on("routeChangeError", end);
        return ()=>{
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", end);
            router.events.off("routeChangeError", end);
        };
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
            theme: _styles_theme__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    isPhoneMenuClick: isPhoneMenuClick,
                    isSearchClick: isSearchClick
                }),
                isTransitionLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TransitionPageLoading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {}),
                getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }))
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_8__/* ["default"].withRedux */ .Z.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ styles_GlobalStyle)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_namespaceObject);
;// CONCATENATED MODULE: ./styles/GlobalStyle.tsx


const GlobalStyle = external_styled_components_.createGlobalStyle`
  ${(external_styled_normalize_default())}

    /* font */

  @font-face {
    font-family: CastleBegaleTTF;
    src: url('/fonts/CastleBegaleTTF.ttf');
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: ${(props)=>props.isPhoneMenuClick || props.isSearchClick ? "hidden" : "auto"};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  * { font-family: ${({ theme  })=>theme.font.Logo}}

  a {  cursor: pointer; text-decoration: none}

  a { text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none}

  p {
    margin: 0;
  }

  input,
  input:active,
  input:focus{
    border: none;
    outline: none;
    -webkit-appearance:none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: ${({ theme  })=>theme.font.Efont};
  }

  button {
    border: none;
    cursor: pointer;
    font-family: ${({ theme  })=>theme.font.Efont};
  }

  ul,
  li,
  li:active,
  li:hover{
    list-style: none;
    padding: 0;
    margin: 0;

  }



  
`;
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);


/***/ }),

/***/ 4542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const font = {
    Kfont: `'Noto Sans KR', sans-serif`,
    Efont: `'Roboto', sans-serif`,
    Efont2: `'CastleBegaleTTF', sans-serif`,
    Logo: `'Julius Sans One', sans-serif`
};
const fontWeight = {
    Thin: 100,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Bold: 700
};
const colors = {
    black: "#000000",
    white: "#FFFFFF",
    lightGrey: "#B0B0B0",
    middleGrey: "#717171",
    deepGrey: "#222222",
    hoverGrey: "#dbdcdc",
    mainGrey: "#EDECEC",
    symbol: "#205281",
    brown: "#363740",
    red: "#EE4B2B",
    success: "#68C260",
    warnning: "#F4A100",
    milk: "#f7f6ee"
};
const animation = {
    fade: ({ name , duration ="2s" , direction ="alternate"  })=>styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    @keyframes Fade${name} {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
    animation: ${"Fade" + name} ${duration} 1s infinite linear ${direction};
  `
};
const theme = {
    breakPoint: "796px",
    font,
    fontWeight,
    colors,
    animation
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 1077:
/***/ ((module) => {

module.exports = require("@lottiefiles/react-lottie-player");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 4549:
/***/ ((module) => {

module.exports = import("@redux-saga/core");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,152,601,859], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();