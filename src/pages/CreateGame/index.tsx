import { useForm } from "react-hook-form";

import { useGame } from "../../contexts/useGames";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonWrapper } from "../../components/ButtonWrapper";
import { PageContainer } from "../../components/PageContainer";

import { Form, InputsWrapper } from "./styles";

interface FormData {
  name: string;
  playersNumber: number;
  duration: string;
  goals: string;
}

export function CreateGame() {
  const { register, handleSubmit } = useForm<FormData>();

  const { createGame } = useGame();

  const handleSave = ({ name, playersNumber, duration, goals }: FormData) => {
    createGame({
      name,
      playersNumber,
      duration,
      goals,
    });
  };

  return (
    <PageContainer>
      <Title>Novo</Title>

      <Form>
        <InputsWrapper>
          <Input id="name" placeholder="Nome" {...register("name")} />

          <div>
            <Input
              id="playersNumber"
              placeholder="Jog por time"
              {...register("playersNumber")}
            />
            <Input
              id="duration"
              placeholder="Duração (min)"
              {...register("duration")}
            />
          </div>

          <Input
            id="goals"
            placeholder="Limite de gols"
            defaultValue="0"
            {...register("goals")}
          />
        </InputsWrapper>
      </Form>

      <ButtonWrapper>
        <Button onClick={handleSubmit(handleSave)}>Salvar</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}
