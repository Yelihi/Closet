import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import * as t from '../../reducers/type';

import useHandleDrag from '../../hooks/useHandleDrag';

type UploadImageFileProps = {
  children: React.ReactElement;
};

const SetUploadImageFile = ({ children }: UploadImageFileProps) => {
  const dispatch = useDispatch();
  const [clickProfile, setClickProfile] = useState<boolean>(false);

  const onProgileClick = () => {
    setClickProfile(prev => !prev);
  };

  const uploadImage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onButtonClick(e);
    setClickProfile(false);
  };

  const deleteImage = () => {
    dispatch({
      type: t.DELETE_PREVIEW_IMAGE,
    });
  };

  const postImagesData = (list: FormData) => {
    return dispatch({
      type: t.UPLOAD_PREVIEW_IMAGE_REQUEST,
      data: list,
    });
  };

  const { dragActive, inputRef, handleDrop, handleDrag, handleChange, onButtonClick } = useHandleDrag(postImagesData);

  return (
    <Container onDragEnter={handleDrag}>
      <input ref={inputRef} onChange={handleChange} name='image' type='file' id='image' multiple={true} hidden />
      <CircleInStandby onClick={onProgileClick} dragActive={dragActive}>
        {children}
        {clickProfile && (
          <TooTip>
            <p onClick={uploadImage}>Upload Image</p>
            <p onClick={deleteImage}>Delete Image</p>
          </TooTip>
        )}
      </CircleInStandby>
      {dragActive && (
        <DragFileElement
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></DragFileElement>
      )}
    </Container>
  );
};

export default SetUploadImageFile;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

const CircleInStandby = styled.div<{ dragActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 75px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverGrey};
  }

  ${props =>
    props.dragActive &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.lightBlack};
      background-color: ${({ theme }) => theme.colors.mainGrey};
      color: ${({ theme }) => theme.colors.lightBlack};
    `};
`;

const TooTip = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.2rem;
  width: fit-content;
  height: auto;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 40%;
    display: block;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.lightBlack};
  }

  > p {
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    &:hover {
      background-color: ${({ theme }) => theme.colors.mainGrey};
      color: ${({ theme }) => theme.colors.lightBlack};
    }
  }
`;

// dragElement

const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0px;
  left: 0px;
`;
