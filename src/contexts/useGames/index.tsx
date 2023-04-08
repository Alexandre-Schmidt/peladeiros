import { createContext, useContext, ReactNode, useState } from "react";

import { Player } from "../usePlayers";
import { useToasts } from "../useToasts";

export interface CreateGameData {
  name: string;
  playersNumber: number;
  duration: string;
  goals: string;
  rule: number;
}

export interface GameData extends CreateGameData {
  id: number;
}

interface ChangePlayerOrder {
  type: "up" | "down";
  currentIndex: number;
}

interface GameContextData {
  currentGame?: GameData;
  playersOrder: Player[];
  createGame: (data: CreateGameData) => void;
  handleAddPlayerOrder: (player: Player) => void;
  handleSetCurrentGame: (id: number) => void;
  handleRemovePlayerOrder: (id: number) => void;
  handleChangePlayerOrder: (data: ChangePlayerOrder) => void;

  reset: () => void;
}

interface GameProviderProps {
  children: ReactNode;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

const GameProvider = ({ children }: GameProviderProps) => {
  const [currentGame, setCurrentGame] = useState<GameData | undefined>(() => {
    const currentGame = localStorage.getItem("@peladeiros:currentGame");

    if (!currentGame) return undefined;

    return JSON.parse(currentGame);
  });

  const [playersOrder, setPlayersOrder] = useState<Player[]>(() => {
    const playersOrder = localStorage.getItem("@peladeiros:playersOrder");

    if (!playersOrder) return [];

    return JSON.parse(playersOrder);
  });

  const { handleOpenToast } = useToasts();

  const createGame = (data: CreateGameData) => {
    const games = localStorage.getItem("@peladeiros:games");

    if (!games) {
      localStorage.setItem(
        "@peladeiros:games",
        JSON.stringify([{ id: 1, ...data }])
      );

      return;
    }

    const arrayGames = JSON.parse(games);

    arrayGames.push({ id: arrayGames.length + 1, ...data });

    localStorage.setItem("@peladeiros:games", JSON.stringify(arrayGames));
  };

  const handleSetCurrentGame = (id: number) => {
    const games = localStorage.getItem("@peladeiros:games");

    if (!games) return;

    const arrayGames: GameData[] = JSON.parse(games);

    const game = arrayGames.find((game) => game.id === id);

    localStorage.setItem("@peladeiros:currentGame", JSON.stringify(game));

    setCurrentGame(game);
  };

  const handleAddPlayerOrder = (player: Player) => {
    const findPlayer = playersOrder.find(
      (playerOrder) => playerOrder.id === player.id
    );

    if (findPlayer) {
      handleOpenToast({
        type: "error",
        title: "Error",
        message: "Jogador já adicionado",
      });

      return;
    }
    const newPlayer = [...playersOrder, player];
    setPlayersOrder(newPlayer);
    localStorage.setItem("@peladeiros:playersOrder", JSON.stringify(newPlayer));
  };

  const reset = () => {
    localStorage.removeItem("@peladeiros:currentGame");
    setCurrentGame(undefined);
  };

  const handleChangePlayerOrder = ({
    type,
    currentIndex,
  }: ChangePlayerOrder) => {
    const currentValue = playersOrder[currentIndex];

    const auxValue =
      playersOrder[type === "up" ? currentIndex - 1 : currentIndex + 1];

    const newPlayersOrder = playersOrder.map((player, index) => {
      if (index === currentIndex) return auxValue;

      if (index === currentIndex - 1 && type === "up") return currentValue;

      if (index === currentIndex + 1 && type === "down") return currentValue;

      return player;
    });

    setPlayersOrder(newPlayersOrder);

    localStorage.setItem(
      "@peladeiros:playersOrder",
      JSON.stringify(newPlayersOrder)
    );
  };

  const handleRemovePlayerOrder = (id: number) => {
    const newPlayersOrder = playersOrder.filter((player) => player.id !== id);

    setPlayersOrder(newPlayersOrder);

    localStorage.setItem(
      "@peladeiros:playersOrder",
      JSON.stringify(newPlayersOrder)
    );
  };

  return (
    <GameContext.Provider
      value={{
        currentGame,
        createGame,
        handleSetCurrentGame,
        playersOrder,
        handleAddPlayerOrder,
        reset,
        handleChangePlayerOrder,
        handleRemovePlayerOrder,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

function useGame(): GameContextData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within an GameProvider");
  }

  return context;
}

export { GameProvider, useGame };
