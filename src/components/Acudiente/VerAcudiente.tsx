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
import { Acudiente } from "../../models/Acudiente";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa";

type Props = {
  onClick: (id: string, isNew: boolean) => void;
  onDelete: (id: string) => void;
  acudientes: Array<Acudiente>;
};

function VerAcudientes(props: Props) {
  const handleClick = (id: string, isNew: boolean) => {
    if (props.acudientes.length < 2) {
      props.onClick(id, isNew);
    } else {
      alert("Solo se puede agregar un máximo de 2 acudientes.");
    }
  };

  const handleClickEliminar = (id: string) => {
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
        leftIcon={<FaPlus />}
      >
        Agregar Nuevo
      </Button>
      {props.acudientes != null && props.acudientes.length > 0 ? (
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
                      leftIcon={<FaEye />}
                      style={{ marginRight: "8px" }}
                    >
                      Ver
                    </Button>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      className="buttonSombreado"
                      onClick={() => handleClickEliminar(acudiente.id)}
                      leftIcon={<FaTrashAlt />}
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
