import { useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useGame } from "../../contexts/useGames";

import { Back } from "../../components/Back";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { RadioGroup } from "../../components/RadioGroup";
import { BottomWrapper } from "../../components/BottomWrapper";
import { PageContainer } from "../../components/PageContainer";

import { Form, InputsWrapper } from "./styles";

const FormSchema = zod.object({
  name: zod.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  playersNumber: zod
    .number()
    .min(2, "Deve ter no mínimo 2 jogadores por time")
    .max(10, "Deve ter no máximo 10 jogadores por time"),
  duration: zod.number().min(1, "Deve ter pelo menos 1 minuto"),
  goals: zod.number(),
});

type FormData = zod.infer<typeof FormSchema>;

export function CreateGame() {
  const navigate = useNavigate();
  const [rule, setRule] = useState(0);

  const { register, setValue, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const { createGame } = useGame();

  const handleSave = ({ name, playersNumber, duration, goals }: FormData) => {
    createGame({
      name,
      playersNumber: Number(playersNumber),
      duration: Number(duration),
      goals: Number(goals),
      rule,
    });

    setValue("name", "");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Back onClick={handleGoBack} />

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

      <BottomWrapper>
        <Button onClick={handleSubmit(handleSave)}>Salvar</Button>
      </BottomWrapper>
    </PageContainer>
  );
}
