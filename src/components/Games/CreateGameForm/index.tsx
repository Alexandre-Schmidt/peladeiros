import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../Input";
import { Select } from "../../Select";

import { Container, InputsWrapper } from "./styles";

interface FormData {
  name: string;
}

export function CreateGameForm() {
  const [playersNumber, setPlayersNumber] = useState(2);
  const [duration, setDuration] = useState(1);
  const [limit, setLimit] = useState(0);
  const [goalsNumber, setGoalsNumber] = useState(1);

  const { register, handleSubmit } = useForm<FormData>();

  const handleSave = ({ name }: FormData) => {
    console.log("DATA", { name, playersNumber, duration, limit, goalsNumber });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSave)}>
        <InputsWrapper>
          <Input name="name" placeholder="Nome" register={register} />

          <div>
            <Select
              name="playerNumber"
              placeholder="Jog por time"
              type="number"
              min={2}
              max={10}
              onChangeValue={(value) => setPlayersNumber(value)}
            />
            <Select
              name="duration"
              placeholder="Duração (min)"
              type="number"
              min={1}
              max={90}
              onChangeValue={(value) => setDuration(value)}
            />
          </div>

          <div>
            <Select
              name="limit"
              placeholder="Limite de gols"
              type="options"
              options={["SIM", "NÃO"]}
              onChangeValue={(value) => setLimit(value)}
            />
            <Select
              name="goals"
              placeholder="Gols"
              type="number"
              min={1}
              max={10}
              onChangeValue={(value) => setGoalsNumber(value)}
            />
          </div>
        </InputsWrapper>

        <div>
          <span>Button radios</span>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
