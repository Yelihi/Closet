import Router from 'next/router';
import error from '../../../public/AnimaionJson/error.json';

const defaultStyle = {
  width: '80%',
  height: '50%',
};

export const useLottiePropsByError = {
  OverView: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '데이터를 불러오는과정에서 에러가 발생했습니다!',
    Button: '다시 시도하기',
    Router: () => Router.push('/closet/overview'),
  },
  PriceChart: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '데이터를 불러오는과정에서 에러가 발생했습니다!',
    Button: '다시 시도하기',
    Router: () => Router.push('/closet/reports/price'),
  },
  Store: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '데이터를 불러오는과정에서 에러가 발생했습니다!',
    Button: '다시 시도하기',
    Router: () => Router.push('/closet/store'),
  },
  Admin: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '데이터를 불러오는과정에서 에러가 발생했습니다!',
    Button: '다시 시도하기',
    Router: () => Router.push('/closet/administration'),
  },
} as const;

export const useLottiePropsByNextError = {
  Next: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
  },
} as const;

export type PropsByError = { state: keyof typeof useLottiePropsByError };
export type PropsByNextError = { state: keyof typeof useLottiePropsByNextError };
