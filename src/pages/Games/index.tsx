import { Button } from "../../components/Button";
import { Records } from "../../components/Records";
import { Title } from "../../components/Title";

import { Container } from "./styles";

export function Games() {
  return (
    <Container>
      <Title>Peladas</Title>
      <ul>
        <li>
          <Records>Os Pernas de Pau</Records>
        </li>
        <li>
          <Records>Arranca Toco</Records>
        </li>
        <li>
          <Records>Ibis do Centro Oeste</Records>
        </li>
      </ul>
      <Button>Novo</Button>
    </Container>
  );
}
