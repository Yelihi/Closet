import React from 'react';
import styled from 'styled-components';

import { media } from '../../../styles/media';

const SkeletonPriceBar = () => {
  return <ChartDiv></ChartDiv>;
};

export default SkeletonPriceBar;

const ChartDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 1rem;
  ${({ theme }) => theme.animation.fade({ name: 'OverviewPriceBar' })}

  ${media.desktop} {
    width: 90%;
    height: 80px;
  }
`;
