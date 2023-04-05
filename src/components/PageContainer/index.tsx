import { ReactNode } from "react";

import { Container } from "./styles";

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return <Container>{children}</Container>;
}
