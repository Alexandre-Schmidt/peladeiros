import * as zod from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePlayer } from "../../contexts/usePlayers";

import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { useGame } from "../../contexts/useGames";
import { PageContainer } from "../../components/PageContainer";
import { BottomWrapper } from "../../components/BottomWrapper";
import { ListPlayers } from "../../components/Players/ListPlayers";

import { ButtonsContainer } from "./styles";

const FormSchema = zod.object({
  name: zod.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
});

type FormData = zod.infer<typeof FormSchema>;

export function Order() {
  const { reset } = useGame();
  const navigate = useNavigate();

  const { currentGame, playersOrder, addPlayer } = useGame();

  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { createPlayer, findPlayerByName } = usePlayer();

  const handleNavigateToPlayers = () => {
    navigate("/players");
  };

  const handleGoBack = () => {
    reset();
    navigate("/games");
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
      <Back onClick={handleGoBack}>
        <ArrowCircleLeft size={40} color="#4cb963" weight="fill" />
      </Back>
      <Title>Jogadores</Title>

      <ListPlayers isSortable={true} players={playersOrder} />

      <BottomWrapper>
        <form onSubmit={handleSubmit(handleSave)}>
          <Input id="name" placeholder="Nome" {...register("name")} />
          <ButtonsContainer>
            <Button onClick={handleNavigateToPlayers}>Salvos</Button>
            <Button type="submit">Inserir</Button>
          </ButtonsContainer>
        </form>
      </BottomWrapper>
    </PageContainer>
  );
}
