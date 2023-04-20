interface CategoriObject {
  [key: string]: string[];
}

export const visionAI = ['Outerwear', 'Coat', 'Shoe', 'Footwear', 'Sunglasses', 'Top', 'Belt', 'Luggage & Bag', 'Jeans', 'Scarf', 'Tie', 'Shirt', 'Pants', 'Hat'];

export const categoriToVisionAI: CategoriObject = {
  Outer: ['Outerwear', 'Coat'],
  Top: ['Top'],
  Pant: ['Pants', 'Jeans'],
  Shirt: ['Shirt'],
  Shoe: ['Shoe'],
  Muffler: ['Scarf'],
};

export const visionAICardData = [
  {
    intro: '의류 사진여부 판단',
    good: '#52c41a',
    bad: '#E7373C',
    goodExplain: '적절한 사진입니다.',
    badExplain: '의류 사진을 넣어주세요',
  },
  {
    intro: '카테고리 적합성',
    good: '#52c41a',
    bad: '#F4A100',
    goodExplain: '카테고리에 적합한 의류입니다',
    badExplain: '저장하실 순 있지만 적합의류는 아닙니다.',
  },
  {
    intro: '사진 내 카테고리 이미지 차지 비율',
    good: '#52c41a',
    bad: '#F4A100',
    goodExplain: '의류 비중이 적합합니다.',
    badExplain: '좀 더 적합의류의 비중이 높은 사진을 올려주세요',
  },
];
