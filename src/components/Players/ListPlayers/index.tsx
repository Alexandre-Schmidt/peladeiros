import { Player } from "../Player";

import { Container } from "./styles";

export function ListPlayers() {
  const players = [
    {
      id: 1,
      name: "Xandão Campeão",
    },
    {
      id: 2,
      name: "Paulo Ré no Kibe",
    },
    {
      id: 3,
      name: "CR7",
    },
    {
      id: 4,
      name: "Ronaldo",
    },
    {
      id: 5,
      name: "Pelé TWD",
    },
    {
      id: 6,
      name: "Bruxo",
    },
  ];

  return (
    <Container>
      {players.map((players, index) => (
        <Player key={players.id} name={players.name} position={index + 1} />
      ))}
    </Container>
  );
}
