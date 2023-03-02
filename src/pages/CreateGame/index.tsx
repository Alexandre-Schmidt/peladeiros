import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";

import { Container } from "./styles";
import { Inputs } from "../../components/Games/Inputs";

export function CreateGame() {
  return (
    <Container>
      <Title>NOVO</Title>

      <Inputs />

      <ButtonWrapper>
        <Button>Novo</Button>
      </ButtonWrapper>
    </Container>
  );
}
