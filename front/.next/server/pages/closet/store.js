"use strict";
(() => {
var exports = {};
exports.id = 213;
exports.ids = [213,294];
exports.modules = {

/***/ 9135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7837);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_config__WEBPACK_IMPORTED_MODULE_6__]);
_config_config__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ItemCard = ({
  src,
  id,
  onSubmit
}) => {
  const moveToDetailsPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => () => {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/closet/details/${id}`);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ThumbnailWrapper, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Thumbnail, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Centered, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CImage, {
          src: `${_config_config__WEBPACK_IMPORTED_MODULE_6__/* .backUrl */ .TA}/${src}`,
          alt: src,
          width: 600,
          height: 600,
          placeholder: "blur",
          blurDataURL: `data:image/gif;base64,${_config_config__WEBPACK_IMPORTED_MODULE_6__/* .base64URL */ .B3}`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(HoverTumnail, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(IconBox, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiDetail, {
              className: "icon",
              onClick: moveToDetailsPage(id)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "\uC0C1\uC138\uBCF4\uAE30"
            }), onSubmit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTrashRestoreAlt, {
              className: "icon",
              onClick: () => window.confirm('삭제하시겠습니까?') ? onSubmit(id)() : () => console.log('취소했씁니다')
            }) : null, onSubmit ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "\uC0AD\uC81C\uD558\uAE30"
            }) : null]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemCard);
const ThumbnailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__ThumbnailWrapper",
  componentId: "sc-g3f3eg-0"
})(["width:100%;"]);
const Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__Thumbnail",
  componentId: "sc-g3f3eg-1"
})(["position:relative;padding-top:100%;overflow:hidden;border-radius:20px;"]);
const Centered = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__Centered",
  componentId: "sc-g3f3eg-2"
})(["position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translate(50%,50%);-ms-transform:translate(50%,50%);transform:translate(50%,50%);"]);
const CImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default())).withConfig({
  displayName: "ItemCard__CImage",
  componentId: "sc-g3f3eg-3"
})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);"]);
const HoverTumnail = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__HoverTumnail",
  componentId: "sc-g3f3eg-4"
})(["display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:background-color 0.2s ease-out;&:hover{background-color:rgba(0,0,0,0.3);}"]);
const IconBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__IconBox",
  componentId: "sc-g3f3eg-5"
})(["display:flex;justify-content:center;align-items:center;gap:5px;width:100%;height:100%;opacity:0;.icon{width:9%;height:auto;color:", ";opacity:0;cursor:pointer;}> span{color:", ";font-size:clamp(10px,1.5vw,15px);margin-right:5px;}&:hover{opacity:0.8;.icon{opacity:1;}}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.white);
const SubSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "ItemCard__SubSection",
  componentId: "sc-g3f3eg-6"
})(["display:flex;justify-content:flex-start;align-items:center;gap:10px;width:100%;height:auto;"]);
const SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemCard__SubContainer",
  componentId: "sc-g3f3eg-7"
})(["max-width:25%;width:100%;height:auto;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ recycle_ProcessingDataCard)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./styles/media.tsx
var media = __webpack_require__(8520);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/recycle/ProcessingDataCard.tsx








const ProcessingDataCard = ({
  Icon,
  DataTitle,
  LastData = 0,
  CurrentData = 0,
  Categori,
  isLoading
}) => {
  let percent = Math.floor((CurrentData - LastData) / LastData * 100);

  if (isLoading) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardBox, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DataBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(SKIconBox, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(SKTitle, {}), /*#__PURE__*/jsx_runtime_.jsx(SKCurrent, {})]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(PercentBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SKPercentBorder, {})
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardBox, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(DataBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(IconBox, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: Icon
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          children: DataTitle
        }), /*#__PURE__*/jsx_runtime_.jsx(Current, {
          children: Categori ? Categori : /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
            end: CurrentData,
            duration: 2
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(PercentBox, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PercentBorder, {
        children: [percent >= 0 ? /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineArrowUp, {
          className: "Arrow"
        }) : /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineArrowDown, {
          className: "Arrow"
        }), `${Math.abs(percent)}%`]
      })
    })]
  });
};

/* harmony default export */ const recycle_ProcessingDataCard = (ProcessingDataCard);
const CardBox = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__CardBox",
  componentId: "sc-xozvtf-0"
})(["display:flex;justify-content:space-between;align-items:center;width:260px;height:auto;padding:20px;gap:0;border:1px solid ", ";border-radius:5px;box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;", "{gap:10px;width:100%;height:auto;}"], ({
  theme
}) => theme.colors.mainGrey, media/* media.phone */.B.phone);
const DataBox = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__DataBox",
  componentId: "sc-xozvtf-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;"]);
const IconBox = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__IconBox",
  componentId: "sc-xozvtf-2"
})(["display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid ", ";border-radius:5px;margin-bottom:30px;.icon{width:23px;height:23px;margin-top:5px;}", "{display:flex;justify-content:center;align-items:center;width:40px;height:40px;border:1px solid ", ";border-radius:5px;margin-bottom:30px;}"], ({
  theme
}) => theme.colors.mainGrey, media/* media.tablet */.B.tablet, ({
  theme
}) => theme.colors.mainGrey);
const SKIconBox = external_styled_components_default()(IconBox).withConfig({
  displayName: "ProcessingDataCard__SKIconBox",
  componentId: "sc-xozvtf-3"
})(["border:none;background-color:", ";", "{border:none;background-color:", ";}"], ({
  theme
}) => theme.colors.hoverGrey, media/* media.tablet */.B.tablet, ({
  theme
}) => theme.colors.hoverGrey);
const TitleBox = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__TitleBox",
  componentId: "sc-xozvtf-4"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;"]);
const Title = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__Title",
  componentId: "sc-xozvtf-5"
})(["font-size:clamp(9px,1.5vw,12px);font-family:", ";font-weight:", ";color:", ";width:100%;margin-bottom:10px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.colors.middleGrey);
const SKTitle = external_styled_components_default()(Title).withConfig({
  displayName: "ProcessingDataCard__SKTitle",
  componentId: "sc-xozvtf-6"
})(["width:100px;height:12px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const Current = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__Current",
  componentId: "sc-xozvtf-7"
})(["font-size:clamp(20px,2.5vw,27px);font-family:", ";font-weight:", ";color:", ";"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.black);
const SKCurrent = external_styled_components_default()(Current).withConfig({
  displayName: "ProcessingDataCard__SKCurrent",
  componentId: "sc-xozvtf-8"
})(["width:150px;height:25px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const PercentBox = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__PercentBox",
  componentId: "sc-xozvtf-9"
})(["display:none;flex-direction:column;justify-content:flex-end;align-items:flex-end;width:100%;height:100%;padding:5px;.Arrow{width:14px;height:14px;margin-bottom:2px;}", "{display:flex;}"], media/* media.phone */.B.phone);
const PercentBorder = external_styled_components_default().div.withConfig({
  displayName: "ProcessingDataCard__PercentBorder",
  componentId: "sc-xozvtf-10"
})(["display:flex;justify-content:center;align-items:center;gap:5px;width:fit-content;height:auto;padding:8px;margin-top:90px;border:1px solid ", ";border-radius:15px;font-size:12px;font-family:", ";font-weight:", ";color:", ";"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.colors.black);
const SKPercentBorder = external_styled_components_default()(PercentBorder).withConfig({
  displayName: "ProcessingDataCard__SKPercentBorder",
  componentId: "sc-xozvtf-11"
})(["width:30%;height:20px;background-color:", ";border:none;"], ({
  theme
}) => theme.colors.hoverGrey);

/***/ }),

/***/ 528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "u": () => (/* binding */ EmptyDiv)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7837);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_config__WEBPACK_IMPORTED_MODULE_5__]);
_config_config__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const SkeletonArray = Array(9).fill(0).map((_, idx) => idx);

const ATable = ({
  headData,
  itemsData = [],
  isDelete,
  onSubmit,
  isLoading
}) => {
  const headerKey = headData.map(v => v.value);
  const moveToDetailsPage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(id => () => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`/closet/details/${id}`);
  }, []);

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Table, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Thead, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tr", {
            children: headData.map((header, idx) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Th, {
                index: header.text,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SKDiv, {})
              }, header.text);
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tbody", {
          children: SkeletonArray.map((data, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Tr, {
              children: headerKey.map(headKey => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Td, {
                  children: headKey === 'productName' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(SKImageBox, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {})]
                  }) : headKey === 'price' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SKDiv, {}) : headKey === 'etc' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(EtcBox, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SKETC, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SKETC, {})]
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SKDiv, {})
                }, headKey + index);
              })
            }, index);
          })
        })]
      })
    });
  }

  if (itemsData.length == 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Table, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Thead, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tr", {
            children: headData.map((header, idx) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Th, {
                index: header.text,
                children: header.text
              }, header.text);
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(EmptyDiv, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Empty, {})
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Table, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Thead, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tr", {
        children: headData.map((header, idx) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Th, {
            index: header.text,
            children: header.text
          }, header.text);
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tbody", {
      children: itemsData.map((data, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Tr, {
          children: headerKey.map(headKey => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Td, {
              children: headKey === 'productName' && data.Images.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ImageBox, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(CImage, {
                  src: `${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .backUrl */ .TA}/${data.Images[0].src}`,
                  alt: data[headKey],
                  width: 100,
                  height: 100,
                  placeholder: "blur",
                  blurDataURL: `data:image/gif;base64,${_config_config__WEBPACK_IMPORTED_MODULE_5__/* .base64URL */ .B3}`
                }), data[headKey]]
              }) : headKey === 'price' ? data[headKey].toLocaleString('ko-KR') : headKey === 'etc' && isDelete && onSubmit ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(EtcBox, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ETC, {
                  onClick: moveToDetailsPage(data.id),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiDetail, {
                    className: "icon"
                  }), " \uC0C1\uC138\uBCF4\uAE30"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(ETC, {
                  onClick: () => window.confirm('삭제하시겠습니까?') ? onSubmit(data.id)() : () => console.log('취소했씁니다'),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaTrashRestoreAlt, {
                    className: "icon"
                  }), " \uC0AD\uC81C\uD558\uAE30"]
                })]
              }) : headKey !== 'etc' && data[headKey]
            }, headKey + index);
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ATable);
const Table = styled_components__WEBPACK_IMPORTED_MODULE_3___default().table.withConfig({
  displayName: "ATable__Table",
  componentId: "sc-niy8s6-0"
})(["width:100%;height:auto;border-collapse:separate;border-spacing:0;border:1px solid ", ";border-radius:10px;"], ({
  theme
}) => theme.colors.mainGrey);
const Thead = styled_components__WEBPACK_IMPORTED_MODULE_3___default().thead.withConfig({
  displayName: "ATable__Thead",
  componentId: "sc-niy8s6-1"
})([""]);
const Th = styled_components__WEBPACK_IMPORTED_MODULE_3___default().th.withConfig({
  displayName: "ATable__Th",
  componentId: "sc-niy8s6-2"
})(["text-align:start;padding:15px;font-family:", ";color:", ";", ""], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.colors.middleGrey, props => props.index === 'Purchase Day' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["width:10%;"]) : props.index === 'Item Categori' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["width:10%;"]) : props.index === 'Cost' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["width:15%;"]) : props.index === 'etc' ? (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["width:25%;"]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.css)(["width:30%;"]));
const SKTh = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Th).withConfig({
  displayName: "ATable__SKTh",
  componentId: "sc-niy8s6-3"
})(["height:12px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const Tr = styled_components__WEBPACK_IMPORTED_MODULE_3___default().tr.withConfig({
  displayName: "ATable__Tr",
  componentId: "sc-niy8s6-4"
})(["transition:box-shadow 0.1s ease-out;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}"]);
const Td = styled_components__WEBPACK_IMPORTED_MODULE_3___default().td.withConfig({
  displayName: "ATable__Td",
  componentId: "sc-niy8s6-5"
})(["text-align:start;padding:15px;font-size:14px;border-top:1px solid ", ";font-family:", ";font-weight:", ";color:", ";"], ({
  theme
}) => theme.colors.mainGrey, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.deepGrey);
const SKDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ATable__SKDiv",
  componentId: "sc-niy8s6-6"
})(["width:30px;height:30px;background-color:", ";"], ({
  theme
}) => theme.colors.hoverGrey);
const ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ATable__ImageBox",
  componentId: "sc-niy8s6-7"
})(["display:flex;justify-content:flex-start;align-items:center;gap:15px;"]);
const SKImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(ImageBox).withConfig({
  displayName: "ATable__SKImageBox",
  componentId: "sc-niy8s6-8"
})(["width:100%;height:30px;> div{width:20%;height:30px;background-color:", ";}> span{display:block;width:50%;height:30px;background-color:", ";}"], ({
  theme
}) => theme.colors.hoverGrey, ({
  theme
}) => theme.colors.hoverGrey);
const CImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default())).withConfig({
  displayName: "ATable__CImage",
  componentId: "sc-niy8s6-9"
})(["width:30%;height:auto;border-radius:5px;"]);
const EtcBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ATable__EtcBox",
  componentId: "sc-niy8s6-10"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:auto;gap:10px;"]);
const ETC = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "ATable__ETC",
  componentId: "sc-niy8s6-11"
})(["display:flex;justify-content:center;align-items:center;font-size:13px;font-family:", ";font-weight:", ";color:", ";padding:7px;gap:5px;border:1px solid ", ";border-radius:10px;transition:box-shadow 0.1s ease-out;cursor:pointer;.icon{width:17px;height:17px;}&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.deepGrey, ({
  theme
}) => theme.colors.mainGrey);
const SKETC = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(ETC).withConfig({
  displayName: "ATable__SKETC",
  componentId: "sc-niy8s6-12"
})(["width:40%;height:30px;background-color:", ";border:none;"], ({
  theme
}) => theme.colors.hoverGrey);
const EmptyDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "ATable__EmptyDiv",
  componentId: "sc-niy8s6-13"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:300px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _recycle_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9135);
/* harmony import */ var _ATable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(528);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8520);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_recycle_ItemCard__WEBPACK_IMPORTED_MODULE_2__, _ATable__WEBPACK_IMPORTED_MODULE_3__]);
([_recycle_ItemCard__WEBPACK_IMPORTED_MODULE_2__, _ATable__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const loadingArray = Array(9).fill(0).map((v, i) => i);

const CardBoard = ({
  itemData,
  onSubmit,
  isLoading,
  isItemsLoading
}) => {
  if (isLoading || isItemsLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CardSection, {
      children: loadingArray.map(item => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoadingBox, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Loading, {})
        }, item);
      })
    });
  }

  if (itemData?.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ATable__WEBPACK_IMPORTED_MODULE_3__/* .EmptyDiv */ .u, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_4__.Empty, {})
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CardSection, {
    children: itemData?.map(item => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CardBox, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_recycle_ItemCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          src: item.Images[0].src,
          id: item.id,
          onSubmit: onSubmit
        })
      }, item.id);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardBoard);
const CardSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "CardBoard__CardSection",
  componentId: "sc-lxexxh-0"
})(["display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;width:100%;height:100%;gap:5%;"]);
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "CardBoard__CardBox",
  componentId: "sc-lxexxh-1"
})(["width:30%;height:auto;margin-bottom:5%;"]);
const LoadingBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(CardBox).withConfig({
  displayName: "CardBoard__LoadingBox",
  componentId: "sc-lxexxh-2"
})(["height:20vh;background-color:", ";", "{height:30vh;}"], ({
  theme
}) => theme.colors.mainGrey, _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "CardBoard__Loading",
  componentId: "sc-lxexxh-3"
})(["width:100%;height:100%;background-color:", ";border-radius:10px;"], ({
  theme
}) => theme.colors.hoverGrey);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ StoreHeader),
/* harmony export */   "p": () => (/* binding */ segmentItems)
/* harmony export */ });
const segmentItems = [{
  label: 'All',
  key: ''
}, {
  label: 'Outer',
  key: 'Outer'
}, {
  label: 'Shirt',
  key: 'Shirt'
}, {
  label: 'Top',
  key: 'Top'
}, {
  label: 'Pant',
  key: 'Pant'
}, {
  label: 'Shoe',
  key: 'Shoe'
}, {
  label: 'Muffler',
  key: 'Muffler'
}];
const StoreHeader = [{
  text: 'Item Name',
  value: 'productName'
}, {
  text: 'Item Categori',
  value: 'categori'
}, {
  text: 'Cost',
  value: 'price'
}, {
  text: 'Purchase Day',
  value: 'purchaseDay'
}, {
  text: 'etc',
  value: 'etc'
}];
const storeValue = StoreHeader.map(v => v.value);

/***/ }),

/***/ 1654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1448);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_infinite__WEBPACK_IMPORTED_MODULE_0__, _config_config__WEBPACK_IMPORTED_MODULE_1__]);
([swr_infinite__WEBPACK_IMPORTED_MODULE_0__, _config_config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// 좀더 확장하려면 url 을 인자로 넘겨주는 방식으로 처리하면 된다.
const usePagination = (categoriName, windowWidth) => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.items) return null;
    if (pageIndex === 0) return `${_config_config__WEBPACK_IMPORTED_MODULE_1__/* .backUrl */ .TA}/posts/clothes/store?lastId=0&categori=${categoriName}&deviceType=${windowWidth}`;
    return `${_config_config__WEBPACK_IMPORTED_MODULE_1__/* .backUrl */ .TA}/posts/clothes/store?lastId=${previousPageData.nextCursor}&categori=${categoriName}&deviceType=${windowWidth}`;
  };

  const {
    data: items,
    error: postsError,
    size,
    setSize,
    isLoading: isItemsLoading,
    mutate: infinitiMutate
  } = (0,swr_infinite__WEBPACK_IMPORTED_MODULE_0__["default"])(getKey, _config_config__WEBPACK_IMPORTED_MODULE_1__/* .mutateFetcher */ .Y$);
  const posts = items?.map(item => item.items); // 데이터가 없을 때 posts 가 [undefiend] 가 되기 때문에, 배열 안 undefined 를 없에기 위한 방법

  const filterUndefined = posts?.filter(item => item !== undefined);
  const paginationPosts = posts === undefined ? undefined : filterUndefined?.flat();
  const loadingMore = posts && typeof posts[size - 1] === 'undefined';
  const isEmpty = posts?.[0]?.length === 0;
  const isReachedEnd = posts && posts[posts.length - 1]?.length < 9;
  return {
    items,
    paginationPosts,
    postsError,
    size,
    setSize,
    loadingMore,
    isReachedEnd,
    isItemsLoading,
    infinitiMutate
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7018:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _util_addHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1172);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7837);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5998);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4780);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8866);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7865);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1672);
/* harmony import */ var _components_recycle_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4232);
/* harmony import */ var _components_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9668);
/* harmony import */ var _components_store_ATable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(528);
/* harmony import */ var _components_store_CardBoard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9149);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8520);
/* harmony import */ var _components_store_TableData__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5902);
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1654);
/* harmony import */ var _components_recycle_EmptyData__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8672);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_8__, _config_config__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__, _components_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_18__, _components_store_ATable__WEBPACK_IMPORTED_MODULE_21__, _components_store_CardBoard__WEBPACK_IMPORTED_MODULE_22__, _hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_8__, _config_config__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__, _components_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_18__, _components_store_ATable__WEBPACK_IMPORTED_MODULE_21__, _components_store_CardBoard__WEBPACK_IMPORTED_MODULE_22__, _hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































const SkeletonStore = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => __webpack_require__.e(/* import() */ 954).then(__webpack_require__.bind(__webpack_require__, 3954)), {
  loadableGenerated: {
    modules: ["closet/store/index.tsx -> " + '../../../components/store/SkeletonStore']
  }
});

const store = ({
  device
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const observerTargetElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    userItems,
    indexArray,
    deleteItemDone,
    loadItemsLoding,
    deleteItemLoding
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.post);
  const {
    0: hydrated,
    1: setHydrated
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: segment,
    1: setSegment
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Table');
  const {
    0: categoriName,
    1: setCategoriName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: windowWidth,
    1: setWindowWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(device);
  let itemsIdArray = indexArray;
  if (categoriName) itemsIdArray = indexArray.filter(item => item.categori === categoriName);
  let pageIndex = (current - 1) * 9 - 1;
  let lastId = pageIndex >= 0 ? itemsIdArray[pageIndex].id : 0;
  const {
    data,
    error,
    isLoading,
    mutate
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_9__/* .backUrl */ .TA}/posts/clothes/store?lastId=${lastId}&categori=${categoriName}&deviceType=${windowWidth}`, _config_config__WEBPACK_IMPORTED_MODULE_9__/* .mutateFetcher */ .Y$);
  const {
    items,
    paginationPosts,
    setSize,
    isReachedEnd,
    isItemsLoading,
    infinitiMutate
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_25__/* .usePagination */ .h)(categoriName, windowWidth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHydrated(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function updateWindowWidth() {
      if (window.innerWidth <= 786) {
        setWindowWidth('phone');
      } else {
        setWindowWidth('desktop');
      }
    }

    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (windowWidth === 'desktop') return;
    if (!observerTargetElement.current || isReachedEnd) return;
    const option = {
      root: null,
      threshold: 0.3
    };
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio <= 0) return;

        if (entry.isIntersecting) {
          setSize(prev => prev + 1);
        }
      });
    }, option);
    io.observe(observerTargetElement.current);
    return () => {
      io.disconnect();
    };
  }, [isReachedEnd, categoriName, windowWidth]);
  let modifiedItems = [];
  let accumulationItems = [];

  if (windowWidth === 'desktop' && Array.isArray(data)) {
    for (let cloth of data) {
      modifiedItems.push(_objectSpread(_objectSpread({}, cloth), {}, {
        purchaseDay: cloth.purchaseDay.substring(0, 7)
      }));
    }
  }

  if (windowWidth === 'phone' && paginationPosts) {
    for (let cloth of paginationPosts) {
      accumulationItems.push(_objectSpread(_objectSpread({}, cloth), {}, {
        purchaseDay: cloth.purchaseDay.substring(0, 7)
      }));
    }
  }

  let maxCategoriName = 'Outer';
  let maxCategori = 0;
  let lastMaxCategori = 0;

  if (userItems && Object.keys(userItems.categori).length !== 0 && Object.keys(userItems.lastCategori).length !== 0) {
    maxCategoriName = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][0];
    maxCategori = Object.entries(userItems.categori)?.sort((a, b) => b[1] - a[1])[0][1];
    lastMaxCategori = Object.entries(userItems.lastCategori)?.sort((a, b) => b[1] - a[1])[0][1];
  }

  const pageChange = page => {
    setCurrent(page);
  };

  const itemRender = (page, type, originalElement) => {
    if (type === 'page') {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
        "aria-label": `${page} 페이지 입니다`,
        role: "button",
        children: page
      });
    }

    return originalElement;
  };

  const handleCategori = e => {
    setCategoriName(e.key);
    setSize(1);
  };

  const moveToAddPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/closet/add');
  }, []);
  const deleteItemAtTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => () => {
    dispatch({
      type: _reducers_type__WEBPACK_IMPORTED_MODULE_28__/* .DELETE_ITEM_REQUEST */ .h6,
      data: {
        clothId: id
      }
    });

    if (Array.isArray(data)) {
      let newData = [];

      for (let item of data) {
        if (item.id !== id) newData.push(item);
      }

      mutate([...newData], {
        revalidate: false
      });
    }

    if (Array.isArray(items)) {
      let newPostitems = [];

      for (let set of items) {
        let newItems = _objectSpread({}, set);

        let newPostData = set.items?.filter(item => item.id !== id);
        newItems = _objectSpread(_objectSpread({}, newItems), {}, {
          items: newPostData
        });
        newPostitems.push(newItems);
      }

      infinitiMutate([...newPostitems], {
        revalidate: false
      });
    }
  }, [data, items, paginationPosts, windowWidth]);

  if (!hydrated) {
    return null;
  }

  if (!userItems || userItems?.items.length === 0 || !isLoading && windowWidth === 'desktop' && categoriName === '' && data.hasOwnProperty('items') && data.items.length === 0 || !isItemsLoading && windowWidth === 'phone' && categoriName === '' && paginationPosts && paginationPosts?.length === 0) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_recycle_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        istitle: false,
        hasEmpty: true,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(HandleContainer, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(CustomBread, {
            separator: ">",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Breadcrumb.Item, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/closet/overview",
                children: "Home"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Breadcrumb.Item, {
              children: "Store"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_EmptyData__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
          height: 130
        })]
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(SkeletonStore, {
    loadItemsLoading: loadItemsLoding,
    deleteItemLoding: deleteItemLoding,
    windowWidth: device,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_layout_PageLayout__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(_components_recycle_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        istitle: false,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(HandleContainer, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(CustomBread, {
            separator: ">",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Breadcrumb.Item, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                href: "/closet/overview",
                children: "Home"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Breadcrumb.Item, {
              children: "Store"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(TitleSection, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("dl", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(Title, {
              children: "CHECK YOUR ITEMS"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(SubTitle, {
              children: ["\uC800\uC7A5\uD558\uC2E0 \uC804\uCCB4 \uC758\uB958\uB97C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("br", {}), "\uCE74\uD14C\uACE0\uB9AC\uBCC4\uB85C \uBD84\uB958\uAC00 \uAC00\uB2A5\uD558\uBA70 \uC6D0\uD558\uC2DC\uBA74 \uC0AD\uC81C\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4\uB9CC \uC0AD\uC81C\uB294 \uC2E0\uC911\uD558\uAC8C \uACB0\uC815\uD558\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("br", {}), "\uAC1C\uBCC4 \uC758\uB958\uB97C \uC120\uD0DD\uD558\uC2DC\uBA74 \uC0C1\uC138\uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(CardSection, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_14__.AiOutlineDatabase, {
              className: "icon"
            }),
            DataTitle: "Total Clothes",
            LastData: userItems?.lastTotal,
            CurrentData: userItems?.total
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_15__.GiPayMoney, {
              className: "icon"
            }),
            DataTitle: "Total Price",
            LastData: userItems?.lastPrice,
            CurrentData: userItems?.price
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_recycle_ProcessingDataCard__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            Icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_16__.CgRowFirst, {
              className: "icon"
            }),
            DataTitle: "Most Unit",
            LastData: lastMaxCategori,
            CurrentData: maxCategori,
            Categori: maxCategoriName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(AddSection, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(DictionaryBox, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("dt", {
              children: "CLOTHES TABLE"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("dd", {
              children: "\uD604\uC7AC\uAE4C\uC9C0 \uC800\uC7A5\uB41C \uBCF4\uAD00 \uC758\uB958\uD45C"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(AddButton, {
            onClick: moveToAddPage,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_14__.AiOutlinePlus, {
              style: {
                width: '20px',
                height: '20px'
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
              children: "ADD PRODUCT"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(MenuSection, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(DropdownBox, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Dropdown, {
              menu: {
                items: _components_store_TableData__WEBPACK_IMPORTED_MODULE_24__/* .segmentItems */ .p,
                onClick: handleCategori
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(CButton, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_17__.IoFilterCircleOutline, {
                  className: "icon"
                }), "Categori"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(CategoriSpan, {
              children: ["\uBD84\uB958 : ", categoriName]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
            children: windowWidth === 'desktop' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Segmented, {
              options: [{
                value: 'Table',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.BarsOutlined, {})
              }, {
                value: 'Kanban',
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.AppstoreOutlined, {})
              }],
              value: segment,
              onChange: setSegment
            }) : null
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(ItemsStoreSection, {
          children: [windowWidth === 'desktop' && segment === 'Table' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_store_ATable__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
            headData: _components_store_TableData__WEBPACK_IMPORTED_MODULE_24__/* .StoreHeader */ .D,
            itemsData: modifiedItems,
            isDelete: true,
            onSubmit: deleteItemAtTable,
            isLoading: isLoading
          }) : null, windowWidth === 'desktop' && segment === 'Kanban' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_store_CardBoard__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            itemData: modifiedItems,
            onSubmit: deleteItemAtTable,
            isLoading: isLoading
          }) : null, windowWidth === 'phone' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_components_store_CardBoard__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
            itemData: accumulationItems,
            onSubmit: deleteItemAtTable,
            isLoading: isLoading,
            isItemsLoading: isItemsLoading
          }) : null, windowWidth === 'desktop' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(antd__WEBPACK_IMPORTED_MODULE_12__.Pagination, {
              current: current,
              onChange: pageChange,
              total: itemsIdArray?.length,
              defaultPageSize: 9,
              itemRender: itemRender,
              "aria-label": "\uD398\uC774\uC9C0\uB124\uC774\uC158 \uC785\uB2C8\uB2E4"
            })
          }) : null]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(Space, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("div", {
          ref: observerTargetElement,
          children: "store"
        })]
      })
    })
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getServerSideProps */ .Z.getServerSideProps(store => async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = cookie;
  }

  const userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent;
  let isMobile = false;

  if (userAgent) {
    isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i));
  }

  store.dispatch({
    // store에서 dispatch 하는 api
    type: _reducers_type__WEBPACK_IMPORTED_MODULE_28__/* .LOAD_TO_MY_INFO_REQUEST */ .YE
  });
  store.dispatch({
    type: _reducers_type__WEBPACK_IMPORTED_MODULE_28__/* .LOAD_ITEMS_REQUEST */ .co
  });
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_10__.END);
  await store.sagaTask?.toPromise();

  if (!store.getState().user.me) {
    return {
      redirect: {
        destination: '/userlogin',
        permanent: false
      }
    };
  }

  return {
    props: {
      device: isMobile ? 'phone' : 'desktop'
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_util_addHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(store, 'closet', '이 페이지는 저장한 의류 전체를 보여주는 페이지입니다.'));
const HandleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__HandleContainer",
  componentId: "sc-zhogc3-0"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:15px 0;"]);
const CustomBread = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_12__.Breadcrumb).withConfig({
  displayName: "store__CustomBread",
  componentId: "sc-zhogc3-1"
})(["margin-bottom:30px;.ant-breadcrumb-link{font-family:", ";font-weight:", ";> a{font-family:", ";font-weight:", ";}}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
const TitleSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__TitleSection",
  componentId: "sc-zhogc3-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:auto;margin-bottom:20px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dt.withConfig({
  displayName: "store__Title",
  componentId: "sc-zhogc3-3"
})(["font-size:25px;line-height:25px;font-family:", ";font-weight:", ";margin-bottom:20px;"], ({
  theme
}) => theme.font.Logo, ({
  theme
}) => theme.fontWeight.Medium);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dd.withConfig({
  displayName: "store__SubTitle",
  componentId: "sc-zhogc3-4"
})(["display:block;font-size:clamp(9px,2.2vw,15px);line-height:18px;font-family:", ";font-weight:", ";margin-bottom:10px;white-space:pre-wrap;"], ({
  theme
}) => theme.font.Logo, ({
  theme
}) => theme.fontWeight.Light);
const CardSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__CardSection",
  componentId: "sc-zhogc3-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:auto;gap:15px;margin-bottom:20px;", "{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:15px;}"], _styles_media__WEBPACK_IMPORTED_MODULE_23__/* .media.tablet */ .B.tablet);
const AddSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__AddSection",
  componentId: "sc-zhogc3-6"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;margin-bottom:10px;"]);
const DictionaryBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().dl.withConfig({
  displayName: "store__DictionaryBox",
  componentId: "sc-zhogc3-7"
})(["> dt{font-size:clamp(13px,1.5vw,18px);line-height:18px;font-family:", ";font-weight:", ";margin-bottom:8px;}> dd{font-size:clamp(10px,1.5vw,14px);line-height:15px;font-family:", ";font-weight:", ";}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
const AddButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "store__AddButton",
  componentId: "sc-zhogc3-8"
})(["display:flex;justify-content:center;align-items:center;gap:5px;padding:8px;border:1px solid ", ";border-radius:5px;cursor:pointer;transition:box-shadow 0.2s ease-out;> div{display:none;}&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}", "{> div{display:block;font-size:clamp(12px,1.8vw,14px);}}"], ({
  theme
}) => theme.colors.mainGrey, _styles_media__WEBPACK_IMPORTED_MODULE_23__/* .media.middlePhone */ .B.middlePhone);
const MenuSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__MenuSection",
  componentId: "sc-zhogc3-9"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;background-color:rgba(0,0,0,0.05);border:1px solid ", ";border-radius:20px;margin-bottom:20px;"], ({
  theme
}) => theme.colors.mainGrey);
const DropdownBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "store__DropdownBox",
  componentId: "sc-zhogc3-10"
})(["display:flex;justify-content:center;align-items:center;gap:15px;"]);
const CButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_12__.Button).withConfig({
  displayName: "store__CButton",
  componentId: "sc-zhogc3-11"
})(["display:flex;justify-content:center;align-items:center;gap:5px;.icon{width:16px;height:16px;}"]);
const CategoriSpan = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "store__CategoriSpan",
  componentId: "sc-zhogc3-12"
})(["font-family:", ";font-weight:", ";"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
const ItemsStoreSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "store__ItemsStoreSection",
  componentId: "sc-zhogc3-13"
})(["display:flex;flex-direction:column;width:100%;height:auto;gap:10px;> div{display:flex;justify-content:flex-end;align-items:center;width:100%;}"]);
const Space = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "store__Space",
  componentId: "sc-zhogc3-14"
})(["width:100%;height:50px;background-color:white;"]);
const SpinDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "store__SpinDiv",
  componentId: "sc-zhogc3-15"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;padding:5px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3567:
/***/ ((module) => {

module.exports = require("@nivo/bar");

/***/ }),

/***/ 7556:
/***/ ((module) => {

module.exports = require("@nivo/pie");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 7865:
/***/ ((module) => {

module.exports = require("react-icons/cg");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

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

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

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

/***/ 5998:
/***/ ((module) => {

module.exports = import("redux-saga");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 1448:
/***/ ((module) => {

module.exports = import("swr/infinite");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,152,780,445,159,98,672,232], () => (__webpack_exec__(7018)));
module.exports = __webpack_exports__;

})();