import React, { useEffect } from 'react';
import { LottieOptions, useLottie } from 'lottie-react';
import FinishAni from '../public/AnimaionJson/finish.json';

type Style = { [Key in keyof React.CSSProperties]: React.CSSProperties[Key] };

const deafultStyle = {
  width: '25rem',
  height: '25rem',
};

const defaultOptions: LottieOptions = {
  animationData: FinishAni,
  loop: false,
  autoplay: true,
};

const useLottieAnimation = (options: LottieOptions = defaultOptions, style: Style = deafultStyle, state?: boolean) => {
  const { View, play, stop } = useLottie(options, style);

  useEffect(() => {
    play();

    return () => {
      stop();
    };
  }, [state]);

  return View;
};

export default useLottieAnimation;
