import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { BottomWrapper } from "../../components/BottomWrapper";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.png";

export function Welcome() {
  const navigate = useNavigate();

  const handleNavigateToGames = () => {
    navigate("/games");
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Peladeiros" />

        <Title variant="secondary">Peladeiros</Title>

        <BottomWrapper>
          <Button onClick={handleNavigateToGames}>Começar</Button>
        </BottomWrapper>
      </Content>
    </Container>
  );
}
