import React from 'react';
import styled from 'styled-components';
import { FieldValues, useController } from 'react-hook-form';

import Intersection from '../recycle/element/Intersection';
import { ProfileInputProps } from './type/ProfileInputType';
import { media } from '../../styles/media';
import useControlLibsElements from '../../hooks/useControlLibsElements';

const ProfileInput = <T extends FieldValues>(props: ProfileInputProps<T>) => {
  const { name, rules, control, fieldName, information, elementType, elementProps, isLoading } = props;
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });

  const view = useControlLibsElements({ elementType, name, value, onChange, elementProps });

  return (
    <>
      <InputContainer>
        <FieldNameBox>
          <FieldName>{fieldName}</FieldName>
          <FieldInfo>{information}</FieldInfo>
        </FieldNameBox>
        {isLoading ? <SkeletonFieldInput /> : <FieldInputBox>{view}</FieldInputBox>}
      </InputContainer>
      <Intersection />
    </>
  );
};

export default ProfileInput;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 1.6rem 0;

  ${media.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const FieldNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

  ${media.tablet} {
    width: 30%;
    margin-bottom: 0;
  }
`;

const FieldName = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const FieldInfo = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const FieldInputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  ${media.tablet} {
    width: 50%;
  }
`;

const SkeletonFieldInput = styled(FieldInputBox)`
  height: 35px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  ${({ theme }) => theme.animation.fade({ name: 'ProfileInput' })}
`;
