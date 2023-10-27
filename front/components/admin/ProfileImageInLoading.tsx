import React from 'react';
import styled from 'styled-components';

const ProfileImageInLoading = () => {
  return <CircleInLoading></CircleInLoading>;
};

export default ProfileImageInLoading;

const CircleInLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  border-radius: 75px;

  ${({ theme }) => theme.animation.fade({ name: 'ProfileImage' })}
`;
