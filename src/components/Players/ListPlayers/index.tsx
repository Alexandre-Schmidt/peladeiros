import { Player } from "../../../contexts/usePlayers";

import { Player as PlayerComponent } from "../Player";

import { Container } from "./styles";

interface ListPlayersProps {
  players: Player[];
  isSortable?: boolean;
}

export function ListPlayers({ players, isSortable }: ListPlayersProps) {
  return (
    <Container>
      {players.map((player, index) => (
        <PlayerComponent
          key={player.id}
          id={player.id}
          name={player.name}
          position={index + 1}
          isSortable={isSortable}
          lastPosition={players.length - 1}
        />
      ))}
    </Container>
  );
}
