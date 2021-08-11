import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{margin: 0; padding: 0; box-sizing: border-box;}

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    
  }
`;

export default GlobalStyle;
