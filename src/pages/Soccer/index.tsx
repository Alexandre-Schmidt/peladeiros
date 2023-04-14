import { useState } from "react";
import { X } from "phosphor-react";
import { IoIosFootball } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";

import {
  Shirt,
  ContainerTeams,
  ContainerTeamLeft,
  ContainerTeamRight,
  ContainerScoreboard,
  ShirtBackgroundLeft,
  ShirtBackgroundRight,
  ContainerShirtButton,
} from "./styles";

export function Soccer() {
  const [showColorsShirtRight, setShowColorsShirtRight] = useState(false);
  const [colorSelectedRight, setColorSelectedRight] = useState(3);
  const [scoreRight, setScoreRight] = useState(0);

  const [showColorsShirtLeft, setShowColorsShirtLeft] = useState(false);
  const [colorSelectedLeft, setColorSelectedLeft] = useState(4);
  const [scoreLeft, setScoreLeft] = useState(0);

  const navigate = useNavigate();

  const colors = ["#4cb963", "#f2c94c", "#f2994a", "#eb5757", "#2f80ed"];

  const handleSelectColorRight = (color: number) => {
    setColorSelectedRight(color);
    setShowColorsShirtRight(false);
  };

  const handleSelectColorLeft = (color: number) => {
    setColorSelectedLeft(color);
    setShowColorsShirtLeft(false);
  };

  const handleCounterScoreLeft = () => {
    setScoreLeft((score) => {
      return score + 1;
    });
  };

  const handleCounterScoreRight = () => {
    setScoreRight((score) => {
      return score + 1;
    });
  };

  const handleGoBack = () => {
    navigate("/order");
  };

  return (
    <PageContainer>
      <Back onClick={handleGoBack} />
      <Title>00:00</Title>

      <ContainerTeams>
        <ContainerTeamLeft>
          <ShirtBackgroundLeft color={colors[colorSelectedLeft]}>
            <Shirt onClick={() => setShowColorsShirtLeft(true)} />
          </ShirtBackgroundLeft>

          {showColorsShirtLeft && (
            <ContainerShirtButton>
              <button
                className="green"
                onClick={() => handleSelectColorLeft(0)}
              />
              <button
                className="yellow"
                onClick={() => handleSelectColorLeft(1)}
              />
              <button
                className="orange"
                onClick={() => handleSelectColorLeft(2)}
              />
              <button
                className="red"
                onClick={() => handleSelectColorLeft(3)}
              />
              <button
                className="blue"
                onClick={() => handleSelectColorLeft(4)}
              />
            </ContainerShirtButton>
          )}

          <button onClick={handleCounterScoreLeft}>
            <IoIosFootball size={40} color="#4cb963" />
          </button>
        </ContainerTeamLeft>

        <ContainerScoreboard>
          <Title>{scoreLeft}</Title>
          <X size={45} weight="bold" />
          <Title>{scoreRight}</Title>
        </ContainerScoreboard>

        <ContainerTeamRight>
          <ShirtBackgroundRight color={colors[colorSelectedRight]}>
            <Shirt onClick={() => setShowColorsShirtRight(true)} />
          </ShirtBackgroundRight>

          {showColorsShirtRight && (
            <ContainerShirtButton>
              <button
                className="green"
                onClick={() => handleSelectColorRight(0)}
              />
              <button
                className="yellow"
                onClick={() => handleSelectColorRight(1)}
              />
              <button
                className="orange"
                onClick={() => handleSelectColorRight(2)}
              />
              <button
                className="red"
                onClick={() => handleSelectColorRight(3)}
              />
              <button
                className="blue"
                onClick={() => handleSelectColorRight(4)}
              />
            </ContainerShirtButton>
          )}

          <button onClick={handleCounterScoreRight}>
            <IoIosFootball size={40} color="#4cb963" />
          </button>
        </ContainerTeamRight>
      </ContainerTeams>
    </PageContainer>
  );
}
