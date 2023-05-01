import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "phosphor-react";

import { useGame } from "../../contexts/useGames";

import { Back } from "../../components/Back";
import { Team } from "../../components/Team";
import { Text } from "../../components/Text";
import { Tabs } from "../../components/Tabs";
import { Next } from "../../components/Match/Next";
import { Order } from "../../components/Match/Order";
import { Stopwatch } from "../../components/Stopwatch";
import { PageContainer } from "../../components/PageContainer";
import { Match as MatchComponent } from "../../components/Match/Match";

import {
  ContainerTeams,
  ContainerScoreboard,
  TabsContainer,
  Container,
  TeamsWrapper,
} from "./styles";

interface TabsSummary {
  [key: number]: ReactNode;
}

export function Match() {
  const [currentTab, setCurrentTab] = useState(0);
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const { currentGame, handleChangeShirtColor } = useGame();

  const navigate = useNavigate();

  const tabsSummary: TabsSummary = {
    0: <Order />,
    1: <MatchComponent />,
    2: <Next />,
  };

  const handleGoBack = () => {
    navigate("/order");
  };

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <PageContainer>
      {currentGame && (
        <Container>
          <Back onClick={handleGoBack} />

          <TeamsWrapper>
            <Stopwatch />

            <ContainerTeams>
              <Team
                shirtColorIndex={currentGame.shirtColors.team01}
                handleCounterScore={() => setScoreLeft(scoreLeft + 1)}
                handleChangeColorShirt={(color) =>
                  handleChangeShirtColor("team01", color)
                }
              />

              <ContainerScoreboard>
                <Text size="xl">{scoreLeft}</Text>

                <X size={32} weight="bold" />

                <Text size="xl">{scoreRight}</Text>
              </ContainerScoreboard>

              <Team
                shirtColorIndex={currentGame.shirtColors.team02}
                handleCounterScore={() => setScoreRight(scoreRight + 1)}
                handleChangeColorShirt={(color) =>
                  handleChangeShirtColor("team02", color)
                }
              />
            </ContainerTeams>
          </TeamsWrapper>

          <TabsContainer>
            <Tabs
              tabs={["Ordem", "Partida", "Próximos"]}
              currentTab={currentTab}
              onCLick={(index) => handleChangeTab(index)}
            />

            <div>{tabsSummary[currentTab]}</div>
          </TabsContainer>
        </Container>
      )}
    </PageContainer>
  );
}
