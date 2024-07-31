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
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import { Deportista } from "../../models/Deportista";
//import { Acudiente } from "../../models/Acudiente";

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
};

function EditarDeportistas(props: Props) {
  const [nombre, setNombreDeportista] = useState("");
  const [edad, setEdad] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [id, setId] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Eps, setEps] = useState("");
  const [institucionEducativa, setInstitucioneducativa] = useState("");
  const [grado, setGrado] = useState("");
  const [condicionImportante, setCondicionImportante] = useState("");
  const [imagenPropia, setImagenPropia] = useState("");
  const [fotoDeportista, setFotoDeportista] = useState("");
  const [fotoDocumento, setFotoDocumento] = useState("");
  const [informacionMensualidad, setInformacionMensualidad] = useState("");
  const [informacionReposicion, setInformacionReposicion] = useState("");
  const [informacionVacaciones, setInformacionVacaciones] = useState("");
  const [comprobanteInscripcion, setComprobanteInscripcion] = useState("");
  const [isNewElement, setIsNewElement] = useState(false);
  const [opciones, setOpciones] = useState<{ id: string; value: string }[]>([]);

  const handleClickCancelar = (event: boolean) => {
    props.setIsNewElement(event);
  };

  //evento para guardar los datos capturados en pantalla
  const handleClickGuardar = (event: boolean) => {
    // Crear el objeto
    const nuevoDeportista = new Deportista(
      id,
      nombre,
      edad,
      fechaNacimiento,
      tipoId,
      direccion,
      eps,
      institucionEducativa,
      grado,
      condicionImportante,
      imagenPropia,
      fotoDeportista,
      fotoDocumento,
      informacionMensualidad,
      informacionReposicion,
      informacionVacaciones,
      comprobanteInscripcion,
      acudientes
    );

    // Se envian los datos capturados a una base de datos
    console.log(nuevoDeportista);

    props.servicioDeportistas?.agregarDeportista(nuevoDeportista);
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
            <FormLabel>Nombre Deportista</FormLabel>
            <Input
              placeholder="Digite el nombre del Deportista"
              onChange={(e) => setNombreDeportista(e.target.value)}
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
              </Select>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Numero de Identificación</FormLabel>
            <Input
              placeholder="Digite el numero de Identificación"
              onChange={(e) => setId(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Edad</FormLabel>
            <Input
              placeholder="Digite la edad"
              onChange={(e) => setEdad(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Fecha de nacimiento</FormLabel>
            <Input
              placeholder="Digite la fecha de nacimiento"
              onChange={(e) => setFechaNacimiento(e.target.value)}
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
            <FormLabel>Institucion educativa</FormLabel>
            <Input
              placeholder="Digite la institucion educativa a la que pertenece el deportista"
              onChange={(e) => setInstitucioneducativa(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Grado</FormLabel>
            <Input
              placeholder="Digite el grado cursado por el deportista"
              onChange={(e) => setGrado(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Condicion importante</FormLabel>
            <Input
              placeholder="Indique si el deportista presenta alguna condicion importante"
              onChange={(e) => setEps(e.target.value)}
            />
          </FormControl>
        </GridItem>
      </Grid>

      <Grid 
      h="500px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(1, 1fr)"
      gap={1}
      margin={"20px"}
      padding={"15px"}
      >
        <GridItem rowSpan={1} colSpan={1}>
        <FormControl isRequired>
            <FormLabel>Imágen propia</FormLabel>
              XXXX terminos de aceptacion de la imagen del deportista XXXX
            <Input type="checkbox"
              onChange={(e) => setImagenPropia(e.target.value)}
            />
          </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
            <FormLabel>Información de mensualidad</FormLabel>
              XXXX terminos de aceptacion de la informacion de mensualidad del deportista XXXX
            <Input type="checkbox"
              onChange={(e) => setInformacionMensualidad(e.target.value)}
            />
          </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
            <FormLabel>Información de Repsición</FormLabel>
              XXXX terminos de aceptacion de la informacion de reposicion del deportista XXXX
            <Input type="checkbox"
              onChange={(e) => setInformacionReposicion(e.target.value)}
            />
          </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
            <FormLabel>Información de Vacaciones</FormLabel>
              XXXX terminos de aceptacion de la informacion de vacaciones del deportista XXXX
            <Input type="checkbox"
              onChange={(e) => setInformacionVacaciones(e.target.value)}
            />
            </FormControl>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Comprobante de Inscripción</FormLabel>
              XXXX Registro del comprobante de inscripcion deportista XXXX
              <Input type="checkbox"
              onChange={(e) => setComprobanteInscripcion(e.target.value)}
            />
            </FormControl>
          </GridItem>
    </Grid>

      <Grid 
      h="300px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={2}
      margin={"20px"}
      padding={"15px"}
      >  
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
                <FormLabel>Foto del deportista</FormLabel>
                <Input type="image"
                  onChange={(e) => setFotoDeportista(e.target.value)}
              />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
         <FormControl isRequired>
              <FormLabel>Foto del documento</FormLabel>
              <Input type="image"
                onChange={(e) => setFotoDocumento(e.target.value)}
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

export default EditarDeportistas;
