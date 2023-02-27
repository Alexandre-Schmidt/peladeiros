import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme["blue500"]};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 280px;
    margin-bottom: 1rem;
  }

  h1 {
    letter-spacing: 0.06em;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1.5rem;
  padding: 0 1.5rem;
`;
