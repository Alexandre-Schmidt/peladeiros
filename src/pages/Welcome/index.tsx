import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";

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

        <ButtonWrapper>
          <Button onClick={handleNavigateToGames}>Começar</Button>
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
