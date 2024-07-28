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
import { ServicioProfesores } from "../../services/ServicioProfesores";
import { Profesor } from "../../models/Profesor";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioProfesores: ServicioProfesores;
};

function VerCursos(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);

  const profesores: Profesor[] =
    props.servicioProfesores?.listarProfesores() || [];

  const handleClick = (event: boolean) => {
    props.setIsNewElement(event);
  };

  const handleClickVer = (event: boolean) => {
    //TODO
    props.setIsNewElement(event);
  };
  const handleClickEliminar = (id: number) => {
    props.servicioProfesores.eliminarProfesores(id);
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
                Numero de Celular
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
            {profesores.map((profesor) => (
              <Tr key={profesor.id}>
                <Td style={{ border: "1px solid black" }}>
                  {profesor.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {profesor.numeroCelular}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {profesor.getDisponibilidades()}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickVer(profesor.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(profesor.id)}
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

export default VerCursos;
