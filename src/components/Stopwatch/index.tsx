import { useEffect, useState } from "react";
import {
  GiSoccerKick,
  GiPauseButton,
  GiAnticlockwiseRotation,
} from "react-icons/gi";

import { Text } from "../Text";
import { Warning } from "../Warning";

import { useGame } from "../../contexts/useGames";

import { ButtonsContainer, Clock, StopwatchContainer } from "./styles";

export function Stopwatch() {
  const { currentGame } = useGame();

  const totalSeconds = currentGame ? currentGame.duration * 60 : 0;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const [isWarningOpen, setIsWarningOpen] = useState(false);

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

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(totalSeconds);
    setIsWarningOpen(false);
  };

  const handleOpenWarning = () => {
    setIsWarningOpen(true);
  };

  const handleCloseWarning = () => {
    setIsWarningOpen(false);
  };

  return (
    <StopwatchContainer>
      <Clock>
        <Text size="xl" variant="secondary">
          {displayTime()}
        </Text>
      </Clock>
      <ButtonsContainer>
        <button onClick={handlePause}>
          <GiPauseButton size={18} />
        </button>
        <button onClick={handleStart}>
          <GiSoccerKick size={24} />
        </button>
        <button onClick={handleOpenWarning}>
          <GiAnticlockwiseRotation size={20} />
        </button>
      </ButtonsContainer>

      <Warning
        isOpen={isWarningOpen}
        title="Atenção!"
        message="Você tem certeza de que deseja reiniciar o tempo, confirme"
        onClose={handleCloseWarning}
        onCancel={handleCloseWarning}
        onConfirm={handleStop}
      />
    </StopwatchContainer>
  );
}
