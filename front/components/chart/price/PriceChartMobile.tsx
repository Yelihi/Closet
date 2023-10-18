import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';
import { SWR } from '../../../util/SWR/API';
import { convertDataToChart } from '../../../util/Chart/Price/convertData';

import PriceCustomToolTip from './PriceCustomToolTip';

type PriceChartMobileProps = {
  fallback?: boolean;
  device: 'desktop' | 'phone';
};

const PriceChartMobile = ({ fallback, device }: PriceChartMobileProps) => {
  const { selectedYearInPrice, selectedCategoriesInPrice } = useSelector((state: rootReducerType) => state.chart);
  const { itemsPerYear, error } = SWR.getItemsPerYear(selectedYearInPrice);
  const { Data, doesExistData } = convertDataToChart(
    itemsPerYear?.items,
    selectedYearInPrice,
    selectedCategoriesInPrice,
    device
  );
  const length = Data[1] ? Data[1].id.length : 0;

  if (fallback) {
    return (
      <PriceChartSection>
        <SkeletonDiv />
      </PriceChartSection>
    );
  } else {
    return (
      <PriceChartSection>
        <ResponsiveLine
          data={Data}
          margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: doesExistData ? 1000 : 'auto',
            stacked: false,
            reverse: false,
          }}
          yFormat=' >-.2f'
          curve='step'
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 13,
            tickRotation: 0,
            legend: 'year',
            legendOffset: 40,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'price(만 원)',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          colors={({ color }) => {
            return color;
          }}
          lineWidth={1}
          pointSize={4}
          pointColor={{ theme: 'labels.text.fill' }}
          pointBorderWidth={1}
          pointBorderColor={{ theme: 'background' }}
          pointLabelYOffset={-12}
          enableArea={true}
          enableSlices='x'
          areaBlendMode='hard-light'
          areaOpacity={0.15}
          crosshairType='x'
          useMesh={true}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: -10,
              itemsSpacing: length,
              itemDirection: 'bottom-to-top',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={false}
          motionConfig='wobbly'
          sliceTooltip={PriceCustomToolTip}
        />
      </PriceChartSection>
    );
  }
};

export default PriceChartMobile;

const PriceChartSection = styled.section`
  width: 100%;
  height: 40vh;
`;

const SkeletonDiv = styled.div`
  width: 100%;
  height: 388px;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'PriceChartMobile' })}
`;
