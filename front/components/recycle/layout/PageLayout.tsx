import React from 'react';
import styled from 'styled-components';
import useUnmountMenu from '../../../hooks/useUnmountMenu';

import Nav from '../../Nav';
import Intersection from '../Intersection';

import { media } from '../../../styles/media';
import { NavRow } from '../../main/state/RenderPageInLoading';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props): JSX.Element => {
  useUnmountMenu();

  return (
    <Container>
      <NavRow>
        <Nav />
      </NavRow>
      <Intersection></Intersection>
      {children}
    </Container>
  );
};

export default PageLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 50px;
  padding: 24px 0;
  ${media.tablet} {
    width: calc(100vw - 115px);
    gap: 10px;
    padding: 24px;
  }

  ${media.desktop} {
    width: calc(100vw - 315px);
  }
`;
