import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /*     CSS RESET
  ------------- */
  html {
    box-sizing: border-box;
    font-size: 16px;    /*Decalre sizes in rem's, which is based off this. */
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    /* font-weight: normal;   Optional. */
  }

  ol, ul {
    list-style: none;
  }

  /*  This makes images responsive by default */
  img {
    max-width: 100%;
    height: auto;
  }

  /* END CSS RESET
  ------------- */

  a {
    text-decoration: none;
    color: ${props => props.theme.primaryLight};
  }

  body {
    background-color: #2C2A3C;
    /* Making the body's position relative & declaring overflow as hidden 
    will prevent a horizontal scrollbar from appearing when using translateX*/
    position: relative;
    overflow-x: hidden;  /*Allow overflow vertically but not horizontally. */
  }

/* These class name styles DO work.*/
  .landingPageContainer {
      /* height: 100vh; */
      background-color: #2C2A3C;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
  }



  /* Original Page Container
    .pageContainer { 
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
  }
  */

  .center {
      align-items: center;
  }

  [class^="number-slide"],
  [class*=" number-slide"] {
    background: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    height: 350px;
    max-height: 100vh;
    flex-wrap: wrap;
    border-radius: 5px;
  }

  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(
      128deg,
      rgba(64, 175, 255, 1) 0%,
      rgba(63, 97, 255, 1) 100%
    );
  }

  `