import {
  TableContainer,
  Table,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ServicioUbicaciones } from "../../services/ServicioUbicaciones";
import { Ubicacion } from "../../models/Ubicacion";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioUbicaciones: ServicioUbicaciones;
};

function VerUbicaciones(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);

  const ubicaciones: Ubicacion[] =
    props.servicioUbicaciones?.listarUbicaciones() || [];

  const handleClick = (event: boolean) => {
    props.setIsNewElement(event);
  };

  const handleClickVer = (event: boolean) => {
    //TODO
    props.setIsNewElement(event);
  };

  const handleClickEliminar = (id: number) => {
    props.servicioUbicaciones.eliminarUbicacion(id);
    //Actualizar la vista
    setIsEliminated(!isEliminated);
  };

  return (
    <>
      <Button
        mt={4}
        colorScheme="blue"
        isLoading={props.isSubmitting}
        type="submit"
        margin={"20px"}
        onClick={() => handleClick(true)}
        className="buttonSombreado"
      >
        Agregar Nuevo
      </Button>
      <TableContainer m={"20px"}>
        <Table size="sm" variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Nombre
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Inicio contrato
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Fin contrato
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Disponibilidad
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Opciones
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {ubicaciones.map((Ubicacion) => (
              <Tr key={Ubicacion.id}>
                <Td style={{ border: "1px solid black" }}>
                  {Ubicacion.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {Ubicacion.fechaInicioContrato.toLocaleDateString()}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {Ubicacion.fechaFinContrato.toLocaleDateString()}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  { Ubicacion.getDisponibilidades()}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickVer(Ubicacion.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(Ubicacion.id)}
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

export default VerUbicaciones;
