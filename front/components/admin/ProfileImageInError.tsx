import React from 'react';
import styled from 'styled-components';

const ProfileImageInError = () => {
  return <CircleInError>Upload Error</CircleInError>;
};

export default ProfileImageInError;

const CircleInError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.red};
  border-radius: 75px;

  ${({ theme }) => theme.animation.fade({ name: 'ProfileImage' })}
`;
