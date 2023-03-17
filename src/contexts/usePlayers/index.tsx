import { createContext, useContext, ReactNode, useState } from "react";

export interface CreatePlayerData {
  name: string;
}

interface Player {
  id: number;
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

  const createPlayer = ({ name }: CreatePlayerData) => {
    const players = localStorage.getItem("@peladeiros:players");

    if (!players) {
      localStorage.setItem(
        "@peladeiros:players",
        JSON.stringify([{ id: 1, name }])
      );
      setPlayers([{ id: 1, name }]);
      return;
    }

    const arrayPlayers: Player[] = JSON.parse(players);

    const checkName = arrayPlayers.some(
      (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (!checkName) {
      arrayPlayers.push({ id: arrayPlayers.length + 1, name });
      localStorage.setItem("@peladeiros:players", JSON.stringify(arrayPlayers));
      setPlayers(arrayPlayers);
    } else {
      alert("O(a) " + name + " já está salvo. Clique no botão 'Salvos'");
    }
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
