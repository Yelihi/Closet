import { ItemsArray, Categories } from '../../Types/response';

export const lineColors = ['hsl(0, 0%, 27%)', 'hsl(23, 100%, 50%)'];

export const emptyChartData = { id: 'empty', color: '#454545', data: [] };

export const convertDataToDesktopChart = (swrData: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
  const Data = [];
  // 전달받은 데이터 중 뽑아야 하는 데이터는,
  const sortedTotalData = SortedTotalData(swrData, year);
  const sortedDataByCategories = SortedDataByCategories(swrData, year, categori);
  const doesExistData = sortedTotalData.data.every(item => item.y === 0);
  Data.push(sortedTotalData);
  categori.length > 0 && Data.push(sortedDataByCategories);

  return { Data, doesExistData };
};

export const SortedTotalData = (swrDate: ItemsArray[] | undefined, year: number) => {
  if (!swrDate) return emptyChartData;
  const { monthlyPriceArray } = extractMonthlyData(swrDate, year);
  const totalLineData = formatingChartData('TotalItems', 'hsl(0, 0%, 27%)', monthlyPriceArray);
  return totalLineData;
};

export const SortedDataByCategories = (swrDate: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
  if (!swrDate) return emptyChartData;
  const sortedItemsArray = swrDate.filter(item => categori.includes(item.categori));
  const { monthlyPriceArray } = extractMonthlyData(sortedItemsArray, year);
  const matchedLineDataByCategories = formatingChartData(
    createChartId(categori),
    'hsl(23, 100%, 50%)',
    monthlyPriceArray
  );
  return matchedLineDataByCategories;
};

export const extractMonthlyData = (swrData: ItemsArray[] | undefined, year: number) => {
  const monthlyItemsArray: ItemsArray[][] = [];
  const monthlyPriceArray: { x: string; y: number }[] = [];
  if (!swrData || swrData.length === 0) {
    return { monthlyItemsArray, monthlyPriceArray };
  }
  // 1월부터 12월까지 fliter 된 데이터들
  for (let i = 1; i <= 12; i++) {
    const Month = i < 10 ? `0${i}` : `${i}`;
    const Date = year + '-' + Month;
    const itemsArray = swrData.filter(cloth => cloth.purchaseDay.substring(0, 7) === Date);
    const Price = summedMonthlyPrice(itemsArray);
    monthlyItemsArray.push(itemsArray);
    monthlyPriceArray.push({ x: Date, y: Price });
  }

  return { monthlyItemsArray, monthlyPriceArray };
};

export const summedMonthlyPrice = (itemsArray: ItemsArray[] | undefined) => {
  if (!itemsArray) return 0;
  return itemsArray.reduce((sum, item) => (sum = sum + item.price), 0) / 1000;
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
