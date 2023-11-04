import React from 'react';
import addHead from '../../../../util/addHead';

import RenderDevelopingPage from '../../../../components/state/developing/RenderDevelopingPage';

const Color = () => {
  return <RenderDevelopingPage state='Develop' />;
};

export default addHead(Color, 'closet', '이 페이지는 의류 색상 차트를 보여줍니다');
