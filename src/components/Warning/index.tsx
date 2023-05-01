import Modal from "react-modal";

import { Text } from "../Text";
import { Button } from "../Button";

import { ButtonWrapper, Container, TextWrapper } from "./styles";
Modal.setAppElement("#root");
interface WarningProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export function Warning({
  isOpen,
  title,
  message,
  confirmText = "Confirmar",
  onClose,
  onCancel,
  onConfirm,
}: WarningProps) {
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
          background: "#FFFFFF",
          borderRadius: "8px",
          outline: "none",
        },
      }}
    >
      <Container>
        <TextWrapper>
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Text mt={1}>{message}</Text>
        </TextWrapper>

        <ButtonWrapper>
          {onCancel && (
            <Button variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          )}

          <Button onClick={onConfirm}>{confirmText}</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  );
}
