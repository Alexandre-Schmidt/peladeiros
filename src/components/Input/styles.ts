import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme["white"]};
  padding-right: 0.75rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 1.75rem 0.75rem 0.5rem 0.75rem;
  outline: none;

  &:focus + label {
    transform: translateY(10px);
    font-size: 0.75rem;
    color: ${({ theme }) => theme["green500"]};
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(10px);
    font-size: 0.75rem;
    color: ${({ theme }) => theme["green500"]};
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 0.75rem;
  transition: 200ms ease all;
  cursor: text;
  transform-origin: 0 0;
  transform: translateY(17px);
`;

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0.25rem 0;
`;
