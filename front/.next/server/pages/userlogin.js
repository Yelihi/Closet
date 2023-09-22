(() => {
var exports = {};
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 4246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const AuthLayout = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AppLay, {
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthLayout);
const AppLay = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Layout).withConfig({
  displayName: "AuthLayout__AppLay",
  componentId: "sc-h2l2n8-0"
})(["width:100%;height:100%;"]);

/***/ }),

/***/ 6378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9107);
/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_google_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9456);
/* harmony import */ var _recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6445);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9004);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8183);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7837);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_8__, _config_config__WEBPACK_IMPORTED_MODULE_9__]);
([_reducers_user__WEBPACK_IMPORTED_MODULE_8__, _config_config__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Login = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    toggleGotoAccount
  } = props;
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const LinkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [email, setEmail, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)('');
  const [password, setPassword, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)('');
  const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
  const passwordRegExp = /^.{8,}$/;
  const isEmailValid = emailRegExp.test(email);
  const isPasswordValid = passwordRegExp.test(password);

  const onSubmit = e => {
    e.preventDefault();
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_8__/* .loginRequestAction */ .tP)({
      email: email,
      password: password
    }));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LoginBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(LeftTopBrand, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
          children: "Closet"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(LoginSection, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(LoginForm, {
          "data-testid": "login Form",
          onSubmit: onSubmit,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h1", {
            children: "Welcome to Closet!"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            children: "\uC758\uB958\uB97C \uACC4\uD68D\uC801\uC73C\uB85C \uAD00\uB9AC\uD574 \uBCF4\uC138\uC694."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
            type: "email",
            value: email,
            onChange: onChangeEmail,
            placeholder: "Email",
            "data-testid": "loginEmailInput"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            children: email && !isEmailValid && `이메일이 올바르지 않습니다`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", {
            type: "password",
            value: password,
            onChange: onChangePassword,
            placeholder: "Password",
            "data-testid": "loginPasswordInput"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            children: password && !isPasswordValid && `비밀번호가 올바르지 않습니다`
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            type: "submit",
            color: "black",
            innerRef: buttonRef,
            disabled: !(isEmailValid && isPasswordValid),
            dest: "Sign in",
            "data-testid": "SignIn"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            type: "button",
            innerRef: buttonRef,
            color: "",
            onClick: toggleGotoAccount,
            disabled: false,
            dest: "Create account",
            "data-testid": "loginToSignUp"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(LDivider, {
            plain: true,
            children: "OR"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            As: "a",
            innerRef: LinkRef,
            color: "",
            disabled: false,
            dest: "Sign in Google",
            src: _public_images_google_webp__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            href: `${_config_config__WEBPACK_IMPORTED_MODULE_9__/* .backUrl */ .TA}/auth/google`,
            "data-testid": "loginWithGoogle"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
const LoginBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Login__LoginBox",
  componentId: "sc-c5q9bw-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:auto;height:auto;padding:20px;"]);
const LeftTopBrand = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Login__LeftTopBrand",
  componentId: "sc-c5q9bw-1"
})(["width:100%;margin-bottom:70px;> span{text-align:start;font-family:", ";font-size:13px;}"], ({
  theme
}) => theme.font.Logo);
const LoginSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Login__LoginSection",
  componentId: "sc-c5q9bw-2"
})(["display:flex;justify-content:center;align-items:center;"]);
const LoginForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
  displayName: "Login__LoginForm",
  componentId: "sc-c5q9bw-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:fit-content;> h1{display:inline-block;font-family:", ";font-size:25px;font-weight:", ";margin-bottom:10px;}> span{display:block;font-size:14px;font-weight:", ";margin-bottom:40px;}> input{width:300px;height:30px;border-bottom:1px solid rgba(0,0,0,0.4);margin-bottom:10px;:focus{border-bottom:1px solid rgba(0,0,0,0.4);}}> div{width:100%;height:20px;margin-bottom:5px;font-family:", ";font-weight:", ";font-size:12px;color:red;}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.font.Kfont, ({
  theme
}) => theme.fontWeight.Light);
const LDivider = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_4__.Divider).withConfig({
  displayName: "Login__LDivider",
  componentId: "sc-c5q9bw-4"
})([".ant-divider-inner-text{font-family:", ";font-size:12px;font-weight:", ";}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Light);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8183);
/* harmony import */ var _recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6445);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9004);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_3__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Signup = props => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const divref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    signInDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const {
    toggleGotoAccount
  } = props;
  const {
    0: isCollect,
    1: setIsCollect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [name, setName, onChangeName] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('');
  const [email, setEmail, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setIsCollect(e.target.value === password);
  }, [password]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    e.preventDefault();

    if (password !== passwordCheck) {
      setIsCollect(false);
    }

    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .signinRequestAction */ .gO)({
      email: email,
      nickname: name,
      password: password,
      src: ''
    }));
  }, [email, password, passwordCheck, name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (signInDone) {
      toggleGotoAccount();
    }
  }, [signInDone]);
  const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
  const passwordRegExp = /^.{8,}$/;
  const isEmailValid = emailRegExp.test(email);
  const isPasswordValid = passwordRegExp.test(password);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SignupBox, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LeftTopBrand, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        children: "Closet"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SignupSection, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(SignupForm, {
        "data-testid": "Signup Form",
        onSubmit: onSubmit,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
          children: "Create an account"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          children: ["\uC774\uBA54\uC77C \uC591\uC2DD\uC5D0 \uC801\uD569\uD558\uAC8C \uC791\uC131\uD574\uC8FC\uC2DC\uACE0,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), "\uBE44\uBC00\uBC88\uD638\uB294 8\uC790\uB9AC \uC774\uC0C1 \uD574\uC8FC\uC138\uC694"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "text",
          value: name,
          onChange: onChangeName,
          placeholder: "Name",
          required: true,
          "data-testid": "signUpName"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "email",
          value: email,
          onChange: onChangeEmail,
          placeholder: "Email",
          "data-testid": "signUpEmail"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: email && !isEmailValid && `이메일이 올바르지 않습니다`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "password",
          value: password,
          onChange: onChangePassword,
          placeholder: "Password",
          "data-testid": "signUpPassword"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: password && !isPasswordValid && `비밀번호가 올바르지 않습니다`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "password",
          value: passwordCheck,
          onChange: onChangePasswordCheck,
          placeholder: "Password Check",
          "data-testid": "signUpCheck"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          children: passwordCheck && !isCollect && `비밀번호가 일치하지 않습니다`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          type: "submit",
          innerRef: divref,
          color: "black",
          disabled: !(isEmailValid && isPasswordValid && isCollect),
          dest: "Create account",
          "data-testid": "submitButton"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_recycle_element_button_AButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          type: "button",
          innerRef: divref,
          color: "",
          disabled: false,
          onClick: toggleGotoAccount,
          dest: "back",
          "data-testid": "back"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {})]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);
const SignupBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Signup__SignupBox",
  componentId: "sc-2i3cqr-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:auto;height:auto;padding:20px;"]);
const LeftTopBrand = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Signup__LeftTopBrand",
  componentId: "sc-2i3cqr-1"
})(["width:100%;margin-bottom:70px;> span{text-align:start;font-family:", ";font-size:13px;}"], ({
  theme
}) => theme.font.Logo);
const SignupSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Signup__SignupSection",
  componentId: "sc-2i3cqr-2"
})(["display:flex;justify-content:center;align-items:center;"]);
const SignupForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
  displayName: "Signup__SignupForm",
  componentId: "sc-2i3cqr-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:100%;height:fit-content;> h1{display:inline-block;font-family:", ";font-size:25px;font-weight:", ";margin-bottom:10px;}> span{display:block;font-size:14px;font-weight:", ";margin-bottom:40px;}> input{width:300px;height:30px;border-bottom:1px solid rgba(0,0,0,0.4);margin-bottom:10px;:focus{border-bottom:1px solid rgba(0,0,0,0.4);}}> div{width:100%;height:20px;margin-bottom:5px;font-family:", ";font-weight:", ";font-size:12px;color:red;}"], ({
  theme
}) => theme.font.Efont, ({
  theme
}) => theme.fontWeight.Medium, ({
  theme
}) => theme.fontWeight.Light, ({
  theme
}) => theme.font.Kfont, ({
  theme
}) => theme.fontWeight.Light);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = initialState => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  const onChangeValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, onChangeValue];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ }),

