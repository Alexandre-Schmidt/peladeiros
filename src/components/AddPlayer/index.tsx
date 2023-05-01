import Modal from "react-modal";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Text } from "../Text";
import { Button } from "../Button";

import { ButtonsContainer, Container } from "./styles";
import { Input } from "../Input";
import { useGame } from "../../contexts/useGames";
import { usePlayer } from "../../contexts/usePlayers";
import { useNavigate } from "react-router-dom";

const FormSchema = zod.object({
  name: zod.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
});

type FormData = zod.infer<typeof FormSchema>;

Modal.setAppElement("#root");

interface WarningProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

export function AddPlayer({ isOpen, onClose, onConfirm }: WarningProps) {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const navigate = useNavigate();

  const { createPlayer, findPlayerByName } = usePlayer();
  const { currentGame, handleAddPlayerOrder } = useGame();

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          position: "static",
          width: "90%",
          height: "fit-content",
          background: "#EBF1F6",
          borderRadius: "8px",
          outline: "none",
        },
      }}
    >
      <Container>
        <Text size="lg" weight={500}>
          Adicionar jogador
        </Text>

        <form onSubmit={handleSubmit(handleSave)}>
          <Input id="name" placeholder="Nome" {...register("name")} />
          <ButtonsContainer>
            <Button onClick={handleNavigateToPlayers}>Salvos</Button>
            <Button type="submit">Inserir</Button>
          </ButtonsContainer>
        </form>
      </Container>
    </Modal>
  );
}
