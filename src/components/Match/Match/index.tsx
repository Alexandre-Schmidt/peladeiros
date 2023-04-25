import { useGame } from "../../../contexts/useGames";
import { Player } from "../../../contexts/usePlayers";

import { Text } from "../../Text";
import { order, random2Teams, random } from "./raffle";

import { Container, Teams01, Teams02 } from "./styles";

import avatar04 from "../../../assets/avatar04.svg";
import avatar05 from "../../../assets/avatar05.svg";
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
    <Container>
      <Teams01>
        {teams[0].map((player) => (
          <Text key={player.name}>
            {player.name}
            <img src={avatar04} alt="" />
          </Text>
        ))}
      </Teams01>

      <Teams02>
        {teams[1].map((player, index) => (
          <Text key={player.name}>
            <img src={avatar[index]} alt="" />
            {player.name}
          </Text>
        ))}
      </Teams02>
    </Container>
  );
}
