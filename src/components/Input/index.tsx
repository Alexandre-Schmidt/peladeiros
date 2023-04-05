import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import { Container, InputWrapper, Label, TextField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  defaultValue?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, placeholder, defaultValue, ...rest },
  ref
) => {
  return (
    <Container>
      <InputWrapper>
        <TextField
          id={id}
          placeholder=" "
          defaultValue={defaultValue}
          ref={ref}
          {...rest}
        />
        <Label htmlFor={id}>{placeholder}</Label>
      </InputWrapper>
    </Container>
  );
};

export const Input = forwardRef(InputBase);
