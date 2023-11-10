import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../reducers/types';

import { media } from '../../styles/media';
import { Rate } from 'antd';
import Slice from '../recycle/Slice';
import DetailsTapContainer from './DetailsTapContainer';

const DetailsMain = () => {
  const { singleItem } = useSelector((state: rootReducerType) => state.post);

  return (
    <SliceContainer>
      <SliceBox>
        <Slice src={singleItem && singleItem.Images} />
      </SliceBox>
      <DataContainer>
        <Categori>{singleItem && singleItem.categori}</Categori>
        <ProductName>{singleItem && singleItem.productName}</ProductName>
        <RateBox>
          <CRate disabled defaultValue={singleItem ? singleItem.preference : 1} />
          <span>{singleItem ? singleItem.preference : 1}</span>
        </RateBox>
        <Descriptions>{singleItem && singleItem.description}</Descriptions>
        <DetailsTapContainer />
      </DataContainer>
    </SliceContainer>
  );
};

export default DetailsMain;

const SliceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 600px;
  gap: 50px;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const SliceBox = styled.div`
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 20px;

  ${media.tablet} {
    max-width: 50%;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Categori = styled.p`
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 15px;
`;

const ProductName = styled.h1`
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: clamp(20px, 35px, 50px);
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 15px;
  width: 100%;
`;

const RateBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

const CRate = styled(Rate)`
  .ant-rate-star-second {
    svg {
      font-size: 15px;
    }
  }
`;

const Descriptions = styled.p`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-size: clamp(10px, 16px, 20px);
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 20px;
`;
