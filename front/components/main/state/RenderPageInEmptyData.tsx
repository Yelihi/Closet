import React from 'react';
import styled from 'styled-components';
import useLottieAnimation from '../../../hooks/useLottieAnimation';

import { media } from '../../../styles/media';
import AButton from '../../recycle/buttonElements/AButton';
import Nav from '../../Nav';
import Intersection from '../../recycle/Intersection';
import { NavRow } from './RenderPageInLoading';
import { useLottiePropsByStateInOverview } from '../data/Data';

type RenderPageInEmptyDataProps = {
  state: 'Empty' | 'Error';
};

const RenderPageInEmptyData = ({ state }: RenderPageInEmptyDataProps) => {
  const View = useLottieAnimation(useLottiePropsByStateInOverview[state].options);

  return (
    <IsEmptyStateContainer>
      <NavRow>
        <Nav />
      </NavRow>
      <Intersection />
      <Container>
        <IconContainer>
          {View}
          <NotifiedSentence>{useLottiePropsByStateInOverview[state].Notify}</NotifiedSentence>
          <AButton
            color='black'
            disabled={false}
            dest={useLottiePropsByStateInOverview[state].Button}
            onClick={useLottiePropsByStateInOverview[state].Router}
            style={{ maxWidth: '35rem' }}
          />
        </IconContainer>
      </Container>
    </IsEmptyStateContainer>
  );
};

export default RenderPageInEmptyData;

const IsEmptyStateContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 30px;
  padding: 0;
  ${media.tablet} {
    display: grid;
    grid-template-rows: 60px 1px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'nav nav'
      'inter inter'
      'empty empty';
    gap: 1.5rem;
    height: 100%;
    padding: 24px;
  }
`;

const Container = styled.section`
  grid-area: empty;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: auto;
  gap: 2rem;
`;

const NotifiedSentence = styled.h3`
  font-size: clamp(1.6rem, 2.3vw, 2.4rem);
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: clamp(2rem, 2vw, 3rem);
`;
