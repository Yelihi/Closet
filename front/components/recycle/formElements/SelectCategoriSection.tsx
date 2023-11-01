import React from 'react';

import InputPartial from '../inputElements/InputPartial';
import ItemSpecsInput from '../../add/ItemSpecsInput';
import SizeDetailsInput from '../../add/SizeDetailsInput';
import {
  sortCategoriesElement,
  TopMeasureElements,
  BottomMeasureElements,
  ShoesMeasureElements,
  MufflerMeasureElements,
} from '../../add/data/InputDataInAdd';
import { Control, UseFormWatch } from 'react-hook-form';
import { AddInitialValue } from '../types/recycleElementsTypes';

type PropTypes = {
  control: Control<AddInitialValue, any>;
  watch: UseFormWatch<AddInitialValue>;
};

const SelectCategoriSection = ({ control, watch }: PropTypes) => {
  return (
    <InputPartial
      title='SORT CLOTHES'
      subtitle='카테고리를 선택해주시고, 각 카테고리에 맞는 측정치수를 cm 단위로 기입해주세요. 카테고리를 기입하셔야 이미지체크가 가능합니다'
    >
      {sortCategoriesElement.map(v => {
        return (
          <ItemSpecsInput
            key={v.name}
            control={control}
            elementType={v.elementType}
            name={v.name}
            subTitle={v.subTitle}
            errorMessage={v.errorMessage}
            elementProps={v.elementProps}
            rules={{ required: true }}
          />
        );
      })}
      {['Outer', 'Shirt', 'Top'].includes(watch('categori'))
        ? TopMeasureElements.map(v => {
            return (
              <SizeDetailsInput
                key={v.name}
                control={control}
                name={v.name}
                subTitle={v.subTitle}
                elementType={v.elementType}
                errorMessage={v.errorMessage}
                elementProps={v.elementProps}
                rules={{ required: true }}
              />
            );
          })
        : null}
      {['Pant'].includes(watch('categori'))
        ? BottomMeasureElements.map(v => {
            return (
              <SizeDetailsInput
                key={v.name}
                control={control}
                name={v.name}
                subTitle={v.subTitle}
                elementType={v.elementType}
                errorMessage={v.errorMessage}
                elementProps={v.elementProps}
                rules={{ required: true }}
              />
            );
          })
        : null}
      {['Shoe'].includes(watch('categori'))
        ? ShoesMeasureElements.map(v => {
            return (
              <SizeDetailsInput
                key={v.name}
                control={control}
                name={v.name}
                subTitle={v.subTitle}
                elementType={v.elementType}
                errorMessage={v.errorMessage}
                elementProps={v.elementProps}
                rules={{ required: true }}
              />
            );
          })
        : null}
      {['Muffler'].includes(watch('categori'))
        ? MufflerMeasureElements.map(v => {
            return (
              <SizeDetailsInput
                key={v.name}
                control={control}
                name={v.name}
                subTitle={v.subTitle}
                elementType={v.elementType}
                errorMessage={v.errorMessage}
                elementProps={v.elementProps}
                rules={{ required: true }}
              />
            );
          })
        : null}
    </InputPartial>
  );
};

export default SelectCategoriSection;
