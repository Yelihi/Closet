import { screen } from '@testing-library/react';

import { renderHandler } from '../userLogin.test';

export type DefaultValueInSignUp = {
  SignUpName: string;
  SignUpEmail: string;
  SignUpPassword: string;
  SignUpCheck: string;
};

export const defaultFillOutValueInSignUp: DefaultValueInSignUp = {
  SignUpName: 'wonik',
  SignUpEmail: 'yelihi19@gmail.com',
  SignUpPassword: 'abc123456!',
  SignUpCheck: 'abc123456!',
};

describe('SignUp Component', () => {
  it('render correctly', () => {
    // Arrange
    const renderElements = renderHandler.signUp();

    for (const elem in renderElements) {
      expect(renderElements[elem as keyof typeof renderElements]).toBeInTheDocument();
    }
  });

  it('이메일 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링(이메일의 양식)', () => {
    renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp, 'SignUpEmail', 'Rock5243com');

    const ErrorMessage = screen.getByText(/이메일이 올바르지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
  it('비밀벝호 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링(8자리 미만)', () => {
    renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp, 'SignUpPassword', '1234');

    const ErrorMessage = screen.getByText(/비밀번호가 올바르지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
  it('비밀번호 확인 시 입력 비밀번호와 일치하지 않을 시 에러 메시지 렌더링', () => {
    renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp, 'SignUpCheck', '1234567');

    const ErrorMessage = screen.getByText(/비밀번호가 일치하지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
  it('유효성 검사에 하나라도 적합하지 않을 시 SignUp 버튼 비활성화', () => {
    renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp, 'SignUpEmail', 'Rock5243com');

    const SignUpButton = screen.getByTestId('submitButton');

    expect(SignUpButton).toBeDisabled();
  });
  it('유효성 검사를 통과할 시 Sign in 활성화', () => {
    renderHandler.fillOutFormVaildExceptProps(defaultFillOutValueInSignUp);

    const SignUpButton = screen.getByTestId('submitButton');

    expect(SignUpButton).not.toBeDisabled();
  });
});
