import { useGame } from "../../../contexts/useGames";

import { ListPlayers } from "../../Players/ListPlayers";

export function Order() {
  const { playersOrder } = useGame();

  return (
    <div>
      <ListPlayers
        isSortable={true}
        isIconRemove={true}
        players={playersOrder}
      />
    </div>
  );
}
