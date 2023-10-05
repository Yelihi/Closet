import React from 'react';
import styled from 'styled-components';

import ItemCard from '../recycle/ItemCard';

import { ItemsArray } from './TableData';
import { EmptyDiv } from './ATable';
import { Empty, Spin } from 'antd';

import { media } from '../../styles/media';

interface Props {
  itemData: ItemsArray[] | undefined;
  onSubmit?: (id: number) => () => void;
  isLoading?: boolean;
  isItemsLoading?: boolean;
  infinitiValidating?: boolean;
  windowWidth: 'phone' | 'desktop';
}

const loadingArray = Array(9)
  .fill(0)
  .map((v, i) => i);

const CardBoard = ({ itemData, onSubmit, isLoading, isItemsLoading, infinitiValidating, windowWidth }: Props) => {
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

  if (itemData && itemData?.length === 0) {
    return (
      <EmptyDiv>
        <Empty />
      </EmptyDiv>
    );
  }

  return (
    <CardSection>
      {itemData &&
        itemData?.map(item => {
          return (
            <CardBox key={item.id} data-testid='itemCard'>
              <ItemCard src={item.Images[0].src} id={item.id} onSubmit={onSubmit} windowWidth={windowWidth} />
            </CardBox>
          );
        })}
      {infinitiValidating ? (
        <SpinContainer>
          <Spin />
        </SpinContainer>
      ) : null}
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
  height: 15vh;
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

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
`;
