import { Text, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Deportista } from "../../models/Deportista";
import { Acudiente } from "../../models/Acudiente";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import EditarDeportistas from "./EditarDeportistas";
import VerDeportistas from "./VerDeportistas";

type Props = { titulo: string };

const deportistaVacio = {
  id: "",
  nombre: "",
  tipoId: "",
  fechaNacimiento: new Date(),
  edad: 0,
  direccion: "",
  eps: "",
  institucionEducativa: "",
  grado: 0,
  condicionImportante: "",
  imagenPropia: false,
  fotoDeportista: null,
  fotoDocumento: null,
  fotoDeportistaUrl: "",
  fotoDocumentoUrl: "",
  informacionMensualidad: false,
  informacionReposicion: false,
  informacionVacaciones: false,
  comprobanteInscripcion: false,
  acudientes: [],
};

function GestionDeportistas(props: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isNewDeportista, setIsNewDeportista] = useState(false);
  const [deportistaSelected, setDeportistaSelected] =
    useState<Deportista>(deportistaVacio);

  const servicioDeportistas = ServicioDeportistas.getInstancia();

  function handleSelectDeportista(deportistaSelected: Deportista): void {
    setDeportistaSelected(deportistaSelected);
    setIsEditing(true);
    setIsNewDeportista(false);
  }

  function handleNewDeportistaClick(newItem: boolean): void {
    setIsNewDeportista(true);
    setIsEditing(true);
    setDeportistaSelected(deportistaVacio);
  }

  return (
    <>
      <Center p="4">
        <Text as="b" textAlign="center" fontSize="20px" color="black">
          {!!!isEditing
            ? "Listado de Deportistas Inscritos"
            : "Captura de Datos del Deportista"}
        </Text>
      </Center>
      {!!!isEditing ? (
        <VerDeportistas
          onNewDeportistaClick={handleNewDeportistaClick}
          servicioDeportistas={servicioDeportistas}
          onSelect={handleSelectDeportista}
        />
      ) : (
        <EditarDeportistas
          setIsEditing={setIsEditing}
          servicioDeportistas={servicioDeportistas}
          deportistaSelected={deportistaSelected}
          isNewDeportista={isNewDeportista}
        />
      )}
    </>
  );
}

export default GestionDeportistas;
