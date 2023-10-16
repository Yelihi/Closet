export const convertNumberToLocales = (number: number, locales: string) => {
  return new Intl.NumberFormat(locales).format(number);
};

export const convertNumberToKRWCurrency = (number: number) => {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number);
};
