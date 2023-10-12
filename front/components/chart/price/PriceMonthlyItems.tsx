import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { media } from '../../../styles/media';
import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import { SkeletonListItem } from '../../recycle/ListItem';
import { ItemsArray } from '../../store/TableData';

type PriceMonthlyItemsProps = {
  fallback?: boolean;
};
type ListItemsProps = Pick<PriceMonthlyItemsProps, 'fallback'> & { children: React.ReactNode };

const ListItems = ({ fallback, children }: ListItemsProps) => {
  const dummyArray = new Array(6).fill({});
  if (fallback) {
    return (
      <ResultsList>
        {dummyArray.map((_, i) => (
          <SkeletonListItem />
        ))}
      </ResultsList>
    );
  } else {
    return <ResultsList>{children}</ResultsList>;
  }
};

const PriceMonthlyItems = ({ fallback }: PriceMonthlyItemsProps) => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  return (
    <LinkCardLayout Subject='Monthly Itmes' Address='Store' onMove={moveToStore}>
      <ResultsListContainer>
        <Flex>
          <h4>월별 저장 의류: {fallback ? '--' : 2} 벌 </h4>
        </Flex>
        <ListItems fallback={fallback}>
          {/* {data?.matchedDatas.map((item: ItemsArray) => {
          return <ListItem key={item.id} item={item} func={moveToDetailPage} />;
        })} */}
        </ListItems>
      </ResultsListContainer>
    </LinkCardLayout>
  );
};

export default PriceMonthlyItems;

const ResultsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  height: 25rem;
  padding: 1rem 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  ${media.tablet} {
    height: 18rem;
  }
`;
