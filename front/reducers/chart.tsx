import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import { ChartinitialState } from './types/chart';

const currentYear = new Date().getFullYear();

export const initialState: ChartinitialState = {
  selectedYearInPrice: currentYear,
  selectedMonthInPrice: null,
  selectedCategoriesInPrice: [],
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
    }
  });
};
