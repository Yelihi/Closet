import { screen } from '@testing-library/react';

import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import SearchResultsList from '../../components/search/SearchResultsList';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

const initialState = {
  isDelayed: false,
  delayedValue: undefined,
};

describe('SearchResultsList', () => {
  it('성공적으로 렌더링 된다', () => {
    renderWithProvider(<SearchResultsList {...initialState} />);

    const TextByInitialStatus = screen.getByText(/확인하고 싶은 의류명을 검색해주세요/i);
    expect(TextByInitialStatus).toBeInTheDocument();
  });

  it('검색어를 입력중인 상황(debounce)에서는 로딩 화면이 나타난다', () => {
    const StateWhenIsSearching = {
      isDelayed: true,
      delayedValue: undefined,
    };
    renderWithProvider(<SearchResultsList {...StateWhenIsSearching} />);

    const TextByLoadingStatus = screen.getByText(/검색중입니다.../i);
    expect(TextByLoadingStatus).toBeInTheDocument();
  });

  it('전달된 delayedValue 에 해당하는 데이터가 존재한다면 아이템리스트가 렌더링된다', async () => {
    const SearchValue = {
      isDelayed: false,
      delayedValue: '그',
    };
    renderWithProvider(<SearchResultsList {...SearchValue} />);

    const DescriptionOfList = await screen.findByRole('heading', { level: 4 });
    const SearchResultMessage = await screen.findByTestId(/searchResult/i);
    const ResultList = await screen.findAllByTestId(/listItem/i);

    expect(DescriptionOfList).toHaveTextContent(/클릭 시 상세페이지로 이동합니다/i);
    expect(SearchResultMessage).toHaveTextContent(/2 건의 검색 결과가 있습니다/i);
    expect(ResultList).toHaveLength(2);
  });
});
