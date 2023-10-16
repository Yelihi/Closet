import { Categories } from '../../util/Types/response';
export interface ChartinitialState {
  selectedYearInPrice: number;
  selectedMonthInPrice: string | null;
  selectedCategoriesInPrice: Categories[];
}
