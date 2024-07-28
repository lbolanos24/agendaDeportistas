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
import { ServicioCursos } from "../../services/servicioCursos";
import { useEffect, useState } from "react";
import { Curso } from "../../models/Curso";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioCursos: ServicioCursos;
};

function VerCursos(props: Props) {
  const [isEliminated, setIsEliminated] = useState(false);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [curso, setCurso] = useState(null);

  //al cargar el formulario se deben obtener los cursos usando el servicioCursos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await props.servicioCursos.obtenerCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (event: boolean) => {
    props.setIsNewElement(event);
  };

  const handleClickEliminar = async (id: number) => {
    console.log("Eliminar curso con id: " + id);
    await props.servicioCursos.eliminarCurso(id);
    //Actualizar la vista
    // Remove the course from the state
    setCursos(cursos.filter((curso) => curso.idCurso !== id));
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
                Id
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Nombre
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Nivel
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                SubNivel
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Modalidad
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Categoria
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Duracion Clase
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Color
              </Th>
              <Th style={{ textAlign: "center", border: "1px solid black" }}>
                Acción
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cursos.map((curso) => (
              <Tr key={curso.idCurso}>
                <Td style={{ border: "1px solid black" }}>{curso.idCurso}</Td>
                <Td style={{ border: "1px solid black" }}>{curso.nombre}</Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  {curso.nivel}
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  {curso.subNivel}
                </Td>
                <Td style={{ border: "1px solid black" }}>{curso.modalidad}</Td>
                <Td style={{ border: "1px solid black" }}>{curso.categoria}</Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  {curso.duracionClaseHoras} horas {curso.duracionClaseMinutos}{" "}
                  minutos
                </Td>
                <Td
                  style={{ border: "1px solid black", height: "51px" }}
                  className="columnaCentrada"
                >
                  <div
                    style={{
                      backgroundColor: curso.color,
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                </Td>
                <Td style={{ textAlign: "center", border: "1px solid black" }}>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="buttonSombreado"
                    onClick={() => handleClickEliminar(curso.idCurso)}
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
