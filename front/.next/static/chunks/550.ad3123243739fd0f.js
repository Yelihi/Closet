"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[550],{30550:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return recycle_VisionAICard}});var react=__webpack_require__(67294),styled_components_browser_esm=__webpack_require__(94589),es=__webpack_require__(9473),type=__webpack_require__(21172),next_image=__webpack_require__(25675),image_default=__webpack_require__.n(next_image),media=__webpack_require__(48520),jsx_runtime=__webpack_require__(85893),add_SkeletonImage=function(_ref){var children=_ref.children;return _ref.isLoading?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(PreviewContainer,{children:[(0,jsx_runtime.jsx)(PreviewImage,{}),(0,jsx_runtime.jsxs)(PreviewTextContainer,{children:[(0,jsx_runtime.jsxs)(PreviewText,{children:[(0,jsx_runtime.jsxs)(TextBox,{children:[(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)(Text,{})]}),(0,jsx_runtime.jsxs)(TextBox,{children:[(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)(Text,{})]}),(0,jsx_runtime.jsxs)(TextBox,{children:[(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)(Text,{})]})]}),(0,jsx_runtime.jsx)(ButtonBox,{children:(0,jsx_runtime.jsx)("div",{})})]})]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})},PreviewContainer=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__PreviewContainer",componentId:"sc-1alw2a0-0"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;border:1px solid ",";border-radius:5px;gap:30px;transition:box-shadow 0.25s ease-out;animation:boxFade 2s 1s infinite linear alternate;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}","{width:49.5%;}@keyframes boxFade{0%{opacity:1;}50%{opacity:0.5;}100%{opacity:1;}}"],function(_ref2){return _ref2.theme.colors.hoverGrey},media.B.desktop),PreviewImage=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__PreviewImage",componentId:"sc-1alw2a0-1"})(["width:55%;height:200px;background-color:",";border-radius:5px;"],function(_ref3){return _ref3.theme.colors.hoverGrey}),PreviewTextContainer=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__PreviewTextContainer",componentId:"sc-1alw2a0-2"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:30%;height:100%;margin-right:3%;"]),PreviewText=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__PreviewText",componentId:"sc-1alw2a0-3"})(["display:flex;flex-direction:column;margin-top:10px;width:100%;"]),TextBox=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__TextBox",componentId:"sc-1alw2a0-4"})(["display:inline-block;margin-bottom:5px;> span{display:inline-block;width:50%;height:12px;background-color:",";margin-bottom:5px;}"],function(_ref4){return _ref4.theme.colors.hoverGrey}),Text=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__Text",componentId:"sc-1alw2a0-5"})(["display:flex;justify-content:flex-start;align-items:center;gap:6px;width:100%;height:20px;background-color:",";"],function(_ref5){return _ref5.theme.colors.hoverGrey}),ButtonBox=styled_components_browser_esm.default.div.withConfig({displayName:"SkeletonImage__ButtonBox",componentId:"sc-1alw2a0-6"})(["margin-top:20px;width:100%;> div{width:100%;height:25px;background-color:",";border-radius:15px;}"],function(_ref6){return _ref6.theme.colors.hoverGrey}),AButton=__webpack_require__(6445),VisionAIData=__webpack_require__(67189),config=__webpack_require__(97837),objectSpread2=__webpack_require__(1413),asn_CheckCircleTwoTone={icon:function(primaryColor,secondaryColor){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:primaryColor}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:secondaryColor}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:primaryColor}}]}},name:"check-circle",theme:"twotone"},AntdIcon=__webpack_require__(42135),CheckCircleTwoTone_CheckCircleTwoTone=function(props,ref){return react.createElement(AntdIcon.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{ref:ref,icon:asn_CheckCircleTwoTone}))};CheckCircleTwoTone_CheckCircleTwoTone.displayName="CheckCircleTwoTone";var icons_CheckCircleTwoTone=react.forwardRef(CheckCircleTwoTone_CheckCircleTwoTone),recycle_VisionAICard=function(_ref){var imageUploadLoding=_ref.imageUploadLoding,src=_ref.src,index=_ref.index,isClothes=_ref.isClothes,isCategori=_ref.isCategori,confidence=_ref.confidence,dispatch=(0,es.I0)(),onRemoveImage=(0,react.useCallback)(function(index){return function(){dispatch({type:type.Po,data:index})}},[]);return(0,jsx_runtime.jsx)(add_SkeletonImage,{isLoading:imageUploadLoding,children:(0,jsx_runtime.jsxs)(VisionAICard_PreviewContainer,{border:isClothes,children:[(0,jsx_runtime.jsx)(VisionAICard_PreviewImage,{src:"".concat(config.TA,"/").concat(src),alt:"의류이미지",width:600,height:600,placeholder:"blur",blurDataURL:"data:image/gif;base64,".concat(config.B3)}),(0,jsx_runtime.jsxs)(VisionAICard_PreviewTextContainer,{children:[(0,jsx_runtime.jsx)(VisionAICard_PreviewText,{children:[isClothes,isCategori,confidence].map(function(state,idx){return(0,jsx_runtime.jsxs)(VisionAICard_TextBox,{children:[(0,jsx_runtime.jsx)("span",{children:VisionAIData.$x[idx].intro}),(0,jsx_runtime.jsxs)(VisionAICard_Text,{children:[(0,jsx_runtime.jsx)(icons_CheckCircleTwoTone,{twoToneColor:state?VisionAIData.$x[idx].good:VisionAIData.$x[idx].bad}),state?VisionAIData.$x[idx].goodExplain:VisionAIData.$x[idx].badExplain]})]})})}),(0,jsx_runtime.jsx)(VisionAICard_ButtonBox,{children:(0,jsx_runtime.jsx)(AButton.Z,{color:"",disabled:!1,dest:"제거",onClick:onRemoveImage(index)})})]})]},src)})},VisionAICard_PreviewContainer=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__PreviewContainer",componentId:"sc-axvezg-0"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;height:auto;padding:10px;border:1px solid ",";border-radius:5px;gap:30px;transition:box-shadow 0.25s ease-out;&:hover{box-shadow:rgba(50,50,93,0.25) 0px 2px 5px -1px,rgba(0,0,0,0.3) 0px 1px 3px -1px;}","{width:49.5%;}","{flex-direction:row;}"],function(_ref2){var theme=_ref2.theme;return _ref2.border?theme.colors.success:theme.colors.red},media.B.desktop,media.B.middlePhone),VisionAICard_PreviewImage=(0,styled_components_browser_esm.default)(image_default()).withConfig({displayName:"VisionAICard__PreviewImage",componentId:"sc-axvezg-1"})(["width:55%;height:auto;object-fit:cover;"]),VisionAICard_PreviewTextContainer=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__PreviewTextContainer",componentId:"sc-axvezg-2"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:c;height:100%;margin-right:3%;"]),VisionAICard_PreviewText=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__PreviewText",componentId:"sc-axvezg-3"})(["display:flex;flex-direction:column;margin-top:10px;"]),VisionAICard_TextBox=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__TextBox",componentId:"sc-axvezg-4"})(["display:inline-block;margin-bottom:5px;> span{display:inline-block;font-size:11px;font-weight:",";font-family:",";color:",";margin-bottom:5px;}"],function(_ref3){return _ref3.theme.fontWeight.Light},function(_ref4){return _ref4.theme.font.Efont},function(_ref5){return _ref5.theme.colors.deepGrey}),VisionAICard_Text=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__Text",componentId:"sc-axvezg-5"})(["display:flex;justify-content:flex-start;align-items:center;gap:6px;font-size:14px;font-weight:",";font-family:",";"],function(_ref6){return _ref6.theme.fontWeight.Medium},function(_ref7){return _ref7.theme.font.Efont}),VisionAICard_ButtonBox=styled_components_browser_esm.default.div.withConfig({displayName:"VisionAICard__ButtonBox",componentId:"sc-axvezg-6"})(["margin-top:20px;"])}}]);