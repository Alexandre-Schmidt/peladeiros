import { createContext, useContext, ReactNode, useState, useMemo } from "react";

import { Player } from "../usePlayers";
import { useGame } from "../useGames";
import { order, random, random2Teams } from "../../utils/raffle";

export interface CreateMatchData {
  name: string;
  playersNumber: number;
  duration: string;
  goals: string;
  rule: number;
}

interface MatchContextData {
  teams: Player[][];
  handleDrawTeams: () => void;
  handleFinishMatch: (indexWinner: number) => void;
}

interface MatchProviderProps {
  children: ReactNode;
}

interface RaffleSummary {
  [key: number]: (playersOrder: Player[], limit: number) => Player[][];
}

const MatchContext = createContext<MatchContextData>({} as MatchContextData);

const MatchProvider = ({ children }: MatchProviderProps) => {
  const [teams, setTeams] = useState<Player[][]>(() => {
    const teamsStorage = localStorage.getItem("@peladeiros:teams");

    if (teamsStorage) {
      return JSON.parse(teamsStorage);
    }

    return [];
  });

  const { currentGame, playersOrder } = useGame();

  const limit = currentGame ? currentGame.playersNumber : 0;

  const raffleSummary: RaffleSummary = useMemo(() => {
    return {
      0: order,
      1: random2Teams,
      2: random,
    };
  }, []);

  const handleDrawTeams = () => {
    const teamsSorted = currentGame
      ? raffleSummary[currentGame.rule](playersOrder, limit)
      : [];

    setTeams(teamsSorted);
    localStorage.setItem("@peladeiros:teams", JSON.stringify(teamsSorted));
  };

  const handleFinishMatch = (indexWinner: number) => {
    if (indexWinner < 0) {
      const next = indexWinner === -1 ? 0 : 1;
      const nextNext = indexWinner === -1 ? 1 : 0;

      const newTeamsOrder = [
        teams[2],
        teams[3],
        ...teams.filter((_, index) => index > 3),
        teams[next],
        teams[nextNext],
      ];

      return setTeams(newTeamsOrder);
    }

    if (playersOrder.length % limit === 0) {
      const winner = indexWinner;
      const loser = indexWinner === 0 ? 1 : 0;
      const next = 2;

      const newTeamsOrder = [
        teams[indexWinner === 0 ? winner : next],
        teams[indexWinner === 1 ? winner : next],
        ...teams.filter((_, index) => index > 2),
        teams[loser],
      ];

      return setTeams(newTeamsOrder);
    }

    const loser = indexWinner === 0 ? 1 : 0;

    const lastTeam = teams[teams.length - 1];

    const lastTeamLength = lastTeam.length;

    const missingPlayersQuantity = limit - lastTeamLength;

    const sliceLoserTeam = teams[loser].slice(0, missingPlayersQuantity);

    const newLoserTeam = teams[loser].slice(missingPlayersQuantity);

    const newLastTeam = lastTeam.concat(sliceLoserTeam);

    const newTeamsOrder = [
      teams[indexWinner === 0 ? 0 : 2],
      teams[indexWinner === 1 ? 1 : 2],
      ...teams.filter((_, index) => index > 2 && index !== teams.length - 1),
      newLastTeam,
      newLoserTeam,
    ];

    setTeams(newTeamsOrder);
  };

  return (
    <MatchContext.Provider
      value={{
        teams,
        handleDrawTeams,
        handleFinishMatch,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

function useMatch(): MatchContextData {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error("useMatch must be used within an MatchProvider");
  }

  return context;
}

export { MatchProvider, useMatch };
