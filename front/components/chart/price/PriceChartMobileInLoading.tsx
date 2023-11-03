import React from 'react';
import styled from 'styled-components';

const PriceChartMobileInLoading = () => {
  return (
    <PriceChartSection>
      <SkeletonDiv />
    </PriceChartSection>
  );
};

export default PriceChartMobileInLoading;

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
