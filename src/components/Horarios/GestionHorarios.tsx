import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type Props = { titulo: string };

function GestionHorarios(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewElement, setIsNewElement] = useState(false);

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          Este es el módulo para la {props.titulo}.
        </Text>
      </Center>
    </>
  );
}

export default GestionHorarios;
