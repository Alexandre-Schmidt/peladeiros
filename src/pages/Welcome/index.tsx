import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import logoImg from "../../assets/logo.png";

import { Container } from "./styles";

export function Welcome() {
  return (
    <Container>
      <img src={logoImg} alt="Peladeiros" />
      <Text size="xl" align="center">
        Peladeiros
      </Text>
      <Button size="md" align="center" lineHeight="100%">
        Começar
      </Button>
    </Container>
  );
}
