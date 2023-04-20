import React, { useCallback } from 'react';
import Router from 'next/router';
import * as t from '../../../reducers/type';

import BaseResultComponent from './BaseResultComponent';
import { Data, ResultDataKey } from './data';
import { useDispatch } from 'react-redux';

type Props = {
  sort: ResultDataKey;
  id: number | '';
  setConvertState?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SortingResultComponent = ({ sort, id, setConvertState }: Props) => {
  const dispatch = useDispatch();
  const data = Data[sort];
  const { title, subTitle, buttonNamePrimary, buttonName, status, primaryPage, otherPage } = data;

  const movePage = useCallback(
    (page: string, id: '' | number) => () => {
      if (page === 'add') {
        dispatch({
          type: t.RESET_UPLOAD_PAGE,
        });
      }
      if (page === 'details') {
        Router.push(`/closet/${page}/${id}`);
      } else {
        Router.push(`/closet/${page}`);
      }

      if (setConvertState) {
        setConvertState(prev => !prev);
      }
    },
    []
  );

  return (
    <>
      <BaseResultComponent
        title={title}
        subTitle={subTitle}
        status={status}
        onClick={movePage(otherPage, '')}
        onClickPrimary={movePage(primaryPage, id)}
        buttonNamePrimary={buttonNamePrimary}
        buttonName={buttonName}
      />
    </>
  );
};

export default SortingResultComponent;
