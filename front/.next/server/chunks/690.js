"use strict";
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Al": () => (/* binding */ addPageLayoutProps),
/* harmony export */   "DA": () => (/* binding */ bottomMeasureSub),
/* harmony export */   "Fo": () => (/* binding */ descriptionData),
/* harmony export */   "Gz": () => (/* binding */ mufflerMeasureName),
/* harmony export */   "O9": () => (/* binding */ colors),
/* harmony export */   "Pg": () => (/* binding */ shoesMeasureSub),
/* harmony export */   "VJ": () => (/* binding */ shoesMeasureName),
/* harmony export */   "_t": () => (/* binding */ mufflerMeasureSub),
/* harmony export */   "op": () => (/* binding */ topMeasureSub),
/* harmony export */   "tA": () => (/* binding */ topMeasureName),
/* harmony export */   "vb": () => (/* binding */ clothData),
/* harmony export */   "wj": () => (/* binding */ bottomMeasureName),
/* harmony export */   "zM": () => (/* binding */ categori)
/* harmony export */ });
/* unused harmony exports categoriOption, topMeasure, bottomMeasure, shoesMeasure, mufflerMeasure */
const addPageLayoutProps = {
  title: 'ADD CLOTHES',
  subTitle: '현 가정 옷장에 보관되어있는 의류의 이름과 색상, 종류 등 각각의 특성들을 기입하여 저장할 수 있습니다.'
};
const categoriOption = [{
  value: 'Outer',
  label: 'Outer'
}, {
  value: 'Shirt',
  label: 'Shirt'
}, {
  value: 'Top',
  label: 'Top'
}, {
  value: 'Pant',
  label: 'Pant'
}, {
  value: 'Shoe',
  label: 'Shoe'
}, {
  value: 'Muffler',
  label: 'Muffler'
}];
const topMeasure = [{
  sort: 'categoriItem.chest',
  subtitle: '의류를 펼친 상태에서 가슴 가로 길이를 측정해주세요(cm)'
}, {
  sort: 'categoriItem.shoulder',
  subtitle: '왼쪽 어깨선과 오른쪽 어깨선을 가로로 측정해주세요(cm)'
}, {
  sort: 'categoriItem.arm',
  subtitle: '어깨선부터 팔 끝까지 길이를 측정해주세요(cm)'
}, {
  sort: 'categoriItem.totalLength',
  subtitle: '상의 라벨쪽부터 세로로 총 기장을 측정해주세요(cm)'
}];
const bottomMeasure = [{
  sort: 'categoriItem.totalLength',
  subtitle: '바지 허릿단부터 세로로 총 기장을 측정해주세요(cm)'
}, {
  sort: 'categoriItem.rise',
  subtitle: '바지의 및위(바지의 두 다리 분기점까지의 기장) 기장을 측정해주세요(cm)'
}, {
  sort: 'categoriItem.hem',
  subtitle: '바지의 및단(바지 끝단의 폭)을 측정해주세요(cm)'
}, {
  sort: 'categoriItem.waist',
  subtitle: '바지를 쭉 펼쳐 허리 기장을 가로로 측정해주세요(cm)'
}, {
  sort: 'categoriItem.thigh',
  subtitle: '바지 허벅지 기장(밑위에서 살짝 내려와 측정)을 측정해주세요(cm)'
}];
const shoesMeasure = [{
  sort: 'categoriItem.size',
  subtitle: '평균적인 신발 사이즈(한국기준)를 작성해주세요(mm)'
}];
const mufflerMeasure = [{
  sort: 'categoriItem.totalLength',
  subtitle: '머플러의 총 기장을 측정해주세요(cm)'
}];
const topMeasureName = topMeasure.map(v => v.sort);
const bottomMeasureName = bottomMeasure.map(v => v.sort);
const shoesMeasureName = shoesMeasure.map(v => v.sort);
const mufflerMeasureName = mufflerMeasure.map(v => v.sort);
const topMeasureSub = topMeasure.map(v => v.subtitle);
const bottomMeasureSub = bottomMeasure.map(v => v.subtitle);
const shoesMeasureSub = shoesMeasure.map(v => v.subtitle);
const mufflerMeasureSub = mufflerMeasure.map(v => v.subtitle);
const colors = ['#000000', '#ffffff', '#92101c', '#e7373c', '#f1e0e0', '#f8e7ce', '#664032', '#ea601f', '#959187', '#656418', '#caac17', '#ffe200', '#68c260', '#007231', '#46647a', '#0065a2', '#97d0f2', '#5b3e68', '#964089', '#9e8ebd', '#5e1938', '#f9b8be', '#c8c9ca', '#f7f7f7'];
const clothData = [{
  name: 'productName',
  subTitle: '저장하시고 싶은 의류를 구별될 수 있도록 작성해주세요',
  placeholder: 'product name',
  errorMessage: '기입해주세요'
}, {
  name: 'price',
  subTitle: '구매하셨을 당시의 금액을 대략적으로 (원) 단위로 작성해주세요',
  placeholder: 'price',
  errorMessage: '가격을 기입해주세요'
}, {
  name: 'color',
  subTitle: '현 의류의 대표색상을 주어진 파레트에 따라 대략적으로 선택해주세요',
  placeholder: 'color',
  errorMessage: '색상을 선택해주세요'
}, {
  name: 'preference',
  subTitle: '현 의류의 선호도를 별점으로 매겨주세요(1~5점)',
  placeholder: 'preference',
  errorMessage: '별점을 매겨주세요'
}, {
  name: 'purchaseDay',
  subTitle: '월 단위로 언제 구매를 하셨는지 날짜를 기입해주세요',
  placeholder: 'purchase month',
  errorMessage: '대략적인 구매시기를 선택해주세요(월)'
}];
const categori = [{
  name: 'categori',
  subTitle: `의류 분류를 위해 저장하려는 의류의 카테고리를 선택해주세요.
선택에 따라 기입해야할 수치가 다릅니다.`,
  options: categoriOption,
  defaultValue: '카테고리를 선택헤주세요',
  errorMessage: '카테고리는 필수적으로 선택하여야 합니다'
}];
const descriptionData = [{
  name: 'description',
  subTitle: '필수 기입사항 외 등록의류에 대한 정보가 있다면 작성해주세요',
  placeholder: '상세정보를 기입해주세요',
  errorMessage: '특이사항들에 대해서 기입해주세요'
}];

