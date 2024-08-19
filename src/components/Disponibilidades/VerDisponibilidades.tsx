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
import { Disponibilidad } from "../../models/Disponibilidad";
import { FaEye, FaTrashAlt, FaPlus } from "react-icons/fa";

type Props = {
  onClick: (id: number, isNew: boolean) => void;
  onDelete: (id: number) => void;
  disponibilidades: Array<Disponibilidad>;
};

function VerDisponibilidades(props: Props) {
  const handleClick = (id: number, isNew: boolean) => {
    props.onClick(id, isNew);
  };

  const handleClickEliminar = (id: number) => {
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
        onClick={() => handleClick(0, true)}
        className="buttonSombreado"
        leftIcon={<FaPlus />}
      >
        Agregar Nueva
      </Button>
      {props.disponibilidades != null && props.disponibilidades.length > 0 ? (
        <TableContainer m={"20px"}>
          <Table size="sm" variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th style={{ textAlign: "center", border: "1px solid black" }}>
                  Dia de la semana
                </Th>
                <Th style={{ textAlign: "center", border: "1px solid black" }}>
                  Hora Inicio
                </Th>
                <Th style={{ textAlign: "center", border: "1px solid black" }}>
                  Hora Fin
                </Th>
                <Th style={{ textAlign: "center", border: "1px solid black" }}>
                  Opciones
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.disponibilidades.map((disponibilidad) => (
                <Tr key={disponibilidad.id}>
                  <Td style={{ border: "1px solid black" }}>
                    {disponibilidad.diaDisponibilidad}
                  </Td>
                  <Td style={{ border: "1px solid black" }}>
                    {disponibilidad.horaInicioDisponibilidad > 12
                      ? disponibilidad.horaInicioDisponibilidad - 12 + "pm."
                      : disponibilidad.horaInicioDisponibilidad + "am."}
                  </Td>
                  <Td style={{ border: "1px solid black" }}>
                    {disponibilidad.horaFinDisponibilidad > 12
                      ? disponibilidad.horaFinDisponibilidad - 12 + "pm."
                      : disponibilidad.horaFinDisponibilidad + "am."}
                  </Td>
                  <Td
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    <Button
                      colorScheme="blue"
                      size="sm"
                      className="buttonSombreado"
                      onClick={() => handleClick(disponibilidad.id, false)}
                      leftIcon={<FaEye />}
                      style={{ marginRight: "8px" }}
                    >
                      Ver
                    </Button>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      className="buttonSombreado"
                      onClick={() => handleClickEliminar(disponibilidad.id)}
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

export default VerDisponibilidades;
