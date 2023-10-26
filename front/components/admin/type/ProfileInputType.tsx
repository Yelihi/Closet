import { TControl } from '../../recycle/element/type';
import { FieldValues } from 'react-hook-form';

export type RestProps<T> = {
  fieldName: string;
  information: string;
  node: React.ReactElement;
};

export type ProfileInputProps<T extends FieldValues> = RestProps<T> & TControl<T>;
