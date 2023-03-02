import { Text } from "../../Text";
import { Container } from "./styles";

export function Inputs() {
  return (
    <Container>
      <form>
        <label htmlFor="nameGame">Nome:</label>
        <input type="text" id="nameGame" />
        <div>
          <label htmlFor="gameForTeam">Jog por time:</label>
          <input type="number" name="gameForTeam" min="1" max="5" />
          <label htmlFor="time">Duração:</label>
          <input type="number" name="time" min="2" max="10" />
        </div>
        <div>
          <label htmlFor="limite_gols">Limite de gols:</label>
          <select id="limite_gols" name="limite_gols">
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          <label htmlFor="goalLimits">Gols:</label>
          <input type="number" id="goalLimits"></input>
        </div>

        <Text>Regra do sorteio</Text>
        <input type="checkbox" id="order" value="Ordem de Chegada" />
        <label htmlFor="order"> Ordem de Chegada </label>
        <input
          type="checkbox"
          id="randomTeam"
          value="2 primeiros times aleatórios"
        />
        <label htmlFor="randomTeam"> 2 primeiros times aleatórios </label>
        <input type="checkbox" id="random" value="Aleatório total" />
        <label htmlFor="random"> Aleatório total </label>
      </form>
    </Container>
  );
}
