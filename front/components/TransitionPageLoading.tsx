import React from 'react';
import styled from 'styled-components';
import { IPlayerProps } from '@lottiefiles/react-lottie-player';
import useLottieAnimation from '../hooks/useLottieAnimation';
import mainLoading from '../public/AnimaionJson/mainLoading.json';

const options: IPlayerProps = {
  src: mainLoading,
  loop: true,
  autoplay: true,
  style: {
    width: '30rem',
    height: '30rem',
  },
};

export default function TransitionPageLoading() {
  const Loading = useLottieAnimation(options);

  return (
    <BackgroundContainer>
      <Center>{Loading}</Center>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0);
  opacity: 0.6;
  z-index: 40;
`;

const Center = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 40;
`;
