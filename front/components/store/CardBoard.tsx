import React from 'react';
import styled from 'styled-components';

import ItemCard from '../recycle/ItemCard';

import { ItemsArray } from './TableData';
import { EmptyDiv } from './ATable';
import { Empty } from 'antd';

import { media } from '../../styles/media';

interface Props {
  itemData: ItemsArray[] | undefined;
  onSubmit?: (id: number) => () => void;
  isLoading?: boolean;
  isItemsLoading?: boolean;
}

const loadingArray = Array(9)
  .fill(0)
  .map((v, i) => i);

const CardBoard = ({ itemData, onSubmit, isLoading, isItemsLoading }: Props) => {
  if (isLoading || isItemsLoading) {
    return (
      <CardSection>
        {loadingArray.map(item => {
          return (
            <LoadingBox key={item}>
              <Loading />
            </LoadingBox>
          );
        })}
      </CardSection>
    );
  }

  if (itemData?.length === 0) {
    return (
      <EmptyDiv>
        <Empty />
      </EmptyDiv>
    );
  }

  return (
    <CardSection>
      {itemData?.map(item => {
        return (
          <CardBox key={item.id}>
            <ItemCard src={item.Images[0].src} id={item.id} onSubmit={onSubmit} />
          </CardBox>
        );
      })}
    </CardSection>
  );
};

export default CardBoard;

const CardSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 5%;
`;

const CardBox = styled.div`
  width: 30%;
  height: auto;
  margin-bottom: 5%;
`;

const LoadingBox = styled(CardBox)`
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.mainGrey};

  ${media.tablet} {
    height: 30vh;
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 10px;
`;
