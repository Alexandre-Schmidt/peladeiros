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
    navigate(-1);
  };

  const players = useMemo(() => {
    if (!currentGame) return [];

    return getFilteredPlayers(currentGame.id).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, [currentGame, getFilteredPlayers]);

  return (
    <PageContainer pb={2}>
      <Back onClick={handleGoBack}>
        <ArrowCircleLeft size={40} color="#4cb963" weight="fill" />
      </Back>

      <Title>Jogadores</Title>

      <ListPlayers players={players} />
    </PageContainer>
  );
}
