import { useState } from "react";
import { useForm } from "react-hook-form";

import { useGame } from "../../contexts/useGames";

import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RadioGroup } from "../../components/RadioGroup";
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
  const [rule, setRule] = useState(0);

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const { createGame } = useGame();

  const handleSave = ({ name, playersNumber, duration, goals }: FormData) => {
    createGame({
      name,
      playersNumber,
      duration,
      goals,
      rule,
    });

    setValue("name", "");
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

        <Text size="lg" mb={1}>
          Regras do Sorteio
        </Text>
        <RadioGroup
          radios={[
            "Ordem de Chegada",
            "2 primeiros times aleatórios",
            "Todos aleatório",
          ]}
          getValue={(value) => setRule(value)}
        />
      </Form>

      <ButtonWrapper>
        <Button onClick={handleSubmit(handleSave)}>Salvar</Button>
      </ButtonWrapper>
    </PageContainer>
  );
}
