import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { media } from '../../styles/media';
import ListItem from '../recycle/ListItem';
import { SWR } from '../../util/SWR/API';
import RenderBySearchState from './RenderBySearchState';

import type { ItemsArray } from '../store/TableData';

type SearchResultsProps = {
  isDelayed: boolean;
  delayedValue: string | undefined;
};

const SearchResultsList = ({ isDelayed, delayedValue }: SearchResultsProps) => {
  const { data, isLoading, error } = SWR.getItemsInSearchValue(delayedValue);
  const router = useRouter();

  const moveToDetailPage: (id: number) => () => void = useCallback(
    (id: number) => () => {
      router.push(`/closet/details/${id}`);
    },
    []
  );

  if (isLoading || isDelayed) return <RenderBySearchState state='Loading' />;
  if (error) return <RenderBySearchState state='Error' />;
  if (!data) return <RenderBySearchState state='Initial' />;
  if (data?.matchedDatas.length === 0) return <RenderBySearchState state='NoFound' />;

  return (
    <ResultsListContainer>
      <Flex>
        <h4>클릭 시 상세페이지로 이동합니다</h4>
        <SummarySearchResults>
          <p data-testid='searchResult'>
            <strong>{data.totalNumber}</strong> 건의 검색 결과가 있습니다
          </p>
        </SummarySearchResults>
      </Flex>
      <ResultsList>
        {data?.matchedDatas.map((item: ItemsArray) => {
          return <ListItem key={item.id} item={item} func={moveToDetailPage} />;
        })}
      </ResultsList>
    </ResultsListContainer>
  );
};

export default SearchResultsList;

const ResultsListContainer = styled.section`
  padding: 2rem;
  width: 100%;
  height: auto;

  h4 {
    display: block;
    color: ${({ theme }) => theme.colors.symbol};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

const SummarySearchResults = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  strong {
    color: ${({ theme }) => theme.colors.symbol};
  }
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 500px;
  padding: 1rem 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  ${media.tablet} {
    height: 25rem;
  }
`;
