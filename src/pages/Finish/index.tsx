import { Title } from "../../components/Title";
import { PageContainer } from "../../components/PageContainer";

import { ListPlayers } from "../../components/Players/ListPlayers";
import { useMatch } from "../../contexts/useMatch";

export function Finish() {
  const { paymentControl } = useMatch();

  return (
    <PageContainer pb={10}>
      <Title>Lista de Pagamento</Title>

      <ListPlayers isSortable={true} players={paymentControl} />
    </PageContainer>
  );
}
