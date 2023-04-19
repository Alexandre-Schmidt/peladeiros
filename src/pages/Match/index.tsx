import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "phosphor-react";

import { Back } from "../../components/Back";
import { Team } from "../../components/Team";
import { Text } from "../../components/Text";
import { PageContainer } from "../../components/PageContainer";

import { ContainerTeams, ContainerScoreboard } from "./styles";
import { Stopwatch } from "../../components/Stopwatch";

export function Match() {
  const navigate = useNavigate();

  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const handleGoBack = () => {
    navigate("/order");
  };

  return (
    <PageContainer>
      <Back onClick={handleGoBack} />

      <Stopwatch />

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
