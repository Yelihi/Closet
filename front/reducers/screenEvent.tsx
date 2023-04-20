import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import { ScreenEventinitialState } from './types/screenEvent';
import Router from 'next/router';

export const initialState: ScreenEventinitialState = {
  isPhoneMenuClick: false,
  isPhoneSearchClick: false,
};

export const onPhoneMenuClick = () => {
  return {
    type: t.PHONE_MENU_CLICK,
  };
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.PHONE_MENU_CLICK: {
        draft.isPhoneMenuClick = !draft.isPhoneMenuClick;
        break;
      }
      case t.PHONE_SEARCH_CLICK: {
        draft.isPhoneSearchClick = !draft.isPhoneSearchClick;
        break;
      }
      case t.RESET_MENU_CLICK: {
        draft.isPhoneMenuClick = false;
        break;
      }
    }
  });
};
