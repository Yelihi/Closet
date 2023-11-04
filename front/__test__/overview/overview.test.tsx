import { screen, fireEvent } from '@testing-library/react';
import { server } from '../../__mocks__/server';
import { getOverviewData } from '../../__mocks__/overview/handler';

import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import Overview from '../../pages/closet/overview/index';
import { OverviewResponseEmptyData, OverviewResponseData } from '../../__mocks__/overview/data';

import { getServerSideProps } from '../../pages/closet/overview/index';

// 차트 라이브러리 NIVO 로 인한 ResizeObserver 처리 (NIVO 가 이것을 사용함)
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('overview', () => {
  it('render correctly', async () => {
    renderWithProvider(<Overview device='desktop' />);

    const LastItems = OverviewResponseData.lastDatas;
    LastItems.forEach(async item => {
      const ItemName = await screen.findByText(item.productName);
      expect(ItemName).toBeTruthy();
    });
  });

  it('처음으로 가입한 유저가 로그인 하였을 때 저장된 데이터는 없으니 의류없음 렌더링', async () => {
    server.use(getOverviewData(OverviewResponseEmptyData));

    renderWithProvider(<Overview device='desktop' />);

    const messageEmptyState = await screen.findByText(/이런! 저장된 의류가 없네요!/i);
    expect(messageEmptyState).toBeInTheDocument();
  });

  it('Recently Enroll 내 5가지 의류가 렌더링', async () => {
    renderWithProvider(<Overview device='desktop' />);

    const RecentlyItems = await screen.findAllByTestId(/listitem/i);
    expect(RecentlyItems).toHaveLength(5);
  });
  it('Total Quantity 에서 총 저장 수량이 렌더링', async () => {
    renderWithProvider(<Overview device='desktop' />);

    const TotalQuantity = await screen.findByTestId(/TotalQuantity/i);
    expect(TotalQuantity).toHaveTextContent('8');
  });
});
