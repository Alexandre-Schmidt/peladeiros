import { useEffect, useState } from "react";
import { X, Timer } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { useGame } from "../../contexts/useGames";

import { Back } from "../../components/Back";
import { Team } from "../../components/Team";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { PageContainer } from "../../components/PageContainer";

import {
  ContainerTeams,
  ContainerScoreboard,
  Stopwatch,
  ButtonsContainer,
} from "./styles";

export function Match() {
  const { currentGame } = useGame();
  const navigate = useNavigate();

  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const totalSeconds = currentGame ? currentGame.duration * 60 : 0;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let countdownInterval: number;

    if (isRunning) {
      countdownInterval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [isRunning, timeLeft]);

  const displayTime = () => {
    const displayMinutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    const displaySeconds = (timeLeft % 60).toString().padStart(2, "0");
    return `${displayMinutes}:${displaySeconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(totalSeconds);
  };

  const handleGoBack = () => {
    navigate("/order");
  };

  return (
    <PageContainer>
      <Back onClick={handleGoBack} />

      <Stopwatch>
        <Text size="xl">{displayTime()}</Text>
      </Stopwatch>

      <ContainerTeams>
        <Team handleCounterScore={() => setScoreLeft(scoreLeft + 1)} />

        <ContainerScoreboard>
          <Text size="xl">{scoreLeft}</Text>

          <X size={32} weight="bold" />

          <Text size="xl">{scoreRight}</Text>
        </ContainerScoreboard>

        <Team handleCounterScore={() => setScoreRight(scoreRight + 1)} />
      </ContainerTeams>
      {/* <button>
        <Timer size={32} weight="fill" />
      </button> */}

      {isRunning ? (
        <ButtonsContainer>
          <Button onClick={handleStop}>Parar</Button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <Button onClick={handleStart}>Iniciar</Button>
        </ButtonsContainer>
      )}
    </PageContainer>
  );
}
