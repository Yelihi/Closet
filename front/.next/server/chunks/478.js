"use strict";
exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 7478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ submitSuccess_SortingResultComponent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./reducers/type.tsx
var type = __webpack_require__(1172);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/recycle/element/button/AButton.tsx + 1 modules
var AButton = __webpack_require__(6445);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/recycle/submitSuccess/BaseResultComponent.tsx






const BaseResultComponent = ({
  title,
  subTitle,
  status,
  onClickPrimary,
  onClick,
  buttonNamePrimary,
  buttonName
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(CustomResult, {
      status: status,
      title: title,
      subTitle: subTitle,
      extra: [/*#__PURE__*/jsx_runtime_.jsx(AButton/* default */.Z, {
        color: "black",
        onClick: onClickPrimary,
        dest: buttonNamePrimary,
        disabled: false
      }, buttonNamePrimary), /*#__PURE__*/jsx_runtime_.jsx(AButton/* default */.Z, {
        color: "",
        onClick: onClick,
        dest: buttonName,
        disabled: false
      }, buttonName)]
    })
  });
};

/* harmony default export */ const submitSuccess_BaseResultComponent = (BaseResultComponent);
const Container = external_styled_components_default().section.withConfig({
  displayName: "BaseResultComponent__Container",
  componentId: "sc-qhs0sw-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:700px;"]);
const CustomResult = external_styled_components_default()(external_antd_.Result).withConfig({
  displayName: "BaseResultComponent__CustomResult",
  componentId: "sc-qhs0sw-1"
})([".ant-result-extra{display:flex;}"]);
;// CONCATENATED MODULE: ./components/recycle/submitSuccess/data.ts
const Data = {
  add: {
    title: '의류를 성공적으로 저장하였습니다!',
    subTitle: '저장하신 의류의 상태를 확인하고 싶으시다면 상세보기로, 더 저장하시려면 계속 저장하기를 눌러주세요',
    buttonNamePrimary: '상세페이지로',
    buttonName: '계속 저장하기',
    primaryPage: 'details',
    otherPage: 'add',
    status: 'success'
  },
  addFailure: {
    title: '의류 저장에 실패하였습니다',
    subTitle: '알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ',
    buttonNamePrimary: '저장 페이지로',
    buttonName: '메인페이지로',
    primaryPage: 'add',
    otherPage: 'overview',
    status: 'error'
  },
  details: {
    title: '의류를 성공적으로 수정하였습니다!',
    subTitle: '저장하신 의류의 상태를 확인하고 싶으시다면 상세보기로, 목록을 보고 싶으시다면 목록보기를 눌러주세요',
    buttonNamePrimary: '상세페이지로',
    buttonName: '목록보기',
    primaryPage: 'details',
    otherPage: 'store',
    status: 'success'
  },
  detailsFailure: {
    title: '의류 수정에 실패하였습니다',
    subTitle: '알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ',
    buttonNamePrimary: '상세 페이지로',
    buttonName: '메인페이지로',
    primaryPage: 'details',
    otherPage: 'overview',
    status: 'error'
  },
  deleteItem: {
    title: '의류를 삭제하였습니다!',
    subTitle: '목록 페이지로 이동하고 싶으시다면 목록보기를, 더 저장하시려면 계속 저장하기를 눌러주세요',
    buttonNamePrimary: '목록보기',
    buttonName: '저장하기',
    primaryPage: 'store',
    otherPage: 'add',
    status: 'success'
  },
  deleteItemFailure: {
    title: '의류 삭제에 실패하였습니다',
    subTitle: '알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ',
    buttonNamePrimary: '상세 페이지로',
    buttonName: '메인페이지로',
    primaryPage: 'details',
    otherPage: 'overview',
    status: 'error'
  }
};
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/recycle/submitSuccess/SortingResultComponent.tsx









const SortingResultComponent = ({
  sort,
  id,
  setConvertState
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const data = Data[sort];
  const {
    title,
    subTitle,
    buttonNamePrimary,
    buttonName,
    status,
    primaryPage,
    otherPage
  } = data;
  const movePage = (0,external_react_.useCallback)((page, id) => () => {
    if (page === 'add') {
      dispatch({
        type: type/* RESET_UPLOAD_PAGE */.AF
      });
    }

    if (page === 'details') {
      router_default().push(`/closet/${page}/${id}`);
    } else {
      router_default().push(`/closet/${page}`);
    }

    if (setConvertState) {
      setConvertState(prev => !prev);
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(submitSuccess_BaseResultComponent, {
      title: title,
      subTitle: subTitle,
      status: status,
      onClick: movePage(otherPage, ''),
      onClickPrimary: movePage(primaryPage, id),
      buttonNamePrimary: buttonNamePrimary,
      buttonName: buttonName
    })
  });
};

/* harmony default export */ const submitSuccess_SortingResultComponent = (SortingResultComponent);

/***/ })

};
;