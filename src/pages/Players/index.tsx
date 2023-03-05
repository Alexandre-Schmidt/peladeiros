import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { ListPlayers } from "../../components/Players/ListPlayers";
import { PageContainer } from "../../components/PageContainer";
import { ButtonsContainer } from "./styles";

export function Players() {
  const navigate = useNavigate();

  const handleNavigateToPlayers = () => {
    navigate("/players");
  };

  return (
    <PageContainer>
      <Title>Jogadores</Title>

      <ListPlayers />

      <ButtonWrapper>
        <ButtonsContainer>
          <Button onClick={handleNavigateToPlayers}>Salvos</Button>
          <Button onClick={handleNavigateToPlayers}>Inserir</Button>
        </ButtonsContainer>
      </ButtonWrapper>
    </PageContainer>
  );
}
