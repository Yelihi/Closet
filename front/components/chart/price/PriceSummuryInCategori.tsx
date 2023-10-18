import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { SWR } from '../../../util/SWR/API';
import Router from 'next/router';
import { Progress, Tag } from 'antd';

import LinkCardLayout from '../../recycle/layout/LinkCardLayout';
import { rootReducerType } from '../../../reducers/types';
import { selectCategoriesAction } from '../../../reducers/chart';
import { SortExtractedData, summedTotalPriceWithCategories } from '../../../util/Chart/Price/convertData';
import { calcPercentage } from '../../../util/PrimitiveUtils/number';
import { convertNumberToKRWCurrency } from '../../../util/PrimitiveUtils/string';

type PriceSummuryInCategoriProps = {
  fallback?: boolean;
  device: 'desktop' | 'phone';
};

const SkeletonPriceSummury = () => {
  return (
    <ProgressContainer>
      <ProgressSubject>선택하신 카테고리 내 총합입니다</ProgressSubject>
      <ProgressTags />
      <SkeletonProgressPriceText />

      <SkeletonProgress />
      <InfoContainer>
        <p>위 가격은 선택된 카테고리 합산 가격입니다</p>
        <p>비율 = (선택된 카테고리에 해당하는 총액) / (해당 년도 내 총액)</p>
      </InfoContainer>
    </ProgressContainer>
  );
};

const conicColors = { '0%': 'hsl(0, 0%, 27%)', '50%': 'hsl(23, 100%, 50%)', '100%': '#ffe58f' };

const PriceSummuryInCategori = ({ fallback, device }: PriceSummuryInCategoriProps) => {
  const dispatch = useDispatch();
  const { selectedCategoriesInPrice, selectedYearInPrice } = useSelector((state: rootReducerType) => state.chart);
  const { itemsPerYear, error } = SWR.getItemsPerYear(selectedYearInPrice);
  const { items } = SortExtractedData[device].FilteredCategory(
    itemsPerYear?.items,
    selectedYearInPrice,
    selectedCategoriesInPrice
  );

  // items 를 flat 하여 summury 와 percentage 를 계산
  const summaryPrice = summedTotalPriceWithCategories(items) * 1000;
  const denominator = itemsPerYear ? itemsPerYear.totalAmount : 1;
  const percentage = calcPercentage(summaryPrice, denominator);

  const handleClose = (removeTag: string) => {
    const newTags = selectedCategoriesInPrice.filter(tag => tag !== removeTag);
    dispatch(selectCategoriesAction(newTags));
  };

  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  if (fallback) {
    return (
      <LinkCardLayout Subject='Price by Categori' Address='Store' onMove={moveToStore}>
        <SkeletonPriceSummury />
      </LinkCardLayout>
    );
  } else {
    return (
      <LinkCardLayout Subject='Price by Categori' Address='Store' onMove={moveToStore}>
        <ProgressContainer>
          <ProgressSubject>선택하신 카테고리 내 총합입니다</ProgressSubject>
          <ProgressTags>
            {selectedCategoriesInPrice.map((tag, index) => (
              <Tag key={tag} closable={true} onClose={() => handleClose(tag)} color='magenta'>
                {tag}
              </Tag>
            ))}
          </ProgressTags>
          <ProgressPriceText>{convertNumberToKRWCurrency(summaryPrice)}</ProgressPriceText>

          <StyledProgress percent={percentage} status='active' strokeColor={conicColors} size={['100%', 20]} />
          <InfoContainer>
            <p>위 가격은 선택된 카테고리 합산 가격입니다</p>
            <p>비율 = (선택된 카테고리에 해당하는 총액) / (해당 년도 내 총액)</p>
          </InfoContainer>
        </ProgressContainer>
      </LinkCardLayout>
    );
  }
};

export default PriceSummuryInCategori;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const ProgressTags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
`;

const ProgressSubject = styled.h4`
  font-size: clamp(13px, 1.5vw, 15px);
  line-height: 15px;
  font-family: ${({ theme }) => theme.font.Efont2};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-bottom: 1rem;
`;

const ProgressPriceText = styled.h2`
  font-size: clamp(20px, 2vw, 25px);
  line-height: 20px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  margin-bottom: 3rem;
`;

const SkeletonProgressPriceText = styled(ProgressPriceText)`
  width: 15rem;
  height: clamp(20px, 2vw, 25px);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'ProgressTitle' })}
`;

const StyledProgress = styled(Progress)`
  & .ant-progress-bg {
    height: 20px;
  }
`;

const SkeletonProgress = styled.div`
  width: 100%;
  height: 28px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  ${({ theme }) => theme.animation.fade({ name: 'Progress' })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  gap: 0.5rem;
  margin-top: 3.7rem;

  > p {
    font-size: clamp(12px, 1.1vw, 13px);
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
