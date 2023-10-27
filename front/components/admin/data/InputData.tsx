import { FieldValues } from 'react-hook-form';
import { LibsElementsProps } from '../../../hooks/types/libsElementsProps';

const defaultStyle = {
  height: '35px',
};

type InputFieldArray<T extends keyof LibsElementsProps> = {
  elementType: T;
  fieldName: string;
  information: string;
  name: string;
  elementProps: LibsElementsProps[T];
};

export const InputFieldArray: InputFieldArray<keyof LibsElementsProps>[] = [
  {
    elementType: 'Input',
    fieldName: 'Username',
    name: 'nickname',
    information: '',
    elementProps: {
      placeholder: 'nickname',
      style: defaultStyle,
    },
  },
  {
    elementType: 'Input',
    fieldName: 'Contact email',
    name: 'contactemail',
    information: '',
    elementProps: {
      placeholder: 'email',
      style: defaultStyle,
      disabled: true,
    },
  },
  {
    elementType: 'Input',
    fieldName: 'Contact number',
    name: 'contactnumber',
    information: '- 를 생략하고 작성해주세요',
    elementProps: {
      placeholder: 'phone',
      style: defaultStyle,
      disabled: true,
    },
  },
  {
    elementType: 'TextArea',
    fieldName: 'Your bio',
    name: 'bio',
    information: '간단하게 자기소개를 작성해주세요',
    elementProps: {
      maxLength: 200,
      showCount: true,
      style: { height: 120 },
      placeholder: 'add a short bio..',
      disabled: true,
    },
  },
];

export const defaultValueInAdmin = {
  nickname: '',
  src: '',
};

export interface DefaultValueInAdmin extends FieldValues {
  nickname: string;
  src: string;
}
