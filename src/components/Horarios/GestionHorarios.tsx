import { Text, Center } from "@chakra-ui/react";
import VerGrupos from "./VerGrupos";

type Props = { titulo: string };

function GestionHorarios(props: Props) {
  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          {props.titulo}.
        </Text>
      </Center>
      <VerGrupos />
    </>
  );
}

export default GestionHorarios;
