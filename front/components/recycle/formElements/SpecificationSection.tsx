import React from 'react';

import ItemSpecsInput from '../../add/ItemSpecsInput';
import InputPartial from '../inputElements/InputPartial';
import { specificationElement } from '../../add/data/InputDataInAdd';
import { Control } from 'react-hook-form';
import { AddInitialValue } from '../types/recycleElementsTypes';

type PropTypes = {
  control: Control<AddInitialValue, any>;
};

const SpecificationSection = ({ control }: PropTypes) => {
  return (
    <InputPartial title='SPECIFICATION' subtitle='의류 명칭, 가격 등 특성 정보를 저장해주세요. 필수 기입입니다.'>
      {specificationElement.map(v => {
        return (
          <ItemSpecsInput
            key={v.name}
            control={control}
            name={v.name}
            subTitle={v.subTitle}
            elementType={v.elementType}
            elementProps={v.elementProps}
            errorMessage={v.errorMessage}
            rules={{ required: true }}
          />
        );
      })}
    </InputPartial>
  );
};

export default SpecificationSection;
