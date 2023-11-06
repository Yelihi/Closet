import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, PaginationProps } from 'antd';
import { changeStorePageNumber } from '../../reducers/post';
import { modifyIndexArray } from '../../util/Store/modifyData';
import { rootReducerType } from '../../reducers/types';

const StorePagination = () => {
  const dispatch = useDispatch();
  const { indexArray, storeCurrentPage, storeCategori } = useSelector((state: rootReducerType) => state.post);
  const { itemsIdArray } = modifyIndexArray(indexArray, storeCategori, storeCurrentPage);

  const pageChange: PaginationProps['onChange'] = page => {
    dispatch(changeStorePageNumber(page));
  };

  const itemRender = (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    if (type === 'page') {
      return (
        <div aria-label={`${page} 페이지 입니다`} role='button'>
          {page}
        </div>
      );
    }

    return originalElement;
  };

  return (
    <div>
      <Pagination
        current={storeCurrentPage}
        onChange={pageChange}
        total={itemsIdArray?.length}
        defaultPageSize={9}
        itemRender={itemRender}
        aria-label='페이지네이션 입니다'
      />
    </div>
  );
};

export default StorePagination;
