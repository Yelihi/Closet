const customMediaQuery = (maxWidth: number) => `@media screen and (min-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1300),
  tablet: customMediaQuery(786),
  middlePhone: customMediaQuery(400),
  phone: customMediaQuery(320),
};
