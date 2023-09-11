import React from 'react';
import { screen, render } from '@testing-library/react';
import RenderWithTheme from '../../util/TestUtils/renderWithTheme';

import AButton from '../../components/recycle/element/button/AButton';
import { StaticImageData } from 'next/image';

type Prop = {
  color: string;
  disabled: boolean;
  src?: StaticImageData;
  dest: string;
  onClick?: typeof jest.fn;
  innerRef?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement | null) => void) | null | undefined;
};

const defaultProps: Prop = {
  color: '',
  disabled: false,
  dest: '기본값',
  innerRef: undefined,
};

describe('PolyButton Component', () => {
  it('기본 값 렌더 시 type 이 button', () => {
    //Arrage
    render(
      <RenderWithTheme>
        <AButton {...defaultProps} />
      </RenderWithTheme>
    );

    const buttonElement = screen.getByRole('button', { name: '기본값' });
    //Act

    //Assert
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle({ backgroundColor: '#fff' });
  });

  it.skip('As 에 속성값을 기입하면 type 이 지정해준 속성값으로 지정', () => {});

  it.skip('disabled 가 true 이면 버튼을 클릭하지 못하며, 배경색이 회색이 됨', () => {});

  it.skip('color를 지정해주면 요소의 배경 색이 지정 됨', () => {});
});
