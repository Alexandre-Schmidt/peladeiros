import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface BackProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Back({ children, ...rest }: BackProps) {
  return <Container {...rest}>{children}</Container>;
}
