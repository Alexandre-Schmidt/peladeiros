import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 0.875rem;

  &:nth-child(odd) {
    background-color: rgba(16, 38, 60, 0.05);
  }

  > div {
    display: flex;
  }
`;
