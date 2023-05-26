import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    #root {
    height: 100vh;
    width: 100%; 
    }

    body{
      font-size: 62.5%;
    }


  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;

export default GlobalStyles;
