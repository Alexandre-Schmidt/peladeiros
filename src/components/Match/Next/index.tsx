import { useMatch } from "../../../contexts/useMatch";

export function Next() {
  const { teams } = useMatch();

  const filteredArray = teams.filter((_, index) => {
    return index > 1;
  });

  return (
    <Container>
      {filteredArray.map(() => (
        
      ))}
    </Container>
  );
}
