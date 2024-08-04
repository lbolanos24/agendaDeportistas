import {
  TableContainer,
  Table,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import { Deportista } from "../../models/Deportista";

type Props = {
  onNewDeportistaClick: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
  onSelect: (deportista: Deportista) => void;
};

function VerDeportistas(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);
  const [deportistas, setDeportistas] = useState<Deportista[]>([]);

  useEffect(() => {
    setDeportistas(props.servicioDeportistas.listarDeportistas());
  }, [setDeportistas]);

  const handleClick = () => {
    props.onNewDeportistaClick(true);
  };

  const handleClickVer = (id: string) => {
    const deportistaSelected = deportistas.find(
      (deportista) => deportista.id === id
    );
    // Se selecciona el deportista para ver sus detalles o editarlos
    if (deportistaSelected != null) {
      props.onSelect(deportistaSelected);
    }
  };

  const handleClickEliminar = (id: string) => {
    //Se elimina el deportista de la BD
    props.servicioDeportistas.eliminarDeportistas(id);

    //Actualizar la vista
    setDeportistas(deportistas.filter((d) => d.id !== id));

    setIsEliminated(!isEliminated);
  };

  return (
    <>
      <Button
        mt={4}
        colorScheme="blue"
        type="submit"
        margin={"20px"}
        onClick={() => handleClick()}
        className="buttonSombreado"
      >
        Agregar Nuevo
      </Button>
      <TableContainer m={"20px"}>
        <Table size="sm" variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Foto
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Nombre
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Fecha de nacimiento
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Edad
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Documento
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Acudientes
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Opciones
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {deportistas.map((deportista) => (
              <Tr key={deportista.id}>
                <Td style={{ border: "1px solid black" }}>
                  <Center mt={4}>
                    <Image
                      border={
                        deportista.imagenPropia
                          ? "4px solid green"
                          : "4px solid red"
                      }
                      src={deportista.fotoDeportistaUrl}
                      alt="Preview"
                      maxW="200px"
                      maxH="200px"
                      borderRadius="md"
                    />
                  </Center>
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.fechaNacimiento.toLocaleDateString()}
                </Td>
                <Td style={{ border: "1px solid black" }}>{deportista.edad}</Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.tipoId}:{deportista.id}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.acudientes
                    ?.map(
                      (acudiente) =>
                        `${acudiente.nombre} ${acudiente.numeroCelular} `
                    )
                    .join(" , ")}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickVer(deportista.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(deportista.id)}
                  >
                    Eliminar
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default VerDeportistas;
