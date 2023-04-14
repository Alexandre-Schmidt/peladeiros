import styled from "styled-components";

import shirt from "../../assets/shirt.png";

interface ShirtBackgroundLeftProps {
  color: string;
}
interface ShirtBackgroundRightProps {
  color: string;
}

export const ContainerTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const ContainerTeamLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 1rem;
`;
export const ContainerTeamRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContainerScoreboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
export const ShirtBackgroundLeft = styled.div<ShirtBackgroundLeftProps>`
  height: 136px;
  width: 118px;

  background-color: ${({ color }) => color};
`;

export const ShirtBackgroundRight = styled.div<ShirtBackgroundRightProps>`
  height: 136px;
  width: 118px;

  background-color: ${({ color }) => color};
`;

export const Shirt = styled.div`
  height: 140px;
  width: 120px;

  background-image: url(${shirt});

  background-size: contain;

  background-repeat: no-repeat;
`;

export const ContainerShirtButton = styled.div`
  display: flex;
  /* position: absolute; */
  position: relative;
  button {
    height: 25px;
    width: 25px;
    border: solid 1px;
    border-radius: 50%;
  }
  .green {
    background-color: #4cb963;
  }
  .yellow {
    background-color: #f2c94c;
  }
  .orange {
    background-color: #f2994a;
  }
  .red {
    background-color: #eb5757;
  }
  .blue {
    background-color: #2f80ed;
  }
`;
