import { useGame } from "../../../contexts/useGames";
import { Player } from "../../../contexts/usePlayers";

import { order, random2Teams, random } from "./raffle";

interface RaffleSummary {
  [key: number]: (playersOrder: Player[], limit: number) => Player[][];
}

export function Match() {
  const { currentGame, playersOrder } = useGame();

  const raffleSummary: RaffleSummary = {
    0: order,
    1: random2Teams,
    2: random,
  };

  // const numbersPlayers = currentGame ? currentGame.playersNumber : 0;

  // const newArray = Array(numbersPlayers);

  // for (let index = 0; index < numbersPlayers; index++) {
  //   newArray[index] = names[Math.floor(Math.random() * 20)];
  //   return newArray;
  // }

  const limit = currentGame ? currentGame.playersNumber : 0;

  const teams = currentGame
    ? raffleSummary[currentGame.rule](playersOrder, limit)
    : [];

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {teams[0].map((player) => (
          <span key={player.name}>{player.name}</span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {teams[1].map((player) => (
          <span key={player.name}>{player.name}</span>
        ))}
      </div>
    </div>
  );
}
