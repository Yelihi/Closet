import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { mockIntersectionObserver } from '../../jest.setup';
import axios from 'axios';

import Store from '../../pages/closet/store';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';

import * as t from '../../reducers/type';

import { MakeStore } from './MakeStore';

jest.useFakeTimers();

// antd 의 pagination 내에서 아마도 aria 속성을 추가하였기 때문에 아래처럼 mock 처리 해주어야 한다
beforeAll(() => {
  window.IntersectionObserver = mockIntersectionObserver;
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('Store', () => {
  it('desktop 환경에서 성공적으로 렌더링된다', async () => {
    const TestStore = await MakeStore([t.LOAD_ITEMS_REQUEST]);

    renderWithProvider(<Store device='desktop' />, { store: TestStore });

    const Title = await screen.findByTestId(/storeTitle/i);
    const CategoriButton = await screen.findByTestId(/categoriSelect/i);
    const TableRow = await screen.findAllByTestId(/tableTr/i);
    const IntergratedData = await screen.findAllByTestId(/ProcessIntergratedData/i);
    const AddProductButton = await screen.findByTestId(/addproductbutton/i);
    const CategoriLabel = await screen.findByTestId(/categoriLabel/i);

    // countup 패키지 때문에 화면에 숫자가 좀 딜레이 되서 완성된다
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      ['10', '1,125,000', 'Outer'].forEach((item, idx) => {
        expect(IntergratedData[idx]).toHaveTextContent(item);
      });
    });

    expect(Title).toHaveTextContent(/CHECK YOUR ITEMS/i);
    expect(CategoriButton).toHaveTextContent(/Categori/i);
    expect(TableRow).toHaveLength(9);
    expect(AddProductButton).toHaveTextContent(/ADD PRODUCT/i);
    expect(CategoriLabel).toBeInTheDocument();
  });
  it('phone 환경에서 성공적으로 렌더링된다', async () => {
    const TestStore = await MakeStore([t.LOAD_ITEMS_REQUEST]);

    renderWithProvider(<Store device='phone' />, { store: TestStore });

    const Title = await screen.findByTestId(/storeTitle/i);
    const CategoriButton = await screen.findByTestId(/categoriSelect/i);
    const IntergratedData = await screen.findAllByTestId(/ProcessIntergratedData/i);
    const AddProductButton = await screen.findByTestId(/addproductbutton/i);
    const CategoriLabel = await screen.findByTestId(/categoriLabel/i);
    const ItemCards = await screen.findAllByTestId(/itemcard/i);

    // countup 패키지 때문에 화면에 숫자가 좀 딜레이 되서 완성된다
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      ['10', '1,125,000', 'Outer'].forEach((item, idx) => {
        expect(IntergratedData[idx]).toHaveTextContent(item);
      });
    });

    expect(Title).toHaveTextContent(/CHECK YOUR ITEMS/i);
    expect(CategoriButton).toHaveTextContent(/Categori/i);
    expect(AddProductButton).toHaveTextContent(/ADD PRODUCT/i);
    expect(CategoriLabel).toBeInTheDocument();
    expect(ItemCards).toHaveLength(9);
  });
  it('phone 환경에서 스크롤을 내리면 추가 데이터를 fetching 한다', async () => {
    const spy = jest.spyOn(axios, 'get');
    const TestStore = await MakeStore([t.LOAD_ITEMS_REQUEST]);

    renderWithProvider(<Store device='phone' />, { store: TestStore });

    const Title = await screen.findByTestId(/storeTitle/i);
    const ItemCards = await screen.findAllByTestId(/itemcard/i);
    expect(Title).toBeInTheDocument();
    expect(spy).toHaveBeenCalledTimes(3);
    expect(ItemCards).toHaveLength(9);

    // 실측 시 750정도 이상 내려갈 시 ref 마주침
    fireEvent.scroll(window, { target: { scrollY: 800 } });

    await waitFor(() => {
      console.log(window.scrollY);
      expect(spy).toHaveBeenCalledTimes(5);
      expect(spy).toHaveBeenNthCalledWith(
        5,
        'https://api.closet-online.com/posts/clothes/store?lastId=23&categori=&deviceType=phone',
        { withCredentials: true }
      );
    });

    const AfterItemCards = await screen.findAllByTestId(/itemcard/i);

    await waitFor(() => {
      expect(AfterItemCards).toHaveLength(10);
    });
  });
});
