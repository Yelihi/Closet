import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { media } from '../../styles/media';
import * as t from '../../reducers/type';
import AButton from '../recycle/buttonElements/AButton';
import useConfirm from '../../hooks/useComfirm';

type DeatilsModifyButtonsProps = {
  id: string | string[] | undefined;
  startModifyFunc: () => void;
  position: 'up' | 'down';
};

const DetailsModifyButtons = ({ id, startModifyFunc, position }: DeatilsModifyButtonsProps) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch({
      type: t.DELETE_ITEM_REQUEST,
      data: { clothId: id },
    });
  };

  const cencelDelete = () => {
    console.log('취소하였습니다.');
  };

  const deleteConfirm = useConfirm('정말 의류를 삭제하시겠습니까?', deleteItem, cencelDelete);

  return (
    <>
      <ButtonContainer position={position}>
        <AButton color='black' disabled={false} onClick={startModifyFunc} dest='수정' />
        <AButton color='' disabled={false} dest='삭제' onClick={deleteConfirm} />
      </ButtonContainer>
    </>
  );
};

export default DetailsModifyButtons;

const ButtonContainer = styled.div<{ position: 'up' | 'down' }>`
  display: ${props => (props.position == 'up' ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;
  float: ${props => (props.position == 'up' ? 'none' : 'right')};
  margin-top: ${props => (props.position == 'up' ? 'none' : '20px')};

  ${media.tablet} {
    display: ${props => (props.position == 'up' ? 'flex' : 'none')};
  }
`;
