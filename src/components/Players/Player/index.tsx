import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { useGame } from "../../../contexts/useGames";

import { Text } from "../../Text";

import { Container } from "./styles";

interface playerProps {
  name: string;
  position: number;
  lastPosition: number;
  isSortable?: boolean;
}

export function Player({
  name,
  position,
  lastPosition,
  isSortable = false,
}: playerProps) {
  const { handleChangePlayerOrder } = useGame();

  const handleUp = () => {
    handleChangePlayerOrder({ type: "up", currentIndex: position - 1 });
  };

  const handleDown = () => {
    handleChangePlayerOrder({ type: "down", currentIndex: position - 1 });
  };

  return (
    <Container>
      <div>
        <Text>
          {position}. {name}
        </Text>
      </div>

      {isSortable && (
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

          <button>
            <FiX size={20} />
          </button>
        </div>
      )}
    </Container>
  );
}
