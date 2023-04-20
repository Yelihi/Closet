import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { InputNumber, Space } from 'antd';

import { TControl } from './type';

export type CustomSelectProps<T> = {
  placeholder: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControl<T>;

function ANumberInput<T extends FieldValues>({ name, rules, control, ...props }: TPorps<T>) {
  const { placeholder } = props;
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      <InputNumber value={value} id={name} min={1} onChange={onChange} {...props} style={{ height: '30px', width: '100%' }} placeholder={placeholder} />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default ANumberInput;
