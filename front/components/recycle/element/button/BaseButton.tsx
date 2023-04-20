import React from 'react';
import { PolymorphicComponentProps, PolymorphicRef, ButtonProp } from '../type';
import Image from 'next/image';

type _BaseButtonProps = Pick<ButtonProp, 'src' | 'dest'>;

export type BaseButtonProps<T extends React.ElementType> = PolymorphicComponentProps<T, _BaseButtonProps>;

type BaseButtonComponent = <T extends React.ElementType = 'button'>(props: BaseButtonProps<T>) => React.ReactElement | null;

const BaseButton: BaseButtonComponent = React.forwardRef(<T extends React.ElementType = 'button'>({ As, ...props }: BaseButtonProps<T>, ref: PolymorphicRef<T>['ref']) => {
  const Element = As || 'button';
  return (
    <Element ref={ref} {...props}>
      {props.src && <Image src={props.src} alt={props.dest} priority={true} />}
      {props.dest}
    </Element>
  );
});
export default BaseButton;
