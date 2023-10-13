import React, { useCallback } from 'react';
import styled from 'styled-components';

import TotalPie from './chart/TotalPie';
import LinkCardLayout from '../recycle/layout/LinkCardLayout';

import { categoriObject } from '../store/TableData';

import Router from 'next/router';
import EmptyData from '../recycle/EmptyData';

type Props = {
  data: categoriObject | {};
  total: number;
};

const TotalData = ({ data, total }: Props) => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  if (Object.keys(data).length === 0) {
    return (
      <LinkCardLayout Subject='total quantity' Address='Store' onMove={moveToStore} divided={1}>
        <EmptyData height={80} />
      </LinkCardLayout>
    );
  }

  return (
    <LinkCardLayout Subject='total quantity' Address='Store' onMove={moveToStore} divided={1}>
      <TotalDiv>
        <span>{total}</span>
        <p>벌</p>
      </TotalDiv>
      <DestDiv>
        <p>현재까지 저장된 모든 의류 및 신발의 수량입니다</p>
      </DestDiv>
      <TotalPie item={data} />
    </LinkCardLayout>
  );
};

export default TotalData;

const TotalDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 3px;
  margin-bottom: 10px;

  > span {
    font-size: clamp(33px, 3.6vw, 55px);
    font-weight: ${({ theme }) => theme.fontWeight.Bold};
    font-family: ${({ theme }) => theme.font.Efont};
  }

  > p {
    font-size: clamp(17px, 1.8vw, 30px);
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-top: 10px;
  }
`;

const DestDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  > p {
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-top: 2px;
    margin-bottom: 10px;
  }
`;
