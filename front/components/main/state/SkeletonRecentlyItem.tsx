import React from 'react';

import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import { SkeletonListItem } from '../../recycle/ListItem';
import { ListSection, DescriptionSpan, DescriptionDiv } from '../RecentlyItem';

const SkeletonRecentlyItem = () => {
  return (
    <LinkCardLayout Subject='Recently Eroll' Address='Store' onMove={() => console.log('')} divided={1}>
      <ListSection>
        <DescriptionSpan>가장 최근에 저장하신 의류 중 5가지를 보여줍니다</DescriptionSpan>
        <DescriptionDiv>클릭하시면 상세페이지로 이동합니다</DescriptionDiv>
        {[1, 2, 3, 4, 5].map(num => {
          return (
            <div key={num} style={{ width: '100%', padding: '0.1rem' }}>
              <SkeletonListItem />
            </div>
          );
        })}
      </ListSection>
    </LinkCardLayout>
  );
};

export default SkeletonRecentlyItem;
