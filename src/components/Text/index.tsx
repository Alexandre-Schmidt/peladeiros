import { ReactNode } from "react";

import { Container } from "./styles";

interface TextProps {
  align?: "left" | "center" | "right" | "justify";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  weight?: 400 | 500 | 700;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Text({
  align = "left",
  size = "md",
  weight = 400,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  children,
  variant = "primary",
}: TextProps) {
  return (
    <Container
      align={align}
      size={size}
      weight={weight}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      variant={variant}
    >
      {children}
    </Container>
  );
}
