import { screen } from '@testing-library/react';
import Sort from '../../../pages/closet/reports/sort';

import { renderWithProvider } from '../../../util/TestUtils/renderWithProvider';

describe('Sort page', () => {
  it('성공적으로 렌더링 됩니다', async () => {
    renderWithProvider(<Sort device='desktop' />);

    const StateTitle = await screen.findByText(/열심히 개발중입니다!/i);
    expect(StateTitle).toBeInTheDocument();
  });
});
