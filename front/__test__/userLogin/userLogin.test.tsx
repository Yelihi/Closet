import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';

import UserLogin from '../../pages/userlogin';

let alertmock = jest.fn();
window.alert = alertmock;

type DefaultValueInSignUp = {
  SignUpName: string;
  SignUpEmail: string;
  SignUpPassword: string;
  SignUpCheck: string;
};

const defaultFillOutValueInSignUp: DefaultValueInSignUp = {
  SignUpName: 'wonik',
  SignUpEmail: 'yelihi19@gmail.com',
  SignUpPassword: 'abc123456!',
  SignUpCheck: 'abc123456!',
};

const renderUserLogin = () => {
  renderWithRedux(<UserLogin />);

  const LoginTitle = screen.getByText(/welcome to closet!/i);
  const LoginEmailInput = screen.getByTestId(/loginEmailInput/i);
  const LoginPasswordInput = screen.getByTestId(/loginPasswordInput/i);
  const LoginButton = screen.getByTestId(/SignIn/i);
  const MoveToSignUpPage = screen.getByTestId(/loginToSignUp/i);
  const LoginWithGoogle = screen.getByTestId(/loginWithGoogle/i);

  return {
    LoginTitle,
    LoginEmailInput,
    LoginPasswordInput,
    LoginButton,
    MoveToSignUpPage,
    LoginWithGoogle,
  };
};

const renderSignUpComponent = () => {
  const { MoveToSignUpPage } = renderUserLogin();

  fireEvent.click(MoveToSignUpPage);

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
};

type SignUpElements = { [key in keyof typeof defaultFillOutValueInSignUp]: key }[keyof typeof defaultFillOutValueInSignUp];

const fillOutFormVaildExceptProps = (defaultValue: DefaultValueInSignUp, inputElement?: SignUpElements, invaildValue?: string) => {
  const renderElements = renderSignUpComponent();
  const SignUpButton = renderElements['SignUpButton'];
  const copydefaultFillOutValue: DefaultValueInSignUp = { ...defaultValue };

  if (inputElement && invaildValue) {
    copydefaultFillOutValue[inputElement] = invaildValue;
  }

  for (const key in copydefaultFillOutValue) {
    fireEvent.change(renderElements[key as SignUpElements], { target: { value: copydefaultFillOutValue[key as SignUpElements] } });
  }

  return {
    renderElements,
    copydefaultFillOutValue,
    SignUpButton,
  };
};

describe('userLogin', () => {
  it('성공적으로 렌더링 됩니다.', () => {
    const renderElements = renderUserLogin();

    [].forEach.call(renderElements, element => {
      expect(element).toBeInTheDocument();
    });
  });

  it('create account 클릭 시 계정 생성 컴포넌트로 이동합니다.', async () => {
    // Login page 의 계정생성 버튼을 불러옵니다.
    const { MoveToSignUpPage } = renderUserLogin();

    // 버튼을 클릭합니다.
    fireEvent.click(MoveToSignUpPage);

    //잠시 후 Sign Up 페이지의 타이틀이 렌더링 됩니다.
    await waitFor(() => {
      const SignupTitle = screen.findByText(/Create an account/i);
      expect(SignupTitle).toBeTruthy();
    });
    expect(MoveToSignUpPage).not.toBeInTheDocument();
  });

  it('알맞게 입력을 하고 계정 생성 버튼을 누를 시 알람이 뜨고, 다시 login 화면으로 이동합니다.', async () => {
    // 입력폼에 알맞게 입력합니다.
    const { SignUpButton } = fillOutFormVaildExceptProps(defaultFillOutValueInSignUp);

    // 계정 생성 버튼을 누릅니다.
    fireEvent.click(SignUpButton);

    // 잠시 후 성공 알람창이 뜨고, 다시 Login page 로 넘어갑니다.
    await waitFor(() => {
      expect(window.alert).toBeCalledWith('가입해주셔서 감사합니다.');
      const $TitleText = screen.findByText(/의류를 계획적으로 관리해 보세요./i);
      expect($TitleText).toBeTruthy();
    });
  });

  it.skip('뒤로 가기 버튼 클릭 시 다시 login 화면으로 이동합니다.', () => {});

  it('양식에 맞지 않는 이메일을 기입할 시 에러 메시지가 렌더링됩니다.', () => {
    fillOutFormVaildExceptProps(defaultFillOutValueInSignUp, 'SignUpEmail', 'Rock5243com');

    const ErrorMessage = screen.getByText(/이메일이 올바르지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
});
