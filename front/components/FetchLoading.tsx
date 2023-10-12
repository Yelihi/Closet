import React from 'react';
import { IPlayerProps } from '@lottiefiles/react-lottie-player';
import useLottieAnimation from '../hooks/useLottieAnimation';
import fetchLoading from '../public/AnimaionJson/fetchLoading.json';

import { BackgroundContainer, Center } from './TransitionPageLoading';

const options: IPlayerProps = {
  src: fetchLoading,
  loop: true,
  autoplay: true,
  style: {
    width: '30rem',
    height: '30rem',
  },
};

const FetchLoading = () => {
  const Loading = useLottieAnimation(options);

  return (
    <BackgroundContainer>
      <Center>{Loading}</Center>
    </BackgroundContainer>
  );
};

export default FetchLoading;
