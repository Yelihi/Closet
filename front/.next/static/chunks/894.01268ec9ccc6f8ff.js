(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{89894:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var _classCallCheck=__webpack_require__(33227),_createClass=__webpack_require__(88361),_inherits=__webpack_require__(85971),_possibleConstructorReturn=__webpack_require__(52715),_getPrototypeOf=__webpack_require__(91193);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _interop_require_default=__webpack_require__(92648).Z,_react=_interop_require_default(__webpack_require__(67294)),_head=_interop_require_default(__webpack_require__(16505)),statusCodes={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function _getInitialProps(_ref){var res=_ref.res,err=_ref.err;return{statusCode:res&&res.statusCode?res.statusCode:err?err.statusCode:404}}var styles={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}},Error=function(_Component2){_inherits(Error,_Component2);var hasNativeReflectConstruct,_super=(hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var result,Super=_getPrototypeOf(Error);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)});function Error(){return _classCallCheck(this,Error),_super.apply(this,arguments)}return _createClass(Error,[{key:"render",value:function(){var _this$props=this.props,statusCode=_this$props.statusCode,_this$props$withDarkM=_this$props.withDarkMode,title=this.props.title||statusCodes[statusCode]||"An unexpected error has occurred";return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode?"".concat(statusCode,": ").concat(title):"Application error: a client-side exception has occurred")),_react.default.createElement("div",null,_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(void 0===_this$props$withDarkM||_this$props$withDarkM?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),statusCode?_react.default.createElement("h1",{className:"next-error-h1",style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.desc},_react.default.createElement("h2",{style:styles.h2},this.props.title||statusCode?title:_react.default.createElement(_react.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),Error}(_react.default.Component);Error.displayName="ErrorPage",Error.getInitialProps=_getInitialProps,Error.origGetInitialProps=_getInitialProps,exports.default=Error},17285:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AmpStateContext=void 0;var AmpStateContext=(0,__webpack_require__(92648).Z)(__webpack_require__(67294)).default.createContext({});exports.AmpStateContext=AmpStateContext},80354:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isInAmpMode=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$ampFirst=_ref.ampFirst,_ref$hybrid=_ref.hybrid,_ref$hasQuery=_ref.hasQuery;return void 0!==_ref$ampFirst&&_ref$ampFirst||void 0!==_ref$hybrid&&_ref$hybrid&&void 0!==_ref$hasQuery&&_ref$hasQuery}},16505:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultHead=defaultHead,exports.default=void 0;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(92648).Z,_react=(0,__webpack_require__(91598).Z)(__webpack_require__(67294)),_sideEffect=_interop_require_default(__webpack_require__(70148)),_ampContext=__webpack_require__(17285),_headManagerContext=__webpack_require__(60523),_ampMode=__webpack_require__(80354);function defaultHead(){var inAmpMode=arguments.length>0&&void 0!==arguments[0]&&arguments[0],head=[_react.default.createElement("meta",{charSet:"utf-8"})];return inAmpMode||head.push(_react.default.createElement("meta",{name:"viewport",content:"width=device-width"})),head}function onlyReactElement(list,child){return"string"==typeof child||"number"==typeof child?list:child.type===_react.default.Fragment?list.concat(_react.default.Children.toArray(child.props.children).reduce(function(fragmentList,fragmentChild){return"string"==typeof fragmentChild||"number"==typeof fragmentChild?fragmentList:fragmentList.concat(fragmentChild)},[])):list.concat(child)}__webpack_require__(92783);var METATYPES=["name","httpEquiv","charSet","itemProp"];function reduceComponents(headChildrenElements,props){var keys,tags,metaTypes,metaCategories,inAmpMode=props.inAmpMode;return headChildrenElements.reduce(onlyReactElement,[]).reverse().concat(defaultHead(inAmpMode).reverse()).filter((keys=new Set,tags=new Set,metaTypes=new Set,metaCategories={},function(h){var isUnique=!0,hasKey=!1;if(h.key&&"number"!=typeof h.key&&h.key.indexOf("$")>0){hasKey=!0;var key=h.key.slice(h.key.indexOf("$")+1);keys.has(key)?isUnique=!1:keys.add(key)}switch(h.type){case"title":case"base":tags.has(h.type)?isUnique=!1:tags.add(h.type);break;case"meta":for(var i=0,len=METATYPES.length;i<len;i++){var metatype=METATYPES[i];if(h.props.hasOwnProperty(metatype)){if("charSet"===metatype)metaTypes.has(metatype)?isUnique=!1:metaTypes.add(metatype);else{var category=h.props[metatype],categories=metaCategories[metatype]||new Set;("name"!==metatype||!hasKey)&&categories.has(category)?isUnique=!1:(categories.add(category),metaCategories[metatype]=categories)}}}}return isUnique})).reverse().map(function(c,i){var key=c.key||i;if(!inAmpMode&&"link"===c.type&&c.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(url){return c.props.href.startsWith(url)})){var newProps=_extends({},c.props||{});return newProps["data-href"]=newProps.href,newProps.href=void 0,newProps["data-optimized-fonts"]=!0,_react.default.cloneElement(c,newProps)}return _react.default.cloneElement(c,{key:key})})}exports.default=function(_ref){var children=_ref.children,ampState=_react.useContext(_ampContext.AmpStateContext),headManager=_react.useContext(_headManagerContext.HeadManagerContext);return _react.default.createElement(_sideEffect.default,{reduceComponentsToState:reduceComponents,headManager:headManager,inAmpMode:_ampMode.isInAmpMode(ampState)},children)},("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},70148:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(props){var ref,headManager=props.headManager,reduceComponentsToState=props.reduceComponentsToState;function emitChange(){if(headManager&&headManager.mountedInstances){var headElements=_react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));headManager.updateHead(reduceComponentsToState(headElements,props))}}return isServer&&(null==headManager||null==(ref=headManager.mountedInstances)||ref.add(props.children),emitChange()),useClientOnlyLayoutEffect(function(){var ref1;return null==headManager||null==(ref1=headManager.mountedInstances)||ref1.add(props.children),function(){var ref;null==headManager||null==(ref=headManager.mountedInstances)||ref.delete(props.children)}}),useClientOnlyLayoutEffect(function(){return headManager&&(headManager._pendingUpdate=emitChange),function(){headManager&&(headManager._pendingUpdate=emitChange)}}),useClientOnlyEffect(function(){return headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null),function(){headManager&&headManager._pendingUpdate&&(headManager._pendingUpdate(),headManager._pendingUpdate=null)}}),null};var _react=(0,__webpack_require__(91598).Z)(__webpack_require__(67294)),isServer=!1,useClientOnlyLayoutEffect=_react.useLayoutEffect,useClientOnlyEffect=isServer?function(){}:_react.useEffect},92783:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.warnOnce=void 0,exports.warnOnce=function(_){}}}]);