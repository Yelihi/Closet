import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../../styles/media';

type Props = {
  title?: string;
  subTitle?: string;
  children: ReactNode;
  textArea?: boolean;
};

function InputBackground(props: Props) {
  const { title, subTitle, children, textArea } = props;
  return (
    <>
      <Container textArea={textArea}>
        <div>
          <Title>{title}</Title>
          <SubTitme>{subTitle}</SubTitme>
        </div>
        <InputContainer textArea={textArea}>{children}</InputContainer>
      </Container>
    </>
  );
}

export default InputBackground;

const Container = styled.div<{ textArea: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 2px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  border: 0.2px solid ${({ theme }) => theme.colors.hoverGrey};

  > div {
  }

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    ${props =>
      props.textArea &&
      css`
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      `}
  }
`;

const Title = styled.span`
  display: flex;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 14px;
  margin-bottom: 6px;
`;

const SubTitme = styled.p`
  display: flex;
  height: auto;
  max-width: 450px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const InputContainer = styled.div<{ textArea: boolean | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  ${media.tablet} {
    max-width: 320px;
    margin-top: 10px;

    ${props =>
      props.textArea &&
      css`
        max-width: 100%;
      `}
  }
`;
