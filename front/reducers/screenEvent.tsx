import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import { ScreenEventinitialState } from './types/screenEvent';

export const initialState: ScreenEventinitialState = {
  isPhoneMenuClick: false,
  isSearchClick: false,
};

export const onPhoneMenuClick = () => {
  return {
    type: t.PHONE_MENU_CLICK,
  };
};

export const onSearchClick = () => {
  return {
    type: t.SEARCH_CLICK,
  };
};

export const unmountSearchModal = () => {
  return {
    type: t.UNMOUNT_BACKGROUND,
  };
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.PHONE_MENU_CLICK: {
        draft.isPhoneMenuClick = !draft.isPhoneMenuClick;
        break;
      }
      case t.SEARCH_CLICK: {
        draft.isSearchClick = !draft.isSearchClick;
        break;
      }
      case t.UNMOUNT_BACKGROUND: {
        draft.isPhoneMenuClick = false;
        draft.isSearchClick = false;
        break;
      }
    }
  });
};
