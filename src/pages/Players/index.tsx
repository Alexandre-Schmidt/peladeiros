import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useForm } from "react-hook-form";

import { useGame } from "../../contexts/useGames";
import { useToasts } from "../../contexts/useToasts";
import { usePlayer } from "../../contexts/usePlayers";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BottomWrapper } from "../../components/BottomWrapper";
import { PageContainer } from "../../components/PageContainer";
import { ListPlayers } from "../../components/Players/ListPlayers";

import { ButtonsContainer } from "./styles";
import { useMemo } from "react";

const FormSchema = zod.object({
  name: zod.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
});

type FormData = zod.infer<typeof FormSchema>;

export function Players() {
  const { currentGame } = useGame();
  const { createPlayer, findPlayerByName, getFilteredPlayers } = usePlayer();

  const { handleOpenToast } = useToasts();

  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const handleSave = ({ name }: FormData) => {
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

  const players = useMemo(() => {
    if (!currentGame) return [];

    return getFilteredPlayers(currentGame.id);
  }, [currentGame, getFilteredPlayers]);

  return (
    <PageContainer>
      <Title>Jogadores</Title>

      <ListPlayers players={players} />

      <BottomWrapper>
        <form onSubmit={handleSubmit(handleSave)}>
          <Input id="name" placeholder="Nome" {...register("name")} />
          <ButtonsContainer>
            <Button type="submit">Inserir</Button>
          </ButtonsContainer>
        </form>
      </BottomWrapper>
    </PageContainer>
  );
}
