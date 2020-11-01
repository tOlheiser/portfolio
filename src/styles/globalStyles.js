import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${props => props.theme.primaryLight};
  }
`
// Set up font families