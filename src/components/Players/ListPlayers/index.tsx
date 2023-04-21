import { Player } from "../../../contexts/usePlayers";

import { Player as PlayerComponent } from "../Player";

import { Container } from "./styles";

interface ListPlayersProps {
  players: Player[];
  isSortable?: boolean;
  isIconRemove?: boolean;
}

export function ListPlayers({
  players,
  isSortable,
  isIconRemove,
}: ListPlayersProps) {
  return (
    <Container>
      {players.map((player, index) => (
        <PlayerComponent
          key={player.id}
          id={player.id}
          name={player.name}
          position={index + 1}
          isSortable={isSortable}
          isIconRemove={isIconRemove}
          lastPosition={players.length - 1}
        />
      ))}
    </Container>
  );
}
