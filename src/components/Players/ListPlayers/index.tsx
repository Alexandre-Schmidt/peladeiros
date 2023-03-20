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
      {players.map((players, index) => (
        <PlayerComponent
          key={players.id}
          name={players.name}
          position={index + 1}
          isSortable={isSortable}
        />
      ))}
    </Container>
  );
}