/***/ }),

/***/ 7189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$n": () => (/* binding */ visionAI),
/* harmony export */   "$x": () => (/* binding */ visionAICardData),
/* harmony export */   "BU": () => (/* binding */ categoriToVisionAI)
/* harmony export */ });
const visionAI = ['Outerwear', 'Coat', 'Shoe', 'Footwear', 'Sunglasses', 'Top', 'Belt', 'Luggage & Bag', 'Jeans', 'Scarf', 'Tie', 'Shirt', 'Pants', 'Hat'];
const categoriToVisionAI = {
  Outer: ['Outerwear', 'Coat'],
  Top: ['Top'],
  Pant: ['Pants', 'Jeans'],
  Shirt: ['Shirt'],
  Shoe: ['Shoe'],
  Muffler: ['Scarf']
};
const visionAICardData = [{
  intro: '의류 사진여부 판단',
  good: '#52c41a',
  bad: '#E7373C',
  goodExplain: '적절한 사진입니다.',
  badExplain: '의류 사진을 넣어주세요'
}, {
  intro: '카테고리 적합성',
  good: '#52c41a',
  bad: '#F4A100',
  goodExplain: '카테고리에 적합한 의류입니다',
  badExplain: '저장하실 순 있지만 적합의류는 아닙니다.'
}, {
  intro: '사진 내 카테고리 이미지 차지 비율',
  good: '#52c41a',
  bad: '#F4A100',
  goodExplain: '의류 비중이 적합합니다.',
  badExplain: '좀 더 적합의류의 비중이 높은 사진을 올려주세요'
}];

