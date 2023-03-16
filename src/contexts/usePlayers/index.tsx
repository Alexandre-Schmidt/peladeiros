import { createContext, useContext, ReactNode, useState } from "react";

export interface CreatePlayerData {
  name: string;
}

interface Player {
  id: string;
  name: string;
}

interface PlayersContextData {
  players: Player[];
  createPlayer: (data: CreatePlayerData) => void;
}

interface PlayerProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext<PlayersContextData>(
  {} as PlayersContextData
);

const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [players, setPlayers] = useState<Player[]>(() => {
    const playersData = localStorage.getItem("@peladeiros:players");

    if (!playersData) return [];

    return JSON.parse(playersData);
  });

  const createPlayer = (data: CreatePlayerData) => {
    const players = localStorage.getItem("@peladeiros:players");

    if (!players) {
      localStorage.setItem(
        "@peladeiros:players",
        JSON.stringify([{ id: 1, ...data }])
      );

      return;
    }

    const arrayPlayers = JSON.parse(players);

    arrayPlayers.push({ id: arrayPlayers.length + 1, ...data });

    localStorage.setItem("@peladeiros:players", JSON.stringify(arrayPlayers));
    setPlayers(arrayPlayers);
  };

  return (
    <PlayerContext.Provider value={{ players, createPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

function usePlayer(): PlayersContextData {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used within an PlayerProvider");
  }

  return context;
}

export { PlayerProvider, usePlayer };
