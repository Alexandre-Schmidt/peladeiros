import styled from "styled-components";

interface TextContainerProps {
  align: "left" | "center" | "right" | "justify";
  size: "xs" | "sm" | "md" | "lg" | "xl";
  weight: 400 | 500 | 700;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
}

const textSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.5rem",
};

export const Container = styled.p<TextContainerProps>`
  color: ${({ theme }) => theme["blue500"]};
  font-family: "Roboto", sans-serif;
  font-size: ${({ size }) => textSize[size]};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
`;
