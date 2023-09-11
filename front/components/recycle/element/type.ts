import { StaticImageData } from 'next/image';
import { Control, FieldPath, FieldValues, RegisterOptions, ControllerRenderProps } from 'react-hook-form';

export interface TControl<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  errorMessage?: string;
}

export interface TControlArray<T extends FieldValues> {
  nameArray: FieldPath<T>[];
  control: Control<T>;
  rules?: RegisterOptions<T>;
  subTitleArray?: string[];
}

/**
 * button type
 */

export interface ButtonProp {
  color: string;
  disabled: boolean;
  src?: StaticImageData;
  dest: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// 기존 작성한 ViewProps에서 as를 분리한다.
type AsProp<T extends React.ElementType> = {
  As?: T;
};

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// 결합 타입을 만든다.
export type PolymorphicComponentProps<T extends React.ElementType, Props = {}> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    innerRef?: PolymorphicRef<T>;
  };
