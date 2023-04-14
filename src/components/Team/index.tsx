import { useState } from "react";
import { IoIosFootball } from "react-icons/io";

import {
  ContainerShirtButton,
  ContainerTeam,
  Shirt,
  ShirtBackground,
  ShirtButton,
} from "./styles";

interface TeamProps {
  handleCounterScore: () => void;
}

export function Team({ handleCounterScore }: TeamProps) {
  const [showColorsShirt, setShowColorsShirt] = useState(false);
  const [colorSelected, setColorSelected] = useState(
    Math.floor(Math.random() * 6)
  );

  const colors = ["green", "yellow", "orange", "red", "blue", "black"];

  const handleSelectColor = (color: number) => {
    setColorSelected(color);
    setShowColorsShirt(false);
  };

  const handleAddGoal = () => {
    handleCounterScore();
  };

  return (
    <ContainerTeam>
      <ShirtBackground color={colors[colorSelected]}>
        <Shirt onClick={() => setShowColorsShirt(true)} />
      </ShirtBackground>

      {showColorsShirt && (
        <ContainerShirtButton>
          {colors.map((color, index) => (
            <ShirtButton
              key={color}
              color={color}
              onClick={() => handleSelectColor(index)}
            />
          ))}
        </ContainerShirtButton>
      )}

      <button onClick={handleAddGoal}>
        <IoIosFootball size={32} />
      </button>
    </ContainerTeam>
  );
}
