import { screen, act } from '@testing-library/react';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import Add from '../../pages/closet/add';

describe('Add Page', () => {
  it('성공적으로 렌더링', async () => {
    renderWithProvider(<Add device='desktop' />);

    const Title = await screen.findByText(/add clothes/i);
    expect(Title).toBeInTheDocument();
  });
});
