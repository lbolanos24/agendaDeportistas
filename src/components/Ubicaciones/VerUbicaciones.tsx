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
import { useEffect, useState } from "react";
import { ServicioUbicaciones } from "../../services/ServicioUbicaciones";
import { Ubicacion } from "../../models/Ubicacion";

type Props = {
  servicioUbicaciones: ServicioUbicaciones;
  onNewUbicacionClick: (element: boolean) => void;
  onSelect: (ubicacion: Ubicacion) => void;
  isEditing: boolean;
};

function VerUbicaciones(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);
  const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([]);

  //al cargar el formulario se deben obtener los cursos usando el servicioCursos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.servicioUbicaciones.obtenerUbicaciones();
        setUbicaciones(data);
      } catch (error) {
        console.error("Error fetching ubicaciones:", error);
      }
    };
    console.log("CARGANDO DATOS...");
    fetchData();
  }, [props.isEditing]);

  const handleClick = () => {
    props.onNewUbicacionClick(true);
  };

  const handleClickVer = (id: number) => {
    const ubicacionSelected = ubicaciones.find(
      (ubicacion) => ubicacion.id === id
    );
    // Se selecciona el deportista para ver sus detalles o editarlos
    if (ubicacionSelected != null) {
      props.onSelect(ubicacionSelected);
    }
  };

  const handleClickEliminar = (id: number) => {
    props.servicioUbicaciones.eliminarUbicacion(id);

    //Actualizar la vista
    setUbicaciones(ubicaciones.filter((d) => d.id !== id));

    setIsEliminated(!isEliminated);
  };

  // Formatear la fecha en un formato legible
  const formatDate = (date: string) => {
    const fecha = new Date(date);
    if (isNaN(fecha.getTime())) {
      return "Fecha inválida";
    }
    //console.log("FECHA: " + fecha);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return fecha.toLocaleDateString(undefined, options);
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
            {ubicaciones.map((ubicacion) => (
              <Tr key={ubicacion.id}>
                <Td style={{ border: "1px solid black" }}>
                  {ubicacion.nombre}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {formatDate(ubicacion.fechaInicioContrato.toString())}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {formatDate(ubicacion.fechaFinContrato.toString())}
                </Td>
                <Td style={{ border: "1px solid black" }}>
                  {ubicacion.disponibilidades?.map((disponibilidad) => (
                    <div key={disponibilidad.id}>
                      {disponibilidad.diaDisponibilidad}
                      {": "}
                      {disponibilidad.horaInicioDisponibilidad > 12
                        ? disponibilidad.horaInicioDisponibilidad - 12 + "pm."
                        : disponibilidad.horaInicioDisponibilidad + "am."}
                      {" - "}
                      {disponibilidad.horaFinDisponibilidad > 12
                        ? disponibilidad.horaFinDisponibilidad - 12 + "pm."
                        : disponibilidad.horaFinDisponibilidad + "am."}
                      <br />
                      <br />
                    </div>
                  ))}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickVer(ubicacion.id)}
                  >
                    Ver
                  </Button>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(ubicacion.id)}
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
