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
  handleRemovePlayer: (playerId: string) => void;
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
      if (playersOrder.length % limit === 0) {
        const next = indexWinner === -1 ? 0 : 1;
        const nextNext = indexWinner === -1 ? 1 : 0;

        const newTeamsOrder = [];

        newTeamsOrder.push(teams[2]);
        newTeamsOrder.push(teams[3]);

        if (teams.length > 4) {
          newTeamsOrder.push(...teams.filter((_, index) => index > 3));
        }

        newTeamsOrder.push(teams[next]);
        newTeamsOrder.push(teams[nextNext]);

        return setTeams(newTeamsOrder);
      }

      // Pegar o vencedor do empate
      const winnerPosition = indexWinner === -1 ? 0 : 1;

      const lostPosition = indexWinner === -1 ? 1 : 0;

      // Pegar o ultimo time da lista
      const lastTeam = teams[teams.length - 1];

      // Pegar o tamanho do ultimo time da lista
      const lastTeamLength = lastTeam.length;

      // Pegar a quantidade de jogadores que faltam para completar um time
      const missingPlayersQuantity = limit - lastTeamLength;

      // Pegar os jogadores do time vencedor do empate que irão completar o ultimo time da lista
      const sliceWinnerTeamFirstPlayers = teams[winnerPosition].slice(
        0,
        missingPlayersQuantity
      );

      // Criar um novo time entres os jogadores do ultimo time da lista e os jogadores do time vencedor do empate
      const newLastTeam = lastTeam.concat(sliceWinnerTeamFirstPlayers);

      // Pegar os jogadores do time vencedor do empate que irão para o proximo time
      const sliceWinnerTeamLastPlayers = teams[winnerPosition].slice(
        missingPlayersQuantity,
        limit
      );

      // Pegar os jogadores do time perdedor do empate que irão para o proximo time
      const sliceLostTeamFirstPlayers = teams[lostPosition].slice(
        0,
        missingPlayersQuantity
      );

      // Criar um novo time com os jogadores do time perdedor do empate e os jogadores do time vencedor do empate
      const newNextTeam = sliceWinnerTeamLastPlayers.concat(
        sliceLostTeamFirstPlayers
      );

      const newNextNextTeam = teams[lostPosition].slice(
        missingPlayersQuantity,
        limit
      );

      const newTeamsOrder = [];

      newTeamsOrder.push(teams[2]);

      if (teams.length === 4) {
        newTeamsOrder.push(newLastTeam);
        newTeamsOrder.push(newNextTeam);
        newTeamsOrder.push(newNextNextTeam);
      }

      if (teams.length === 5) {
        newTeamsOrder.push(teams[3]);
        newTeamsOrder.push(newLastTeam);
        newTeamsOrder.push(newNextTeam);
        newTeamsOrder.push(newNextNextTeam);
      }

      if (teams.length > 5) {
        newTeamsOrder.push(teams[3]);
        newTeamsOrder.push(
          ...teams.filter((_, index) => index > 3 && index !== teams.length - 1)
        );
        newTeamsOrder.push(newLastTeam);
        newTeamsOrder.push(newNextTeam);
        newTeamsOrder.push(newNextNextTeam);
      }

      return setTeams(newTeamsOrder);
    }

    if (playersOrder.length % limit === 0) {
      const winner = indexWinner;
      const loser = indexWinner === 0 ? 1 : 0;
      const next = 2;

      const newTeamsOrder = [];

      newTeamsOrder.push(teams[indexWinner === 0 ? winner : next]);
      newTeamsOrder.push(teams[indexWinner === 1 ? winner : next]);

      if (teams.length > 3) {
        newTeamsOrder.push(...teams.filter((_, index) => index > 2));
      }

      newTeamsOrder.push(teams[loser]);

      return setTeams(newTeamsOrder);
    }

    const loser = indexWinner === 0 ? 1 : 0;

    const lastTeam = teams[teams.length - 1];

    const lastTeamLength = lastTeam.length;

    const missingPlayersQuantity = limit - lastTeamLength;

    const sliceLoserTeam = teams[loser].slice(0, missingPlayersQuantity);

    const newLoserTeam = teams[loser].slice(missingPlayersQuantity);

    const newLastTeam = lastTeam.concat(sliceLoserTeam);

    const newTeamsOrder = [];

    if (teams.length === 3) {
      newTeamsOrder.push(indexWinner === 0 ? teams[0] : newLastTeam);
      newTeamsOrder.push(indexWinner === 1 ? teams[1] : newLastTeam);
    }

    if (teams.length > 3) {
      newTeamsOrder.push(teams[indexWinner === 0 ? 0 : 2]);
      newTeamsOrder.push(teams[indexWinner === 1 ? 1 : 2]);
      newTeamsOrder.push(
        ...teams.filter((_, index) => index > 2 && index !== teams.length - 1)
      );
      newTeamsOrder.push(newLastTeam);
    }

    newTeamsOrder.push(newLoserTeam);

    setTeams(newTeamsOrder);
  };

  const handleRemovePlayer = (playerId: string) => {
    const indexTeam = teams.findIndex((team) =>
      team.find((player) => player.id === playerId)
    );

    const team = teams[indexTeam];

    const indexPlayer = team.findIndex((player) => player.id === playerId);

    console.log("Index do TIME", indexTeam);
    console.log("Index do Jogador", indexPlayer);

    const newTeam = team.filter((_, index) => index !== indexPlayer);

    setTeams((oldTeams) => {
      const newTeams = [...oldTeams];

      const teste = newTeams.map((team, index) => {
        if (index < indexTeam) {
          return team;
        }

        if (index === indexTeam) {
          return newTeam.push(newTeams[index + 1][0]);
        }

        return team;
      });

      return newTeams;
    });
  };

  return (
    <MatchContext.Provider
      value={{
        teams,
        handleDrawTeams,
        handleFinishMatch,
        handleRemovePlayer,
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
