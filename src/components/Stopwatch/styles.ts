import styled from "styled-components";

export const StopwatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
`;
export const Clock = styled.div`
  padding: 0.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme["gray900"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: 0.5rem;
`;
