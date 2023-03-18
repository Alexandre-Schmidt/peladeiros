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

interface FormData {
  name: string;
}

export function Players() {
  const navigate = useNavigate();

  const handleNavigateToPlayers = () => {
    navigate("/players");
  };

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const { createPlayer } = usePlayer();

  const handleSave = ({ name }: FormData) => {
    createPlayer({
      name,
    });

    setValue("name", "");
  };

  return (
    <PageContainer>
      <Title>Jogadores</Title>

      <ListPlayers />

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
