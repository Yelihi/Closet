import Router from 'next/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import AButton from '../recycle/element/button/AButton';

const IntroSection = () => {
  const moveToAddPage = useCallback(() => {
    Router.push('/closet/add');
  }, []);
  return (
    <MainContainer>
      <Container>
        <Description>
          <div>
            <Title>Let's manage the messy clothes in the closet at a glance!</Title>
          </div>
          <div>
            <ItalicParagraph>"저번에 비슷한 옷을 샀던것 같은데..?"</ItalicParagraph>
            <br />
            <SubParagraph>
              현명한 쇼핑을 시도하다 보면 종종 이전에 구매했던 옷들의 정보가 필요할 때가 있습니다. 이제 CLOSET 에 간략한 정보들을 등록함으로서 한눈에 소유중인 의류의 정보를 확인하세요!
            </SubParagraph>
          </div>
        </Description>
        <ButtonContainer>
          <div>
            <Addbutton color='' disabled={false} dest='ADD ITMES' onClick={moveToAddPage} />
          </div>
        </ButtonContainer>
      </Container>
      <ImageBox>
        <video src='/images/authvideo.mp4' autoPlay loop muted />
        <ShadowDiv></ShadowDiv>
      </ImageBox>
    </MainContainer>
  );
};

export default IntroSection;

const MainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 17px 24px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 20;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const Title = styled.span`
  display: flex;
  /* font-family: ${({ theme }) => theme.font.Efont}; */
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
  font-size: clamp(20px, 2vw, 30px);
  margin-bottom: 30px;
`;

const ItalicParagraph = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.mainGrey};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: clamp(13px, 1.5vw, 18px);
`;

const SubParagraph = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-family: ${({ theme }) => theme.font.Efont};
  font-size: clamp(11px, 1.3vw, 16px);
  margin-bottom: 35px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
`;

const Addbutton = styled(AButton)`
  border: none;
  padding: 0 25px;
  transition: background-color 0.25s ease-out, color 0.25s ease-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ShadowDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.05)); ;
`;
