import React from 'react';
import styled, { css } from 'styled-components';
import { FileImageOutlined } from '@ant-design/icons';

import * as t from '../../reducers/type';
import AButton from '../recycle/buttonElements/AButton';

import { useDispatch } from 'react-redux';
import useHandleDrag from '../../hooks/useHandleDrag';

function DropImageInput() {
  const dispatch = useDispatch();

  const postImagesData = (list: FormData) => {
    return dispatch({
      type: t.UPLOAD_IMAGES_REQUEST,
      data: list,
    });
  };

  const { dragActive, inputRef, handleDrag, handleDrop, handleChange, onButtonClick } = useHandleDrag(postImagesData);

  return (
    <>
      <ImageUploadContainer onDragEnter={handleDrag}>
        <input ref={inputRef} onChange={handleChange} name='image' type='file' id='image' multiple={true} hidden />
        <LabelFileUpload htmlFor='image' dragActive={dragActive}>
          <InnerContainer>
            <IconCircle>
              <FileImageOutlined style={{ fontSize: '30px' }} />
            </IconCircle>
            <DargText>Drag and Drop your file here or</DargText>
            <AButton As='div' color='black' disabled={false} dest='Upload files' onClick={onButtonClick} />
            <DragSubText>10MB max file size</DragSubText>
          </InnerContainer>
        </LabelFileUpload>
        {dragActive && (
          <DragFileElement
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></DragFileElement>
        )}
      </ImageUploadContainer>

      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default DropImageInput;

const ImageUploadContainer = styled.div`
  position: relative;
  height: 300px;
  max-width: 100%;
  text-align: center;
`;

const LabelFileUpload = styled.label<{ dragActive: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainGrey};
  transition: border 0.25s ease-in-out;

  ${props =>
    props.dragActive &&
    css`
      background-color: white;
      border: 1px solid ${({ theme }) => theme.colors.middleGrey};
    `}
`;

const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  left: 0px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const IconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  margin-bottom: 8px;
`;

const DargText = styled.p`
  display: inline-block;
  padding: 10px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 17px;
`;

const DragSubText = styled(DargText)`
  padding: 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.brown};
`;