/***/ }),

/***/ 1690:
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4125);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_VisionAIData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7189);
/* harmony import */ var _add_ElementData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(251);
/* harmony import */ var _layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4232);
/* harmony import */ var _add_InputPartial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(527);
/* harmony import */ var _add_InputBackgroud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7587);
/* harmony import */ var _element_AInputElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4749);
/* harmony import */ var _element_button_AButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6445);
/* harmony import */ var _add_Measure__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5141);
/* harmony import */ var _element_DropImageInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9287);
/* harmony import */ var _submitSuccess_SortingResultComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _element_AInputElement__WEBPACK_IMPORTED_MODULE_12__, _add_Measure__WEBPACK_IMPORTED_MODULE_14__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _element_AInputElement__WEBPACK_IMPORTED_MODULE_12__, _add_Measure__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["Outer", "Shirt", "Top", "Pant", "Shoe", "Muffler"],
      _excluded2 = ["id", "createdAt", "updatedAt", "ClothId"],
      _excluded3 = ["categoriItem"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }























const VisionAICard = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 730).then(__webpack_require__.bind(__webpack_require__, 6730)), {
  loadableGenerated: {
    modules: ["../components/recycle/ItemForm.tsx -> " + './VisionAICard']
  }
});
dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_5___default()));
const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM');
const defaultValues = {
  productName: '',
  description: '',
  image: [],
  price: 0,
  color: '#000000',
  categori: '카테고리를 선택해주세요',
  purchaseDay: currentDate,
  categoriItem: {
    shoulder: 0,
    arm: 0,
    totalLength: 0,
    chest: 0,
    rise: 0,
    hem: 0,
    waist: 0,
    thigh: 0,
    size: 0
  }
};

