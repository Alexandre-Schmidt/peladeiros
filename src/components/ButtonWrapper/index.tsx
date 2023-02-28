import { ReactNode } from "react";

import { Container } from "./styles";

interface ButtonWrapperProps {
  children: ReactNode;
}

export function ButtonWrapper({ children }: ButtonWrapperProps) {
  return <Container>{children}</Container>;
}
