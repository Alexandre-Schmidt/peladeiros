import styled from "styled-components";

import shirt from "../../assets/shirt.png";

interface Div1Props {
  color: string;
}

export const Div1 = styled.div<Div1Props>`
  height: 136px;
  width: 116px;

  background-color: ${({ color }) => color};
`;

export const Div2 = styled.div`
  height: 140px;
  width: 120px;
  background-image: url(${shirt});

  background-size: contain;

  background-repeat: no-repeat;
`;