const ItemForm = ({
  title,
  subTitle,
  type,
  itemId,
  Submit,
  resultNumber,
  setState
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: isClothes,
    1: setIsClothes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isDataChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    imagePath,
    uploadItemsDone,
    uploadItemsError,
    imageUploadLoding,
    lastAddDataIndex,
    singleItem
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.post);
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onSubmit',
    defaultValues: defaultValues
  });
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: {
      isSubmitSuccessful
    }
  } = methods;
  let beforeValues = {};

  if (singleItem) {
    const {
      Outer,
      Shirt,
      Top,
      Pant,
      Shoe,
      Muffler
    } = singleItem,
          singleData = _objectWithoutProperties(singleItem, _excluded);

    const categoriObject = [Outer, Shirt, Top, Pant, Shoe, Muffler].filter(v => v !== null)[0];

    const _ref = categoriObject,
          {
      id,
      createdAt,
      updatedAt,
      ClothId
    } = _ref,
          measure = _objectWithoutProperties(_ref, _excluded2);

    const {
      categoriItem
    } = defaultValues,
          rest = _objectWithoutProperties(defaultValues, _excluded3);

    const measureItem = {
      categoriItem: _objectSpread(_objectSpread({}, categoriItem), measure)
    };
    beforeValues = _objectSpread(_objectSpread({}, singleData), measureItem); // 무한 렌더링을 막기 위함이다.

    if (!isDataChange.current) {
      isDataChange.current = true;
      reset(beforeValues);
    }
  } else {
    // 역시나 무한 랜더링을 막기 위함이다.
    if (isDataChange.current) {
      isDataChange.current = false;
      reset(defaultValues);
    }
  } // 어차피 singleItem 이 있다면 defaultValue -> beforeValues 로 변경된다.


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSubmitSuccessful) {
      reset({
        defaultValues
      });
    }
  }, [isSubmitSuccessful]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (imagePath.length === 0) {
      return;
    }

    let visionSearch = imagePath.map(v => v.visionSearch?.some(i => _add_VisionAIData__WEBPACK_IMPORTED_MODULE_7__/* .visionAI.includes */ .$n.includes(i.name)));

    if (visionSearch.every(bool => bool === true)) {
      setIsClothes(true);
    } else {
      setIsClothes(false);
    }
  }, [imagePath]);
  const backDetailsPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (setState) {
      setState(prev => !prev);
    }
  }, []);

  const onSubmit = data => {
    data.image = imagePath;
    const Type = Submit();
    console.log(data);
    dispatch({
      type: Type,
      data: {
        items: data,
        clothId: itemId
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
    children: [!uploadItemsDone && !uploadItemsError ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_layout_PageMainLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      title: title,
      subTitle: subTitle,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(TestContainer, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(AddSection, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, _objectSpread(_objectSpread({}, methods), {}, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(AddForm, {
              onSubmit: handleSubmit(onSubmit),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputPartial__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "SPECIFICATION",
                subtitle: "\uC758\uB958 \uBA85\uCE6D, \uAC00\uACA9 \uB4F1 \uD2B9\uC131 \uC815\uBCF4\uB97C \uC800\uC7A5\uD574\uC8FC\uC138\uC694. \uD544\uC218 \uAE30\uC785\uC785\uB2C8\uB2E4.",
                children: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .clothData.map */ .vb.map(v => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputBackgroud__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: v.name,
                    subTitle: v.subTitle,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_AInputElement__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                      control: control,
                      name: v.name,
                      errorMessage: v.errorMessage,
                      placeholder: v.placeholder,
                      rules: {
                        required: true
                      }
                    })
                  }, v.name);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_add_InputPartial__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "SORT CLOTHES",
                subtitle: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC8FC\uC2DC\uACE0, \uAC01 \uCE74\uD14C\uACE0\uB9AC\uC5D0 \uB9DE\uB294 \uCE21\uC815\uCE58\uC218\uB97C cm \uB2E8\uC704\uB85C \uAE30\uC785\uD574\uC8FC\uC138\uC694. \uCE74\uD14C\uACE0\uB9AC\uB97C \uAE30\uC785\uD558\uC154\uC57C \uC774\uBBF8\uC9C0\uCCB4\uD06C\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4",
                children: [_add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .categori.map */ .zM.map(v => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputBackgroud__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: v.name,
                    subTitle: v.subTitle,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_AInputElement__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                      control: control,
                      name: v.name,
                      errorMessage: v.errorMessage,
                      options: v.options,
                      defaultValue: v.defaultValue,
                      rules: {
                        required: true
                      }
                    })
                  }, v.name);
                }), ['Outer', 'Shirt', 'Top'].includes(watch('categori')) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_Measure__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  control: control,
                  nameArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .topMeasureName */ .tA,
                  subTitleArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .topMeasureSub */ .op,
                  placeholder: "cm"
                }) : null, ['Pant'].includes(watch('categori')) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_Measure__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  control: control,
                  nameArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .bottomMeasureName */ .wj,
                  subTitleArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .bottomMeasureSub */ .DA,
                  placeholder: "cm"
                }) : null, ['Shoe'].includes(watch('categori')) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_Measure__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  control: control,
                  nameArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .shoesMeasureName */ .VJ,
                  subTitleArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .shoesMeasureSub */ .Pg,
                  placeholder: "mm"
                }) : null, ['Muffler'].includes(watch('categori')) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_Measure__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                  control: control,
                  nameArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .mufflerMeasureName */ .Gz,
                  subTitleArray: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .mufflerMeasureSub */ ._t,
                  placeholder: "cm"
                }) : null]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputPartial__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "ABOUT ITEM",
                subtitle: "\uC758\uB958\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uAE30\uC785\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAD6C\uC785\uCC98\uB098 \uC18C\uC7AC, \uBCF4\uAD00\uBC29\uBC95 \uB4F1 \uAD6C\uCCB4\uC801\uC778 \uC0AC\uC548\uC744 \uC800\uC7A5\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                children: _add_ElementData__WEBPACK_IMPORTED_MODULE_8__/* .descriptionData.map */ .Fo.map(v => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputBackgroud__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: v.name,
                    subTitle: v.subTitle,
                    textArea: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_AInputElement__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                      control: control,
                      name: v.name,
                      placeholder: v.placeholder
                    })
                  }, v.name);
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_add_InputPartial__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "IMAGE UPLOAD",
                subtitle: "\uC774\uBBF8\uC9C0\uB97C \uD558\uB098\uC529 \uC5C5\uB85C\uB4DC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD544\uC218 \uAE30\uC785\uC0AC\uD56D\uC785\uB2C8\uB2E4. \uC774\uBBF8\uC9C0\uB97C \uC5C5\uB85C\uB4DC \uD560 \uC2DC vision AI \uB97C \uD1B5\uD574 \uC774\uBBF8\uC9C0\uC758 \uC801\uD569\uC131\uC744 \uD310\uB2E8\uD558\uAC8C \uB429\uB2C8\uB2E4. \uD5C8\uB098 \uC774\uB294 \uCC38\uACE0\uC6A9\uC73C\uB85C\uC11C \uBD80\uC815\uD655\uD560 \uC218 \uC788\uC73C\uB2C8 \uC8FC\uC758\uBC14\uB78D\uB2C8\uB2E4.",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_DropImageInput__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(PreviewSection, {
                children: [imageUploadLoding ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(VisionAICard, {
                  imageUploadLoding: true,
                  src: 'src',
                  index: 1,
                  isClothes: true,
                  isCategori: true,
                  confidence: true
                }) : null, imagePath.length > 0 && imagePath.map((v, i) => {
                  let cate = watch('categori');
                  let isClothes = v.visionSearch.some(v => _add_VisionAIData__WEBPACK_IMPORTED_MODULE_7__/* .visionAI.includes */ .$n.includes(v.name));
                  let isCategori = v.visionSearch.map(v => v.name).some(item => _add_VisionAIData__WEBPACK_IMPORTED_MODULE_7__/* .categoriToVisionAI */ .BU[cate]?.includes(item));
                  let confidence = v.visionSearch.length > 0 && _add_VisionAIData__WEBPACK_IMPORTED_MODULE_7__/* .categoriToVisionAI */ .BU[cate]?.includes(v.visionSearch[0].name);
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(VisionAICard, {
                      imageUploadLoding: imageUploadLoding,
                      src: v.src,
                      index: i,
                      isClothes: isClothes,
                      isCategori: isCategori,
                      confidence: confidence
                    })
                  });
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(Float, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubmitButton, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_button_AButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    type: "submit",
                    color: "black",
                    dest: type === 'add' ? '저장하기' : '수정하기',
                    disabled: !isClothes
                  })
                }), type === 'details' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(SubmitButton, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_element_button_AButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    color: "",
                    dest: "\uC774\uC804\uC73C\uB85C",
                    onClick: backDetailsPage,
                    disabled: false
                  })
                })]
              })]
            })
          }))
        })
      })
    }) : null, uploadItemsDone ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_submitSuccess_SortingResultComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sort: type,
      id: resultNumber,
      setConvertState: setState
    }) : null, uploadItemsError ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_submitSuccess_SortingResultComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sort: `${type}Failure`,
      id: resultNumber,
      setConvertState: setState
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemForm);
const TestContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemForm__TestContainer",
  componentId: "sc-1rape7m-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:auto;background-color:", ";"], ({
  theme
}) => theme.colors.white);
const AddSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemForm__AddSection",
  componentId: "sc-1rape7m-1"
})(["display:flex;width:100%;height:auto;"]);
const AddForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
  displayName: "ItemForm__AddForm",
  componentId: "sc-1rape7m-2"
})(["display:grid;grid-template-columns:1fr;gap:10px;width:100%;height:auto;padding:10px 0;"]);
const PreviewSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "ItemForm__PreviewSection",
  componentId: "sc-1rape7m-3"
})(["display:flex;justify-content:flex-start;align-items:center;gap:5px;flex-wrap:wrap;"]);
const Float = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemForm__Float",
  componentId: "sc-1rape7m-4"
})(["display:flex;width:100%;justify-content:flex-end;align-items:center;"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ItemForm__SubmitButton",
  componentId: "sc-1rape7m-5"
})(["width:200px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7587:
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







function InputBackground(props) {
  const {
    title,
    subTitle,
    children,
    textArea
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
      textArea: textArea,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SubTitme, {
          children: subTitle
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(InputContainer, {
        textArea: textArea,
        children: children
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBackground);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputBackgroud__Container",
  componentId: "sc-xfze07-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:2px;width:100%;height:auto;background-color:", ";border:0.2px solid ", ";> div{}", "{flex-direction:row;justify-content:space-between;align-items:flex-start;", "}"], ({
  theme
}) => theme.colors.mainGrey, ({
  theme
}) => theme.colors.hoverGrey, _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.tablet */ .B.tablet, props => props.textArea && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["flex-direction:column;justify-content:center;align-items:flex-start;"]));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "InputBackgroud__Title",
  componentId: "sc-xfze07-1"
})(["display:flex;font-family:", ";font-weight:", ";font-size:14px;margin-bottom:6px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Regular);
const SubTitme = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "InputBackgroud__SubTitme",
  componentId: "sc-xfze07-2"
})(["display:flex;height:auto;max-width:450px;font-family:", ";font-weight:", ";font-size:12px;color:", ";margin-bottom:20px;white-space:pre-wrap;"], ({
  theme
}) => theme.font.Kfont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.middleGrey);
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputBackgroud__InputContainer",
  componentId: "sc-xfze07-3"
})(["display:flex;flex-direction:column;justify-content:center;width:100%;", "{max-width:320px;margin-top:10px;", "}"], _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.tablet */ .B.tablet, props => props.textArea && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["max-width:100%;"]));

