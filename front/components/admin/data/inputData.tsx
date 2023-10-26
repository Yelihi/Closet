import { Input } from 'antd';
import { FieldValues } from 'react-hook-form';

const { TextArea } = Input;

const defaultStyle = {
  height: '35px',
};

type InputFieldArray = {
  fieldName: string;
  information: string;
  node: React.ReactElement;
};

export const InputFieldArray: InputFieldArray[] = [
  {
    fieldName: 'Username',
    information: '',
    node: <Input placeholder='nickname' style={defaultStyle} />,
  },
  {
    fieldName: 'Contact email',
    information: '',
    node: <Input placeholder='email' style={defaultStyle} />,
  },
  {
    fieldName: 'Contact number',
    information: '- 를 생략하고 작성해주세요',
    node: <Input placeholder='phone' style={defaultStyle} />,
  },
  {
    fieldName: 'Your bio',
    information: '간단하게 자기소개를 작성해주세요',
    node: <TextArea showCount maxLength={200} placeholder='add a short bio..' style={{ height: 120 }} />,
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
