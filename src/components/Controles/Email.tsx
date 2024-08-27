import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

type Props = {
  correoElectronico: string;
  setCorreoElectronico: (correoElectronico: string) => void;
  isRequired: boolean;
  label: string;
};

function Email(props: Props) {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleCorreoElectronicoChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    props.setCorreoElectronico(value);
    // Validar si es un email válido
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  return (
    <>
      <FormControl isRequired={props.isRequired} isInvalid={!isEmailValid}>
        <FormLabel>{props.label}</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <EmailIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Digite el correo electrónico"
            value={props.correoElectronico}
            onChange={handleCorreoElectronicoChanged}
          />
        </InputGroup>
        {!isEmailValid && (
          <FormErrorMessage>Correo electrónico inválido.</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}

export default Email;
