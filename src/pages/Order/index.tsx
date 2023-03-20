import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { usePlayer } from "../../contexts/usePlayers";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { BottomWrapper } from "../../components/BottomWrapper";
import { ListPlayers } from "../../components/Players/ListPlayers";
import { PageContainer } from "../../components/PageContainer";
import { Input } from "../../components/Input";
import { useGame } from "../../contexts/useGames";

import { ButtonsContainer } from "./styles";

interface FormData {
  name: string;
}

export function Order() {
  const navigate = useNavigate();

  const { currentGame, playersOrder, addPlayer } = useGame();

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const { createPlayer, findPlayerByName } = usePlayer();

  const handleNavigateToPlayers = () => {
    navigate("/players");
  };

  const handleSave = ({ name }: FormData) => {
    if (!currentGame) return;

    const player = findPlayerByName(name);

    if (!player) {
      const newPlayer = createPlayer({
        name,
        gameId: currentGame.id,
      });

      addPlayer({
        id: newPlayer.id,
        name: newPlayer.name,
        gameId: newPlayer.gameId,
      });
    } else {
      addPlayer({
        id: player.id,
        name: player.name,
        gameId: player.gameId,
      });
    }

    setValue("name", "");
  };

  return (
    <PageContainer>
      <Title>Jogadores</Title>

      <ListPlayers isSortable={true} players={playersOrder} />

      <BottomWrapper>
        <Input id="name" placeholder="Nome" {...register("name")} />
        <ButtonsContainer>
          <Button onClick={handleNavigateToPlayers}>Salvos</Button>
          <Button onClick={handleSubmit(handleSave)}>Inserir</Button>
        </ButtonsContainer>
      </BottomWrapper>
    </PageContainer>
  );
}
