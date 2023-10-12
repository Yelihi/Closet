import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import styled from 'styled-components';

import { dummyPriceData } from '../__mocks__/PriceData';

type PriceChartMobileProps = {
  fallback?: boolean;
};

const PriceChartMobile = ({ fallback }: PriceChartMobileProps) => {
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
          data={dummyPriceData}
          margin={{ top: 20, right: 10, bottom: 10, left: 10 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=' >-.2f'
          curve='cardinal'
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          colors={{ scheme: 'dark2' }}
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
          animate={false}
          motionConfig='wobbly'
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
