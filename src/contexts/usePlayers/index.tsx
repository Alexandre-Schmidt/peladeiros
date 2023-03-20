import { createContext, useContext, ReactNode, useState } from "react";

export interface CreatePlayerData {
  name: string;
  gameId: number;
}

export interface Player extends CreatePlayerData {
  id: number;
}

interface PlayersContextData {
  players: Player[];
  createPlayer: (data: CreatePlayerData) => Player;
  findPlayerByName: (name: string) => Player | undefined;
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

  const createPlayer = ({ name, gameId }: CreatePlayerData) => {
    const players = localStorage.getItem("@peladeiros:players");

    if (!players) {
      localStorage.setItem(
        "@peladeiros:players",
        JSON.stringify([{ id: 1, name, gameId }])
      );

      const player = { id: 1, name, gameId };

      setPlayers([player]);

      return player;
    }

    const arrayPlayers: Player[] = JSON.parse(players);

    const player = { id: arrayPlayers.length + 1, name, gameId };

    arrayPlayers.push(player);

    localStorage.setItem("@peladeiros:players", JSON.stringify(arrayPlayers));

    setPlayers(arrayPlayers);

    return player;
  };

  const findPlayerByName = (name: string) => {
    const players = localStorage.getItem("@peladeiros:players");

    if (!players) return;

    const arrayPlayers: Player[] = JSON.parse(players);

    const player = arrayPlayers.find(
      (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    return player;
  };

  return (
    <PlayerContext.Provider value={{ players, createPlayer, findPlayerByName }}>
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
