export const addPageLayoutProps = {
  title: 'ADD CLOTHES',
  subTitle: '현 가정 옷장에 보관되어있는 의류의 이름과 색상, 종류 등 각각의 특성들을 기입하여 저장할 수 있습니다.',
};

export const categoriOption = [
  { value: 'Outer', label: 'Outer' },
  { value: 'Shirt', label: 'Shirt' },
  { value: 'Top', label: 'Top' },
  { value: 'Pant', label: 'Pant' },
  { value: 'Shoe', label: 'Shoe' },
  { value: 'Muffler', label: 'Muffler' },
];

export const topMeasure = [
  { sort: 'categoriItem.chest', subtitle: '의류를 펼친 상태에서 가슴 가로 길이를 측정해주세요(cm)' },
  { sort: 'categoriItem.shoulder', subtitle: '왼쪽 어깨선과 오른쪽 어깨선을 가로로 측정해주세요(cm)' },
  { sort: 'categoriItem.arm', subtitle: '어깨선부터 팔 끝까지 길이를 측정해주세요(cm)' },
  { sort: 'categoriItem.totalLength', subtitle: '상의 라벨쪽부터 세로로 총 기장을 측정해주세요(cm)' },
];
export const bottomMeasure = [
  { sort: 'categoriItem.totalLength', subtitle: '바지 허릿단부터 세로로 총 기장을 측정해주세요(cm)' },
  { sort: 'categoriItem.rise', subtitle: '바지의 및위(바지의 두 다리 분기점까지의 기장) 기장을 측정해주세요(cm)' },
  { sort: 'categoriItem.hem', subtitle: '바지의 및단(바지 끝단의 폭)을 측정해주세요(cm)' },
  { sort: 'categoriItem.waist', subtitle: '바지를 쭉 펼쳐 허리 기장을 가로로 측정해주세요(cm)' },
  { sort: 'categoriItem.thigh', subtitle: '바지 허벅지 기장(밑위에서 살짝 내려와 측정)을 측정해주세요(cm)' },
];
export const shoesMeasure = [{ sort: 'categoriItem.size', subtitle: '평균적인 신발 사이즈(한국기준)를 작성해주세요(mm)' }];
export const mufflerMeasure = [{ sort: 'categoriItem.totalLength', subtitle: '머플러의 총 기장을 측정해주세요(cm)' }];

export const topMeasureName = topMeasure.map(v => v.sort);
export const bottomMeasureName = bottomMeasure.map(v => v.sort);
export const shoesMeasureName = shoesMeasure.map(v => v.sort);
export const mufflerMeasureName = mufflerMeasure.map(v => v.sort);

export const topMeasureSub = topMeasure.map(v => v.subtitle);
export const bottomMeasureSub = bottomMeasure.map(v => v.subtitle);
export const shoesMeasureSub = shoesMeasure.map(v => v.subtitle);
export const mufflerMeasureSub = mufflerMeasure.map(v => v.subtitle);

export const colors = [
  '#000000',
  '#ffffff',
  '#92101c',
  '#e7373c',
  '#f1e0e0',
  '#f8e7ce',
  '#664032',
  '#ea601f',
  '#959187',
  '#656418',
  '#caac17',
  '#ffe200',
  '#68c260',
  '#007231',
  '#46647a',
  '#0065a2',
  '#97d0f2',
  '#5b3e68',
  '#964089',
  '#9e8ebd',
  '#5e1938',
  '#f9b8be',
  '#c8c9ca',
  '#f7f7f7',
];

export const clothData = [
  {
    name: 'productName',
    subTitle: '저장하시고 싶은 의류를 구별될 수 있도록 작성해주세요',
    placeholder: 'product name',
    errorMessage: '기입해주세요',
  },
  {
    name: 'price',
    subTitle: '구매하셨을 당시의 금액을 대략적으로 (원) 단위로 작성해주세요',
    placeholder: 'price',
    errorMessage: '가격을 기입해주세요',
  },
  {
    name: 'color',
    subTitle: '현 의류의 대표색상을 주어진 파레트에 따라 대략적으로 선택해주세요',
    placeholder: 'color',
    errorMessage: '색상을 선택해주세요',
  },
  {
    name: 'preference',
    subTitle: '현 의류의 선호도를 별점으로 매겨주세요(1~5점)',
    placeholder: 'preference',
    errorMessage: '별점을 매겨주세요',
  },
  {
    name: 'purchaseDay',
    subTitle: '월 단위로 언제 구매를 하셨는지 날짜를 기입해주세요',
    placeholder: 'purchase month',
    errorMessage: '대략적인 구매시기를 선택해주세요(월)',
  },
];

export const categori = [
  {
    name: 'categori',
    subTitle: `의류 분류를 위해 저장하려는 의류의 카테고리를 선택해주세요.
선택에 따라 기입해야할 수치가 다릅니다.`,
    options: categoriOption,
    defaultValue: '카테고리를 선택헤주세요',
    errorMessage: '카테고리는 필수적으로 선택하여야 합니다',
  },
];

export const descriptionData = [
  {
    name: 'description',
    subTitle: '필수 기입사항 외 등록의류에 대한 정보가 있다면 작성해주세요',
    placeholder: '상세정보를 기입해주세요',
    errorMessage: '특이사항들에 대해서 기입해주세요',
  },
];
