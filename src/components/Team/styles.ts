import styled from "styled-components";

import shirt from "../../assets/shirt.png";

type Colors = { [key: string]: string };

interface ShirtBackgroundProps {
  color: string;
}

interface ShirtButtonProps {
  color: string;
}

const colors: Colors = {
  green: "#4cb963",
  yellow: "#f2c94c",
  orange: "#f2994a",
  red: "#eb5757",
  blue: "#2f80ed",
  black: "#000000",
};

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
`;

export const ShirtBackground = styled.div<ShirtBackgroundProps>`
  height: 96px;
  width: 82px;

  background-color: ${({ color }) => colors[color]};
`;

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

  background-color: ${({ color }) => colors[color]};
`;

export const Shirt = styled.div`
  height: 96px;
  width: 82px;

  background-image: url(${shirt});
  background-size: contain;
  background-repeat: no-repeat;
`;
