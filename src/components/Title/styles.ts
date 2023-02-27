import styled from "styled-components";

interface ContainerProps {
  variant: "primary" | "secondary";
}

export const Container = styled.h1<ContainerProps>`
  text-align: center;
  font-size: 2rem;
  font-family: "Alata", sans-serif;
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme["blue500"] : theme["white"]};
`;
