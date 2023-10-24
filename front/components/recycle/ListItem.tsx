import React from 'react';
import styled from 'styled-components';
import { ItemsArray } from '../store/TableData';

import CenteredPositionImage from './CenteredPositionImage';

type ListItemProps = {
  item: ItemsArray;
  func: (id: number) => () => void;
  exceptPrice?: boolean;
};

export const SkeletonListItem = () => {
  return <SkeletonListDiv />;
};

const ListItem = ({ item, func, exceptPrice }: ListItemProps) => {
  return (
    <ListContainer key={item.id} onClick={func(item.id)} data-testid='listItem'>
      <Flex>
        <div>
          <CenteredPositionImage
            shape='radius'
            width={40}
            height={40}
            src={item.Images[0].src}
            alt={item.productName}
          />
        </div>
        <NameContainer>
          <span>{item.productName}</span>
          <p>{item.categori}</p>
        </NameContainer>
      </Flex>
      {exceptPrice ? null : <PriceContainer>{item.price.toLocaleString('ko-KR')}</PriceContainer>}
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
  border-radius: 10px;
  transition: box-shadow 0.1s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;

  > div {
    margin-right: 20px;
  }
`;

const SkeletonListDiv = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'ListItem' })}
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
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
