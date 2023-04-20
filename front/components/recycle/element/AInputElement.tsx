import React, { ReactNode } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { CirclePicker } from 'react-color';
import { FieldValues, useController } from 'react-hook-form';
import { InputNumber, Select, Input, DatePicker, Rate } from 'antd';

import { TControl } from './type';
import { media } from '../../../styles/media';
import { colors } from '../../add/ElementData';

dayjs.extend(customParseFormat);

const { TextArea } = Input;
const dateFormat = 'YYYY-MM';
// 초기 날짜. 현재 날짜
const currentDate = dayjs().format('YYYY-MM');

export interface ISelectItem {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export type CustomSelectProps<T> = {
  options?: ISelectItem[];
  defaultValue?: string;
  placeholder?: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControl<T>;

function AInputElement<T extends FieldValues>(props: TPorps<T>) {
  const { name, rules, control, errorMessage, options, defaultValue, placeholder } = props;
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      {name == 'productName' ? <Input value={value} id={name} onChange={onChange} {...props} style={{ height: '30px', width: '100%' }} autoComplete='off' allowClear /> : null}
      {name == 'color' ? <CirclePicker color={value} colors={colors} onChange={(color, event) => onChange(color.hex)} {...props} circleSize={25} width='100%' /> : null}
      {name == 'price' ? <InputNumber value={value} id={name} min={1} onChange={onChange} style={{ height: '30px', width: '100%' }} placeholder={placeholder} /> : null}
      {name == 'preference' ? <Rate value={value} onChange={onChange} /> : null}
      {name == 'purchaseDay' ? (
        <DatePicker defaultValue={dayjs(value || currentDate, dateFormat)} onChange={(date, dateString) => onChange(dateString)} picker='month' style={{ width: '100%', height: '30px' }} />
      ) : null}
      {name == 'description' ? <TextArea value={value} id={name} onChange={onChange} placeholder={placeholder} rows={5} style={{ width: '100%' }} /> : null}
      {name == 'categori' ? <Select defaultValue={defaultValue} value={value} id={name} options={options} onChange={onChange} style={{ height: '30px', width: '100%' }} /> : null}
      <ErrorMessage>{error && errorMessage}</ErrorMessage>
    </>
  );
}

export default AInputElement;

const ErrorMessage = styled.span`
  display: inline-block;
  width: 100%;
  height: 13px;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.red};
`;
