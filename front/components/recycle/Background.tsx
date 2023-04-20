import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as t from '../../reducers/type';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const isClickOnMenu = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target === containerRef.current) {
      dispatch({ type: t.RESET_MENU_CLICK });
    }
  };
  return <BackgroundContainer ref={containerRef} onClick={isClickOnMenu}></BackgroundContainer>;
};

export default Background;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
