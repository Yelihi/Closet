import { Categories } from '../../util/Types/response';

export interface ChartinitialState {
  selectedYearInPrice: number;
  selectedMonthIndexInPrice: number;
  selectedCategoriesInPrice: Categories[];
}
