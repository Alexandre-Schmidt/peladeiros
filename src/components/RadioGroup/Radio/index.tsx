import { Text } from "../../Text";
import { Container } from "./styles";

interface RadioProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function Radio({ label, isSelected, onClick }: RadioProps) {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      <div>
        <div />
      </div>
      <Text size="sm">{label}</Text>
    </Container>
  );
}
