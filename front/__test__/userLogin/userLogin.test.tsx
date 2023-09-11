import { screen, render } from '@testing-library/react';
import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';

import UserLogin from '../../pages/userlogin';

describe('userLogin', () => {
  it('성공적으로 렌더링 됩니다.', () => {
    renderWithRedux(<UserLogin />);

    const TitleText = screen.getByText(/welcome to closet!/i);
    expect(TitleText).toBeInTheDocument();
  });

  it.skip('create account 클릭 시 계정 생성 컴포넌트로 이동합니다.', () => {});

  it.skip('계정 생성 성공 시 성공 알림창이 뜨고, 다시 login 화면으로 이동합니다.', () => {});

  it.skip('뒤로 가기 버튼 클릭 시 다시 login 화면으로 이동합니다.', () => {});
});
