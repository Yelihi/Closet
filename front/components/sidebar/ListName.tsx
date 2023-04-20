import {
  MdDashboardCustomize,
  MdOutlineSaveAlt,
  MdOutlineInsertChartOutlined,
  MdNoteAdd,
  MdOutlineAdminPanelSettings,
  MdOutlineColorLens,
  MdOutlineAttachMoney,
  MdSortByAlpha,
  MdLogout,
} from 'react-icons/md';

export const sidebarList = [
  {
    name: 'Overview',
    path: '/closet/overview',
    icon: <MdDashboardCustomize className='logo' />,
  },
  {
    name: 'Store',
    path: '/closet/store',
    icon: <MdOutlineSaveAlt className='logo' />,
  },
  {
    name: 'Reports',
    path: '',
    icon: <MdOutlineInsertChartOutlined className='logo' />,
  },
  {
    name: 'ADD',
    path: '/closet/add',
    icon: <MdNoteAdd className='logo' />,
  },
  {
    name: 'Administration',
    path: '/closet/administration',
    icon: <MdOutlineAdminPanelSettings className='logo' />,
  },
  {
    name: 'Logout',
    path: '',
    icon: <MdLogout className='logo' />,
  },
];

export const dropList = [
  {
    name: 'color',
    path: '/closet/reports/color',
    icon: <MdOutlineColorLens className='logo' />,
  },
  {
    name: 'price',
    path: '/closet/reports/price',
    icon: <MdOutlineAttachMoney className='logo' />,
  },
  {
    name: 'sort',
    path: '/closet/reports/sort',
    icon: <MdSortByAlpha className='logo' />,
  },
];
