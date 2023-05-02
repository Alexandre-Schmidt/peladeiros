import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const TeamsWrapper = styled.div`
  height: auto;
`;

export const ContainerTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const ContainerScoreboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const TabsContainer = styled.div`
  height: 100%;
  margin-top: 2rem;

  > div:last-child {
    height: 100%;
    overflow-y: auto;
  }
`;
