import { screen, fireEvent } from '@testing-library/react';

import Store from '../../pages/closet/store';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';

import * as t from '../../reducers/type';

import { MakeStore } from './MakeStore';

// antd 의 pagination 내에서 아마도 aria 속성을 추가하였기 때문에 아래처럼 mock 처리 해주어야 한다
beforeAll(() => {
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
    setTimeout(
      () =>
        ['10', '1,125,000', 'Outer'].forEach((item, idx) => {
          expect(IntergratedData[idx]).toHaveTextContent(item);
        }),
      3000
    );

    expect(Title).toHaveTextContent(/CHECK YOUR ITEMS/i);
    expect(CategoriButton).toHaveTextContent(/Categori/i);
    expect(TableRow).toHaveLength(9);
    expect(AddProductButton).toHaveTextContent(/ADD PRODUCT/i);
    expect(CategoriLabel).toBeInTheDocument();
  });
  it.skip('phone 환경에서 성공적으로 렌더링된다', async () => {
    const TestStore = await MakeStore([t.LOAD_ITEMS_REQUEST]);

    renderWithProvider(<Store device='phone' />, { store: TestStore });

    const Title = await screen.findByTestId(/storeTitle/i);
    const CategoriButton = await screen.findByTestId(/categoriSelect/i);
    const IntergratedData = await screen.findAllByTestId(/ProcessIntergratedData/i);
    const AddProductButton = await screen.findByTestId(/addproductbutton/i);
    const CategoriLabel = await screen.findByTestId(/categoriLabel/i);

    // countup 패키지 때문에 화면에 숫자가 좀 딜레이 되서 완성된다
    setTimeout(
      () =>
        ['10', '1,125,000', 'Outer'].forEach((item, idx) => {
          expect(IntergratedData[idx]).toHaveTextContent(item);
        }),
      3000
    );

    expect(Title).toHaveTextContent(/CHECK YOUR ITEMS/i);
    expect(CategoriButton).toHaveTextContent(/Categori/i);
    expect(AddProductButton).toHaveTextContent(/ADD PRODUCT/i);
    expect(CategoriLabel).toBeInTheDocument();
  });
});
