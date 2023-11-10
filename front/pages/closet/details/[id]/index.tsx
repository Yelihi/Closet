import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import * as t from '../../../../reducers/type';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../../reducers/types';
import dynamic from 'next/dynamic';
import addHead from '../../../../util/addHead';

import axios from 'axios';
import { END } from 'redux-saga';
import wrapper from '../../../../store/configureStore';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../../store/configureStore';

import PageLayout from '../../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../../components/recycle/layout/PageMainLayout';
import DetailsModifyButtons from '../../../../components/details/DetailsModifyButtons';
import DetailsMain from '../../../../components/details/DetailsMain';
import CustomBread from '../../../../components/recycle/CustomBread';

import { BreadcrumbItems } from '../../../../components/details/data/ElementData';
import { addPageLayoutProps } from '../../../../components/details/data/ElementData';

const ItemForm = dynamic(() => import('../../../../components/recycle/formElements/ItemForm'));
const SortingResultComponent = dynamic(
  () => import('../../../../components/recycle/submitSuccess/SortingResultComponent')
);

const Details = () => {
  const router = useRouter();
  const { deleteItemDone, deleteItemError } = useSelector((state: rootReducerType) => state.post);
  const { id } = router.query;
  const [isModifyMode, setIsModifyMode] = useState(false);

  const { title, subTitle } = addPageLayoutProps;

  // ItemsForm 컴포넌트는 Add, Details 페이지에서 재사용되기에 같은 Submit 이라도 작동해야하는 action 에서 차이가 있다
  // 이에 dispatch 의 type을 props 로 전달하여 상황에 맞는 dispatch 를 가능하게 하도록 해주는 transferTypes 함수를 전달한다.
  const transferTypes = useCallback(() => {
    return t.PATCH_ITEM_REQUEST;
  }, []);

  const startModify = useCallback(() => {
    setIsModifyMode(true);
  }, []);

  return (
    <PageLayout>
      {deleteItemDone ? <SortingResultComponent sort='deleteItem' id={Number(id)} /> : null}
      {deleteItemError ? <SortingResultComponent sort='deleteItemFailure' id={Number(id)} /> : null}
      {!deleteItemDone && !deleteItemError && !isModifyMode ? (
        <PageMainLayout istitle={false}>
          <HandleContainer>
            <CustomBread items={BreadcrumbItems} />
            <DetailsModifyButtons id={id} startModifyFunc={startModify} position='up' />
          </HandleContainer>
          <DetailsMain />
          <DetailsModifyButtons id={id} startModifyFunc={startModify} position='down' />
        </PageMainLayout>
      ) : null}
      {!deleteItemDone && !deleteItemError && isModifyMode ? (
        <ItemForm
          title={title}
          subTitle={subTitle}
          type='details'
          itemId={Number(id)}
          resultNumber={Number(id)}
          Submit={transferTypes}
          setState={setIsModifyMode}
        />
      ) : null}
    </PageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.LOAD_ITEM_REQUEST,
    data: { clothId: context.params?.id },
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  if (!store.getState().user.me) {
    return {
      redirect: {
        destination: '/userlogin',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default addHead(Details, 'closet', '이 페이지는 의류 상세페이지이며, 수정이나 삭제를 할 수 있습니다');

const HandleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;
