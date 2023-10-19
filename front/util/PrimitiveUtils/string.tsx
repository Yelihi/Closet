export const convertNumberToLocales = (number: number, locales: string) => {
  return new Intl.NumberFormat(locales).format(number);
};

export const convertNumberToKRWCurrency = (number: number) => {
  return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number);
};

export const detectMobileDevice = (userAgent: string | undefined) => {
  if (!userAgent) return false;
  return Boolean(userAgent.match(/Mobi|iP(hone|od|ad)|Android|BlackBerry/));
};
