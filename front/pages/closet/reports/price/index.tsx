import React, { useEffect } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../../reducers/types';
import { mutateFetcher, backUrl } from '../../../../config/config';
import addHead from '../../../../util/addHead';
import useDeviceWidth from '../../../../hooks/useDeviceWidth';
import dynamic from 'next/dynamic';
import { media } from '../../../../styles/media';
import wrapper, { SagaStore } from '../../../../store/configureStore';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { END } from 'redux-saga';

import * as t from '../../../../reducers/type';
import PageLayout from '../../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../../components/recycle/layout/PageMainLayout';
import CustomBread from '../../../../components/recycle/CustomBread';
import SelectYearPicker from '../../../../components/chart/SelectYearPicker';
import SelectCategories from '../../../../components/chart/SelectCategories';
import PriceSummuryInCategori from '../../../../components/chart/price/PriceSummuryInCategori';
import PriceMonthlyItems from '../../../../components/chart/price/PriceMonthlyItems';
import Intersection from '../../../../components/recycle/element/Intersection';
import ChartTitle from '../../../../components/chart/ChartTitle';

const PriceChartAtDesktop = dynamic(() => import('../../../../components/chart/price/PriceChartDesktop'), {
  ssr: false,
});
const PriceChartAtPhone = dynamic(() => import('../../../../components/chart/price/PriceChartMobile'), { ssr: false });

type PriceProps = {
  device: 'desktop' | 'phone';
};

const Price = ({ device }: PriceProps) => {
  const { windowWidth } = useDeviceWidth(device);
  const { selectedYearInPrice } = useSelector((state: rootReducerType) => state.chart);
  const { data, isLoading, error } = useSWR(`${backUrl}/posts/chart?year=${selectedYearInPrice}`, mutateFetcher);
  console.log('SWR', data);

  return (
    <PageLayout>
      <PageMainLayout istitle={false}>
        <CustomBread nextPage='Price' />
        <TitleSection>
          <HeadSection>
            <Title>total price per year</Title>
            {windowWidth == 'desktop' && <SelectYearPicker />}
          </HeadSection>
          <ChartTitle title={undefined} fallback={isLoading} />
          {windowWidth == 'phone' && <SelectYearPicker />}
        </TitleSection>
        {windowWidth === 'desktop' ? (
          <PriceChartAtDesktop fallback={isLoading} />
        ) : (
          <PriceChartAtPhone fallback={isLoading} />
        )}
        <SelectCategories />
        <Intersection marginBottom={1.5} />
        <CardSection>
          <PriceSummuryInCategori fallback={isLoading} />
          <PriceMonthlyItems fallback={isLoading} />
        </CardSection>
      </PageMainLayout>
    </PageLayout>
  );
};

export default addHead(Price, 'closet', '이 페이지는 의류 가격 차트 페이지입니다');

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  const userAgent = context.req ? context.req.headers['user-agent'] : navigator.userAgent;
  let isMobile = false;
  if (userAgent) {
    isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i));
  }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  return {
    props: {
      device: isMobile ? 'phone' : 'desktop',
    },
  };
});

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  gap: 2rem;
  margin-bottom: 20px;
`;

export const Title = styled.dt`
  font-size: 15px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  width: 100%;

  ${media.tablet} {
    width: 40%;
  }
`;

export const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const PriceTitle = styled.dd`
  display: block;
  font-size: clamp(40px, 2.2vw, 45px);
  line-height: 18px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1.5rem;

  ${media.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;
