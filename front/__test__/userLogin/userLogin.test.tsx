import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';

import UserLogin from '../../pages/userlogin';
import Signup from '../../components/auth/Signup';
import Login from '../../components/auth/Login';

import { defaultFillOutValueInSignUp, DefaultValueInSignUp } from './SignUp/Signup.test';
import { defaultFillOutValueInLogin, DefaultValueInLogin } from './Login/Login.test';

let alertmock = jest.fn();
window.alert = alertmock;

type SignUpElements = {
  [key in keyof typeof defaultFillOutValueInSignUp]: key;
}[keyof typeof defaultFillOutValueInSignUp];
type LoginElements = { [key in keyof typeof defaultFillOutValueInLogin]: key }[keyof typeof defaultFillOutValueInLogin];

export const renderHandler = {
  userLogin: function () {
    renderWithProvider(<UserLogin />);

    const MoveToSignUpPage = screen.getByTestId(/loginToSignUp/i);
    const LoginWithGoogle = screen.getByTestId(/loginWithGoogle/i);

    return {
      MoveToSignUpPage,
      LoginWithGoogle,
    };
  },
  login: function () {
    const toggleGoToAccount = jest.fn();
    renderWithRedux(<Login toggleGotoAccount={toggleGoToAccount} />);

    const LoginTitle = screen.getByText(/welcome to closet!/i);
    const LoginEmail = screen.getByTestId(/loginEmailInput/i);
    const LoginPassword = screen.getByTestId(/loginPasswordInput/i);
    const LoginButton = screen.getByTestId(/SignIn/i);
    const MoveToSignUpPage = screen.getByTestId(/loginToSignUp/i);
    const LoginWithGoogle = screen.getByTestId(/loginWithGoogle/i);

    return {
      LoginTitle,
      LoginEmail,
      LoginPassword,
      LoginButton,
      MoveToSignUpPage,
      LoginWithGoogle,
    };
  },
  signUp: function () {
    const toggleGoToAccount = jest.fn();
    renderWithRedux(<Signup toggleGotoAccount={toggleGoToAccount} />);

    const SignUpName = screen.getByTestId(/signUpName/i);
    const SignUpEmail = screen.getByTestId(/signUpEmail/i);
    const SignUpPassword = screen.getByTestId(/signUpPassword/i);
    const SignUpCheck = screen.getByTestId(/signUpCheck/i);
    const SignUpButton = screen.getByTestId(/submitButton/i);
    const BackButton = screen.getByTestId(/back/i);

    return {
      SignUpName: SignUpName,
      SignUpEmail: SignUpEmail,
      SignUpPassword: SignUpPassword,
      SignUpCheck: SignUpCheck,
      SignUpButton: SignUpButton,
      BackButton: BackButton,
    };
  },
  switchLoginToSignUp: function () {
    const { MoveToSignUpPage } = this.userLogin();

    fireEvent.click(MoveToSignUpPage);
  },
  switchSignUpToLogin: function () {
    this.switchLoginToSignUp();

    const BackButton = screen.getByTestId(/back/i);
    fireEvent.click(BackButton);
  },
  fillOutFormVaildExceptProps: function (
    defaultValue: DefaultValueInSignUp,
    inputElement?: SignUpElements,
    invaildValue?: string
  ) {
    const renderElements = this.signUp();
    const SignUpButton = renderElements['SignUpButton'];
    const copyDefaultFillOutValue: DefaultValueInSignUp = { ...defaultValue };

    if (inputElement && invaildValue) {
      copyDefaultFillOutValue[inputElement] = invaildValue;
    }

    for (const key in copyDefaultFillOutValue) {
      fireEvent.change(renderElements[key as SignUpElements], {
        target: { value: copyDefaultFillOutValue[key as SignUpElements] },
      });
    }

    return {
      renderElements,
      copyDefaultFillOutValue,
      SignUpButton,
    };
  },
  fillOutLoginInputValidExceptProps: function (
    defaultValue: DefaultValueInLogin,
    inputElement?: LoginElements,
    invaildValue?: string
  ) {
    const renderElements = this.login();
    const { LoginButton } = renderElements;
    const copyDefaultFillOutValue: DefaultValueInLogin = { ...defaultValue };

    if (inputElement && invaildValue) {
      copyDefaultFillOutValue[inputElement] = invaildValue;
    }

    for (const key in copyDefaultFillOutValue) {
      fireEvent.change(renderElements[key as LoginElements], {
        target: { value: copyDefaultFillOutValue[key as LoginElements] },
      });
    }

    return {
      renderElements,
      copyDefaultFillOutValue,
      LoginButton,
    };
  },
};

describe('userLogin', () => {
  it('성공적으로 렌더링 됩니다.', () => {
    const renderElements = renderHandler.userLogin();

    [].forEach.call(renderElements, element => {
      expect(element).toBeInTheDocument();
    });
  });

  it('create account 클릭 시 계정 생성 컴포넌트로 이동합니다.', async () => {
    // Login page 의 계정생성 버튼을 불러옵니다.
    renderHandler.switchLoginToSignUp();

    //잠시 후 Sign Up 페이지의 타이틀이 렌더링 됩니다.
    await waitFor(() => {
      const SignupTitle = screen.findByText(/Create an account/i);
      expect(SignupTitle).toBeTruthy();
    });
  });

  it('알맞게 입력을 하고 계정 생성 버튼을 누를 시 알람이 뜨고, 다시 login 화면으로 이동합니다.', async () => {
    // 입력폼에 알맞게 입력합니다.
    const { SignUpButton } = renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp);

    // 계정 생성 버튼을 누릅니다.
    fireEvent.click(SignUpButton);

    // 잠시 후 성공 알람창이 뜨고, 다시 Login page 로 넘어갑니다.
    await waitFor(() => {
      expect(window.alert).toBeCalledWith('가입해주셔서 감사합니다.');
      const $TitleText = screen.findByText(/의류를 계획적으로 관리해 보세요./i);
      expect($TitleText).toBeTruthy();
    });
  });

  it('뒤로 가기 버튼 클릭 시 다시 login 화면으로 이동합니다.', () => {
    renderHandler.switchSignUpToLogin();

    const LoginTitle = screen.getByText(/welcome to closet!/i);

    expect(LoginTitle).toBeInTheDocument();
  });
});
