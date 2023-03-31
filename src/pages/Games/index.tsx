import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ListGames } from "../../components/Games/ListGames";
import { BottomWrapper } from "../../components/BottomWrapper";
import { PageContainer } from "../../components/PageContainer";

export function Games() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("@peladeiros:currentGame");
    localStorage.removeItem("@peladeiros:playersOrder");
  }, []);

  const handleNavigateToCreateGame = () => {
    navigate("/games/create");
  };

  return (
    <PageContainer>
      <Title>Peladas</Title>

      <ListGames />

      <BottomWrapper>
        <Button onClick={handleNavigateToCreateGame}>Novo</Button>
      </BottomWrapper>
    </PageContainer>
  );
}
