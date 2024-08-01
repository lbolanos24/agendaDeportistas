import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Deportista } from "../../models/Deportista";
import { Acudiente } from "../../models/Acudiente";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import EditarDeportistas from "./EditarDeportistas";
import VerDeportistas from "./VerDeportistas";

type Props = { titulo: string };

function GestionDeportistas(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNewElement, setIsNewElement] = useState(false);

  const servicioDeportistas = ServicioDeportistas.getInstancia();

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          {props.titulo}
        </Text>
      </Center>
      {!!!isNewElement ? (
        <VerDeportistas
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioDeportistas={servicioDeportistas}
        />
      ) : (
        <EditarDeportistas
          isSubmitting={isSubmitting}
          setIsNewElement={setIsNewElement}
          servicioDeportistas={servicioDeportistas}
        />
      )}
    </>
  );
}

export default GestionDeportistas;
