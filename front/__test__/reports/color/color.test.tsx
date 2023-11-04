import { screen } from '@testing-library/react';
import Color from '../../../pages/closet/reports/color';

import { renderWithProvider } from '../../../util/TestUtils/renderWithProvider';

describe('color page', () => {
  it('성공적으로 렌더링 됩니다', async () => {
    renderWithProvider(<Color device='desktop' />);

    const StateTitle = await screen.findByText(/열심히 개발중입니다!/i);
    expect(StateTitle).toBeInTheDocument();
  });
});
