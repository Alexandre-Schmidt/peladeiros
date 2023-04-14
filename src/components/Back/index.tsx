import { ButtonHTMLAttributes } from "react";
import { ArrowCircleLeft } from "phosphor-react";

import { Container } from "./styles";

interface BackProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Back({ ...rest }: BackProps) {
  return (
    <Container {...rest}>
      <ArrowCircleLeft weight="thin" size={40} color="#4cb963" />
    </Container>
  );
}
