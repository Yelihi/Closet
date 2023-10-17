import { AnyAction } from 'redux';
import produce from 'immer';
import * as t from './type';

import { ChartinitialState } from './types/chart';
import { Categories } from '../util/Types/response';

const currentYear = new Date().getFullYear();

export const initialState: ChartinitialState = {
  selectedYearInPrice: currentYear,
  selectedMonthIndexInPrice: 0,
  selectedCategoriesInPrice: [],
};

export const selectYearAction = (year: number) => {
  return {
    type: t.SELECT_YEAR,
    data: year,
  };
};

export const selectCategoriesAction = (data: Categories[]) => {
  return {
    type: t.SELECT_CATEGORIES,
    data,
  };
};

export const getChartPointId = (id: number) => {
  return {
    type: t.GET_CHART_ID,
    data: id,
  };
};

export default (state = initialState, action: AnyAction) => {
  return produce(state, draft => {
    switch (action.type) {
      case t.SELECT_YEAR: {
        draft.selectedYearInPrice = action.data;
        break;
      }
      case t.SELECT_CATEGORIES: {
        draft.selectedCategoriesInPrice = action.data;
        break;
      }
      case t.GET_CHART_ID: {
        draft.selectedMonthIndexInPrice = action.data;
        break;
      }
      default: {
        break;
      }
    }
  });
};
