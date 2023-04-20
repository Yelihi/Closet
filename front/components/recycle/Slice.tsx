import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { backUrl, base64URL } from '../../config/config';

type Image = {
  id: number;
  src: string;
  createdAt: string;
  updatedAt: string;
  ClothId: number;
};

type Props = {
  src: Image[] | null;
};

SwiperCore.use([Navigation, Pagination]);

const Slice = ({ src }: Props) => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const settings = useMemo(
    () => ({
      ref: swiperRef,
      navigation: true,
      module: [Navigation, Pagination],
      onSwiper: setSwiperInstance,
    }),
    []
  );

  const moveToSlide = (index: number) => () => {
    swiperInstance?.slideTo(index);
  };

  return (
    <>
      <CSwiper {...settings}>
        {src &&
          src.map((v, i) => {
            return (
              <CSwiperSlide>
                <ThumbnailWrapper>
                  <Thumbnail>
                    <Centered>
                      <CImage src={`${backUrl}/${v.src}`} alt={v.src} width={600} height={600} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
                    </Centered>
                  </Thumbnail>
                </ThumbnailWrapper>
              </CSwiperSlide>
            );
          })}
      </CSwiper>
      <SubSection>
        {src &&
          src.map((v, i) => {
            return (
              <SubContainer>
                <ThumbnailWrapper>
                  <Thumbnail>
                    <Centered>
                      <CImage src={`${backUrl}/${v.src}`} alt={v.src} width={200} height={200} onClick={moveToSlide(i)} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
                    </Centered>
                  </Thumbnail>
                </ThumbnailWrapper>
              </SubContainer>
            );
          })}
      </SubSection>
    </>
  );
};

export default Slice;

const CSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  border-radius: 20px;

  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.brown};

    &::after {
      font-size: 20px;
    }
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.brown};

    &::after {
      font-size: 20px;
    }
  }
`;

const CSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.milk};
  width: 100%;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 20px;
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

const SubSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: auto;
`;

const SubContainer = styled.div`
  max-width: 25%;
  width: 100%;
  height: auto;
`;
