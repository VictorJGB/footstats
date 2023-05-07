import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    #root {
    height: 100vh;
    width: 100%; 
    }


  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
