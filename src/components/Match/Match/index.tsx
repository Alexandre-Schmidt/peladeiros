import { useGame } from "../../../contexts/useGames";
import { Player } from "../../../contexts/usePlayers";
import { order, random2Teams, random } from "./raffle";

import { Text } from "../../Text";

import { Container, Team01, Team02 } from "./styles";

import avatar01 from "../../../assets/avatar01.svg";
import avatar02 from "../../../assets/avatar02.svg";
import avatar03 from "../../../assets/avatar03.svg";
import avatar04 from "../../../assets/avatar04.svg";
import avatar05 from "../../../assets/avatar05.svg";
import avatar06 from "../../../assets/avatar06.svg";
import avatar07 from "../../../assets/avatar07.svg";
import avatar08 from "../../../assets/avatar08.svg";
import avatar09 from "../../../assets/avatar09.svg";
import avatar10 from "../../../assets/avatar10.svg";
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

  const iconSummary: { [key: string]: string } = {
    1: avatar10,
    2: avatar02,
    3: avatar03,
    4: avatar04,
    5: avatar05,
    6: avatar06,
    7: avatar07,
    8: avatar08,
    9: avatar09,
    10: avatar10,
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
      <Team01>
        {teams[0].map((player, index) => (
          <div key={player.name}>
            <Text>{player.name}</Text>
            <img src={iconSummary[index + 1]} alt="" />
          </div>
        ))}
      </Team01>

      <Team02>
        {teams[1].map((player, index) => (
          <div key={player.name}>
            <img src={iconSummary[index + 5 + 1]} alt="" />
            <Text>{player.name}</Text>
          </div>
        ))}
      </Team02>
    </Container>
  );
}
