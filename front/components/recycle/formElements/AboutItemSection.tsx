import React from 'react';

import InputPartial from '../inputElements/InputPartial';
import ItemSpecsInput from '../../add/ItemSpecsInput';
import { aboutItemElement } from '../../add/data/InputDataInAdd';
import { Control } from 'react-hook-form';
import { AddInitialValue } from '../types/recycleElementsTypes';

type PropTypes = {
  control: Control<AddInitialValue, any>;
};

const AboutItemSection = ({ control }: PropTypes) => {
  return (
    <InputPartial
      title='ABOUT ITEM'
      subtitle='의류에 대한 설명을 기입하실 수 있습니다. 구입처나 소재, 보관방법 등 구체적인 사안을 저장하실 수 있습니다.'
    >
      {aboutItemElement.map(v => {
        return (
          <ItemSpecsInput
            key={v.name}
            control={control}
            name={v.name}
            subTitle={v.subTitle}
            elementType={v.elementType}
            errorMessage={v.errorMessage}
            elementProps={v.elementProps}
            textArea={true}
            rules={{ required: true }}
          />
        );
      })}
    </InputPartial>
  );
};

export default AboutItemSection;