/***/ }),

/***/ 527:
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






const InputPartial = ({
  children,
  title,
  subtitle
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(TitleContainer, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SpecificationTitle, {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SpecificationSub, {
        children: subtitle
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ChildrenContainer, {
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputPartial);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "InputPartial__Container",
  componentId: "sc-1ylhh97-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;height:auto;margin-bottom:30px;", "{}"], _styles_media__WEBPACK_IMPORTED_MODULE_2__/* .media.tablet */ .B.tablet);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputPartial__TitleContainer",
  componentId: "sc-1ylhh97-1"
})(["width:100%;"]);
const ChildrenContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "InputPartial__ChildrenContainer",
  componentId: "sc-1ylhh97-2"
})(["width:100%;"]);
const SpecificationTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h4.withConfig({
  displayName: "InputPartial__SpecificationTitle",
  componentId: "sc-1ylhh97-3"
})(["display:flex;font-family:", ";font-weight:", ";font-size:15px;margin-bottom:6px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Regular);
const SpecificationSub = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "InputPartial__SpecificationSub",
  componentId: "sc-1ylhh97-4"
})(["display:flex;height:auto;max-width:650px;font-family:", ";font-weight:", ";font-size:12px;color:", ";margin-bottom:5px;white-space:pre-wrap;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Regular, ({
  theme
}) => theme.colors.middleGrey);

