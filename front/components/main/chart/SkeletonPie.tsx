import React from 'react';
import styled from 'styled-components';

const SkeletonPie = () => {
  return <PieContainer></PieContainer>;
};

export default SkeletonPie;

const PieContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'OverviewPie' })}
`;
