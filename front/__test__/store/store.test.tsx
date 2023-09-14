import { screen, fireEvent } from '@testing-library/react';

import Store from '../../pages/closet/store';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';

describe('Store', () => {
  it.skip('성공적으로 렌더링된다', () => {
    renderWithProvider(<Store device='desktop' />);
  });
});
