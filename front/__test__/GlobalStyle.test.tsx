import { render } from '@testing-library/react';

import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

// 여긴 다시한번 체크를 해보자.. 스냅샷이 되는게 이상한데..
describe('Global Style', () => {
  it('render correctly', () => {
    render(<GlobalStyle isPhoneMenuClick={false} theme={theme} />);

    expect(document.head).toMatchSnapshot();
  });
});
