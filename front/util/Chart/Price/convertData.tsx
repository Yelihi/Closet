import { ItemsArray, Categories } from '../../Types/response';

export const lineColors = ['hsl(0, 0%, 27%)', 'hsl(23, 100%, 50%)'];

export const emptyChartData = { id: 'empty', color: '#454545', data: [] };
export const emptyChartMonthlyItems: ItemsArray[][] = [];

export const convertDataToDesktopChart = (swrData: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
  const Data = [];
  // 전달받은 데이터 중 뽑아야 하는 데이터는,
  const { lineData: sortedTotalData } = SortedTotalData(swrData, year);
  const { lineData: sortedDataByCategories, items: sortedCategoriesMonthlyItems } = SortedDataByCategories(
    swrData,
    year,
    categori
  );
  const doesExistData = sortedTotalData.data.every(item => item.y === 0);
  Data.push(sortedTotalData);
  categori.length > 0 && Data.push(sortedDataByCategories);

  return { Data, doesExistData, sortedCategoriesMonthlyItems };
};

export const SortedTotalData = (swrDate: ItemsArray[] | undefined, year: number) => {
  if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
  const { monthlyPriceArray, monthlyItemsArray } = extractMonthlyData(swrDate, year);
  const totalLineData = formatingChartData('TotalItems', 'hsl(0, 0%, 27%)', monthlyPriceArray);
  return { lineData: totalLineData, items: monthlyItemsArray };
};

export const SortedDataByCategories = (swrDate: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
  if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
  const sortedItemsArray = swrDate.filter(item => categori.includes(item.categori));
  const { monthlyPriceArray, monthlyItemsArray } = extractMonthlyData(sortedItemsArray, year);
  const matchedLineDataByCategories = formatingChartData(
    createChartId(categori),
    'hsl(23, 100%, 50%)',
    monthlyPriceArray
  );
  return { lineData: matchedLineDataByCategories, items: monthlyItemsArray };
};

export const extractMonthlyData = (swrData: ItemsArray[] | undefined, year: number) => {
  const monthlyItemsArray: ItemsArray[][] = [];
  const monthlyPriceArray: { x: string; y: number }[] = [];
  if (!swrData || swrData.length === 0) {
    const { monthlyItemsArray, monthlyPriceArray } = createDummyData(year);
    return { monthlyItemsArray, monthlyPriceArray };
  }
  // 1월부터 12월까지 fliter 된 데이터들
  for (let i = 1; i <= 12; i++) {
    const Month = i < 10 ? `0${i}` : `${i}`;
    const Date = year + '-' + Month;
    const itemsArray = swrData.filter(cloth => cloth.purchaseDay.substring(0, 7) === Date);
    const Price = summedPrice(itemsArray);
    monthlyItemsArray.push(itemsArray);
    monthlyPriceArray.push({ x: Date, y: Price });
  }

  return { monthlyItemsArray, monthlyPriceArray };
};

export const summedPrice = (itemsArray: ItemsArray[] | undefined) => {
  if (!itemsArray) return 0;
  return itemsArray.reduce((sum, item) => (sum = sum + item.price), 0) / 1000;
};

export const flatMonthlyItemsArray = (array: ItemsArray[][]) => {
  return array.flat();
};

export const summedTotalPriceWithCategories = (array: ItemsArray[][]) => {
  const flatItemsArray = flatMonthlyItemsArray(array);
  const summaryPrice = summedPrice(flatItemsArray);
  return summaryPrice;
};

export const createChartId = (categori: Categories[]) => {
  const Id = categori.length > 0 ? categori.join(' + ') : 'categori';
  return Id;
};

export const formatingChartData = (id: string, color: string, data: { x: string; y: number }[]) => {
  return {
    id: id,
    color: color,
    data: data,
  };
};

export const createDummyData = (year: number) => {
  const monthlyItemsArray: ItemsArray[][] = [];
  const monthlyPriceArray = [];
  for (let i = 1; i <= 12; i++) {
    const Month = i < 10 ? `0${i}` : `${i}`;
    const Date = year + '-' + Month;
    monthlyPriceArray.push({ x: Date, y: 0 });
  }
  return { monthlyItemsArray, monthlyPriceArray };
};
