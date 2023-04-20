import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { Empty } from 'antd';
import AButton from './element/button/AButton';

type EmptyProps = {
  height: number;
};

const KeepWorking = ({ height }: EmptyProps) => {
  const moveToOverview = useCallback(() => {
    Router.push('/closet/overview');
  }, []);
  return (
    <EmptySection>
      <Empty image='/images/hard-work.png' imageStyle={{ height: height }} description={<EmptySpan>Sorry! 작업중이에요</EmptySpan>}>
        {height > 40 && <AButton color='black' disabled={false} dest='메인 페이지로' onClick={moveToOverview} />}
      </Empty>
      <Copyright href='https://www.flaticon.com/free-icons/hard-work' title='hard work icons'>
        Hard work icons created by Freepik - Flaticon
      </Copyright>
    </EmptySection>
  );
};

export default KeepWorking;

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
