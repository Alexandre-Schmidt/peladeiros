import styled from "styled-components";

interface ShirtButtonProps {
  color: string;
}

export const ContainerTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 0.5rem;

  position: relative;

  &:first-child {
    > div:nth-child(2) {
      left: -1.25rem;
    }
  }

  button {
    width: 32px;
    margin: 0 auto;
  }
`;

export const ShirtWrapper = styled.div``;

export const ContainerShirtButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  position: absolute;
  right: -1.25rem;
  top: 0.5rem;
`;

export const ShirtButton = styled.div<ShirtButtonProps>`
  height: 16px;
  width: 16px;
  border: solid 1px;
  border-radius: 50%;

  background-color: ${({ color }) => color};
`;
