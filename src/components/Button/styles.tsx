import styled from "styled-components";

interface ContainerProps {
  variant: "primary" | "secondary";
}

export const Container = styled.button<ContainerProps>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme["green500"] : theme["gray500"]};
  color: ${({ variant, theme }) =>
    variant === "primary" ? theme["white"] : theme["gray900"]};
  padding: 0.75rem 0;
  width: 100%;

  font-family: "Alata", sans-serif;
`;
