import React from 'react';
import addHead from '../../../util/addHead';
import dynamic from 'next/dynamic';

import * as t from '../../../reducers/type';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../store/configureStore';

import wrapper from '../../../store/configureStore';

import PageLayout from '../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../components/recycle/layout/PageMainLayout';
import CustomBread from '../../../components/recycle/CustomBread';

import { modifyIndexArray } from '../../../util/Store/modifyData';
import { confirmEmptyState } from '../../../util/Store/confirmCondition';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';
import useDeviceWidth from '../../../hooks/useDeviceWidth';
import { SWR } from '../../../util/SWR/API';

import StoreTitleSection from '../../../components/store/StoreTitleSection';
import StoreAddSection from '../../../components/store/StoreAddSection';
import StoreSummaryInfoSection from '../../../components/store/StoreSummaryInfoSection';
import { detectMobileDevice } from '../../../util/PrimitiveUtils/string';

const SkeletonStore = dynamic(() => import('../../../components/store/SkeletonStore'));
const RenderErrorPage = dynamic(() => import('../../../components/state/error/RenderErrorPage'));
const RenderEmptyPage = dynamic(() => import('../../../components/state/empty/RenderEmptyPage'));
const StoreItemsSectionInDesk = dynamic(() => import('../../../components/store/StoreItemsSectionInDesk'));
const StoreItemsSectionInMobile = dynamic(() => import('../../../components/store/StoreItemsSectionInMobile'));

interface StoreProps {
  device: 'phone' | 'desktop';
}

const Store = ({ device }: StoreProps) => {
  const { userItems, indexArray, loadItemsLoding, deleteItemLoding, storeCategori, storeCurrentPage } = useSelector(
    (state: rootReducerType) => state.post
  );
  // 사용자가 임의로 화면의 크기를 조절할 경우를 대비한 resize 이벤트 등록
  const { windowWidth } = useDeviceWidth(device);
  // 사용자가 선택한 카테고리, 페이지 번호, 전체 의류의 index 배열을 통해 DB의 의류 search ID의 기준점을 계산
  const { lastId } = modifyIndexArray(indexArray, storeCategori, storeCurrentPage);

  // 데스크탑 환경, 모바일 환경에서는 현재 페이지내이션에 해당하는 최대 9개의 데이터를 가져온다 (현 고유 key는 StoreitemsSection 컴포넌트가 공유한다)
  // 모바일 환경은 무한 스크롤 방식이기에 이에 맞는 useSWRInfinite 을 통해 데이터를 가져온다
  const FetchInDesktop = SWR.getItemsPerPagenation(lastId, storeCategori, windowWidth);
  const FetchInMobile = SWR.getInfiniteItems(storeCategori, windowWidth);

  const { itemsArrayInDesk, errorInDesk, isLoadingDesk } = FetchInDesktop;
  const { itemsArrayInMobile, isLoadingMobile, errorInMobile } = FetchInMobile;

  // 데스크탑 환경과 모바일 환경 각각에서의 의류 아이템의 존재 여부를 판별
  const isEmptyInDesk = confirmEmptyState(storeCategori);
  const isEmptyInMobile = confirmEmptyState(storeCategori);

  if (errorInDesk || errorInMobile) return <RenderErrorPage state='OverView' />;
  // saga 를 통한 전체 데이터를 가져오지 못했을 경우
  if (!userItems || userItems?.items.length === 0) return <RenderEmptyPage state='Store' />;
  // 데스크탑 환경과 모바일 환경 각각 전달되는 의류 아이템이 없을 경우
  if (isEmptyInDesk(isLoadingDesk, itemsArrayInDesk)) return <RenderEmptyPage state='Store' />;
  if (isEmptyInMobile(isLoadingMobile, itemsArrayInMobile)) return <RenderEmptyPage state='Store' />;

  return (
    <SkeletonStore loadItemsLoading={loadItemsLoding} deleteItemLoding={deleteItemLoding} windowWidth={windowWidth}>
      <PageLayout>
        <PageMainLayout istitle={false}>
          <CustomBread nextPage='Store' />
          <StoreTitleSection />
          <StoreSummaryInfoSection />
          <StoreAddSection />
          {windowWidth === 'desktop' ? <StoreItemsSectionInDesk windowWidth={windowWidth} /> : null}
          {windowWidth === 'phone' ? <StoreItemsSectionInMobile windowWidth={windowWidth} /> : null}
        </PageMainLayout>
      </PageLayout>
    </SkeletonStore>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  const userAgent = context.req ? context.req.headers['user-agent']! : '';
  // userAgent 를 통하여 현 접속중인 기기를 판별한다.
  const isMobile = detectMobileDevice(userAgent);
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.LOAD_ITEMS_REQUEST,
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
    props: {
      device: isMobile ? 'phone' : 'desktop',
    },
  };
});

export default addHead(Store, 'closet', '이 페이지는 저장한 의류 전체를 보여주는 페이지입니다.');
