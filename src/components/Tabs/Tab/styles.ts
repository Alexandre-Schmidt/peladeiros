import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;

  > div {
    width: 60%;
    padding: 0 0.5rem 0.5rem 0.5rem;

    border-bottom: ${({ active, theme }) =>
      active ? `2px solid ${theme["green500"]}` : `2px solid transparent`};
  }
`;
