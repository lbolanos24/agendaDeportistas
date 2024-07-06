import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import VerProfesores from "./VerProfesores";
import EditarProfesores from "./EditarProfesores";
import { Profesor } from "../../models/Profesor";
import { ServicioProfesores } from "../../services/ServicioProfesores";

type Props = { titulo: string };

function GestionProfesores(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewElement, setIsNewElement] = useState(false);

  const servicioProfesores = ServicioProfesores.getInstancia();

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          Este es el módulo para la {props.titulo}, para crear un nuevo profesor
          en el sistema de clic en el botón Agregar Nuevo.
        </Text>
      </Center>
      {!!!isNewElement ? (
        <VerProfesores
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioProfesores={servicioProfesores}
        />
      ) : (
        <EditarProfesores
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioProfesores={servicioProfesores}
        />
      )}
    </>
  );
}

export default GestionProfesores;
