import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as t from '../../../reducers/type';

import AppLayout from '../../AppLayout';
import Nav from '../../Nav';
import Intersection from '../element/Intersection';

import { media } from '../../../styles/media';

import { NavRow } from '../../../pages/closet/overview';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: t.UNMOUNT_BACKGROUND });
  }, []);

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