/***/ }),

/***/ 5141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _InputBackgroud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7587);
/* harmony import */ var _element_ANumberInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8520);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _element_ANumberInput__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _element_ANumberInput__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Measure(props) {
  const context = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    watch
  } = context;
  const {
    nameArray,
    rules,
    control,
    placeholder,
    subTitleArray
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: nameArray.map((categori, i) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_InputBackgroud__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: categori.split('.')[1],
        subTitle: subTitleArray && subTitleArray[i],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_element_ANumberInput__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          control: control,
          name: categori,
          rules: rules,
          placeholder: placeholder
        })
      });
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Measure);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Measure__Container",
  componentId: "sc-ux0crf-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:5px;width:100%;height:auto;background-color:", ";border:1px solid ", ";", "{flex-direction:row;justify-content:space-between;align-items:center;}"], ({
  theme
}) => theme.colors.mainGrey, ({
  theme
}) => theme.colors.hoverGrey, _styles_media__WEBPACK_IMPORTED_MODULE_5__/* .media.tablet */ .B.tablet);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Measure__Title",
  componentId: "sc-ux0crf-1"
})(["font-family:", ";font-weight:", ";font-size:15px;margin-bottom:5px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Regular);
const SubTitme = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Measure__SubTitme",
  componentId: "sc-ux0crf-2"
})(["font-family:", ";font-weight:", ";font-size:12px;color:", ";margin-bottom:10px;"], ({
  theme
}) => theme.font.Kfont, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.middleGrey);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4125);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1711);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_ElementData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(251);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












