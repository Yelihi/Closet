import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { media } from '../../styles/media';
import { AiOutlinePlus } from 'react-icons/ai';

const StoreAddSection = () => {
  const moveToAddPage = useCallback(() => {
    Router.push('/closet/add');
  }, []);

  return (
    <AddSection>
      <DictionaryBox>
        <dt>CLOTHES TABLE</dt>
        <dd>현재까지 저장된 보관 의류표</dd>
      </DictionaryBox>
      <AddButton onClick={moveToAddPage}>
        <AiOutlinePlus style={{ width: '20px', height: '20px' }} />
        <div>ADD PRODUCT</div>
      </AddButton>
    </AddSection>
  );
};

export default StoreAddSection;

const AddSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  margin-bottom: 10px;
`;

const DictionaryBox = styled.dl`
  > dt {
    font-size: clamp(13px, 1.5vw, 18px);
    line-height: 18px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 8px;
  }

  > dd {
    font-size: clamp(10px, 1.5vw, 14px);
    line-height: 15px;
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;

  > div {
    display: none;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${media.middlePhone} {
    > div {
      display: block;
      font-size: clamp(12px, 1.8vw, 14px);
    }
  }
`;
