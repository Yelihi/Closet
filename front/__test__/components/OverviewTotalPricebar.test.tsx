import { screen, render, act } from '@testing-library/react';

import TotalPriceBar from '../../components/main/chart/TotalPriceBar';

import ResizeObserverMock, { listener } from '../../__mocks__/overview/ResizeObserver';

window.ResizeObserver = window.ResizeObserver || ResizeObserverMock;

type CurrentPriceProps = {
  totalPrice: number;
  currentPrice: number;
};

describe('Overview TotalPricebar', () => {
  const defaultData = {
    totalPrice: 500000,
    currentPrice: 450000,
  };
  const mountComponent = (props: CurrentPriceProps) => {
    const { container } = render(<TotalPriceBar {...props} />);
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

  it('전달받은 가격에 따라 그래프 렌더링', () => {
    const { container } = mountComponent(defaultData);

    expect(container).toHaveTextContent(/Total/i);
    expect(container).toHaveTextContent(/Current/i);
    expect(container).toHaveTextContent(/500000/);
    expect(container).toHaveTextContent(/450000/);
  });
});
