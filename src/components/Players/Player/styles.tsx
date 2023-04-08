import styled from "styled-components";

interface ContainerProps {
  isSelectable: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0.875rem;

  &:nth-child(odd) {
    background-color: rgba(16, 38, 60, 0.05);
  }

  button {
    height: 20px;
    width: 20px;
  }

  > div {
    display: flex;
    gap: 1.125rem;

    > p {
      color: ${({ isSelectable, theme }) => isSelectable && theme["green500"]};
    }
  }
`;
