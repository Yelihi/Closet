import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { backUrl, base64URL } from '../../config/config';

type CenteredPositionImageProps = {
  shape: 'radius' | 'none';
  width: number;
  height: number;
  src: string;
  alt: string;
};

const CenteredPositionImage = ({ shape, width, height, src, alt }: CenteredPositionImageProps) => {
  return (
    <ImageContainer width={width} height={height}>
      <ThumbnailWrapper>
        <Thumbnail width={width} shape={shape}>
          <Centered>
            <CImage
              src={`${src}`}
              alt={alt}
              width={100}
              height={100}
              placeholder='blur'
              blurDataURL={`data:image/gif;base64,${base64URL}`}
            />
          </Centered>
        </Thumbnail>
      </ThumbnailWrapper>
    </ImageContainer>
  );
};

export default CenteredPositionImage;

const ImageContainer = styled.div<{ width: number; height: number }>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div<{ width: number; shape: 'radius' | 'none' }>`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: ${props => (props.shape === 'radius' ? `${props.width / 2}px` : `0px`)};
`;

const Centered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
`;

const CImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
