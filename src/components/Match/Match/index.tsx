import { useEffect, useMemo, useState } from "react";

import { useGame } from "../../../contexts/useGames";
import { Player } from "../../../contexts/usePlayers";

import { order, random2Teams, random } from "./raffle";

import { Text } from "../../Text";

import { Container, Team01, Team02 } from "./styles";

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
  const [teams, setTeams] = useState<Player[][]>([]);

  const limit = currentGame ? currentGame.playersNumber : 0;

  console.log(teams);

  const raffleSummary: RaffleSummary = useMemo(() => {
    return {
      0: order,
      1: random2Teams,
      2: random,
    };
  }, []);

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

  useEffect(() => {
    const teamsSorted = currentGame
      ? raffleSummary[currentGame.rule](playersOrder, limit)
      : [];

    setTeams(teamsSorted);
  }, [currentGame, playersOrder, raffleSummary, limit]);

  const handleFinishMatch = (indexWinner: number) => {
    const winner = indexWinner;
    const loser = indexWinner === 0 ? 1 : 0;
    const next = 2;

    if (playersOrder.length % limit === 0) {
      const newTeamsOrder = [
        teams[indexWinner === 0 ? winner : next],
        teams[indexWinner === 1 ? winner : next],
        ...teams.filter(
          (_, index) => index !== winner && index !== loser && index !== next
        ),
        teams[loser],
      ];

      return setTeams(newTeamsOrder);
    }

    // // mover o segundo array para a última posição
    // const newTeamsOrder = teams;

    // newTeamsOrder.push(teams.splice(1, 1)[0]);

    // // preencher o último array com os elementos removidos
    // const lastArray = newTeamsOrder.pop();

    // if (!lastArray) return;

    // newTeamsOrder[newTeamsOrder.length - 1] =
    //   newTeamsOrder[newTeamsOrder.length - 1].concat(lastArray);

    // console.log("NEW TEAMS", newTeamsOrder);

    // const array = [
    //   ["jog1", "jog2", "jog3", "jog4", "jog5"],
    //   ["jog6", "jog7", "jog8", "jog9", "jog10"],
    //   ["jog11", "jog12", "jog13", "jog14", "jog15"],
    //   ["jog16", "jog17", "jog18"],
    // ];

    // const last = array[array.length - 1];

    // // mover o segundo array para a última posição
    // array.push(array.splice(1, 1)[0]);

    // // dividir o último array em duas partes e adicioná-las na terceira e quarta posição
    // const lastArray = array.pop();

    // if (!lastArray) return;

    // const firstPart = lastArray.slice(0, 2);
    // const secondPart = lastArray.slice(2);
    // array.push(firstPart);
    // array.push(secondPart);

    // console.log(array); // [['jog1', 'jog2', 'jog3', 'jog4', 'jog5'], ['jog11', 'jog12', 'jog13', 'jog14', 'jog15'], ['jog16', 'jog17', 'jog18', 'jog6', 'jog7'], ['jog8', 'jog9', 'jog10']]
  };

  return (
    <>
      {teams.length > 0 && (
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
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        <button onClick={() => handleFinishMatch(0)}>WINNER01</button>
        <button onClick={() => handleFinishMatch(1)}>WINNER02</button>
      </div>
    </>
  );
}
