import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.875rem;

  &:nth-child(odd) {
    background-color: rgba(16, 38, 60, 0.05);
  }
`;
