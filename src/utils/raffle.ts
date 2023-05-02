import { Player } from "../contexts/usePlayers";

export function calculateOrder(
  playersOrder: Player[],
  limit: number
): Player[][] {
  const orderMatches: Player[][] = [];

  for (let i = 0; i < playersOrder.length; i += limit) {
    orderMatches.push(playersOrder.slice(i, i + limit));
  }

  return orderMatches;
}

export function order(playersOrder: Player[], limit: number): Player[][] {
  const orderMatches = calculateOrder(playersOrder, limit);
  return orderMatches;
}

export function random2Teams(
  playersOrder: Player[],
  limit: number
): Player[][] {
  const startingPlayers = playersOrder.slice(0, limit * 2);
  const remainingPlayers = playersOrder.slice(limit * 2, playersOrder.length);

  const mixedPlayers = startingPlayers.sort(() => Math.random() - 0.5);
  const team1 = mixedPlayers.slice(0, limit);
  const team2 = mixedPlayers.slice(limit, limit * 2);

  const nextTeams = calculateOrder(remainingPlayers, limit);

  return [team1, team2, ...nextTeams];
}

export function random(playersOrder: Player[], limit: number): Player[][] {
  const mixedPlayers = playersOrder.sort(() => Math.random() - 0.5);

  const orderMatches = calculateOrder(mixedPlayers, limit);

  return orderMatches;
}
