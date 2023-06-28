import { useMemo, useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiPlus,
  FiMinus,
  FiTrash,
} from "react-icons/fi";

import { useGame } from "../../../contexts/useGames";

import { Text } from "../../Text";

import { Container } from "./styles";
import { usePlayer } from "../../../contexts/usePlayers";
import { Warning } from "../../Warning";
import { useMatch } from "../../../contexts/useMatch";

interface playerProps {
  id: string;
  name: string;
  position: number;
  lastPosition: number;
  isSortable?: boolean;
  isIconRemove?: boolean;
  removeBlocked?: boolean;
}

export function Player({
  id,
  name,
  position,
  lastPosition,
  isSortable = false,
  isIconRemove = false,
  removeBlocked = false,
}: playerProps) {
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const {
    currentGame,
    playersOrder,
    handleChangePlayerOrder,
    handleRemovePlayerOrder,
    handleAddPlayerOrder,
  } = useGame();

  const { deletePlayer } = usePlayer();
  const { handleRemovePlayer } = useMatch();

  const handleUp = () => {
    handleChangePlayerOrder({ type: "up", currentIndex: position - 1 });
  };

  const handleDown = () => {
    handleChangePlayerOrder({ type: "down", currentIndex: position - 1 });
  };

  const handleRemove = () => {
    handleRemovePlayerOrder(id, removeBlocked);
    handleRemovePlayer(id);
  };

  const handleDelete = () => {
    deletePlayer(id);
    handleRemove();
    setIsWarningOpen(false);
  };

  const handleOpenWarning = () => {
    setIsWarningOpen(true);
  };

  const handleCloseWarning = () => {
    setIsWarningOpen(false);
  };

  const handleToggle = () => {
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
    <Container isSelectable={isSelectable && !isSortable}>
      <div>
        <Text>
          {position}. {name}
        </Text>
      </div>

      {isSortable ? (
        !isIconRemove ? (
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
          <div>
            <button onClick={handleRemove}>
              <FiX size={20} />
            </button>
          </div>
        )
      ) : (
        <div>
          <button onClick={handleToggle}>
            {isSelectable ? <FiMinus size={20} /> : <FiPlus size={20} />}
          </button>
          <button onClick={handleOpenWarning}>
            <FiTrash size={20} color="#ef4444" />
          </button>
        </div>
      )}

      <Warning
        isOpen={isWarningOpen}
        title="Atenção!"
        message="Você tem certeza que deseja excluir este jogador?"
        onClose={handleCloseWarning}
        onCancel={handleCloseWarning}
        onConfirm={handleDelete}
      />
    </Container>
  );
}
