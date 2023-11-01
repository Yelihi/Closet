import React, { useCallback } from 'react';
import styled from 'styled-components';

import AButton from '../buttonElements/AButton';

type PropTypes = {
  type: 'add' | 'details';
  isClothes: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitButtonSection = ({ type, isClothes, setState }: PropTypes) => {
  const backDetailsPage = useCallback(() => {
    if (setState) {
      setState(prev => !prev);
    }
  }, []);

  return (
    <Float>
      <SubmitButton>
        <AButton type='submit' color='black' dest={type === 'add' ? '저장하기' : '수정하기'} disabled={!isClothes} />
      </SubmitButton>
      {type === 'details' && (
        <SubmitButton>
          <AButton color='' dest='이전으로' onClick={backDetailsPage} disabled={false} />
        </SubmitButton>
      )}
    </Float>
  );
};

export default SubmitButtonSection;

const Float = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButton = styled.div`
  width: 100%;
  max-width: 200px;
`;
