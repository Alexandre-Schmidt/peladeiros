import styled from "styled-components";

interface ContainerProps {
  isSelected: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: flex-end;

  & + button {
    margin-top: 1rem;
  }

  > div {
    margin-bottom: 1px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme["gray600"]};
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.5rem;

    div {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background-color: ${({ isSelected, theme }) =>
        isSelected ? theme["blue500"] : theme["gray500"]};
    }
  }
`;
