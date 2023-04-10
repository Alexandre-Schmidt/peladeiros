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
  getFilteredPlayers: (currentGameId: number) => Player[];
  createPlayer: (data: CreatePlayerData) => Player;
  findPlayerByName: (name: string) => Player | undefined;
  deletePlayer: (id: number) => void;
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
      const player = { id: 1, name, gameId };

      localStorage.setItem("@peladeiros:players", JSON.stringify([player]));

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
    const findPlayers = localStorage.getItem("@peladeiros:players");

    if (!findPlayers) return;

    const arrayPlayers: Player[] = JSON.parse(findPlayers);

    const player = arrayPlayers.find(
      (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    return player;
  };

  const getFilteredPlayers = (currentGameId: number) => {
    return players.filter((player) => player.gameId === currentGameId);
  };

  const deletePlayer = (id: number) => {
    const newPlayers = players.filter((player) => player.id !== id);

    setPlayers(newPlayers);

    localStorage.setItem("@peladeiros:players", JSON.stringify(newPlayers));
  };

  return (
    <PlayerContext.Provider
      value={{
        players,
        createPlayer,
        findPlayerByName,
        getFilteredPlayers,
        deletePlayer,
      }}
    >
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
