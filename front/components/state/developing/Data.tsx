import Router from 'next/router';
import keepBuilding from '../../../public/AnimaionJson/keepBuilding.json';

const defaultStyle = {
  width: '80%',
  height: '50%',
};

export const useLottiePropsByDeveloping = {
  Develop: {
    options: {
      src: keepBuilding,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '열심히 개발중입니다!',
    Button: '메인 페이지로',
    Router: () => Router.push('/closet/overview'),
  },
} as const;

export type PropsByEmpty = { state: keyof typeof useLottiePropsByDeveloping };
