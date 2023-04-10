import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";

import { useGame } from "../../contexts/useGames";
import { usePlayer } from "../../contexts/usePlayers";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";
import { ListPlayers } from "../../components/Players/ListPlayers";

export function Players() {
  const navigate = useNavigate();

  const { currentGame } = useGame();
  const { getFilteredPlayers } = usePlayer();

  const handleGoBack = () => {
    navigate("/order");
  };

  const players = useMemo(() => {
    if (!currentGame) return [];

    return getFilteredPlayers(currentGame.id).sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      return 1;
    });
  }, [currentGame, getFilteredPlayers]);

  return (
    <PageContainer>
      <Back onClick={handleGoBack}>
        <ArrowCircleLeft size={40} color="#4cb963" weight="fill" />
      </Back>
      <Title>Jogadores</Title>

      <ListPlayers players={players} />
    </PageContainer>
  );
}
