import { useState } from "react";

import { useGame } from "../../../contexts/useGames";

import { Button } from "../../Button";
import { AddPlayer } from "../../AddPlayer";
import { BottomWrapper } from "../../BottomWrapper";
import { ListPlayers } from "../../Players/ListPlayers";

import { Container } from "./styles";

export function Order() {
  const [isOpen, setIsOpen] = useState(false);

  const { playersOrder } = useGame();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <ListPlayers
        isSortable={true}
        isIconRemove={true}
        players={playersOrder}
      />

      <BottomWrapper>
        <Button onClick={handleOpenModal}>Inserir</Button>
      </BottomWrapper>

      <AddPlayer isOpen={isOpen} onClose={handleCloseModal} />
    </Container>
  );
}
