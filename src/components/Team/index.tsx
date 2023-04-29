import { useState } from "react";
import { IoIosFootball } from "react-icons/io";

import { colors } from "../../utils/colors";

import { Shirt } from "../Shirt";
import { Warning } from "../Warning";

import {
  ContainerShirtButton,
  ContainerTeam,
  ShirtWrapper,
  ShirtButton,
} from "./styles";

interface TeamProps {
  shirtColorIndex: number;
  handleCounterScore: () => void;
  handleChangeColorShirt: (color: number) => void;
}

export function Team({
  shirtColorIndex,
  handleCounterScore,
  handleChangeColorShirt,
}: TeamProps) {
  const [showColorsShirt, setShowColorsShirt] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  const handleSelectColor = (color: number) => {
    handleChangeColorShirt(color);
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
          color={colors[shirtColorIndex]}
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
