import { useState } from "react";
import { IoIosFootball } from "react-icons/io";

import {
  ContainerShirtButton,
  ContainerTeam,
  ShirtWrapper,
  ShirtButton,
} from "./styles";

import { Shirt } from "../Shirt";
import { Warning } from "../Warning";

interface TeamProps {
  handleCounterScore: () => void;
}

export function Team({ handleCounterScore }: TeamProps) {
  const [showColorsShirt, setShowColorsShirt] = useState(false);
  const [colorSelected, setColorSelected] = useState(
    Math.floor(Math.random() * 6)
  );
  const [isWarningOpen, setIsWarningOpen] = useState(false);

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
    setIsWarningOpen(false);
  };

  const handleOpenWarning = () => {
    setIsWarningOpen(true);
  };

  const handleCloseWarning = () => {
    setIsWarningOpen(false);
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

      <button onClick={handleOpenWarning}>
        <IoIosFootball size={32} />
      </button>

      <Warning
        isOpen={isWarningOpen}
        title="Atenção!"
        message="Você tem certeza de que deseja adicionar este gol? Por favor, confirme"
        onClose={handleCloseWarning}
        onCancel={handleCloseWarning}
        onConfirm={handleAddGoal}
      />
    </ContainerTeam>
  );
}
