import { useGame } from "../../contexts/useGames";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";

import { ListPlayers } from "../../components/Players/ListPlayers";

export function Finish() {
  const { playersOrder } = useGame();

  return (
    <PageContainer pb={10}>
      <Title>Jogadores</Title>

      <ListPlayers isSortable={true} players={playersOrder} />
    </PageContainer>
  );
}
