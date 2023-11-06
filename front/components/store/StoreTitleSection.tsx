import React from 'react';
import styled from 'styled-components';

const StoreTitleSection = () => {
  return (
    <TitleSection>
      <dl>
        <Title>CHECK YOUR ITEMS</Title>
        <SubTitle>
          저장하신 전체 의류를 확인하실 수 있습니다.
          <br />
          카테고리별로 분류가 가능하며 원하시면 삭제도 가능합니다만 삭제는 신중하게 결정하시길 바랍니다.
          <br />
          개별 의류를 선택하시면 상세페이지로 이동합니다.
        </SubTitle>
      </dl>
    </TitleSection>
  );
};

export default StoreTitleSection;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.dt`
  font-size: 25px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-bottom: 20px;
`;

const SubTitle = styled.dd`
  display: block;
  font-size: clamp(9px, 2.2vw, 15px);
  line-height: 18px;
  font-family: ${({ theme }) => theme.font.Logo};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;
