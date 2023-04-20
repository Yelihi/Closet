import React, { useMemo } from 'react';
import styled from 'styled-components';

import { media } from '../../styles/media';

interface SkeletonProps {
  children: React.ReactElement;
  isLoading: boolean;
}

const SkeletonImage = ({ children, isLoading }: SkeletonProps) => {
  if (isLoading) {
    return (
      <>
        <PreviewContainer>
          <PreviewImage></PreviewImage>
          <PreviewTextContainer>
            <PreviewText>
              <TextBox>
                <span></span>
                <Text></Text>
              </TextBox>
              <TextBox>
                <span></span>
                <Text></Text>
              </TextBox>
              <TextBox>
                <span></span>
                <Text></Text>
              </TextBox>
            </PreviewText>
            <ButtonBox>
              <div></div>
            </ButtonBox>
          </PreviewTextContainer>
        </PreviewContainer>
      </>
    );
  } else {
    return <>{children}</>;
  }
};

export default SkeletonImage;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 5px;
  gap: 30px;
  transition: box-shadow 0.25s ease-out;
  animation: boxFade 2s 1s infinite linear alternate;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  ${media.desktop} {
    width: 49.5%;
  }

  @keyframes boxFade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const PreviewImage = styled.div`
  width: 55%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
  border-radius: 5px;
`;

const PreviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 100%;
  margin-right: 3%;
`;

const PreviewText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

const TextBox = styled.div`
  display: inline-block;
  margin-bottom: 5px;

  > span {
    display: inline-block;
    width: 50%;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
    margin-bottom: 5px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.hoverGrey};
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  width: 100%;

  > div {
    width: 100%;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.hoverGrey};
    border-radius: 15px;
  }
`;
