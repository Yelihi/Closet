import { screen, fireEvent, waitFor, MatcherFunction } from '@testing-library/react';
import { server } from '../../__mocks__/server';
import SearchModal from '../../components/search/SearchModal';
import { renderWithProvider } from '../../util/TestUtils/renderWithProvider';
import { getClothesWithSearch } from '../../__mocks__/search/handlers';

// `NextRouter` was not mounted 이라는 오류에 대한 useRouter의 mocking
// next.js 외부에서 useRouter 를 사용했기 때문에 발생 (테스트 환경이라..)
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

describe('SearchModal', () => {
  it('성공적으로 렌더링', () => {
    renderWithProvider(<SearchModal />);

    const SearchInputElement = screen.getByTestId(/searchInput/i);
    const StoreLinkElement = screen.getByTestId(/store/i);
    const AddLinkElement = screen.getByTestId(/add/i);
    const AdministrationLinkElement = screen.getByTestId(/administration/i);
    const InitialNotification = screen.getByText(/확인하고 싶은 의류명을 검색해주세요/i);

    expect(SearchInputElement).toBeInTheDocument();
    expect(StoreLinkElement).toBeInTheDocument();
    expect(AddLinkElement).toBeInTheDocument();
    expect(AdministrationLinkElement).toBeInTheDocument();
    expect(InitialNotification).toBeInTheDocument();
  });
  it('검색창에 단어를 입력하면 x 아이콘이 렌더링된다.', () => {
    renderWithProvider(<SearchModal />);

    const SearchInputElement = screen.getByTestId(/searchInput/i);

    fireEvent.change(SearchInputElement, { target: { value: '가나' } });

    const DeleteSearchValueIcon = screen.getByTestId(/deleteIcon/i);

    expect(DeleteSearchValueIcon).toBeInTheDocument();
  });
  it('x 아이콘을 클릭할 시 입력값이 삭제되면서 x 아이콘도 사라진다', () => {
    renderWithProvider(<SearchModal />);

    const SearchInputElement = screen.getByTestId(/searchInput/i);

    fireEvent.change(SearchInputElement, { target: { value: '가나' } });

    const DeleteSearchValueIcon = screen.getByTestId(/deleteIcon/i);

    fireEvent.click(DeleteSearchValueIcon);

    expect(SearchInputElement).toHaveValue('');
    expect(DeleteSearchValueIcon).not.toBeInTheDocument();
  });
  it('검색창에 `그`를 입력하면 2개의 검색 결과를 불러온다', async () => {
    renderWithProvider(<SearchModal />);

    const SearchInputElement = screen.getByTestId(/searchInput/i);

    fireEvent.change(SearchInputElement, { target: { value: '그' } });

    const SearchLists = await screen.findAllByTestId(/listItem/i);
    const SearchResultMessage = await screen.findByTestId(/searchResult/i);
    expect(SearchLists).toHaveLength(2);
    expect(SearchResultMessage).toHaveTextContent('2 건의 검색 결과가 있습니다');
  });
  it('검색 결과가 없다면 `찾으시는 의류가 존재하지 않아요!` 라는 문구가 나타난다', async () => {
    renderWithProvider(<SearchModal />);

    const SearchInputElement = screen.getByTestId(/searchInput/i);

    fireEvent.change(SearchInputElement, { target: { value: 'asd' } });

    const SearchResultMessage = await screen.findByText(/찾으시는 의류가 존재하지 않아요!/i);
    expect(SearchResultMessage).toBeInTheDocument();
  });
  it('요청에 실패할 시 에러 문구 `검색 과정에서 에러가 발생하였습니다.` 라는 문구가 나타난다', async () => {
    // 네트워크 내 에러가 발생
    server.use(getClothesWithSearch(true));
    renderWithProvider(<SearchModal />);
    const SearchInputElement = screen.getByTestId(/searchInput/i);

    fireEvent.change(SearchInputElement, { target: { value: 'asd' } });

    const SearchResultMessage = await screen.findByText(/검색 과정에서 에러가 발생하였습니다./i);
    expect(SearchResultMessage).toBeInTheDocument();
  });
});
