import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ServicioUbicaciones } from "../../services/ServicioUbicaciones";
import VerUbicaciones from "./VerUbicaciones";
import EditarUbicaciones from "./EditarUbicaciones";

type Props = { titulo: string };

function GestionUbicaciones(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewElement, setIsNewElement] = useState(false);

  const servicioUbicaciones = ServicioUbicaciones.getInstancia();

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          {props.titulo}
        </Text>
      </Center>
      {!!!isNewElement ? (
        <VerUbicaciones
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioUbicaciones={servicioUbicaciones}
        />
      ) : (
        <EditarUbicaciones
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioUbicaciones={servicioUbicaciones}
        />
      )}
    </>
  );
}

export default GestionUbicaciones;
