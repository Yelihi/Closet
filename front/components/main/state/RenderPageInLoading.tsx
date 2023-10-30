import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/media';

import Nav from '../../Nav';
import Intersection from '../../recycle/element/Intersection';
import IntroSection from '../IntroSection';
import SkeletonLastItem from './SkeletonLastItem';
import SkeletonRecentlyItem from './SkeletonRecentlyItem';
import SkeletonTotalData from './SkeletonTotalData';
import SkeletonYearPrice from './SkeletonYearPrice';

const OverviewInLoading = () => {
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
        <SkeletonTotalData />
      </DataRow>
      <ResRow>
        <SkeletonRecentlyItem />
      </ResRow>
      <InfoRow>
        <SkeletonLastItem />
      </InfoRow>
      <LastDataRow>
        <SkeletonYearPrice />
      </LastDataRow>
    </Container>
  );
};

export default OverviewInLoading;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 30px;
  padding: 0;
  ${media.tablet} {
    display: grid;
    grid-template-rows: 60px 1px 0.45fr 0.45fr;
    grid-template-columns: 0.65fr 0.35fr;
    grid-template-areas:
      'nav nav'
      'inter inter'
      'intro data'
      'recently myinfo'
      'recently lastData';
    gap: 1.5rem;
    height: 100%;
    padding: 24px;
  }
`;

export const NavRow = styled.div`
  grid-area: nav;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 30;

  ${media.tablet} {
    display: flex;
    align-items: center;
    position: relative;
    height: auto;
    border-radius: 10px;
  }
`;

export const IntroRow = styled.div`
  grid-area: intro;
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
    margin-top: 0;
  }
`;

export const DataRow = styled.div`
  grid-area: data;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;

export const ResRow = styled.div`
  grid-area: recently;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;

export const InfoRow = styled.div`
  grid-area: myinfo;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;

export const LastDataRow = styled(InfoRow)`
  grid-area: lastData;
`;
