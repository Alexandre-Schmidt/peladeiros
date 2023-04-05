import { RiCloseFill } from "react-icons/ri";
import { useToasts } from "../../contexts/useToasts";

import { Text } from "../Text";

import { Container, Content } from "./styles";

interface ToastProps {
  open: boolean;
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

export function Toast({ open, type, title, message }: ToastProps) {
  const { handleCloseToast } = useToasts();

  return (
    <Container open={open}>
      <Content type={type}>
        <div>
          <Text size="sm">{title}</Text>
          <Text mt={0.25}>{message}</Text>
        </div>

        <button onClick={handleCloseToast}>
          <RiCloseFill />
        </button>
      </Content>
    </Container>
  );
}
