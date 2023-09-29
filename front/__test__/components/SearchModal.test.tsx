import { screen } from '@testing-library/react';

import SearchModal from '../../components/search/SearchModal';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';

describe('SearchModal', () => {
  it('성공적으로 렌더링', () => {
    renderWithProvider(<SearchModal />);
  });
});
