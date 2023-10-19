import React from 'react';
import styled from 'styled-components';
import { SWR } from '../../util/SWR/API';
import { convertNumberToKRWCurrency } from '../../util/PrimitiveUtils/string';

type ChartTitleProps = {
  title?: number;
  fallback?: boolean;
};

const ChartTitle = ({ title = 120000, fallback }: ChartTitleProps) => {
  const { data } = SWR.getSummuryInUserItems();
  const convertAmount = convertNumberToKRWCurrency(title);
  const totalPrice = data?.totalPrice ? data.totalPrice : 1;
  const yearPricePercentOfTotal = Math.ceil((title / totalPrice) * 100);

  if (fallback) {
    return <LoadingTitle />;
  } else {
    return (
      <Flex>
        <Title>{convertAmount}</Title>
        <Percent>{`(${yearPricePercentOfTotal}%)`}</Percent>
      </Flex>
    );
  }
};

export default ChartTitle;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: auto;
`;

const Title = styled.dd`
  display: block;
  font-size: clamp(40px, 2.2vw, 45px);
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

const Percent = styled.p`
  display: block;
  font-size: clamp(30px, 2vw, 35px);
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  color: ${({ theme }) => theme.colors.symbol};
  white-space: pre-wrap;
`;

const LoadingTitle = styled(Title)`
  width: 25rem;
  height: clamp(40px, 2.2vw, 48px);
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'Title' })}
`;
