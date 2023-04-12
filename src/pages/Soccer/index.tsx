import { useState } from "react";

import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";

import { Div1, Div2 } from "./styles";

export function Soccer() {
  const [showColors, setShowColors] = useState(false);
  const [colorSelected, setColorSelected] = useState(0);

  const colors = ["#4cb963", "#f2c94c", "#f2994a", "#eb5757", "#2f80ed"];

  const handleSelectColor = (color: number) => {
    setColorSelected(color);
    setShowColors(false);
  };
  return (
    <PageContainer>
      <Title>Partida</Title>

      <Div1 color={colors[colorSelected]}>
        <Div2 onClick={() => setShowColors(true)}></Div2>
      </Div1>

      {showColors && (
        <div
          style={{
            marginTop: 10,
          }}
        >
          <button onClick={() => handleSelectColor(0)}>Verde</button>
          <button onClick={() => handleSelectColor(1)}>Amarelo</button>
          <button onClick={() => handleSelectColor(2)}>Laranja</button>
          <button onClick={() => handleSelectColor(3)}>Vermelho</button>
          <button onClick={() => handleSelectColor(4)}>Azul</button>
        </div>
      )}
    </PageContainer>
  );
}
