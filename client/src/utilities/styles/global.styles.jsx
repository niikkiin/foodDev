import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /* equivalent to 10px; 1rem = 10px; 10px/16px */
    // e.g. if you want to apply 20px of padding, simply type 2rem
  }

  body {
    box-sizing: border-box;
    font-family: 'Muli', sans-serif;
  }
`;