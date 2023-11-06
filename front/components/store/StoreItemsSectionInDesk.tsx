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
  const { storeCategori, storeCurrentPage, indexArray } = useSelector((state: rootReducerType) => state.post);
  const { lastId } = modifyIndexArray(indexArray, storeCategori, storeCurrentPage);

  const FetchInDesktop = SWR.getItemsPerPagenation(lastId, storeCategori, windowWidth);
  const { itemsInDesk, itemsArrayInDesk, isLoadingDesk, mutateInDesk } = FetchInDesktop;

  const modifiedItems = modifyItmesPurchaseDate(itemsArrayInDesk);

  const deleteItemAtTable = useCallback(
    (id: number) => () => {
      dispatch({
        type: t.DELETE_ITEM_REQUEST,
        data: { clothId: id },
      });
      if (Array.isArray(itemsArrayInDesk)) {
        const newData = itemsArrayInDesk.filter(item => item.id !== id);
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
