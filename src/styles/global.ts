import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    box-sizing: border-box;
  }


  input {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme["blue500"]};
  }

  button {
    cursor: pointer;
  }
`;
