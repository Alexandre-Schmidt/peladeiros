import { ReactNode, useState } from "react";
import { X } from "phosphor-react";

import { useGame } from "../../contexts/useGames";
import { useMatch } from "../../contexts/useMatch";

import { Menu } from "../../components/Menu";
import { Team } from "../../components/Team";
import { Text } from "../../components/Text";
import { Tabs } from "../../components/Tabs";
import { Next } from "../../components/Match/Next";
import { Order } from "../../components/Match/Order";
import { Stopwatch } from "../../components/Stopwatch";
import { AddPlayer } from "../../components/AddPlayer";
import { PageContainer } from "../../components/PageContainer";
import { Match as MatchComponent } from "../../components/Match/Match";

import {
  Container,
  TeamsWrapper,
  TabsContainer,
  ContainerTeams,
  ContainerScoreboard,
} from "./styles";

interface TabsSummary {
  [key: number]: ReactNode;
}

export function Match() {
  const [currentTab, setCurrentTab] = useState(0);
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { handleDrawTeams } = useMatch();
  const { currentGame, handleChangeShirtColor } = useGame();

  const tabsSummary: TabsSummary = {
    0: <Order />,
    1: <MatchComponent />,
    2: <Next />,
  };

  const handleChangeTab = (index: number) => {
    setCurrentTab(index);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleExecuteAction = (action: () => void) => {
    action();
  };

  const handleFinishMatch = () => {
    console.log("Finalizar pelada");
  };

  const menuItems = [
    { label: "Sortear Times", action: handleDrawTeams },
    { label: "Adicionar jogador", action: handleOpenModal },
    { label: "Finalizar Pelada", action: handleFinishMatch },
  ];

  return (
    <PageContainer pb={0}>
      {currentGame && (
        <Container>
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

      {/* <AddPlayerContainer>
        <ButtonAdd onClick={handleOpenModal}>
          <Plus size={24} weight="bold" color="#EBF1F6" />
        </ButtonAdd>
      </AddPlayerContainer> */}

      <Menu
        menuItems={menuItems}
        onClick={(action) => handleExecuteAction(action)}
      />

      <AddPlayer isOpen={isOpen} onClose={handleCloseModal} />
    </PageContainer>
  );
}
