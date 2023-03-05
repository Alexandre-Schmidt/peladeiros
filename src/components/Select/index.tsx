import { InputHTMLAttributes, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Container, InputWrapper, Label, TextField } from "../Input/styles";
import { ControlsWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: "number" | "options";
  min?: number;
  max?: number;
  options?: string[];
}

export function Select({
  name,
  placeholder,
  type,
  min = 0,
  max = 999,
  options,
  ...rest
}: InputProps) {
  const [value, setValue] = useState(min);

  const [selectedOption, setSelectedOption] = useState(
    options ? options[0] : ""
  );

  const handleUpValue = () => {
    if (type === "number") {
      if (value === max) return;

      setValue((oldState) => oldState + 1);

      return;
    }

    if (options === undefined) return;

    if (selectedOption === options[options.length - 1]) return;

    const index = options.findIndex((option) => option === selectedOption);

    if (index === undefined) return;

    setSelectedOption(options[index + 1]);
  };

  const handleDownValue = () => {
    if (type === "number") {
      if (value === min) return;

      setValue((oldState) => oldState - 1);
    }

    if (options === undefined) return;

    if (selectedOption === options[0]) return;

    const index = options.findIndex((option) => option === selectedOption);

    if (index === undefined) return;

    setSelectedOption(options[index - 1]);
  };

  return (
    <Container>
      <InputWrapper>
        <TextField
          name={name}
          id={name}
          placeholder=" "
          {...rest}
          value={type === "number" ? value : selectedOption}
        />
        <Label htmlFor={name}>{placeholder}</Label>
      </InputWrapper>

      <ControlsWrapper>
        <button onClick={handleUpValue}>
          <FiChevronUp size={22} />
        </button>

        <button onClick={handleDownValue}>
          <FiChevronDown size={22} />
        </button>
      </ControlsWrapper>
    </Container>
  );
}