dayjs__WEBPACK_IMPORTED_MODULE_2___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_3___default()));
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_6__.Input;
const dateFormat = 'YYYY-MM'; // 초기 날짜. 현재 날짜

const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM');

function AInputElement(props) {
  const {
    name,
    rules,
    control,
    errorMessage,
    options,
    defaultValue,
    placeholder
  } = props;
  const {
    field: {
      value,
      onChange
    },
    fieldState: {
      isDirty,
      isTouched,
      error
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useController)({
    name,
    rules,
    control
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [name == 'productName' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_6__.Input, _objectSpread(_objectSpread({
      value: value,
      id: name,
      onChange: onChange
    }, props), {}, {
      style: {
        height: '30px',
        width: '100%'
      },
      autoComplete: "off",
      allowClear: true
    })) : null, name == 'color' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_color__WEBPACK_IMPORTED_MODULE_4__.CirclePicker, _objectSpread(_objectSpread({
      color: value,
      colors: _add_ElementData__WEBPACK_IMPORTED_MODULE_7__/* .colors */ .O9,
      onChange: (color, event) => onChange(color.hex)
    }, props), {}, {
      circleSize: 25,
      width: "100%"
    })) : null, name == 'price' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_6__.InputNumber, {
      value: value,
      id: name,
      min: 1,
      onChange: onChange,
      style: {
        height: '30px',
        width: '100%'
      },
      placeholder: placeholder
    }) : null, name == 'preference' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_6__.Rate, {
      value: value,
      onChange: onChange
    }) : null, name == 'purchaseDay' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_6__.DatePicker, {
      defaultValue: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(value || currentDate, dateFormat),
      onChange: (date, dateString) => onChange(dateString),
      picker: "month",
      style: {
        width: '100%',
        height: '30px'
      }
    }) : null, name == 'description' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TextArea, {
      value: value,
      id: name,
      onChange: onChange,
      placeholder: placeholder,
      rows: 5,
      style: {
        width: '100%'
      }
    }) : null, name == 'categori' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd__WEBPACK_IMPORTED_MODULE_6__.Select, {
      defaultValue: defaultValue,
      value: value,
      id: name,
      options: options,
      onChange: onChange,
      style: {
        height: '30px',
        width: '100%'
      }
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ErrorMessage, {
      children: error && errorMessage
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AInputElement);
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "AInputElement__ErrorMessage",
  componentId: "sc-1m0lsx5-0"
})(["display:inline-block;width:100%;height:13px;font-size:11px;font-weight:", ";color:", ";"], ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.colors.red);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 69:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["name", "rules", "control"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function ANumberInput(_ref) {
  let {
    name,
    rules,
    control
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    placeholder
  } = props;
  const {
    field: {
      value,
      onChange
    },
    fieldState: {
      isDirty,
      isTouched,
      error
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useController)({
    name,
    rules,
    control
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.InputNumber, _objectSpread(_objectSpread({
      value: value,
      id: name,
      min: 1,
      onChange: onChange
    }, props), {}, {
      style: {
        height: '30px',
        width: '100%'
      },
      placeholder: placeholder
    }))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ANumberInput);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1172);
/* harmony import */ var _button_AButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6445);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










function DropImageInput() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    0: dragActive,
    1: setDragActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log('image', e.dataTransfer.files);
      const imageFormData = new FormData(); // 멀티파트 형식으로 데이터 보내기

      [].forEach.call(e.dataTransfer.files, file => {
        imageFormData.append('image', file);
      });
      dispatch({
        type: _reducers_type__WEBPACK_IMPORTED_MODULE_6__/* .UPLOAD_IMAGES_REQUEST */ .QA,
        data: imageFormData
      });
    }
  };

  const handleChange = e => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      console.log('image', e.target.files);
      const imageFormData = new FormData(); // 멀티파트 형식으로 데이터 보내기

      [].forEach.call(e.target.files, file => {
        imageFormData.append('image', file);
      });
      dispatch({
        type: _reducers_type__WEBPACK_IMPORTED_MODULE_6__/* .UPLOAD_IMAGES_REQUEST */ .QA,
        data: imageFormData
      });
    }
  };

  const onButtonClick = e => {
    e.preventDefault();
    e.stopPropagation();

    if (inputRef.current) {
      // inputRef.current 가 null 일 수 있으니, 조건문으로 확인해주기
      inputRef.current.click();
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ImageUploadContainer, {
      onDragEnter: handleDrag,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
        ref: inputRef,
        onChange: handleChange,
        name: "image",
        type: "file",
        id: "image",
        multiple: true,
        hidden: true
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(LabelFileUpload, {
        htmlFor: "image",
        dragActive: dragActive,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(InnerContainer, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(IconCircle, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FileImageOutlined, {
              style: {
                fontSize: '30px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(DargText, {
            children: "Drag and Drop your file here or"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_button_AButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            As: "div",
            color: "black",
            disabled: false,
            dest: "Upload files",
            onClick: onButtonClick
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(DragSubText, {
            children: "10MB max file size"
          })]
        })
      }), dragActive && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(DragFileElement, {
        onDragEnter: handleDrag,
        onDragLeave: handleDrag,
        onDragOver: handleDrag,
        onDrop: handleDrop
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropImageInput);
const ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DropImageInput__ImageUploadContainer",
  componentId: "sc-1bxgieq-0"
})(["position:relative;height:300px;max-width:100%;text-align:center;"]);
const LabelFileUpload = styled_components__WEBPACK_IMPORTED_MODULE_1___default().label.withConfig({
  displayName: "DropImageInput__LabelFileUpload",
  componentId: "sc-1bxgieq-1"
})(["height:100%;display:flex;align-items:center;justify-content:center;border:1px solid ", ";background-color:", ";transition:border 0.25s ease-in-out;", ""], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.mainGrey, props => props.dragActive && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:white;border:1px solid ", ";"], ({
  theme
}) => theme.colors.middleGrey));
const DragFileElement = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DropImageInput__DragFileElement",
  componentId: "sc-1bxgieq-2"
})(["position:absolute;width:100%;height:100%;border-radius:1rem;top:0px;left:0px;"]);
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DropImageInput__InnerContainer",
  componentId: "sc-1bxgieq-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:300px;"]);
const IconCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DropImageInput__IconCircle",
  componentId: "sc-1bxgieq-4"
})(["display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:", ";border-radius:50%;margin-bottom:8px;"], ({
  theme
}) => theme.colors.white);
const DargText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "DropImageInput__DargText",
  componentId: "sc-1bxgieq-5"
})(["display:inline-block;padding:10px;font-family:", ";font-weight:", ";font-size:17px;"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
const DragSubText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(DargText).withConfig({
  displayName: "DropImageInput__DragSubText",
  componentId: "sc-1bxgieq-6"
})(["padding:0;font-size:12px;color:", ";"], ({
  theme
}) => theme.colors.brown);

/***/ })

};
;