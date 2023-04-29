import { useEffect, useState } from "react";
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
import { Warning } from "../../components/Warning";
import { RadioGroup } from "../../components/RadioGroup";
import { BottomWrapper } from "../../components/BottomWrapper";
import { PageContainer } from "../../components/PageContainer";

import { Form, InputsWrapper } from "./styles";

const FormSchema = zod.object({
  name: zod.string().min(1, "Campo obrigatório"),
  playersNumber: zod.string().min(1, "Campo obrigatório"),
  duration: zod.string().min(1, "Campo obrigatório"),
  goals: zod.string(),
});

type FormData = zod.infer<typeof FormSchema>;

export function CreateGame() {
  const [rule, setRule] = useState(0);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isWarningOpenIncomplete, setIsWarningOpenIncomplete] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  console.log(errors);

  const { createGame } = useGame();

  useEffect(() => {
    setIsWarningOpenIncomplete(!!Object.keys(errors).length);
  }, [errors]);

  const handleSave = ({ name, playersNumber, duration, goals }: FormData) => {
    createGame({
      name,
      playersNumber: Number(playersNumber),
      duration: Number(duration),
      goals: Number(goals),
      rule,
    });

    setIsWarningOpen(true);
    setValue("name", "");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCloseWarning = (type: "success" | "incomplete") => {
    type === "success"
      ? setIsWarningOpen(false)
      : setIsWarningOpenIncomplete(false);
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
              inputType="number"
              {...register("playersNumber")}
            />
            <Input
              id="duration"
              placeholder="Duração (min)"
              inputType="number"
              {...register("duration")}
            />
          </div>

          <Input
            id="goals"
            placeholder="Limite de gols"
            defaultValue="0"
            inputType="number"
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

      <Warning
        isOpen={isWarningOpen}
        title="Parabéns!"
        message="Pelada criada com sucesso!"
        onClose={() => handleCloseWarning("success")}
        confirmText="OK"
        onConfirm={() => handleCloseWarning("success")}
      />

      <Warning
        isOpen={isWarningOpenIncomplete}
        title="Atenção!"
        message="Por favor, preencha todos os campos"
        onClose={() => handleCloseWarning("incomplete")}
        onConfirm={() => handleCloseWarning("incomplete")}
      />
    </PageContainer>
  );
}
