import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
      background-color: ${({ theme }) => theme.colors.background};
      font-size: 16px;
      height: 100%;
    }

    button {
      cursor: pointer;
    }
`;

export default GlobalStyles;
