import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.5rem;
`;

export const Content = styled.div`
  position: relative;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  width: 180px;

  background-color: ${({ theme }) => theme["white"]};

  display: flex;
  flex-direction: column;

  padding: 0.5rem 0;
  border-radius: 0.5rem;

  button {
    padding: 0.825rem;
    font-family: "Roboto", sans-serif;
  }
`;
