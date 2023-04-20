import React from 'react';
import styled from 'styled-components';
import { FieldValues, useFormContext } from 'react-hook-form';

import { TControl, TControlArray } from '../element/type';
import { AddInitialValue } from '../ItemForm';

import InputBackground from './InputBackgroud';
import ANumberInput from '../element/ANumberInput';

import { media } from '../../../styles/media';

export type CustomSelectProps<T> = {
  placeholder: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControlArray<T>;

function Measure<T extends FieldValues>(props: TPorps<T>) {
  const context = useFormContext<AddInitialValue>();
  const { watch } = context;
  const { nameArray, rules, control, placeholder, subTitleArray } = props;
  return (
    <>
      {nameArray.map((categori, i) => {
        return (
          <InputBackground title={categori.split('.')[1]} subTitle={subTitleArray && subTitleArray[i]}>
            <ANumberInput control={control} name={categori} rules={rules} placeholder={placeholder} />
          </InputBackground>
        );
      })}
    </>
  );
}

export default Measure;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  border: 1px solid ${({ theme }) => theme.colors.hoverGrey};

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 15px;
  margin-bottom: 5px;
`;

const SubTitme = styled.p`
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 10px;
`;
