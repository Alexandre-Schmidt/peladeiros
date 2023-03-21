import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { usePlayer } from "../../contexts/usePlayers";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { BottomWrapper } from "../../components/BottomWrapper";
import { ListPlayers } from "../../components/Players/ListPlayers";
import { PageContainer } from "../../components/PageContainer";
import { Input } from "../../components/Input";

import { ButtonsContainer } from "./styles";
import { useGame } from "../../contexts/useGames";
import { useToasts } from "../../contexts/useToasts";

interface FormData {
  name: string;
}

export function Players() {
  const { players } = usePlayer();

  const navigate = useNavigate();

  const { currentGame } = useGame();
  const { handleOpenToast } = useToasts();

  const handleNavigateToPlayers = () => {
    navigate("/players");
  };

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const { createPlayer, findPlayerByName } = usePlayer();

  const handleSave = ({ name }: FormData) => {
    if (name === "") return;

    if (!currentGame) return;

    const player = findPlayerByName(name);

    if (!player) {
      createPlayer({
        name,
        gameId: currentGame.id,
      });

      setValue("name", "");

      return;
    }

    handleOpenToast({
      type: "error",
      title: "Error",
      message: "Jogador já cadastrado",
    });
  };

  return (
    <PageContainer>
      <Title>Jogadores</Title>

      <ListPlayers players={players} />

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
