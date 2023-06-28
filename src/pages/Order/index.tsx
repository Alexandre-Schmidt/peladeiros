import { useNavigate } from "react-router-dom";
import { GiWhistle } from "react-icons/gi";

import { useGame } from "../../contexts/useGames";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";
import { BottomWrapper } from "../../components/BottomWrapper";
import { ListPlayers } from "../../components/Players/ListPlayers";

import { ButtonStart, Start } from "./styles";
import { FormAddPlayer } from "../../components/FormAddPlayer";

export function Order() {
  const { reset } = useGame();
  const navigate = useNavigate();

  const { currentGame, playersOrder } = useGame();

  const handleNavigateToSoccer = () => {
    navigate("/match");
  };
  const handleGoBack = () => {
    reset();
    navigate("/games");
  };

  const isHasTeam =
    playersOrder.length >= Number(currentGame?.playersNumber) * 2;

  return (
    <PageContainer pb={10}>
      <Back onClick={handleGoBack} />

      <Start>
        <ButtonStart
          onClick={handleNavigateToSoccer}
          type="submit"
          disabled={!isHasTeam}
        >
          <GiWhistle size={40} color="#EBF1F6" />
        </ButtonStart>
      </Start>

      <Title>Jogadores</Title>

      <ListPlayers isSortable={true} players={playersOrder} />

      <BottomWrapper>
        <FormAddPlayer />
      </BottomWrapper>
    </PageContainer>
  );
}
