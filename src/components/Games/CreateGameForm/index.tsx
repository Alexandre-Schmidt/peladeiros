import { ChangeEvent, useState } from "react";
import { Input } from "../../Input";

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
        <Input placeholder="Nome" onChange={(event) => handleSetName(event)} />

        <div>
          <Input placeholder="Telefone" />
          <Input placeholder="Idade" />
        </div>

        <div>
          <Input placeholder="Profissão" />
          <Input placeholder="Idade" />
        </div>
      </InputsWrapper>

      <div>
        <span>Button radios</span>
      </div>

      <button onClick={handleSave}>Enviar</button>
    </Container>
  );
}
