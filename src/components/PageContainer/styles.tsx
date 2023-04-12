import styled from "styled-components";

interface ContainerProps {
  pb: number;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  padding-top: 2rem;
  padding-bottom: ${({ pb }) => `${pb}rem`};

  position: relative;

  display: flex;
  flex-direction: column;
`;
