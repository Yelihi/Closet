import { screen, act } from '@testing-library/react';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import Administration from '../../pages/closet/administration';

describe('Add Page', () => {
  it('성공적으로 렌더링', async () => {
    renderWithProvider(<Administration device='desktop' />);

    const Title = await screen.findByText('Profile');
    const subTitle = await screen.findByText(/개인 정보를 수정하실 수 있습니다/i);
    expect(Title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
