import Modal from "react-modal";

import { Text } from "../Text";
import { FormAddPlayer } from "../FormAddPlayer";

import { ButtonsContainer, Container } from "./styles";
import { X } from "phosphor-react";

Modal.setAppElement("#root");

interface WarningProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export function AddPlayer({ isOpen, onClose, onConfirm }: WarningProps) {
  /* const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }; */
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          position: "static",
          width: "90%",
          height: "fit-content",
          background: "#EBF1F6",
          borderRadius: "8px",
          outline: "none",
        },
      }}
    >
      <ButtonsContainer onClick={onClose}>
        <X size={16} weight="bold" />
      </ButtonsContainer>

      <Container>
        <Text size="lg" weight={500}>
          Adicionar jogador
        </Text>

        <FormAddPlayer />
      </Container>
    </Modal>
  );
}