/***/ 1731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5998);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_authRightImage_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1745);
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6378);
/* harmony import */ var _components_auth_Signup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3453);
/* harmony import */ var _reducers_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1172);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4780);
/* harmony import */ var _components_AuthLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, redux_saga__WEBPACK_IMPORTED_MODULE_2__, _components_auth_Login__WEBPACK_IMPORTED_MODULE_7__, _components_auth_Signup__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, redux_saga__WEBPACK_IMPORTED_MODULE_2__, _components_auth_Login__WEBPACK_IMPORTED_MODULE_7__, _components_auth_Signup__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const UserLogin = () => {
  const {
    0: gotoAccount,
    1: setGotoAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleGotoAccount = () => {
    setGotoAccount(prev => !prev);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("title", {
        children: "closet"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "description",
        content: "\uC774 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Section, {
      children: [gotoAccount ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_auth_Signup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        toggleGotoAccount: toggleGotoAccount
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_auth_Login__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        toggleGotoAccount: toggleGotoAccount
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ImageBox, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
          alt: "todo",
          src: _public_images_authRightImage_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
          width: 500,
          height: 500
        })
      })]
    })]
  });
};

UserLogin.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_AuthLayout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    children: page
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getServerSideProps */ .Z.getServerSideProps(store => async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.headers.Cookie = cookie;
  }

  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  store.dispatch({
    type: _reducers_type__WEBPACK_IMPORTED_MODULE_12__/* .LOAD_TO_MY_INFO_REQUEST */ .YE
  });
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__.END);
  await store.sagaTask?.toPromise();

  if (store.getState().user.me) {
    return {
      redirect: {
        destination: '/closet/overview',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLogin);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "userlogin__Container",
  componentId: "sc-h3i4qh-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;background-color:whitesmoke;height:100vh;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default().section.withConfig({
  displayName: "userlogin__Section",
  componentId: "sc-h3i4qh-1"
})(["display:flex;width:fit-content;height:630px;background-color:white;"]);
const ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "userlogin__ImageBox",
  componentId: "sc-h3i4qh-2"
})(["position:relative;display:block;width:auto;height:628px;padding:20px;> img{width:500px;height:100%;object-fit:cover;border-radius:15px;}@media screen and (max-width:900px){display:none;}"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/authRightImage.15d92b7a.jpg","height":2903,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmA1//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAARBRKC/9oACAEBAAE/ALL8eEjDSL0OmCBLGh5XP//EABcRAQADAAAAAAAAAAAAAAAAAAEAAhH/2gAIAQIBAT8AqGE//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAwEBPwCy7P/Z","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 9456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/google.75249060.webp","height":512,"width":512,"blurDataURL":"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBYAAAABF3D//4iIgCDbZoPc/WnOENH/WPIBVlA4IEgAAABQAgCdASoIAAgAAkA4JZQC7DBACIALf/xHrQAA/v1OTqzpmjFjzgMMtfjTUIwBuNGw6hdNXyQiVrHwOlMnJHgGwesz0K4AAAA=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9107:
/***/ (() => {



/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 4549:
/***/ ((module) => {

"use strict";
module.exports = import("@redux-saga/core");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

"use strict";
module.exports = import("immer");;

/***/ }),

/***/ 5998:
/***/ ((module) => {

"use strict";
module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,619], () => (__webpack_exec__(1731)));
module.exports = __webpack_exports__;

})();