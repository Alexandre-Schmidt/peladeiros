import { useState } from "react";
import { X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";

import { ContainerTeams, ContainerScoreboard } from "./styles";
import { Team } from "../../components/Team";
import { Text } from "../../components/Text";

export function Match() {
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/order");
  };

  return (
    <PageContainer>
      <Back onClick={handleGoBack} />

      <Title>00:00</Title>

      <ContainerTeams>
        <Team handleCounterScore={() => setScoreLeft(scoreLeft + 1)} />

        <ContainerScoreboard>
          <Text size="xl">{scoreLeft}</Text>

          <X size={32} weight="bold" />

          <Text size="xl">{scoreRight}</Text>
        </ContainerScoreboard>

        <Team handleCounterScore={() => setScoreRight(scoreRight + 1)} />
      </ContainerTeams>
    </PageContainer>
  );
}
