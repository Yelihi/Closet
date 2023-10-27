import { LibsElementsProps } from '../../../hooks/types/libsElementsProps';
import { TControl } from '../../recycle/element/type';
import { FieldValues } from 'react-hook-form';

export type RestProps<T> = {
  fieldName: string;
  information: string;
  elementType: keyof LibsElementsProps;
  elementProps: LibsElementsProps[keyof LibsElementsProps];
  isLoading: boolean;
};

export type ProfileInputProps<T extends FieldValues> = RestProps<T> & TControl<T>;
