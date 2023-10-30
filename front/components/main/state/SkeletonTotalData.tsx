import React from 'react';
import styled from 'styled-components';

import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import SkeletonPie from '../chart/SkeletonPie';
import { TotalDiv, DestDiv } from '../TotalData';

const SkeletonTotalData = () => {
  return (
    <LinkCardLayout Subject='total quantity' Address='Store' onMove={() => console.log('')} divided={1}>
      <TotalDiv>
        <SkeletonTitle />
      </TotalDiv>
      <DestDiv>
        <p>현재까지 저장된 모든 의류 및 신발의 수량입니다</p>
      </DestDiv>
      <SkeletonPie />
    </LinkCardLayout>
  );
};

export default SkeletonTotalData;

const SkeletonTitle = styled.div`
  width: 30%;
  height: clamp(33px, 3.6vw, 55px);
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 1rem;
  ${({ theme }) => theme.animation.fade({ name: 'OverviewPieTitle' })}
`;
