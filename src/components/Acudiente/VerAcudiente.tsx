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
import { Acudiente } from "../../models/Acudiente";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
  idDeportista: string;
};

function VerAcudientes(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);

  const acudientes: Acudiente[] =
    props.servicioDeportistas?.listarAcudientesByDeportista(
      props.idDeportista
    ) || [];

  const handleClick = (event: boolean) => {
    props.setIsNewElement(event);
  };
  const handleClickVer = (event: boolean) => {
    //TODO
    props.setIsNewElement(event);
  };

  const handleClickEliminar = (id: string) => {
    props.servicioDeportistas.eliminarAcudiente(id, props.idDeportista);
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
                Celular
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Correo
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Opciones
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {acudientes.map((acudiente) => (
              <Tr key={acudiente.id}>
                <Td style={{ border: "1px solid black" }}>
                  {acudiente.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {acudiente.numeroCelular}
                </Td>
                <Td style={{ border: "1px solid black" }}>{acudiente.correoElectronico}</Td>
                <Td style={{ border: "1px solid black" }}>
                  {acudiente.tipoId}:{acudiente.id}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickVer(true) }
                  >
                    Ver
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(acudiente.id)}
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

export default VerAcudientes;
