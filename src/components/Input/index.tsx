import { InputHTMLAttributes } from "react";
import { Container, InputWrapper, Label, TextField } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  method?: "write" | "select";
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <InputWrapper>
        <TextField name={name} id={name} placeholder=" " {...rest} />
        <Label htmlFor={name}>{placeholder}</Label>
      </InputWrapper>
    </Container>
  );
}
