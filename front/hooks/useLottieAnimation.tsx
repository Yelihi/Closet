import React, { useRef } from 'react';
import { Player, Controls, IPlayerProps } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import FinishAni from '../public/AnimaionJson/finish.json';

type Style = { [Key in keyof React.CSSProperties]: React.CSSProperties[Key] };

const deafultStyle: Style = {
  width: '25rem',
  height: '25rem',
};

const defaultProps: IPlayerProps = {
  loop: false,
  src: FinishAni,
  autoplay: true,
  style: deafultStyle,
};

const useLottieAnimation = (options: IPlayerProps = defaultProps, state?: boolean) => {
  const player = new Player(defaultProps);
  const playerRef = useRef<Player>(player);
  const lottie = useRef<AnimationItem | null>(null);

  // state 의 변화에 따라 실행(그렇기에 state 는 render 를 유발해야한다)
  if (state && lottie.current) {
    lottie.current.play();
  }

  return (
    <Player lottieRef={data => (lottie.current = data)} ref={playerRef} {...options}>
      <Controls visible={false} />
    </Player>
  );
};

export default useLottieAnimation;
