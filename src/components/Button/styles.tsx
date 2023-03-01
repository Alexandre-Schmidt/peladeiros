import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme["green500"]};
  color: ${({ theme }) => theme["white"]};
  padding: 0.75rem 0;
  width: 100%;

  font-family: "Alata", sans-serif;
`;
