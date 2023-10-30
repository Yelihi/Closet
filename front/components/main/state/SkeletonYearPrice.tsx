import React from 'react';

import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import SkeletonPriceBar from '../chart/SkeletonPriceBar';
import { TestContainer, Description } from '../CurrentYearPrice';

const currentYear = new Date().getFullYear();

const SkeletonYearPrice = () => {
  return (
    <LinkCardLayout Subject='TotalPrice' Address='Store' onMove={() => console.log('')} divided={2}>
      <TestContainer>
        <Description>{`Current : ${currentYear}년을 기준으로 측정된 가격`}</Description>
        <SkeletonPriceBar />
      </TestContainer>
    </LinkCardLayout>
  );
};

export default SkeletonYearPrice;
