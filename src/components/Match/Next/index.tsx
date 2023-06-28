import { useMatch } from "../../../contexts/useMatch";
import { Text } from "../../Text";

import { Container } from "./styles";

export function Next() {
  const { teams } = useMatch();

  const filteredArray = teams.filter((_, index) => {
    return index > 1;
  });

  return (
    <Container>
      {filteredArray.map((arrayInterno, index) => (
        <>
          <Text size="lg" color="gray" weight="bold">
            Time {index + 1}
          </Text>
          {arrayInterno.map((teams, subIndex) => (
            <p key={subIndex}>{teams.name}</p>
          ))}
        </>
      ))}
    </Container>
  );
}
