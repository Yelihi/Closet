import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { SpecificationElementProps } from './data/InputDataInAdd';

import InputBackground from '../recycle/add/InputBackgroud';
import useControlLibsElements from '../../hooks/useControlLibsElements';
import { ErrorMessage } from './ItemSpecsInput';
import { TControl } from '../recycle/element/type';
import { LibsElementsProps } from '../../hooks/types/libsElementsProps';

type SizeDetailsInputProps<T extends FieldValues, K extends keyof LibsElementsProps> = SpecificationElementProps<K> &
  TControl<T> & { textArea?: boolean };

const SizeDetailsInput = <T extends FieldValues, K extends keyof LibsElementsProps>(
  props: SizeDetailsInputProps<T, K>
) => {
  const { elementType, subTitle, control, name, errorMessage, elementProps, rules, textArea } = props;
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, rules, control });

  const view = useControlLibsElements({ elementType, name, value, onChange, elementProps });

  return (
    <InputBackground title={name.split('.')[1]} subTitle={subTitle} textArea={textArea}>
      {view}
      <ErrorMessage>{error && errorMessage}</ErrorMessage>
    </InputBackground>
  );
};

export default SizeDetailsInput;
