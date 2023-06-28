import * as zod from "zod";
import { Input } from "../Input";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { useGame } from "../../contexts/useGames";
import { usePlayer } from "../../contexts/usePlayers";

import { ButtonsContainer } from "./styles";

const FormSchema = zod.object({
  name: zod.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
});

type FormData = zod.infer<typeof FormSchema>;

export function FormAddPlayer() {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { createPlayer, findPlayerByName } = usePlayer();
  const { currentGame, handleAddPlayerOrder } = useGame();
  const navigate = useNavigate();

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

      handleAddPlayerOrder({
        id: newPlayer.id,
        name: newPlayer.name,
        gameId: newPlayer.gameId,
      });
    } else {
      handleAddPlayerOrder({
        id: player.id,
        name: player.name,
        gameId: player.gameId,
      });
    }

    setValue("name", "");
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Input id="name" placeholder="Nome" {...register("name")} />
      <ButtonsContainer>
        <Button onClick={handleNavigateToPlayers}>Salvos</Button>
        <Button type="submit">Inserir</Button>
      </ButtonsContainer>
    </form>
  );
}
