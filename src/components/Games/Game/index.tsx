import { useNavigate } from "react-router";
import { useGame } from "../../../contexts/useGames";

import { Text } from "../../Text";
import { Container } from "./styles";

interface GameProps {
  id: number;
  title: string;
}

export function Game({ id, title }: GameProps) {
  const navigate = useNavigate();

  const { handleSetCurrentGame } = useGame();

  const handleNavigateToGame = () => {
    handleSetCurrentGame(id);
    navigate("/order");
  };

  return (
    <Container onClick={handleNavigateToGame}>
      <Text>{title}</Text>
    </Container>
  );
}
