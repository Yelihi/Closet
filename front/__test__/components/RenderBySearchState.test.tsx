import { screen, render } from '@testing-library/react';
import RenderBySearchState from '../../components/search/RenderBySearchState';

import { renderWithRedux } from '../../util/TestUtils/renderWithRedux';

describe('RenderBySearchState', () => {
  describe('성공적으로 랜더링이 된다.', () => {
    it("Loading state 가 전달될 떄 '검색중입니다...' 라는 문구가 랜더된다.", () => {
      renderWithRedux(<RenderBySearchState state='Loading' />);

      const TextByLoadingStatus = screen.getByText(/검색중입니다.../i);
      expect(TextByLoadingStatus).toBeInTheDocument();
    });
    it("Initial state 가 전달될 떄 '확인하고 싶은 의류명을 검색해주세요' 라는 문구가 랜더된다.", () => {
      renderWithRedux(<RenderBySearchState state='Initial' />);

      const TextByInitialStatus = screen.getByText(/확인하고 싶은 의류명을 검색해주세요/i);
      expect(TextByInitialStatus).toBeInTheDocument();
    });
    it("Error state 가 전달될 떄 '검색 과정에서 에러가 발생하였습니다.' 라는 문구가 랜더된다.", () => {
      renderWithRedux(<RenderBySearchState state='Error' />);

      const TextByErrorStatus = screen.getByText(/검색 과정에서 에러가 발생하였습니다./i);
      expect(TextByErrorStatus).toBeInTheDocument();
    });
    it("NoFound state 가 전달될 떄 '찾으시는 의류가 존재하지 않아요!' 라는 문구가 랜더된다.", () => {
      renderWithRedux(<RenderBySearchState state='NoFound' />);

      const TextByNoFoundStatus = screen.getByText(/찾으시는 의류가 존재하지 않아요!/i);
      expect(TextByNoFoundStatus).toBeInTheDocument();
    });
  });
});
