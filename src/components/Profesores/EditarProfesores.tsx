import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Grid,
  GridItem,
  Select,
  NumberInput,
  NumberInputField,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ServicioProfesor } from "../../services/ServicioProfesores";
import { Profesor } from "../../models/Profesor";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioProfesores: ServicioProfesor;
};

function EditarProfesores(props: Props) {
  const [nombreProfesor, setNombreProfesor] = useState("");
  const [isNewElement, setIsNewElement] = useState(false);
  const [opciones, setOpciones] = useState<{ id: string; value: string }[]>([]);

  const handleClickCancelar = (event: boolean) => {
    props.setIsNewElement(event);
  };

  //evento para guardar los datos capturados en pantalla
  const handleClickGuardar = (event: boolean) => {
    // Crear el objeto
    const nuevoProfesor = new Profesor(
      props.servicioProfesores.obtenerSiguienteId() || 1,
      nombreProfesor
    );

    // Se envian los datos capturados a una base de datos
    console.log(nuevoProfesor);

    props.servicioProfesores?.agregarCurso(nuevoProfesor);
    props.setIsNewElement(event);
  };

  return (
    <>
      <Grid
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        margin={"20px"}
        padding={"15px"}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Nombre Curso</FormLabel>
            <Input
              placeholder="Digite el nombre del Profesor"
              onChange={(e) => setNombreProfesor(e.target.value)}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)">
        <Button
          className="buttonSombreado"
          mt={4}
          colorScheme="blue"
          isLoading={props.isSubmitting}
          type="submit"
          margin={"30px"}
          onClick={() => handleClickCancelar(false)}
        >
          Cancelar
        </Button>
        <Button
          className="buttonSombreado"
          mt={4}
          isLoading={props.isSubmitting}
          type="submit"
          margin={"30px"}
          onClick={() => handleClickGuardar(false)}
        >
          Guardar
        </Button>
      </Grid>
    </>
  );
}

export default EditarProfesores;
