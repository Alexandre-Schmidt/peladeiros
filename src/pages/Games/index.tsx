import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ListGames } from "../../components/Games/ListGames";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { PageContainer } from "../../components/Games/PageContainer";

export function Games() {
  const navigate = useNavigate();

  const handleNavigateToCreateGame = () => {
    navigate("/games/Create");
  };

  return (
    <PageContainer>
      <Title>Peladas</Title>

      <ListGames />

      <ButtonWrapper>
        <Button onClick={handleNavigateToCreateGame}>Novo</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}
