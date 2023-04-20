import React, { useEffect } from 'react';
import styled from 'styled-components';
import addHead from '../../../../util/addHead';

import PageLayout from '../../../../components/recycle/layout/PageLayout';
import KeepWorking from '../../../../components/recycle/KeepWorking';

const price = () => {
  return (
    <PageLayout>
      <TestContainer>
        <KeepWorking height={100} />
      </TestContainer>
    </PageLayout>
  );
};

export default addHead(price, 'closet', '이 페이지는 의류 가격 차트 페이지입니다');

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
`;
