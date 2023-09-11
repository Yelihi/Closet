import { screen, render } from '@testing-library/react';
import { renderWithRedux } from '../../../util/TestUtils/renderWithRedux';

import Login from '../../../components/auth/Login';

const toggleGoToAccount = jest.fn();

describe('Login Component', () => {
  it('render correctly', () => {
    // Arrange
    renderWithRedux(<Login toggleGotoAccount={toggleGoToAccount} />);

    const emailElement = screen.getByPlaceholderText(/email/i);
    const passwordElement = screen.getByPlaceholderText(/password/i);
    const signInButtonElement = screen.getByRole('button', { name: 'Sign in' });
    const createAccountButtonElement = screen.getByRole('button', { name: 'Create account' });

    // Assert
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(signInButtonElement).toBeInTheDocument();
    expect(createAccountButtonElement).toBeInTheDocument();
  });

  it.skip('이메일 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링', () => {});
  it.skip('비밀벝호 유효성 검사에 적합하지 않을 시 에러 메시지 렌더링', () => {});
  it.skip('유효성 검사에 적합하지 않을 시 Sign in 비활성화', () => {});
  it.skip('유효성 검사를 통과할 시 Sign in 활성화', () => {});
});
