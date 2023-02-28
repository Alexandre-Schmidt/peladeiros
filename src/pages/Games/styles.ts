import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 500px;
  background-color: pink !important;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    list-style-type: none;
    border: 0;
    padding: 0;
    margin: 0;
  }

  button {
    width: 100%;
    position: absolute;
    bottom: 1.5rem;
    padding: 0 1.5rem;
  }
`;
