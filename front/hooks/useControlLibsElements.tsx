import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { LibsElementsProps } from './types/libsElementsProps';
import { FieldValues, PathValue, Path } from 'react-hook-form';

import { DatePicker, Input, InputNumber, Rate, Select } from 'antd';
import { CirclePicker } from 'react-color';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM';
// 초기 날짜. 현재 날짜
const currentDate = dayjs().format('YYYY-MM');

const { TextArea } = Input;

type useControlLibsElementsProps<K extends keyof LibsElementsProps, T extends FieldValues> = {
  elementType: K;
  name: Path<T>;
  value: PathValue<T, Path<T>>;
  onChange: (...event: any[]) => void;
  elementProps: LibsElementsProps[K];
};

const useControlLibsElements = <K extends keyof LibsElementsProps, T extends FieldValues>(
  props: useControlLibsElementsProps<K, T>
) => {
  const { elementType, name, value, onChange, elementProps } = props;

  switch (elementType) {
    case 'Input': {
      return <Input id={name} value={value} onChange={onChange} {...(elementProps as LibsElementsProps['Input'])} />;
    }
    case 'InputNumber': {
      return (
        <InputNumber
          id={name}
          value={value}
          onChange={onChange}
          {...(elementProps as LibsElementsProps['InputNumber'])}
        />
      );
    }
    case 'Rate': {
      return <Rate id={name} value={value} onChange={onChange} {...(elementProps as LibsElementsProps['Rate'])} />;
    }
    case 'DatePicker': {
      return (
        <DatePicker
          defaultValue={dayjs(value || currentDate, dateFormat)}
          onChange={(date, dateString) => onChange(dateString)}
          picker='month'
          {...(elementProps as LibsElementsProps['DatePicker'])}
        />
      );
    }
    case 'Select': {
      return <Select value={value} id={name} onChange={onChange} {...(elementProps as LibsElementsProps['Select'])} />;
    }
    case 'TextArea': {
      return (
        <TextArea value={value} id={name} onChange={onChange} {...(elementProps as LibsElementsProps['TextArea'])} />
      );
    }
    case 'CirclePicker': {
      return (
        <CirclePicker
          color={value}
          onChange={(color, event) => onChange(color.hex)}
          {...(elementProps as LibsElementsProps['CirclePicker'])}
        />
      );
    }
  }
  return null;
};

export default useControlLibsElements;
