import { MdOutlineSaveAlt, MdNoteAdd, MdOutlineAdminPanelSettings } from 'react-icons/md';

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
