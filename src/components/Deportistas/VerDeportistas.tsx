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
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import { Deportista } from "../../models/Deportista";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
};

function VerDeportistas(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);

  const deportistas: Deportista[] =
    props.servicioDeportistas?.listarDeportistas() || [];

  const handleClick = (event: boolean) => {
    props.setIsNewElement(event);
  };

  const handleClickEliminar = (id: number) => {
    props.servicioDeportistas.eliminarDeportistas(id);
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
                Edad
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Acudientes
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {deportistas.map((deportista) => (
              <Tr key={deportista.id}>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.edad}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {deportista.getAcudientes()}
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
