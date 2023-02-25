import { ReactNode } from "react";
import { Container } from "./styles";

interface TextProps {
  align?: "left" | "center" | "right" | "justify";
  size?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  weight?: 400 | 500 | 700;
  transform?: "uppercase" | "lowercase" | "capitalize" | "none";
  lineHeight?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  children: ReactNode;
}

export function Text({
  align = "left",
  size = "md",
  weight = 400,
  transform = "none",
  lineHeight,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  children,
}: TextProps) {
  return (
    <Container
      align={align}
      size={size}
      weight={weight}
      transform={transform}
      lineHeight={lineHeight}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      {children}
    </Container>
  );
}
