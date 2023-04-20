import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export interface GlobalProps {
  isPhoneMenuClick: boolean;
}

const GlobalStyle = createGlobalStyle`
  ${normalize}

    /* font */

  @font-face {
    font-family: CastleBegaleTTF;
    src: url('/fonts/CastleBegaleTTF.ttf');
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
    height: 100%;
  }

  body {
    height: 100%;
    overflow: ${(props: GlobalProps) => (props.isPhoneMenuClick ? 'hidden' : 'auto')};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
  }

  * { font-family: ${({ theme }) => theme.font.Logo}}

  a {  cursor: pointer; text-decoration: none}

  a { text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none}

  input,
  input:active,
  input:focus{
    border: none;
    outline: none;
    -webkit-appearance:none;
    -moz-appearance: none;
    -o-appearance:none;
    appearance: none;
    font-family: ${({ theme }) => theme.font.Efont};
  }

  button {
    border: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.Efont};
  }

  ul,
  li,
  li:active,
  li:hover{
    list-style: none;
    padding: 0;
    margin: 0;

  }



  
`;

export default GlobalStyle;
