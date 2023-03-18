import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.1);
  z-index: 999;

  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 21.25rem;
  height: 4rem;
  background-color: pink;
  position: relative;

  padding-left: 1.5rem;
  padding-top: 0.8rem;

  border-radius: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  > button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;
