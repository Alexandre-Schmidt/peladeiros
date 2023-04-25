import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  KeyboardEvent,
} from "react";

import { Container, InputWrapper, Label, TextField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  defaultValue?: string;
  inputType?: "text" | "number";
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, placeholder, defaultValue, inputType = "text", ...rest },
  ref
) => {
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (inputType === "text") return;

    let value = event.currentTarget.value;

    value = value.replace(/\D/g, "");

    event.currentTarget.value = value;
  };

  return (
    <Container>
      <InputWrapper>
        <TextField
          id={id}
          placeholder=" "
          defaultValue={defaultValue}
          ref={ref}
          onKeyUp={(event) => handleKeyUp(event)}
          {...rest}
        />
        <Label htmlFor={id}>{placeholder}</Label>
      </InputWrapper>
    </Container>
  );
};

export const Input = forwardRef(InputBase);
