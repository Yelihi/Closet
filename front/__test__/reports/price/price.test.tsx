import { screen } from '@testing-library/react';
import Price from '../../../pages/closet/reports/price';

import { renderWithProvider } from '../../../util/TestUtils/renderWithProvider';

describe('price page', () => {
  it.skip('성공적으로 렌더링 됩니다', async () => {
    renderWithProvider(<Price device='desktop' />);
  });
});
