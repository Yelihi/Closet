import React from 'react';
import styled from 'styled-components';

import AButton from '../recycle/buttonElements/AButton';
import { ProfilePatchButtons } from './type/ProfilePatchButtons';

const ProfilePatchButtons = ({ refObj }: ProfilePatchButtons) => {
  // 하나의 함수로 하려고 했지만 ref 가 작동하지 않았다
  const onRefSaveButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (refObj.current.childSaveButtonRef) {
      refObj.current.childSaveButtonRef.click();
    }
  };

  const onRefCencelButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (refObj.current.childCencelButtonRef) {
      refObj.current.childCencelButtonRef.click();
    }
  };
  return (
    <ButtonContainer>
      <AButton color='' disabled={false} dest='cancel' style={{ marginBottom: 0 }} onClick={onRefCencelButtonClick} />
      <AButton color='black' disabled={false} dest='save' style={{ marginBottom: 0 }} onClick={onRefSaveButtonClick} />
    </ButtonContainer>
  );
};

export default ProfilePatchButtons;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 20rem;
  height: auto;
  padding: 0.2rem;
`;
