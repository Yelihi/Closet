import React from 'react';
import addHead from '../../../util/addHead';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../store/configureStore';

import wrapper from '../../../store/configureStore';

import * as t from '../../../reducers/type';

import IntroSection from '../../../components/main/IntroSection';
import TotalData from '../../../components/main/TotalData';
import RecentlyItem from '../../../components/main/RecentlyItem';
import CurrentYearPrice from '../../../components/main/CurrentYearPrice';
import LastItem from '../../../components/main/LastItem';
import Nav from '../../../components/Nav';
import RenderEmptyPage from '../../../components/state/empty/RenderEmptyPage';
import RenderErrorPage from '../../../components/state/error/RenderErrorPage';
import Intersection from '../../../components/recycle/Intersection';
import RenderPageInLoading from '../../../components/main/state/RenderPageInLoading';

import {
  Container,
  IntroRow,
  NavRow,
  DataRow,
  ResRow,
  InfoRow,
  LastDataRow,
} from '../../../components/main/state/RenderPageInLoading';
import { SWR } from '../../../util/SWR/API';

const Overview = () => {
  const { data, error, isLoading } = SWR.getSummuryInUserItems();

  if (isLoading) return <RenderPageInLoading />;
  if (error) return <RenderErrorPage state='OverView' />;
  if (!data || data.theOldestData === undefined) return <RenderEmptyPage state='OverView' />;

  return (
    <Container>
      <NavRow>
        <Nav />
      </NavRow>
      <Intersection></Intersection>
      <IntroRow>
        <IntroSection />
      </IntroRow>
      <DataRow>
        <TotalData data={data.categori} total={data.totalNumber} />
      </DataRow>
      <ResRow>
        <RecentlyItem items={data.lastDatas} />
      </ResRow>
      <InfoRow>
        <LastItem item={data.theOldestData} />
      </InfoRow>
      <LastDataRow>
        <CurrentYearPrice totalPrice={data.totalPrice} currentPrice={data.currentYearPrice} />
      </LastDataRow>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
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

export default React.memo(addHead(Overview, 'closet', '이 페이지는 전체 데이터를 요약해주는 메인 페이지입니다'));
