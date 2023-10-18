import Router from 'next/router';
import empty from '../../../public/AnimaionJson/emptyDataPerson.json';
import emptyStore from '../../../public/AnimaionJson/emptyDataStore.json';

const defaultStyle = {
  width: '80%',
  height: '50%',
};

export const useLottiePropsByEmpty = {
  OverView: {
    options: {
      src: empty,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '이런! 저장된 의류가 없네요!',
    Button: '저장 페이지로',
    Router: () => Router.push('/closet/add'),
  },
  Store: {
    options: {
      src: emptyStore,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '이런! 저장된 의류가 없네요!',
    Button: '저장 페이지로',
    Router: () => Router.push('/closet/add'),
  },
} as const;

export type PropsByEmpty = { state: keyof typeof useLottiePropsByEmpty };
