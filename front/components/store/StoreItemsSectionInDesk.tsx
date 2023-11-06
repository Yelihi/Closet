import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { SWR } from '../../util/SWR/API';
import { StoreHeader } from './data/TableData';
import * as t from '../../reducers/type';

import StoreTable from './StoreTable';
import StoreCardBoard from './StoreCardBoard';
import StorePagination from './StorePagination';
import StoreMenuSection from './StoreMenuSection';
import { modifyItmesPurchaseDate, modifyIndexArray } from '../../util/Store/modifyData';
import { rootReducerType } from '../../reducers/types';

type StoreItemsSectionInDeskProps = {
  windowWidth: 'desktop' | 'phone';
};

const StoreItemsSectionInDesk = ({ windowWidth }: StoreItemsSectionInDeskProps) => {
  const dispatch = useDispatch();
  const [segment, setSegment] = useState<string | number>('Table');
  // 카테고리와 현 페이지 정보는 고유 key 를 통한 state 를 공유해야 하는 페이지 및 컴포넌트에 동시 필요하기에 전역 상태로 관리하였다.
  const { storeCategori, storeCurrentPage, indexArray } = useSelector((state: rootReducerType) => state.post);
  const { lastId } = modifyIndexArray(indexArray, storeCategori, storeCurrentPage);

  // 계산된 lastId 를 기점으로 DB 에서 9개의 데이터를 요청
  const FetchInDesktop = SWR.getItemsPerPagenation(lastId, storeCategori, windowWidth);
  const { itemsInDesk, itemsArrayInDesk, isLoadingDesk, mutateInDesk } = FetchInDesktop;

  // 테이블 날짜 양식에 맞게 itemsArray를 수정
  const modifiedItems = modifyItmesPurchaseDate(itemsArrayInDesk);

  const deleteItemAtTable = useCallback(
    (id: number) => () => {
      dispatch({
        type: t.DELETE_ITEM_REQUEST,
        data: { clothId: id },
      });
      if (Array.isArray(itemsArrayInDesk)) {
        const newData = itemsArrayInDesk.filter(item => item.id !== id);
        // mutate 를 통해 현 캐시데이터를 변경하여 즉각 화면에 반영한 뒤, revalidate 를 통해 실 데이터와의 재검증에 들어간다.
        mutateInDesk({ ...itemsInDesk, items: newData }, { revalidate: false });
      }
    },
    [itemsInDesk, itemsArrayInDesk, windowWidth]
  );

  return (
    <>
      <StoreMenuSection segment={segment} setSegment={setSegment} windowWidth={windowWidth} />
      <ItemsStoreSection>
        {segment === 'Table' ? (
          <StoreTable
            headData={StoreHeader}
            itemsData={modifiedItems}
            isDelete={true}
            onSubmit={deleteItemAtTable}
            isLoading={isLoadingDesk}
          />
        ) : null}
        {segment === 'Kanban' ? (
          <StoreCardBoard
            itemData={modifiedItems}
            onSubmit={deleteItemAtTable}
            isLoading={isLoadingDesk}
            windowWidth={windowWidth}
          />
        ) : null}
        <div>
          <StorePagination />
        </div>
      </ItemsStoreSection>
    </>
  );
};

export default StoreItemsSectionInDesk;

export const ItemsStoreSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;

  > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`;
