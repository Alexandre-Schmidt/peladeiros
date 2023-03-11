import { createContext, useContext, ReactNode } from "react";

export interface CreateGameData {
  name: string;
  playersNumber: number;
  duration: string;
  goals: string;
}

interface GamesContextData {
  createGame: (data: CreateGameData) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

const GameContext = createContext<GamesContextData>({} as GamesContextData);

const GameProvider = ({ children }: GameProviderProps) => {
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

  return (
    <GameContext.Provider value={{ createGame }}>
      {children}
    </GameContext.Provider>
  );
};

function useGame(): GamesContextData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within an GameProvider");
  }

  return context;
}

export { GameProvider, useGame };
