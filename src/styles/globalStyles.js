import { createGlobalStyle } from 'styled-components';

// ! don't forget to setup reset styles

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${props => props.theme.primaryLight};
  }
  body {
    background-color: #2C2A3C;
    /* Making the body's position relative & declaring overflow as hidden 
    will prevent a horizontal scrollbar from appearing when using translateX*/
    position: relative;
    overflow: hidden;
  }

/* These class name styles DO work.*/
  .landingPageContainer {
      height: 100vh;
      background-color: #2C2A3C;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }

  .pageContainer { 
      display: flex;
      flex-direction: column;
      width: 100%;
  }

  .center {
      align-items: center;
  }
`
// Set up font families