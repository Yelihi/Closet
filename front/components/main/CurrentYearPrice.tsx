import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import LinkCardLayout from '../recycle/layout/LinkCardLayout';
import TotalPriceBar from './chart/TotalPriceBar';

type CurrentPriceProps = {
  totalPrice: number;
  currentPrice: number;
};

const currentYear = new Date().getFullYear();

const CurrentYearPrice = ({ totalPrice, currentPrice }: CurrentPriceProps) => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  return (
    <LinkCardLayout Subject='TotalPrice' Address='Store' onMove={moveToStore} divided={2}>
      <TestContainer>
        <Description>{`Current : ${currentYear}년을 기준으로 측정된 가격`}</Description>
        <TotalPriceBar currentPrice={currentPrice} totalPrice={totalPrice} />
      </TestContainer>
    </LinkCardLayout>
  );
};

export default CurrentYearPrice;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const Description = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-top: 5px;
`;
