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
  onClick: (id: string, isNew: boolean) => void;
  onDelete: (id: string) => void;
  acudientes: Array<Acudiente>;
  idDeportista: string;
  isNewDeportista: boolean;
  servicioDeportistas: ServicioDeportistas;
};

function VerAcudientes(props: Props) {
  const handleClick = (id: string, isNew: boolean) => {
    props.onClick(id, isNew);
  };

  const handleClickEliminar = (id: string) => {
    if (!props.isNewDeportista) {
      // Eliminar de la base de datos
      props.servicioDeportistas.eliminarAcudiente(id, props.idDeportista);
    }

    //Actualizar la vista
    props.onDelete(id);
  };

  return (
    <>
      <Button
        mt={4}
        colorScheme="blue"
        type="submit"
        margin={"20px"}
        onClick={() => handleClick("", true)}
        className="buttonSombreado"
      >
        +
      </Button>
      {props.acudientes.length > 0 ? (
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
              {props.acudientes.map((acudiente) => (
                <Tr key={acudiente.id}>
                  <Td style={{ border: "1px solid black" }}>
                    {acudiente.nombre}
                  </Td>
                  <Td style={{ border: "1px solid black" }}>
                    {acudiente.numeroCelular}
                  </Td>
                  <Td style={{ border: "1px solid black" }}>
                    {acudiente.correoElectronico}
                  </Td>
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    <Button
                      colorScheme="blue"
                      size="sm"
                      className="buttonSombreado"
                      onClick={() => handleClick(acudiente.id, false)}
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
      ) : (
        <></>
      )}
    </>
  );
}

export default VerAcudientes;
