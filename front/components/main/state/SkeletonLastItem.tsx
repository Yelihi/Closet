import React from 'react';
import styled from 'styled-components';

import LinkCardLayout from '../../recycle/layout/LinkCardLayout';

const SkeletonLastItem = () => {
  return (
    <LinkCardLayout Subject='Last Item' Address='Detail' onMove={() => console.log('')} divided={2}>
      <SkeletonLastItemSection />
    </LinkCardLayout>
  );
};

export default SkeletonLastItem;

const SkeletonLastItemSection = styled.section`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 1rem;
  ${({ theme }) => theme.animation.fade({ name: 'OverviewLastItem' })}
`;
