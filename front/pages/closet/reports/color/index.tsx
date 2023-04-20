import React, { useEffect } from 'react';
import styled from 'styled-components';
import addHead from '../../../../util/addHead';

import PageLayout from '../../../../components/recycle/layout/PageLayout';
import KeepWorking from '../../../../components/recycle/KeepWorking';

const color = () => {
  return (
    <PageLayout>
      <TestContainer>
        <KeepWorking height={100} />
      </TestContainer>
    </PageLayout>
  );
};

export default addHead(color, 'closet', '이 페이지는 의류 색상 차트를 보여줍니다');

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
`;
