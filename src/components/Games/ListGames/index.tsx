import { useEffect, useState } from "react";

import { Game as GameComponent } from "../Game";

import { Container } from "./styles";

interface Game {
  id: string;
  name: string;
}

export function ListGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const games = localStorage.getItem("@peladeiros:games");

    if (!games) return;

    setGames(JSON.parse(games));
  }, []);

  return (
    <Container>
      {games.map((game) => (
        <GameComponent key={game.id} id={game.id} title={game.name} />
      ))}
    </Container>
  );
}
