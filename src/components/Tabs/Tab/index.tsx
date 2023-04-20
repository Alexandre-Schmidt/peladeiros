import { ButtonHTMLAttributes } from "react";

import { Text } from "../../Text";

import { Container } from "./styles";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tab: string;
  isActive: boolean;
}

export function Tab({ tab, isActive, ...rest }: TabProps) {
  return (
    <Container active={isActive} {...rest}>
      <div>
        <Text size="sm" weight={500} align="center">
          {tab}
        </Text>
      </div>
    </Container>
  );
}
