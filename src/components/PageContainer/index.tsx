import { ReactNode } from "react";

import { Container } from "./styles";

interface PageContainerProps {
  children: ReactNode;
  pb?: number;
}

export function PageContainer({ children, pb = 5.875 }: PageContainerProps) {
  return <Container pb={pb}>{children}</Container>;
}
