import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';

import OverviewCL from '../recycle/element/overview/OverviewCL';
import { ItemsArray } from '../store/TableData';
import { backUrl, base64URL } from '../../config/config';
import EmptyData from '../recycle/EmptyData';

type ListItemProps = {
  item: ItemsArray;
  func: (id: number) => () => void;
};

export const ListItems = ({ item, func }: ListItemProps) => {
  return (
    <ListContainer key={item.id} onClick={func(item.id)}>
      <ImageContainer>
        <ThumbnailWrapper>
          <Thumbnail>
            <Centered>
              <CImage src={`${backUrl}/${item.Images[0].src}`} alt={item.productName} width={100} height={100} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
            </Centered>
          </Thumbnail>
        </ThumbnailWrapper>
      </ImageContainer>
      <NameContainer>
        <span>{item.productName}</span>
        <p>{item.categori}</p>
      </NameContainer>
      <PriceContainer>{item.price.toLocaleString('ko-KR')}</PriceContainer>
      <DateContainer>{`${item.purchaseDay.substring(0, 7)}`}</DateContainer>
    </ListContainer>
  );
};

type RecentlyProps = {
  items: ItemsArray[];
};

const RecentlyItem = ({ items }: RecentlyProps) => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);
  const moveToDetailsPage = useCallback(
    (id: number) => () => {
      Router.push(`/closet/details/${id}`);
    },
    []
  );

  if (items.length === 0) {
    return (
      <OverviewCL Subject='Recently Eroll' Address='Store' onMove={moveToStore} divided={false}>
        <EmptyData height={80} />
      </OverviewCL>
    );
  }

  return (
    <OverviewCL Subject='Recently Eroll' Address='Store' onMove={moveToStore} divided={false}>
      <ListSection>
        <DescriptionSpan>가장 최근에 저장하신 의류 중 5가지를 보여줍니다</DescriptionSpan>
        <DescriptionDiv>클릭하시면 상세페이지로 이동합니다</DescriptionDiv>
        {items.map(item => {
          return <ListItems key={item.id} item={item} func={moveToDetailsPage} />;
        })}
      </ListSection>
    </OverviewCL>
  );
};

export default RecentlyItem;

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const DescriptionSpan = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-top: 5px;
`;

const DescriptionDiv = styled(DescriptionSpan)`
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 5px;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 5px 5px;
  /* border: 0.5px solid ${({ theme }) => theme.colors.mainGrey}; */
  border-radius: 10px;
  transition: box-shadow 0.1s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35%;
  height: auto;

  > span {
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
  }

  > p {
    font-size: 11px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    color: ${({ theme }) => theme.colors.middleGrey};
  }
`;

const PriceContainer = styled.div`
  width: 25%;
  height: auto;
  font-size: 13px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
`;

const DateContainer = styled(PriceContainer)``;

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
