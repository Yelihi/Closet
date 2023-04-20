import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { Empty } from 'antd';
import AButton from './element/button/AButton';

type EmptyProps = {
  height: number;
};

const EmptyData = ({ height }: EmptyProps) => {
  const moveToAddPage = useCallback(() => {
    Router.push('/closet/add');
  }, []);
  return (
    <EmptySection>
      <Empty image='/images/closet.png' imageStyle={{ height: height }} description={<EmptySpan>저장된 의류가 없어요..!</EmptySpan>}>
        {height > 40 && <AButton color='black' disabled={false} dest='저장 페이지로' onClick={moveToAddPage} />}
      </Empty>
      <Copyright href='https://www.flaticon.com/free-icons/closet' title='closet icons'>
        Closet icons created by Freepik - Flaticon
      </Copyright>
    </EmptySection>
  );
};

export default EmptyData;

const EmptySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5px;
`;

const EmptySpan = styled.span`
  color: ${({ theme }) => theme.colors.brown};
  font-size: clamp(12px, 1.3vw, 18px);
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
`;

const Copyright = styled.a`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
`;
