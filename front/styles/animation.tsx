import styled, { keyframes } from 'styled-components';

export const phoneSearch = keyframes`
  0%{
    width: 100%;
    gap: 20px;
  }
  50%{
    width: 50%;
    gap: 10px
  }
  100%{
    width: 0;
    gap: 0
  }
`;
