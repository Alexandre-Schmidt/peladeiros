import { RiCloseFill } from "react-icons/ri";
import { useToasts } from "../../contexts/useToasts";

import { Text } from "../Text";
import { Container, Content } from "./styles";

interface ToastProps {
  open: boolean;
}

export function Toast({ open }: ToastProps) {
  const { handleCloseToast } = useToasts();

  return (
    <Container open={open}>
      <Content>
        <div>
          <Text size="sm">Error</Text>
          <Text mt={0.25}>Alguma mensagem</Text>
        </div>

        <button onClick={handleCloseToast}>
          <RiCloseFill />
        </button>
      </Content>
    </Container>
  );
}
