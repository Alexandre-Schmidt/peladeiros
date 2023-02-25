import styled from "styled-components";

interface ButtonContainerProps {
  align: "left" | "center" | "right" | "justify";
  size: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  weight: 400 | 500 | 700;
  transform: "uppercase" | "lowercase" | "capitalize" | "none";
  lineHeight?: number;
  mt: number;
  mb: number;
  ml: number;
  mr: number;
}

const textSize = {
  xxxs: "0.4375",
  xxs: "0.5rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.375rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
};

export const Container = styled.button<ButtonContainerProps>`
  color: ${({ theme }) => theme["white"]};
  background: ${({ theme }) => theme["green500"]};

  font-family: "Alata", sans-serif;
  font-size: ${({ size }) => textSize[size]};
  font-weight: ${({ weight }) => weight};
  line-height: 2.4rem;
  text-align: ${({ align }) => align};
  text-transform: ${({ transform }) => transform};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}rem` : "initial"};

  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
`;
