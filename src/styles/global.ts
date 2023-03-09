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

  label {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
