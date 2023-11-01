import React from 'react';
import styled from 'styled-components';

import VisionAICard from './VisionAICard';
import { categoriToVisionAI, visionAI } from '../../add/data/VisionAIData';
import { ImagePathObject } from '../../../reducers/types/post';
import { UseFormWatch } from 'react-hook-form';
import { AddInitialValue } from '../types/recycleElementsTypes';

type PreviewImageSectionProps = {
  imageUploadLoding: boolean;
  imagePath: ImagePathObject[];
  watch: UseFormWatch<AddInitialValue>;
};

const PreviewImageSection = (props: PreviewImageSectionProps) => {
  const { imageUploadLoding, imagePath, watch } = props;

  if (imageUploadLoding) {
    return (
      <PreviewSection>
        <VisionAICard
          imageUploadLoding={true}
          src={'src'}
          index={1}
          isClothes={true}
          isCategori={true}
          confidence={true}
        />
      </PreviewSection>
    );
  }

  return (
    <PreviewSection>
      {imagePath.length > 0 &&
        imagePath.map((v, i) => {
          let cate = watch('categori');
          let isClothes = v.visionSearch.some(v => visionAI.includes(v.name));
          let isCategori = v.visionSearch.map(v => v.name).some(item => categoriToVisionAI[cate]?.includes(item));
          let confidence = categoriToVisionAI[cate]?.includes(v.visionSearch[0].name);
          return (
            <>
              <VisionAICard
                imageUploadLoding={imageUploadLoding}
                src={v.src}
                index={i}
                isClothes={isClothes}
                isCategori={isCategori}
                confidence={confidence}
              />
            </>
          );
        })}
    </PreviewSection>
  );
};

export default PreviewImageSection;

const PreviewSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;
