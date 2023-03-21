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

interface GameContextData {
  currentGame?: GameData;
  playersOrder: Player[];
  createGame: (data: CreateGameData) => void;
  addPlayer: (player: Player) => void;
  addPlayers: (players: Player[]) => void;
  handleSetCurrentGame: (id: number) => void;
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

    if (!playersOrder) return undefined;

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

  const addPlayers = (players: Player[]) => {
    setPlayersOrder((oldState) => [...oldState, ...players]);
  };

  const addPlayer = (player: Player) => {
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

  return (
    <GameContext.Provider
      value={{
        currentGame,
        createGame,
        handleSetCurrentGame,
        playersOrder,
        addPlayers,
        addPlayer,
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
