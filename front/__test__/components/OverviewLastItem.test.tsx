import { screen, render } from '@testing-library/react';

import LastItem from '../../components/main/LastItem';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import { OverviewResponseData } from '../../__mocks__/overview/data';

describe('Overview LastItem', () => {
  const fetchItem = OverviewResponseData.theOldestData;

  it('데이터를 전달받아 렌더링', () => {
    renderWithProvider(<LastItem item={fetchItem} />);

    const TitleElement = screen.getByTestId(/ListItemTitle/i);
    const DateElement = screen.getByTestId(/ListItemDate/i);
    const PriceElement = screen.getByTestId(/ListItemPrice/i);

    expect(TitleElement).toHaveTextContent(/블랙스포츠반바지/i);
    expect(DateElement).toHaveTextContent(/2019-01/i);
    expect(PriceElement).toHaveTextContent(/50,000/i);
  });
});
