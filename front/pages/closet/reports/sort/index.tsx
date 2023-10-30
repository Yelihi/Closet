import React from 'react';
import addHead from '../../../../util/addHead';

import RenderDevelopingPage from '../../../../components/state/developing/RenderDevelopingPage';

function sort() {
  return <RenderDevelopingPage state='Develop' />;
}

export default addHead(sort, 'closet', '이 페이지는 분류별 차트 페이지입니다');
