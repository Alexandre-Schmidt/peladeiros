import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import { Container, InputWrapper, Label, TextField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
}

export function Input({ name, placeholder, register, ...rest }: InputProps) {
  return (
    <Container>
      <InputWrapper>
        <TextField id={name} placeholder=" " {...rest} {...register(name)} />
        <Label htmlFor={name}>{placeholder}</Label>
      </InputWrapper>
    </Container>
  );
}
