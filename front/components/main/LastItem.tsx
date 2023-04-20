import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';

import OverviewCL from '../recycle/element/overview/OverviewCL';
import { ItemsArray } from '../store/TableData';
import { backUrl, base64URL } from '../../config/config';

import { media } from '../../styles/media';
import EmptyData from '../recycle/EmptyData';

type LastItemProps = {
  item: ItemsArray;
};

const LastItem = ({ item }: LastItemProps) => {
  const moveToDetail = useCallback(() => {
    Router.push(`/closet/details/${item.id}`);
  }, []);

  if (!item) {
    return (
      <OverviewCL Subject='Last Item' Address='Detail' onMove={moveToDetail} divided={true}>
        <EmptyData height={40} />
      </OverviewCL>
    );
  }

  return (
    <OverviewCL Subject='Last Item' Address='Detail' onMove={moveToDetail} divided={true}>
      <LastItemSection>
        <ImageDiv>
          <ThumbnailWrapper>
            <Thumbnail>
              <Centered>
                <CImage src={`${backUrl}/${item.Images[0].src}`} alt={item.productName} width={100} height={100} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
              </Centered>
            </Thumbnail>
          </ThumbnailWrapper>
        </ImageDiv>
        <DetailDiv>
          <ItemName>{`${item.productName}`}</ItemName>
          <Purchase>{`구매 날짜 : ${item.purchaseDay.substring(0, 7)}`}</Purchase>
          <Price>{`구매 가격 : ${item.price.toLocaleString('ko-KR')}`}</Price>
        </DetailDiv>
      </LastItemSection>
    </OverviewCL>
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

const ImageDiv = styled.div`
  width: 95px;
  height: 95px;
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

const ThumbnailWrapper = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const Centered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
`;

const CImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
