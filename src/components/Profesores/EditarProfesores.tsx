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
import { ServicioProfesores } from "../../services/ServicioProfesores";
import { Profesor } from "../../models/Profesor";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioProfesores: ServicioProfesores;
};

function EditarProfesores(props: Props) {
  const [nombreProfesor, setNombreProfesor] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [id, setNumeroId] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [eps, setEps] = useState("");
  const [arl, setArl] = useState("");
  const [correoElectronico, setCorreoElectronico] = useState("");
  const [nombreContacto, setNombreContacto] = useState("");
  const [numeroContacto, setNumeroContacto] = useState("");
  //TODO: disponibilidad
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
      nombreProfesor,
      tipoId,
      numeroCelular,
      direccion,
      eps,
      arl,
      correoElectronico,
      nombreContacto,
      numeroContacto,
      disponibilidad
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
            <FormLabel>Nombre Profesor</FormLabel>
            <Input
              placeholder="Digite el nombre del Profesor"
              onChange={(e) => setNombreProfesor(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Tipo de identificación</FormLabel>
            <Select
              placeholder="Seleccione el numero de identificación"
              onChange={(e) => setTipoId(e.target.value)}
            >
              <option value="Cedula">Cédula</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="TI">Tarjeta de Identidad</option>
              </Select>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Numero de Identificación</FormLabel>
            <Input
              placeholder="Digite el numero de Identificación"
              onChange={(e) => setNumeroId(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Numero de Celular</FormLabel>
            <Input
              placeholder="Digite el numero de Celular"
              onChange={(e) => setNumeroCelular(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              placeholder="Digite la dirección"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>EPS</FormLabel>
            <Input
              placeholder="Digite el nombre de la EPS"
              onChange={(e) => setEps(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>ARL</FormLabel>
            <Input
              placeholder="Digite el nombre de la ARL"
              onChange={(e) => setArl(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              placeholder="Digite el correo electrónico"
              onChange={(e) => setCorreoElectronico(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel>Nombre de Contacto</FormLabel>
            <Input
              placeholder="Digite el Nombre del contacto"
              onChange={(e) => setNombreContacto(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl>
            <FormLabel>Número de Contacto</FormLabel>
            <Input
              placeholder="Digite el número del contacto"
              onChange={(e) => setNombreContacto(e.target.value)}
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
