import { ReactNode } from "react";

import { Container } from "./styles";

interface TitleProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Title({ children, variant = "primary" }: TitleProps) {
  return <Container variant={variant}>{children}</Container>;
}
