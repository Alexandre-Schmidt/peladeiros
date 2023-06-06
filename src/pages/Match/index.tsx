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
import { Warning } from "../../components/Warning";
import { Navigate } from "react-router-dom";

interface TabsSummary {
  [key: number]: ReactNode;
}

export function Match() {
  const [currentTab, setCurrentTab] = useState(0);
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isWarningOpenRaffleTeams, setIsWarningOpenRaffleTeams] =
    useState(false);
  const [isWarningOpenEndGame, setIsWarningOpenEndGame] = useState(false);

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
    Navigate("/finish");
    setIsWarningOpenRaffleTeams(false);
  };

  const handleRaffleTeams = () => {
    handleDrawTeams();
    setIsWarningOpenRaffleTeams(false);
  };

  const handleOpenWarningRaffle = () => {
    setIsWarningOpenRaffleTeams(true);
  };
  const handleOpenWarningEndGame = () => {
    setIsWarningOpenEndGame(true);
  };

  const handleCloseWarning = (type: "raffle" | "end") => {
    type === "raffle"
      ? setIsWarningOpenRaffleTeams(false)
      : setIsWarningOpenEndGame(false);
  };

  const menuItems = [
    { label: "Sortear Times", action: handleOpenWarningRaffle },
    { label: "Adicionar jogador", action: handleOpenModal },
    { label: "Finalizar Pelada", action: handleOpenWarningEndGame },
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

          <Warning
            isOpen={isWarningOpenRaffleTeams}
            title="Atenção!"
            message="Você tem certeza de que deseja Sortear os Times? Por favor, confirme"
            onClose={() => handleCloseWarning("raffle")}
            onCancel={() => handleCloseWarning("raffle")}
            onConfirm={handleRaffleTeams}
          />

          <Warning
            isOpen={isWarningOpenEndGame}
            title="Atenção!"
            message="Você tem certeza de que deseja Finalizar a Pelada? Por favor, confirme"
            onClose={() => handleCloseWarning("end")}
            onCancel={() => handleCloseWarning("end")}
            onConfirm={() => handleFinishMatch()}
          />
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
