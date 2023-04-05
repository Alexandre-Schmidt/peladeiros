import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { BottomWrapper } from "../../components/BottomWrapper";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.png";
import { useEffect } from "react";

export function Welcome() {
  const navigate = useNavigate();

  const handleNavigateToGames = () => {
    navigate("/games");
  };

  useEffect(() => {
    const array = [
      { name: "Paulo" },
      { name: "Teste" },
      { name: "Alexandre" },
      { name: "Baitola" },
      { name: "Anta" },
      { name: "Jamanta" },
    ];

    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const newArray = array2.filter((item) => item > 5);
    const newArray2 = array.filter((item) => item.name.includes("Ba"));

    const teste = array.find(
      (item) =>
        item.name.toLocaleLowerCase() === "Alexandre".toLocaleLowerCase()
    );

    const teste2 = array.some(
      (item) =>
        item.name.toLocaleLowerCase() === "Alexandre".toLocaleLowerCase()
    );

    console.log(newArray);
    console.log(newArray2);
    console.log(array2.includes(11));
    console.log(teste);
    console.log(teste2);
  }, []);

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
