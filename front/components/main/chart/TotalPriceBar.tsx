import React, { useMemo } from 'react';
import styled from 'styled-components';

import { ResponsiveBar } from '@nivo/bar';

import { media } from '../../../styles/media';

type CurrentPriceProps = {
  totalPrice: number;
  currentPrice: number;
};

const TotalPriceBar = ({ currentPrice, totalPrice }: CurrentPriceProps) => {
  const priceData = useMemo(() => {
    return [
      {
        totalPrice: 'Current',
        price: currentPrice,
      },
      {
        totalPrice: 'Total',
        price: totalPrice,
      },
    ];
  }, [totalPrice, currentPrice]);

  return (
    <ChartDiv>
      <ResponsiveBar
        data={priceData}
        keys={['price']}
        indexBy='totalPrice'
        margin={{ top: 0, right: 0, bottom: 0, left: 50 }}
        padding={0.3}
        layout='horizontal'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#f4baf4', '#f1e5f1']}
        colorBy='indexValue'
        borderRadius={3}
        defs={[]}
        fill={[]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[]}
        role='application'
        ariaLabel='price chart bar'
        barAriaLabel={function (e) {
          return e.id + ': ' + e.formattedValue + ' in price: ' + e.indexValue;
        }}
      />
    </ChartDiv>
  );
};

export default TotalPriceBar;

const ChartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 80px;

  ${media.desktop} {
    width: 90%;
    height: 80px;
  }
`;
