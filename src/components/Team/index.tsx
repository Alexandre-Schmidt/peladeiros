import { useState } from "react";
import { IoIosFootball } from "react-icons/io";

import {
  ContainerShirtButton,
  ContainerTeam,
  ShirtWrapper,
  ShirtButton,
} from "./styles";

import { Shirt } from "../Shirt";

interface TeamProps {
  handleCounterScore: () => void;
}

export function Team({ handleCounterScore }: TeamProps) {
  const [showColorsShirt, setShowColorsShirt] = useState(false);
  const [colorSelected, setColorSelected] = useState(
    Math.floor(Math.random() * 6)
  );

  const colors = [
    "#4cb963",
    "#f2c94c",
    "#f2994a",
    "#eb5757",
    "#2f80ed",
    "#000000",
  ];

  const handleSelectColor = (color: number) => {
    setColorSelected(color);
    setShowColorsShirt(false);
  };

  const handleAddGoal = () => {
    handleCounterScore();
  };

  return (
    <ContainerTeam>
      <ShirtWrapper>
        <Shirt
          color={colors[colorSelected]}
          onClick={() => setShowColorsShirt(true)}
        />
      </ShirtWrapper>

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
