import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Tag } from 'antd';

import { media } from '../../styles/media';

const { CheckableTag } = Tag;
const tagsData = ['Outer', 'Shirt', 'Pant', 'Top', 'Shoe', 'Muffler'];

const SelectCategories = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Container>
      <div>
        <Title>Select Categories</Title>
        <SubTitme>다중으로 선택하실 수 있습니다</SubTitme>
      </div>
      <InputContainer>
        <CategoriSection>
          {tagsData.map(tag => (
            <CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={checked => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </CategoriSection>
      </InputContainer>
    </Container>
  );
};

export default SelectCategories;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 1rem 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.span`
  display: flex;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 14px;
`;

const SubTitme = styled.p`
  display: flex;
  height: auto;
  max-width: 450px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  white-space: pre-wrap;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  ${media.tablet} {
    max-width: 320px;
  }
`;

const CategoriSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.2px solid ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 2rem;

  > span {
    margin: 0;
  }

  ${media.tablet} {
    margin-top: 0;
  }
`;
