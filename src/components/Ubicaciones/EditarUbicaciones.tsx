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
import { ServicioUbicaciones } from "../../services/ServicioUbicaciones";
import { Ubicacion } from "../../models/Ubicacion";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioUbicaciones: ServicioUbicaciones;
};

function EditarUbicaciones(props: Props) {
  const [nombre, setNombreUbicacion] = useState("");
  const [direccion, setDireccionUbicacion] = useState("");
  const [telefono, setTelefonoUbicacion] = useState("");
  const [nombreContacto, setNombreContactoUbicacion] = useState("");
  const [fechaInicioContrato, setFechaInicioContratoUbicacion] = useState("");
  const [fechaFinContrato, setFechaFinContratoUbicacion] = useState("");
  const [isNewElement, setIsNewElement] = useState(false);
  const [opciones, setOpciones] = useState<{ id: string; value: string }[]>([]);

  const handleClickCancelar = (event: boolean) => {
    props.setIsNewElement(event);
  };

  //evento para guardar los datos capturados en pantalla
  const handleClickGuardar = (event: boolean) => {
    // Crear el objeto
    const nuevaUbicacion = new Ubicacion(
      props.servicioUbicaciones.obtenerSiguienteId() || 1,
      nombre,
      direccion,
      telefono,
      nombreContacto,
      fechaInicioContrato,
      fechaFinContrato
      //Falta disponibilidad
    );

    // Se envian los datos capturados a una base de datos
    console.log(nuevaUbicacion);

    props.servicioUbicaciones?.agregarUbicacion(nuevaUbicacion);
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
            <FormLabel>Nombre Ubicación</FormLabel>
            <Input
              placeholder="Digite el nombre de la Ubicación"
              onChange={(e) => setNombreUbicacion(e.target.value)}
            />
            </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              placeholder="Digite la dirección de la Ubicación"
              onChange={(e) => setDireccionUbicacion(e.target.value)}
            />
            </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Télefono</FormLabel>
            <Input
              placeholder="Digite el télefono de la Ubicación"
              onChange={(e) => setTelefonoUbicacion(e.target.value)}
            />
            </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Contacto</FormLabel>
            <Input
              placeholder="Digite del contacto para ésta Ubicación"
              onChange={(e) => setNombreContactoUbicacion(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Fecha inicio de contrato</FormLabel>
            <Input
              placeholder="Ingrese la fecha de inicio del contrato para la Ubicación"
              onChange={(e) => setFechaInicioContratoUbicacion(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Fecha finalización de contrato</FormLabel>
            <Input
              placeholder="Ingrese la fecha de finalización del contrato para la Ubicación"
              onChange={(e) => setFechaFinContratoUbicacion(e.target.value)}
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

export default EditarUbicaciones;
