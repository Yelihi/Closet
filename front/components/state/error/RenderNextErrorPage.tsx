import React from 'react';
import styled from 'styled-components';
import useLottieAnimation from '../../../hooks/useLottieAnimation';
import { useLottiePropsByNextError, PropsByNextError } from './Data';

import { Container, IconContainer, NotifiedSentence } from './RenderErrorPage';

type RenderNextErrorProps = PropsByNextError & {
  statusCode?: number;
};

const RenderNextErrorPage = ({ state, statusCode }: RenderNextErrorProps) => {
  const View = useLottieAnimation(useLottiePropsByNextError[state].options);

  return (
    <NextErrorContainer>
      <Container>
        <IconContainer>
          {View}
          <NotifiedSentence>
            {statusCode === 404
              ? `페이지를 찾을 수 없습니다`
              : statusCode
              ? `${statusCode} 서버 에러가 발생했습니다`
              : `클라이언트 에러가 발생했습니다`}
          </NotifiedSentence>
        </IconContainer>
      </Container>
    </NextErrorContainer>
  );
};

export default RenderNextErrorPage;

const NextErrorContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
