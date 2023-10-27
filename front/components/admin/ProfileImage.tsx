import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CenteredPositionImage from '../recycle/CenteredPositionImage';
import { CiCirclePlus } from 'react-icons/ci';
import { rootReducerType } from '../../reducers/types';
import SetUploadImageFile from './SetUploadImageFile';
import ProfileImageInError from './ProfileImageInError';
import ProfileImageInLoading from './ProfileImageInLoading';

const ProfileImage = () => {
  const { uploadPreviewImageLoading, uploadPreviewImageError, userProfileImages } = useSelector(
    (state: rootReducerType) => state.user
  );

  if (uploadPreviewImageError) return <ProfileImageInError />;
  if (uploadPreviewImageLoading) return <ProfileImageInLoading />;
  if (userProfileImages !== '')
    return (
      <SetUploadImageFile>
        <CenteredPositionImage shape='radius' width={150} height={150} src={userProfileImages} alt='profile' />
      </SetUploadImageFile>
    );

  return (
    <SetUploadImageFile>
      <IconBox>
        <CiCirclePlus />
        <p>upload profile</p>
      </IconBox>
    </SetUploadImageFile>
  );
};

export default ProfileImage;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
  }
  > svg {
    width: 5rem;
    height: auto;
  }
`;
