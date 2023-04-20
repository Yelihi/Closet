"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{4340:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return icons_CloseCircleFilled}});var objectSpread2=__webpack_require__(1413),react=__webpack_require__(67294),asn_CloseCircleFilled={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},AntdIcon=__webpack_require__(42135),CloseCircleFilled_CloseCircleFilled=function(props,ref){return react.createElement(AntdIcon.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{ref:ref,icon:asn_CloseCircleFilled}))};CloseCircleFilled_CloseCircleFilled.displayName="CloseCircleFilled";var icons_CloseCircleFilled=react.forwardRef(CloseCircleFilled_CloseCircleFilled)},37478:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return submitSuccess_SortingResultComponent}});var react=__webpack_require__(67294),router=__webpack_require__(11163),router_default=__webpack_require__.n(router),type=__webpack_require__(21172),styled_components_browser_esm=__webpack_require__(94589),result=__webpack_require__(1181),AButton=__webpack_require__(6445),jsx_runtime=__webpack_require__(85893),submitSuccess_BaseResultComponent=function(_ref){var title=_ref.title,subTitle=_ref.subTitle,status=_ref.status,onClickPrimary=_ref.onClickPrimary,onClick=_ref.onClick,buttonNamePrimary=_ref.buttonNamePrimary,buttonName=_ref.buttonName;return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(CustomResult,{status:status,title:title,subTitle:subTitle,extra:[(0,jsx_runtime.jsx)(AButton.Z,{color:"black",onClick:onClickPrimary,dest:buttonNamePrimary,disabled:!1},buttonNamePrimary),(0,jsx_runtime.jsx)(AButton.Z,{color:"",onClick:onClick,dest:buttonName,disabled:!1},buttonName)]})})},Container=styled_components_browser_esm.default.section.withConfig({displayName:"BaseResultComponent__Container",componentId:"sc-qhs0sw-0"})(["display:flex;justify-content:center;align-items:center;width:100%;height:700px;"]),CustomResult=(0,styled_components_browser_esm.default)(result.ZP).withConfig({displayName:"BaseResultComponent__CustomResult",componentId:"sc-qhs0sw-1"})([".ant-result-extra{display:flex;}"]),Data={add:{title:"의류를 성공적으로 저장하였습니다!",subTitle:"저장하신 의류의 상태를 확인하고 싶으시다면 상세보기로, 더 저장하시려면 계속 저장하기를 눌러주세요",buttonNamePrimary:"상세페이지로",buttonName:"계속 저장하기",primaryPage:"details",otherPage:"add",status:"success"},addFailure:{title:"의류 저장에 실패하였습니다",subTitle:"알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ",buttonNamePrimary:"저장 페이지로",buttonName:"메인페이지로",primaryPage:"add",otherPage:"overview",status:"error"},details:{title:"의류를 성공적으로 수정하였습니다!",subTitle:"저장하신 의류의 상태를 확인하고 싶으시다면 상세보기로, 목록을 보고 싶으시다면 목록보기를 눌러주세요",buttonNamePrimary:"상세페이지로",buttonName:"목록보기",primaryPage:"details",otherPage:"store",status:"success"},detailsFailure:{title:"의류 수정에 실패하였습니다",subTitle:"알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ",buttonNamePrimary:"상세 페이지로",buttonName:"메인페이지로",primaryPage:"details",otherPage:"overview",status:"error"},deleteItem:{title:"의류를 삭제하였습니다!",subTitle:"목록 페이지로 이동하고 싶으시다면 목록보기를, 더 저장하시려면 계속 저장하기를 눌러주세요",buttonNamePrimary:"목록보기",buttonName:"저장하기",primaryPage:"store",otherPage:"add",status:"success"},deleteItemFailure:{title:"의류 삭제에 실패하였습니다",subTitle:"알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ",buttonNamePrimary:"상세 페이지로",buttonName:"메인페이지로",primaryPage:"details",otherPage:"overview",status:"error"}},es=__webpack_require__(9473),submitSuccess_SortingResultComponent=function(_ref){var sort=_ref.sort,id=_ref.id,setConvertState=_ref.setConvertState,dispatch=(0,es.I0)(),data=Data[sort],title=data.title,subTitle=data.subTitle,buttonNamePrimary=data.buttonNamePrimary,buttonName=data.buttonName,status=data.status,primaryPage=data.primaryPage,otherPage=data.otherPage,movePage=(0,react.useCallback)(function(page,id){return function(){"add"===page&&dispatch({type:type.AF}),"details"===page?router_default().push("/closet/".concat(page,"/").concat(id)):router_default().push("/closet/".concat(page)),setConvertState&&setConvertState(function(prev){return!prev})}},[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(submitSuccess_BaseResultComponent,{title:title,subTitle:subTitle,status:status,onClick:movePage(otherPage,""),onClickPrimary:movePage(primaryPage,id),buttonNamePrimary:buttonNamePrimary,buttonName:buttonName})})}}}]);