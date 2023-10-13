import emptyDataPerson from '../../../public/AnimaionJson/emptyDataPerson.json';
import error from '../../../public/AnimaionJson/error.json';

const defaultStyle = {
  width: '80%',
  height: '50%',
};

export const useLottiePropsByStateInOverview = {
  Empty: {
    options: {
      src: emptyDataPerson,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '이런! 저장된 의류가 없네요!',
  },
  Error: {
    options: {
      src: error,
      loop: true,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '데이터를 불러오는과정에서 에러가 발생했습니다!',
  },
} as const;
