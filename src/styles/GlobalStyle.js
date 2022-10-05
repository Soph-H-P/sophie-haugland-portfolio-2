import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: ${(props) => props.theme.primaryFont};;
    }

    html,
    body {
      height: 100%;
      margin: 0;
      scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
