import { screen } from '@testing-library/react';
import { renderHandler } from '../userLogin.test';

export type DefaultValueInLogin = {
  LoginEmail: string;
  LoginPassword: string;
};

export const defaultFillOutValueInLogin: DefaultValueInLogin = {
  LoginEmail: 'yelihi19@gmail.com',
  LoginPassword: 'abc123456!',
};

describe('Login Component', () => {
  it('render correctly', () => {
    const renderElements = renderHandler.login();

    for (const elem in renderElements) {
      expect(renderElements[elem as keyof typeof renderElements]).toBeInTheDocument();
    }
  });

  it('이메일 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링(이메일형식)', () => {
    renderHandler.fillOutLoginInputValidExceptProps(defaultFillOutValueInLogin, 'LoginEmail', 'rock7246com');

    const ErrorMessage = screen.getByText(/이메일이 올바르지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
  it('비밀벝호 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링(8자 미만)', () => {
    renderHandler.fillOutLoginInputValidExceptProps(defaultFillOutValueInLogin, 'LoginPassword', '12345');

    const ErrorMessage = screen.getByText(/비밀번호가 올바르지 않습니다/i);

    expect(ErrorMessage).toBeInTheDocument();
  });
  it('유효성 검사에 하나라도 적합하지 않을 시 Sign in 비활성화', () => {
    const { LoginButton } = renderHandler.fillOutLoginInputValidExceptProps(defaultFillOutValueInLogin, 'LoginPassword', '12345');

    expect(LoginButton).toBeDisabled();
  });
  it('유효성 검사를 통과할 시 Sign in 활성화', () => {
    const { LoginButton } = renderHandler.fillOutLoginInputValidExceptProps(defaultFillOutValueInLogin);

    expect(LoginButton).not.toBeDisabled();
  });
});
