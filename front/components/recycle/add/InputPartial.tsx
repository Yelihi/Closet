import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../../styles/media';

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

const InputPartial = ({ children, title, subtitle }: Props): JSX.Element => {
  return (
    <Container>
      <TitleContainer>
        <SpecificationTitle>{title}</SpecificationTitle>
        <SpecificationSub>{subtitle}</SpecificationSub>
      </TitleContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default InputPartial;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  ${media.tablet} {
  }
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const ChildrenContainer = styled.div`
  width: 100%;
`;

const SpecificationTitle = styled.h4`
  display: flex;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 15px;
  margin-bottom: 6px;
`;

const SpecificationSub = styled.span`
  display: flex;
  height: auto;
  max-width: 650px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 5px;
  white-space: pre-wrap;
`;
