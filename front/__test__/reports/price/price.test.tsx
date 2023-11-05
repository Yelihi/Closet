import { screen, act, render, fireEvent, waitFor } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import axios from 'axios';
import Price from '../../../pages/closet/reports/price';

import { renderWithProvider } from '../../../util/TestUtils/renderWithProvider';

import ResizeObserverMock, { listener } from '../../../__mocks__/overview/ResizeObserver';

window.ResizeObserver = window.ResizeObserver || ResizeObserverMock;

// 현재 nivo/line 에 대한 렌더링이 잘 이루어지지 못하고 있다.
// 이를 렌더링하기 위해 필요한 d3-color 내 export 를 jest 에서 인식하지 못하면서 발생한 문제
// 해결이 되야 테스트가 가능할듯 싶다

describe('price page', () => {
  it('성공적으로 렌더링 됩니다', async () => {
    act(() => {
      renderWithProvider(<Price device='desktop' />);
    });

    const TitleElement = await screen.findByText(/total price per year/i);
    const PricePerYear = await screen.findByTestId(/price-title/i);
    const Percentage = await screen.findByTestId(/price-percent/i);
    const Categories = await screen.findAllByTestId(/chart-categori/i);

    expect(TitleElement).toBeInTheDocument();
    expect(PricePerYear).toHaveTextContent(/600,000/i);
    expect(Percentage).toHaveTextContent(/64/i);
    expect(Categories).toHaveLength(6);
  });

  it('년도를 변경하였을 때, 년도 별 가격 데이터가 변경이 된다.', async () => {
    // 실제 데이터 흐름을 파악하려고 한다.
    const spy = jest.spyOn(axios, 'get');
    // td 는 원래 클릭기능이 있는것이 아니니 setup 상황에서 설정해준다
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    act(() => {
      renderWithProvider(<Price device='desktop' />);
    });

    const DatePicker = await screen.findByTestId(/chart-datepicker/i);
    const DateDiv = document.querySelector('.ant-picker-input');
    const DateInput = DateDiv?.querySelector('input')!;

    expect(spy).toHaveBeenNthCalledWith(2, 'https://api.closet-online.com/posts/chart?year=2023', {
      withCredentials: true,
    });

    // input 을 클릭하고 2022를 입력한다
    user.click(DatePicker);
    user.type(DatePicker, '2022');

    await waitFor(() => {
      // 클릭하자마자 Fetch 가 이루어지는것이 아니니 waitfor 로 감싸주도록 하자
      user.click(document.querySelector('.ant-picker-cell-selected')!);
      expect(DateInput).toHaveValue('2022');
      expect(spy).toHaveBeenNthCalledWith(3, 'https://api.closet-online.com/posts/chart?year=2022', {
        withCredentials: true,
      });
    });

    // Title 을 불러온다
    const PricePerYear = await screen.findByTestId(/price-title/i);

    await waitFor(() => {
      expect(PricePerYear).toHaveTextContent(/220,000/);
    });
  });
  it.skip('특정 카테고리를 선택하였을 때, 카테고리 내 체크 표시 및 카테고리 카드 내 가격, badge 생성', () => {
    // 데스크탑 환경에서 렌더링
    // Outer categori 클릭
    // 카테고리 클릭 표시 (.ant-tag-checkable-checked) + 카테고리 카드 내 정보 갱신
    // 카드 내 베지 삭제버튼 클릭
    // 카드 정보 갱신 + 카테고리 클릭 체크 삭제
  });
  it.skip('데스크탑 환경에서는 그래프의 x축의 개월수가 12개월로 렌더링 된다.', async () => {
    // 데스크탑 환경에서 렌더링
    // data-testid = /slice/ 의 개수가 12개
    // const GraphRectElements = await screen.findAllByTestId(/slice-0/i);
    // 확인
  });
  it.skip('모바일 환경에서는 그래프의 x축의 개월수가 6개월로 렌더링 된다.', () => {
    // 모바일 환경에서 렌더링
    // data-testid = /slice/ 의 개수가 6개
    // 확인
  });
});
