import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

import { Text } from "../../Text";

import { Container } from "./styles";

interface playerProps {
  name: string;
  position: number;
  isSortable?: boolean;
}

export function Player({ name, position, isSortable = false }: playerProps) {
  return (
    <Container>
      <div>
        <Text>
          {position}. {name}
        </Text>
      </div>

      {isSortable && (
        <div>
          {position !== 1 && <FiChevronUp size={20} />}
          <FiChevronDown size={20} />
          <FiX size={20} />
        </div>
      )}
    </Container>
  );
}
