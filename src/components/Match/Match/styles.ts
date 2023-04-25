import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 4rem;
  padding: 0 1rem;
`;

export const Team01 = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1.5rem;

  width: 50%;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Team02 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;
