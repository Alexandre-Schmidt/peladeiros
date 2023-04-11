import { ButtonHTMLAttributes } from "react";
import { ArrowFatLineLeft } from "phosphor-react";

import { Container } from "./styles";

interface BackProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Back({ ...rest }: BackProps) {
  return (
    <Container {...rest}>
      <ArrowFatLineLeft size={40} color="#4cb963" weight="fill" />
    </Container>
  );
}
