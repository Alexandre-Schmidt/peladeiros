import { Game } from "../Game";

import { Container } from "./styles";

export function ListGames() {
  const games = [
    {
      id: 1,
      title: "Os Pernas de Pau",
    },
    {
      id: 2,
      title: "Arranca Toco",
    },
    {
      id: 3,
      title: "Ibis do Centro Oeste",
    },
  ];

  return (
    <Container>
      {games.map((game) => (
        <Game key={game.id} title={game.title} />
      ))}
    </Container>
  );
}
