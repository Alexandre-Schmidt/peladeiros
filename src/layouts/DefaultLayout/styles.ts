import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  > div {
    height: 100vh;
    width: 100%;
    max-width: 500px;
    background-color: ${({ theme }) => theme["gray500"]};
  }
`;
