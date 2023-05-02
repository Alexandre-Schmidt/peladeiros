import { Text } from "../../Text";

import { useMatch } from "../../../contexts/useMatch";

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

export function Match() {
  const { teams, handleFinishMatch } = useMatch();

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
        <button onClick={() => handleFinishMatch(-2)}>EMPATE</button>
        <button onClick={() => handleFinishMatch(1)}>WINNER02</button>
      </div>
    </>
  );
}
