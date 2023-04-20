import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as t from '../../reducers/type';
import Image from 'next/image';

import SkeletonImage from '../add/SkeletonImage';
import AButton from './element/button/AButton';

import { visionAICardData } from '../add/VisionAIData';
import { media } from '../../styles/media';
import { backUrl, base64URL } from '../../config/config';
import { CheckCircleTwoTone } from '@ant-design/icons';

interface VisionAiCardProps {
  imageUploadLoding: boolean;
  src: string;
  index: number;
  isClothes: boolean;
  isCategori: boolean;
  confidence: boolean;
}

const VisionAICard = ({ imageUploadLoding, src, index, isClothes, isCategori, confidence }: VisionAiCardProps) => {
  const dispatch = useDispatch();

  const onRemoveImage = useCallback(
    (index: number) => () => {
      dispatch({
        type: t.REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  return (
    <SkeletonImage isLoading={imageUploadLoding}>
      <PreviewContainer key={src} border={isClothes}>
        <PreviewImage src={`${backUrl}/${src}`} alt='의류이미지' width={600} height={600} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
        <PreviewTextContainer>
          <PreviewText>
            {[isClothes, isCategori, confidence].map((state, idx) => {
              return (
                <TextBox>
                  <span>{visionAICardData[idx].intro}</span>
                  <Text>
                    <CheckCircleTwoTone twoToneColor={state ? visionAICardData[idx].good : visionAICardData[idx].bad} />
                    {state ? visionAICardData[idx].goodExplain : visionAICardData[idx].badExplain}
                  </Text>
                </TextBox>
              );
            })}
          </PreviewText>
          <ButtonBox>
            <AButton color='' disabled={false} dest='제거' onClick={onRemoveImage(index)} />
          </ButtonBox>
        </PreviewTextContainer>
      </PreviewContainer>
    </SkeletonImage>
  );
};

export default VisionAICard;

const PreviewContainer = styled.div<{ border: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid ${({ theme, border }) => (border ? theme.colors.success : theme.colors.red)};
  border-radius: 5px;
  gap: 30px;
  transition: box-shadow 0.25s ease-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${media.desktop} {
    width: 49.5%;
  }

  ${media.middlePhone} {
    flex-direction: row;
  }
`;

const PreviewImage = styled(Image)`
  width: 55%;
  height: auto;
  object-fit: cover;
`;

const PreviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: c;
  height: 100%;
  margin-right: 3%;
`;

const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const TextBox = styled.div`
  display: inline-block;
  margin-bottom: 5px;

  > span {
    display: inline-block;
    font-size: 11px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.deepGrey};
    margin-bottom: 5px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-family: ${({ theme }) => theme.font.Efont};
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;
