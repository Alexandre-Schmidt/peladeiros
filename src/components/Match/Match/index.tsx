import { Text } from "../../Text";

import { useMatch } from "../../../contexts/useMatch";
import { useGame } from "../../../contexts/useGames";

import { Avatar } from "../../Avatar";

import { Container, Team01, Team02 } from "./styles";

export function Match() {
  const { currentGame } = useGame();
  const { teams, handleFinishMatch } = useMatch();

  return (
    <>
      {teams.length > 0 && (
        <Container>
          <Team01>
            {teams[0].map((player) => (
              <div key={player.name}>
                <Text size="sm">{player.name}</Text>
                <Avatar indexColor={currentGame?.shirtColors.team01} />
              </div>
            ))}
          </Team01>

          <Team02>
            {teams[1].map((player) => (
              <div key={player.name}>
                <Avatar indexColor={currentGame?.shirtColors.team02} />
                <Text size="sm">{player.name}</Text>
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
        <button onClick={() => handleFinishMatch(-1)}>EMPATE</button>
        <button onClick={() => handleFinishMatch(1)}>WINNER02</button>
      </div>
    </>
  );
}
