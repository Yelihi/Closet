import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TotalPie from '../../components/main/chart/TotalPie';
import { categoriObject } from '../../components/store/data/TableData';

import ResizeObserverMock, { listener } from '../../__mocks__/overview/ResizeObserver';

window.ResizeObserver = window.ResizeObserver || ResizeObserverMock;

describe('Overview Total Pie', () => {
  const defaultCategori = {
    Outer: 4,
    Pant: 3,
    Muffler: 1,
  };
  const mountComponent = (item: categoriObject) => {
    const { container } = render(<TotalPie item={item} />);
    act(() => {
      listener?.([
        {
          contentRect: {
            width: 800,
            height: 400,
          },
        },
      ]);
    });
    return { container };
  };

  it('전달 카테고리에 따른 그래프 렌더링', () => {
    const { container } = mountComponent(defaultCategori);

    const Categories = Object.keys(defaultCategori);
    Categories.forEach(categori => {
      expect(container).toHaveTextContent(categori);
    });
  });
});
