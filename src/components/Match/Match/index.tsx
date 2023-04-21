import { useGame } from "../../../contexts/useGames";

export function Match() {
  const { currentGame } = useGame();
  const names = [
    "Ana",
    "Maria",
    "João",
    "Pedro",
    "Marcos",
    "Paulo",
    "Lucas",
    "Laura",
    "Fernanda",
    "Juliana",
    "Mariana",
    "Lorena",
    "Rafael",
    "Ricardo",
    "Leonardo",
    "Gabriel",
    "Daniel",
    "Mateus",
    "Vinicius",
    "Leandro",
    "André",
    "Gustavo",
    "Felipe",
    "Rafaela",
    "Vitor",
    "Julio",
    "Pedro",
    "Lucas",
    "Jorge",
    "José",
    "André",
    "João",
    "Marcos",
    "Ricardo",
    "Paulo",
    "Rafael",
    "Vitor",
    "Maria",
  ];

  const numbersPlayers = currentGame ? currentGame.playersNumber : 0;

  const newArray = Array(numbersPlayers);

  for (let index = 0; index < numbersPlayers; index++) {
    newArray[index] = names[Math.floor(Math.random() * 20)];
    return newArray;
  }

  return (
    <div>
      {newArray.map((name) => (
        <Text>{name}</Text>
      ))}
    </div>
  );
}
