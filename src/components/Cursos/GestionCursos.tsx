import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import VerCursos from "./VerCursos";
import EditarCursos from "./EditarCursos";
import { ServicioCursos } from "../../services/ServicioCursos";

type Props = { titulo: string };

function GestionCursos(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewElement, setIsNewElement] = useState(false);

  const servicioCursos = ServicioCursos.getInstancia();

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          Este es el módulo para la {props.titulo}, para crear un nuevo curso en
          el sistema de clic en el botón Agregar Nuevo.
        </Text>
      </Center>
      {!!!isNewElement ? (
        <VerCursos
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioCursos={servicioCursos}
        />
      ) : (
        <EditarCursos
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioCursos={servicioCursos}
        />
      )}
    </>
  );
}

export default GestionCursos;
