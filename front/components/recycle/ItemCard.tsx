import React, { useCallback } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Router from 'next/router';

import { FaTrashRestoreAlt } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';

import { backUrl, base64URL } from '../../config/config';

interface CardProps {
  src: string;
  id: number;
  onSubmit?: (id: number) => () => void;
}

const ItemCard = ({ src, id, onSubmit }: CardProps) => {
  const moveToDetailsPage = useCallback(
    (id: number) => () => {
      Router.push(`/closet/details/${id}`);
    },
    []
  );
  return (
    <ThumbnailWrapper>
      <Thumbnail>
        <Centered>
          <CImage src={`${backUrl}/${src}`} alt={src} width={600} height={600} placeholder='blur' blurDataURL={`data:image/gif;base64,${base64URL}`} />
          <HoverTumnail>
            <IconBox>
              <BiDetail className='icon' onClick={moveToDetailsPage(id)} />
              <span>상세보기</span>
              {onSubmit ? <FaTrashRestoreAlt className='icon' onClick={() => (window.confirm('삭제하시겠습니까?') ? onSubmit(id)() : () => console.log('취소했씁니다'))} /> : null}
              {onSubmit ? <span>삭제하기</span> : null}
            </IconBox>
          </HoverTumnail>
        </Centered>
      </Thumbnail>
    </ThumbnailWrapper>
  );
};

export default ItemCard;

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

const HoverTumnail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
  opacity: 0;

  .icon {
    width: 9%;
    height: auto;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    cursor: pointer;
  }

  > span {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(10px, 1.5vw, 15px);
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.8;

    .icon {
      opacity: 1;
    }
  }
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
