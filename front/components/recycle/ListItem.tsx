import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ItemsArray } from '../store/TableData';
import { base64URL } from '../../config/config';

type ListItemProps = {
  item: ItemsArray;
  func: (id: number) => () => void;
};

const ListItem = ({ item, func }: ListItemProps) => {
  return (
    <ListContainer key={item.id} onClick={func(item.id)} data-testid='listItem'>
      <ImageContainer>
        <ThumbnailWrapper>
          <Thumbnail>
            <Centered>
              <CImage
                src={`${item.Images[0].src}`}
                alt={item.productName}
                width={100}
                height={100}
                placeholder='blur'
                blurDataURL={`data:image/gif;base64,${base64URL}`}
              />
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

export default ListItem;

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
