import { ChangeEvent, useState } from "react";
import { Input } from "../../Input";
import { Select } from "../../Select";

import { Container, InputsWrapper } from "./styles";

export function CreateGameForm() {
  const [name, setName] = useState("");

  const handleSetName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    console.log(name);
  };

  return (
    <Container>
      <InputsWrapper>
        <Input
          name="name"
          placeholder="Nome"
          onChange={(event) => handleSetName(event)}
        />

        <div>
          <Select
            name="playerNumber"
            placeholder="Jog por time"
            type="number"
            min={2}
            max={10}
          />
          <Select
            name="duration"
            placeholder="Duração (min)"
            type="number"
            min={1}
            max={90}
          />
        </div>

        <div>
          <Select
            name="limit"
            placeholder="Limite de gols"
            type="options"
            options={["SIM", "NÃO"]}
          />
          <Select
            name="goals"
            placeholder="Gols"
            type="number"
            min={1}
            max={10}
          />
        </div>
      </InputsWrapper>

      <div>
        <span>Button radios</span>
      </div>

      <button onClick={handleSave}>Enviar</button>
    </Container>
  );
}
