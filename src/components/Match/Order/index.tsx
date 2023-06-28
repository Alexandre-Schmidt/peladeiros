import { useGame } from "../../../contexts/useGames";

import { ListPlayers } from "../../Players/ListPlayers";

import { Container } from "./styles";

export function Order() {
  const { playersOrder } = useGame();

  return (
    <Container>
      <ListPlayers
        isSortable={true}
        isIconRemove={true}
        players={playersOrder}
        removeBlocked={true}
      />
    </Container>
  );
}
