import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useBreakpoints from '../../hooks/useBreakpoints';

const SideProfile = () => {
  const { desktop } = useBreakpoints();

  return (
    <ImageContainer>
      {desktop ? (
        <Image src='/images/newClosetLogo.png' alt='로고' width={120} height={130} priority={true} />
      ) : (
        <Image src='/images/smallLogo.png' alt='로고' width={50} height={50} priority={true} />
      )}
    </ImageContainer>
  );
};

export default SideProfile;

const ImageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
