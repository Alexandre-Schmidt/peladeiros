import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ListGames } from "../../components/Games/ListGames";
import { ButtonWrapper } from "../../components/ButtonWrapper";

import { Container } from "./styles";

export function Games() {
  return (
    <Container>
      <Title>Peladas</Title>

      <ListGames />

      <ButtonWrapper>
        <Button>Novo</Button>
      </ButtonWrapper>
    </Container>
  );
}
