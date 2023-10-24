import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import LinkCardLayout from '../recycle/layout/LinkCardLayout';
import CenteredPositionImage from '../recycle/CenteredPositionImage';
import { ItemsArray } from '../store/TableData';

import { media } from '../../styles/media';

type LastItemProps = {
  item: ItemsArray;
};

const LastItem = ({ item }: LastItemProps) => {
  const moveToDetail = useCallback(() => {
    Router.push(`/closet/details/${item.id}`);
  }, []);

  return (
    <LinkCardLayout Subject='Last Item' Address='Detail' onMove={moveToDetail} divided={2}>
      <LastItemSection>
        <CenteredPositionImage
          shape='radius'
          radius={20}
          width={95}
          height={95}
          src={item.Images[0].src}
          alt={item.productName}
        />
        <DetailDiv>
          <ItemName>{`${item.productName}`}</ItemName>
          <Purchase>{`구매 날짜 : ${item.purchaseDay.substring(0, 7)}`}</Purchase>
          <Price>{`구매 가격 : ${item.price.toLocaleString('ko-KR')}`}</Price>
        </DetailDiv>
      </LastItemSection>
    </LinkCardLayout>
  );
};

export default LastItem;

const LastItemSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 50%;
  height: auto;

  ${media.tablet} {
    align-items: flex-start;
  }
`;

const ItemName = styled.span`
  font-size: clamp(13px, 1, 1vw, 15px);
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-bottom: 15px;
`;

const Purchase = styled.p`
  font-size: clamp(11px, 1vw, 13px);
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 5px;
`;

const Price = styled(Purchase)``;
