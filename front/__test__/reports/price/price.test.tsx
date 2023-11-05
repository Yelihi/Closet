import { screen } from '@testing-library/react';
import Price from '../../../pages/closet/reports/price';

import { renderWithProvider } from '../../../util/TestUtils/renderWithProvider';

describe('price page', () => {
  it.skip('성공적으로 렌더링 됩니다', async () => {
    renderWithProvider(<Price device='desktop' />);
  });
  it.skip('데스크탑 환경에서는 그래프의 x축의 개월수가 12개월로 렌더링 된다.', () => {
    // 데스크탑 환경에서 렌더링
    // data-testid = /slice/ 의 개수가 12개
    // 확인
  });
  it.skip('모바일 환경에서는 그래프의 x축의 개월수가 6개월로 렌더링 된다.', () => {
    // 모바일 환경에서 렌더링
    // data-testid = /slice/ 의 개수가 6개
    // 확인
  });
  it.skip('년도를 변경하였을 때, 년도 별 가격 데이터가 변경이 된다.', () => {
    // 데스크탑 환경에서 렌더링
    // year select 선택 액션
    // total price 의 변화 + 옆 퍼센트지도 변경
    // 확인
  });
  it.skip('특정 카테고리를 선택하였을 때, 카테고리 내 체크 표시 및 카테고리 카드 내 가격, badge 생성', () => {
    // 데스크탑 환경에서 렌더링
    // Outer categori 클릭
    // 카테고리 클릭 표시 (.ant-tag-checkable-checked) + 카테고리 카드 내 정보 갱신
    // 카드 내 베지 삭제버튼 클릭
    // 카드 정보 갱신 + 카테고리 클릭 체크 삭제
  });
});
