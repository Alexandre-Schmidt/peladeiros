import { usePlayer } from "../../../contexts/usePlayers";

import { Player as PlayerComponent } from "../Player";

import { Container } from "./styles";

export function ListPlayers() {
  const { players } = usePlayer();
  return (
    <Container>
      {players.map((players, index) => (
        <PlayerComponent
          key={players.id}
          name={players.name}
          position={index + 1}
        />
      ))}
    </Container>
  );
}
