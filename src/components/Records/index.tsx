import { ReactNode } from "react";

import { Container } from "./styles";

interface RecordsProps {
  children: ReactNode;
}

export function Records({ children }: RecordsProps) {
  return <Container>{children}</Container>;
}
