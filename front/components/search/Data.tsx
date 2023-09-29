import { MdOutlineSaveAlt, MdNoteAdd, MdOutlineAdminPanelSettings } from 'react-icons/md';

import searchLoading from '../../public/AnimaionJson/searchLoading.json';
import noFoundData from '../../public/AnimaionJson/noFoundData.json';
import error from '../../public/AnimaionJson/error.json';

export const serviceList = [
  {
    service: '등록한 의류 목록 확인하기',
    link: '/closet/store',
    icon: <MdOutlineSaveAlt className='logo' />,
  },
  {
    service: '의류 정보를 등록하기',
    link: '/closet/add',
    icon: <MdNoteAdd className='logo' />,
  },
  {
    service: '개인 정보 확인하기',
    link: '/closet/administration',
    icon: <MdOutlineAdminPanelSettings className='logo' />,
  },
];

// type MakeReculsive<Type> = {
//    [Key in keyof Type]: MakeReculsive<Type[Key]>;
// };

const defaultStyle = {
  width: '50%',
  height: '26rem',
};

export const useLottiePropsByState = {
  Loading: {
    options: {
      src: searchLoading,
      loop: false,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '검색중입니다...',
  },
  Error: {
    options: {
      src: error,
      loop: false,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '검색 과정에서 에러가 발생하였습니다.',
  },
  NoFound: {
    options: {
      src: noFoundData,
      loop: false,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '찾으시는 의류가 존재하지 않아요!',
  },
  Initial: {
    options: {
      src: noFoundData,
      loop: false,
      autoplay: true,
      style: defaultStyle,
    },
    Notify: '확인하고 싶은 의류명을 검색해주세요',
  },
} as const;
