import { useState } from "react";

import { Radio } from "./Radio";
import { Container } from "./styles";

interface RadioProps {
  radios: string[];
  getValue: (value: number) => void;
}

export function RadioGroup({ radios, getValue }: RadioProps) {
  const [selected, setSelected] = useState(0);

  const handleChangeRadio = (index: number) => {
    setSelected(index);
    getValue(index);
  };

  return (
    <Container>
      {radios.map((radio, index) => (
        <Radio
          key={radio}
          label={radio}
          isSelected={index === selected}
          onClick={() => handleChangeRadio(index)}
        />
      ))}
    </Container>
  );
}
