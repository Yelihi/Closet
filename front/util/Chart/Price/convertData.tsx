import { ItemsArray, Categories } from '../../Types/response';

export const lineColors = ['hsl(0, 0%, 27%)', 'hsl(23, 100%, 50%)'];

export const emptyChartData = { id: 'empty', color: '#454545', data: [] };
export const emptyChartMonthlyItems: ItemsArray[][] = [];
type Device = 'desktop' | 'phone';

export const convertDataToChart = (
  swrData: ItemsArray[] | undefined,
  year: number,
  categori: Categories[],
  device: Device
) => {
  const Data = [];

  const { lineData: sortedTotalData } = SortExtractedData[device].Total(swrData, year);
  const { lineData: sortedDataByCategories, items: sortedCategoriesMonthlyItems } = SortExtractedData[
    device
  ].FilteredCategory(swrData, year, categori);
  const doesExistData = sortedTotalData.data.every(item => item.y === 0);
  Data.push(sortedTotalData);
  categori.length > 0 && Data.push(sortedDataByCategories);

  return { Data, doesExistData, sortedCategoriesMonthlyItems };
};

export const SortExtractedData = {
  desktop: {
    Total: (swrDate: ItemsArray[] | undefined, year: number) => {
      if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
      // 12개월 기준
      const { monthlyPriceArray, monthlyItemsArray } = extractMonthlyData(swrDate, year);
      // 차트형식으로 데이터 조절
      const totalLineData = formatingChartData('TotalItems', 'hsl(0, 0%, 27%)', monthlyPriceArray);
      return { lineData: totalLineData, items: monthlyItemsArray };
    },
    FilteredCategory: (swrDate: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
      if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
      // 카테고리 filter
      const sortedItemsArray = swrDate.filter(item => categori.includes(item.categori));
      // 12개월 기준
      const { monthlyPriceArray, monthlyItemsArray } = extractMonthlyData(sortedItemsArray, year);
      // 차트형식으로 데이터 조절
      const matchedLineDataByCategories = formatingChartData(
        createChartId(categori),
        'hsl(23, 100%, 50%)',
        monthlyPriceArray
      );
      return { lineData: matchedLineDataByCategories, items: monthlyItemsArray };
    },
  },
  phone: {
    Total: (swrDate: ItemsArray[] | undefined, year: number) => {
      if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
      // 12개월 기준 -> 6개월 기준
      const { monthlyItemsArray } = extractMonthlyData(swrDate, year);
      const { concatMonthlyItems, evenMonthlyPriceArray } = convert6Month(monthlyItemsArray, year);
      // 차트형식으로 데이터 조절
      const totalLineData = formatingChartData('TotalItems', 'hsl(0, 0%, 27%)', evenMonthlyPriceArray);
      return { lineData: totalLineData, items: concatMonthlyItems };
    },
    FilteredCategory: (swrDate: ItemsArray[] | undefined, year: number, categori: Categories[]) => {
      if (!swrDate) return { lineData: emptyChartData, items: emptyChartMonthlyItems };
      // 카테고리 filter
      const sortedItemsArray = swrDate.filter(item => categori.includes(item.categori));
      // 12개월 기준 -> 6개월 기준
      const { monthlyItemsArray } = extractMonthlyData(sortedItemsArray, year);
      const { concatMonthlyItems, evenMonthlyPriceArray } = convert6Month(monthlyItemsArray, year);
      // 차트형식으로 데이터 조절
      const matchedLineDataByCategories = formatingChartData(
        createChartId(categori),
        'hsl(23, 100%, 50%)',
        evenMonthlyPriceArray
      );
      return { lineData: matchedLineDataByCategories, items: concatMonthlyItems };
    },
  },
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

export const convert6Month = (monthlyItemsArray: ItemsArray[][], year: number) => {
  const concatMonthlyItems: ItemsArray[][] = [];
  const evenMonthlyPriceArray: { x: string; y: number }[] = [];
  for (let i = 0; i < monthlyItemsArray.length; i = i + 2) {
    const array = monthlyItemsArray[i].concat(monthlyItemsArray[i + 1]);
    concatMonthlyItems.push(array);
  }
  for (let i = 2; i <= 12; i = i + 2) {
    const Month = i < 10 ? `0${i}` : `${i}`;
    const Date = year + '-' + Month;
    const Price = summedPrice(concatMonthlyItems[i / 2 - 1]);
    evenMonthlyPriceArray.push({ x: Date, y: Price });
  }

  return { concatMonthlyItems, evenMonthlyPriceArray };
};
