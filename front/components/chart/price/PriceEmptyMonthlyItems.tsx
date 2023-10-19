import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/media';
import noFoundDataAni from '../../../public/AnimaionJson/noFoundData.json';
import useLottieAnimation from '../../../hooks/useLottieAnimation';

const style = {
  width: '50%',
  height: 'auto',
};

const options = {
  loop: false,
  src: noFoundDataAni,
  autoplay: true,
  style: style,
};

const PriceEmptyMonthlyItmes = () => {
  const view = useLottieAnimation(options, true);
  return <ResultsList>{view}</ResultsList>;
};

export default PriceEmptyMonthlyItmes;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 25rem;
  padding: 1rem 0;

  ${media.tablet} {
    height: 18rem;
  }
`;
