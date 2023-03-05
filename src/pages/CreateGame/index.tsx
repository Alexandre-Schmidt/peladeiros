import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { CreateGameForm } from "../../components/Games/CreateGameForm";
import { PageContainer } from "../../components/PageContainer";

export function CreateGame() {
  return (
    <PageContainer>
      <Title>Novo</Title>

      <CreateGameForm />

      <ButtonWrapper>
        <Button>Salvar</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}
