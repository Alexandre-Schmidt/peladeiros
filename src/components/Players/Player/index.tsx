import { useMemo } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

import { useGame } from "../../../contexts/useGames";

import { Text } from "../../Text";

import { Container } from "./styles";

interface playerProps {
  id: number;
  name: string;
  position: number;
  lastPosition: number;
  isSortable?: boolean;
}

export function Player({
  id,
  name,
  position,
  lastPosition,
  isSortable = false,
}: playerProps) {
  const {
    currentGame,
    playersOrder,
    handleChangePlayerOrder,
    handleRemovePlayerOrder,
    handleAddPlayerOrder,
  } = useGame();

  const handleUp = () => {
    handleChangePlayerOrder({ type: "up", currentIndex: position - 1 });
  };

  const handleDown = () => {
    handleChangePlayerOrder({ type: "down", currentIndex: position - 1 });
  };

  const handleRemove = () => {
    handleRemovePlayerOrder(id);
  };

  const handleToggle = (id: number) => {
    if (!currentGame) return;

    if (isSelectable) {
      handleRemove();
      return;
    }

    handleAddPlayerOrder({
      id,
      name,
      gameId: currentGame.id,
    });
  };

  const isSelectable = useMemo(() => {
    return playersOrder.some((player) => player.id === id);
  }, [playersOrder, id]);

  return (
    <Container isSelectable={isSelectable}>
      <div>
        <Text>
          {position}. {name}
        </Text>
      </div>

      {isSortable ? (
        <div>
          {position !== 1 && (
            <button onClick={handleUp}>
              <FiChevronUp size={20} />
            </button>
          )}

          {position - 1 !== lastPosition && (
            <button onClick={handleDown}>
              <FiChevronDown size={20} />
            </button>
          )}

          <button onClick={handleRemove}>
            <FiX size={20} />
          </button>
        </div>
      ) : (
        <button onClick={() => handleToggle(id)}>
          {isSelectable ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </button>
      )}
    </Container>
  );
}
