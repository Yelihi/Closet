import { screen, render } from '@testing-library/react';
import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';

import UserLogin from '../../pages/userlogin';

describe('userLogin', () => {
  it('성공적으로 렌더링 됩니다.', () => {
    renderWithRedux(<UserLogin />);

    const TitleText = screen.getByText(/welcome to closet!/i);
    expect(TitleText).toBeInTheDocument();
  });
});
