import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useSelector } from 'react-redux';

import { media } from '../../../styles/media';
import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import ListItem, { SkeletonListItem } from '../../recycle/ListItem';
import PriceEmptyMonthlyItmes from './PriceEmptyMonthlyItems';
import { SWR } from '../../../util/SWR/API';
import { ItemsArray } from '../../store/TableData';
import { SortedTotalData } from '../../../util/Chart/Price/convertData';
import { rootReducerType } from '../../../reducers/types';

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
  const { selectedMonthIndexInPrice, selectedYearInPrice } = useSelector((state: rootReducerType) => state.chart);
  const { itemsPerYear, error } = SWR.getItemsPerYear(selectedYearInPrice);
  const { items } = SortedTotalData(itemsPerYear?.items, selectedYearInPrice);

  const ListsPerMonth = items.length === 0 ? [] : items[selectedMonthIndexInPrice];
  const Length = ListsPerMonth.length;

  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  const moveToDetailsPage = useCallback(
    (id: number) => () => {
      Router.push(`/closet/details/${id}`);
    },
    []
  );

  return (
    <LinkCardLayout Subject='Monthly Itmes' Address='Store' onMove={moveToStore}>
      <ResultsListContainer>
        <Flex>
          <h4>
            <Strong>{selectedMonthIndexInPrice + 1}</Strong> 월 저장 의류:{' '}
            <Strong>{fallback ? '--' : ListsPerMonth?.length}</Strong> 벌{' '}
          </h4>
        </Flex>
        {Length == 0 && <PriceEmptyMonthlyItmes />}
        {Length !== 0 && (
          <ListItems fallback={fallback}>
            {ListsPerMonth?.map((item: ItemsArray) => {
              return <ListItem key={item.id} item={item} func={moveToDetailsPage} exceptPrice={true} />;
            })}
          </ListItems>
        )}
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
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.orange};
  font-family: ${({ theme }) => theme.font.Efont};
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
