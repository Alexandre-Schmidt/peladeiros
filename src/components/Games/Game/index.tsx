import { Text } from "../../Text";
import { Container } from "./styles";

interface GameProps {
  title: string;
}

export function Game({ title }: GameProps) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
