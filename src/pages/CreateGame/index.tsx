import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { PageContainer } from "../../components/Games/PageContainer";
import { CreateGameForm } from "../../components/Games/CreateGameForm";

export function CreateGame() {
  return (
    <PageContainer>
      <Title>NOVO</Title>

      <CreateGameForm />

      <ButtonWrapper>
        <Button>Salvar</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}
