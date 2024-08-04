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
  Checkbox,
  Image,
  extendTheme,
  Textarea,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import { Deportista } from "../../models/Deportista";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import React from "react";
import VerAcudientes from "../Acudiente/VerAcudiente";
import EditarAcudientes from "../Acudiente/EditarAcudientes";
import { Acudiente } from "../../models/Acudiente";
import DateTimePicker from "../Controles/DateTimePicker";
import { Constantes } from "../../models/Constantes";
//import { Acudiente } from "../../models/Acudiente";

// Registrar el idioma español en react-datepicker
registerLocale("es", es);

type Props = {
  setIsEditing: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
  deportistaSelected: Deportista;
  isNewDeportista: boolean;
};

const acudienteVacio = {
  id: "",
  tipoId: "",
  nombre: "",
  direccion: "",
  numeroCelular: 0,
  correoElectronico: "",
  imagenPropia: false,
  profesionEmpresa: "",
  parentesco: "",
};

function EditarDeportistas(props: Props) {
  const [nombre, setNombreDeportista] = useState("");
  const [edad, setEdad] = useState(0);
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [tipoId, setTipoId] = useState("");
  const [id, setId] = useState("");
  const [direccion, setDireccion] = useState("");
  const [eps, setEps] = useState("");
  const [institucionEducativa, setInstitucioneducativa] = useState("");
  const [grado, setGrado] = useState(0);
  const [condicionImportante, setCondicionImportante] = useState("");
  const [imagenPropia, setImagenPropia] = useState<boolean>(false);
  const [informacionMensualidad, setInformacionMensualidad] =
    useState<boolean>(false);
  const [informacionReposicion, setInformacionReposicion] =
    useState<boolean>(false);
  const [informacionVacaciones, setInformacionVacaciones] =
    useState<boolean>(false);
  const [comprobanteInscripcion, setComprobanteInscripcion] =
    useState<boolean>(false);
  const [acudientes, setAcudientes] = useState<Acudiente[]>([]);
  const [fotoDeportista, setFotoDeportista] = useState<ImageBitmap | null>(
    null
  );
  const [fotoDocumento, setFotoDocumento] = useState<ImageBitmap | null>(null);
  const [fotoDeportistaUrl, setFotoDeportistaUrl] = useState<string>("");
  const [fotoDocumentoUrl, setFotoDocumentoUrl] = useState<string>("");
  const [opciones, setOpciones] = useState<{ id: string; value: string }[]>([]);
  const [isAcudientesOpen, setIsAcudientesOpen] = useState(false);
  const [acudienteSelected, setAcudienteSelected] =
    useState<Acudiente>(acudienteVacio);
  const [isNewAcudiente, setIsNewAcudiente] = useState(false);

  useEffect(() => {
    if (props.deportistaSelected) {
      setNombreDeportista(props.deportistaSelected.nombre);
      setEdad(props.deportistaSelected.edad);
      setFechaNacimiento(props.deportistaSelected.fechaNacimiento);
      setTipoId(props.deportistaSelected.tipoId);
      setId(props.deportistaSelected.id);
      setDireccion(props.deportistaSelected.direccion);
      setEps(props.deportistaSelected.eps);
      setInstitucioneducativa(props.deportistaSelected.institucionEducativa);
      setGrado(props.deportistaSelected.grado);
      setCondicionImportante(props.deportistaSelected.condicionImportante);
      setImagenPropia(props.deportistaSelected.imagenPropia);
      setFotoDeportista(props.deportistaSelected.fotoDeportista);
      setFotoDocumento(props.deportistaSelected.fotoDocumento);
      setFotoDeportistaUrl(props.deportistaSelected.fotoDeportistaUrl);
      setFotoDocumentoUrl(props.deportistaSelected.fotoDocumentoUrl);
      setInformacionMensualidad(
        props.deportistaSelected.informacionMensualidad
      );
      setInformacionReposicion(props.deportistaSelected.informacionReposicion);
      setInformacionVacaciones(props.deportistaSelected.informacionVacaciones);
      setComprobanteInscripcion(
        props.deportistaSelected.comprobanteInscripcion
      );
      setAcudientes(props.deportistaSelected.acudientes);
    }
  }, [props.deportistaSelected]);

  const handleClickCancelar = (event: boolean) => {
    props.setIsEditing(event);
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
      fotoDeportistaUrl,
      fotoDocumentoUrl,
      informacionMensualidad,
      informacionReposicion,
      informacionVacaciones,
      comprobanteInscripcion,
      acudientes
    );

    // Se envian los datos capturados a una base de datos
    console.log(nuevoDeportista);

    props.servicioDeportistas?.agregarDeportista(nuevoDeportista);
    props.setIsEditing(false);
  };

  const handleFileChange = async (
    nombre: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageBitmap = await createImageBitmap(file);
        if (nombre == "Documento") {
          setFotoDocumento(imageBitmap);

          // Crear una URL para la vista previa
          const fotoDocumentoUrl = URL.createObjectURL(file);
          setFotoDocumentoUrl(fotoDocumentoUrl);
        } else {
          setFotoDeportista(imageBitmap ?? null);

          // Crear una URL para la vista previa
          const fotoDeportistaUrl = URL.createObjectURL(file);
          setFotoDeportistaUrl(fotoDeportistaUrl);
        }
      } catch (error) {
        console.error("Error creating ImageBitmap:", error);
      }
    }
  };

  function handleClickAcudientes(id: string, isNew: boolean): void {
    if (!isNew) {
      if (acudientes.length > 0) {
        const acudiente = acudientes.find((acudiente) => acudiente.id === id);
        if (acudiente) {
          setAcudienteSelected(acudiente);
        }
      } else {
        console.error("No acudientes found.");
      }
    } else {
      setAcudienteSelected(acudienteVacio);
    }

    setIsAcudientesOpen(true);
    setIsNewAcudiente(isNew);
  }

  const handleCloseModal = () => {
    setIsAcudientesOpen(false);
  };

  function handleSaveAcudiente(acudiente: Acudiente): void {
    if (acudiente !== null) {
      if (isNewAcudiente) {
        acudientes.push(acudiente);
      } else {
        const index = acudientes.findIndex((ac) => ac.id === acudiente.id);
        if (index > -1) {
          acudientes[index] = acudiente;
          if (!props.isNewDeportista) {
            // TODO guardar el acudiente en la BD
          }
        } else {
          console.error("Acudiente not found.");
        }
      }
    }

    setIsAcudientesOpen(false);
  }

  function handlerDeleteAcudiente(id: string): void {
    setAcudientes(acudientes.filter((ac) => ac.id !== id));
  }

  return (
    <>
      <EditarAcudientes
        onSave={handleSaveAcudiente}
        acudienteSeleccionado={acudienteSelected}
        isEditarAcudienteOpen={isAcudientesOpen}
        onClose={handleCloseModal}
        idDeportista={id}
        isNewElement={isNewAcudiente}
      ></EditarAcudientes>
      <Grid
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
              value={nombre}
              placeholder="Digite el nombre del Deportista"
              onChange={(e) => setNombreDeportista(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Tipo de identificación</FormLabel>
            <Select
              value={tipoId}
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
              value={id}
              placeholder="Digite el numero de Identificación"
              onChange={(e) => setId(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Edad</FormLabel>
            <NumberInput
              value={edad}
              defaultValue={0}
              onChange={(value) => setEdad(Number(value))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <DateTimePicker
            fechaNacimiento={fechaNacimiento}
            setFechaNacimiento={setFechaNacimiento}
            isRequired={true}
            label={"Fecha de Nacimiento"}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              value={direccion}
              placeholder="Digite la dirección"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>EPS</FormLabel>
            <Input
              value={eps}
              placeholder="Digite el nombre de la EPS"
              onChange={(e) => setEps(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Institucion educativa</FormLabel>
            <Input
              value={institucionEducativa}
              placeholder="Digite la institucion educativa a la que pertenece el deportista"
              onChange={(e) => setInstitucioneducativa(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Grado</FormLabel>
            <NumberInput
              value={grado}
              defaultValue={0}
              onChange={(value) => setGrado(Number(value))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={3}>
          <FormControl isRequired>
            <FormLabel>Acudientes</FormLabel>
            <VerAcudientes
              onDelete={handlerDeleteAcudiente}
              onClick={handleClickAcudientes}
              servicioDeportistas={props.servicioDeportistas}
              idDeportista={id}
              acudientes={acudientes}
              isNewDeportista={props.isNewDeportista}
            ></VerAcudientes>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <FormControl isRequired>
            <FormLabel>{Constantes.CONDICION_IMPORTANTE_LABEL}</FormLabel>
            <Textarea
              value={condicionImportante}
              placeholder="Indique si el deportista presenta alguna condicion importante"
              onChange={(e) => setCondicionImportante(e.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "black",
                },
                "&:checked .chakra-checkbox__control": {
                  borderColor: "black",
                },
              }}
              isChecked={imagenPropia}
              onChange={(e) => setImagenPropia(e.target.checked)}
            >
              <FormLabel>{Constantes.IMAGEN_PROPIA_LABEL}</FormLabel>
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "black",
                },
                "&:checked .chakra-checkbox__control": {
                  borderColor: "black",
                },
              }}
              isChecked={informacionMensualidad}
              onChange={(e) => setInformacionMensualidad(e.target.checked)}
            >
              <FormLabel>{Constantes.INFORMACION_MENSUALIDAD_LABEL}</FormLabel>
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "black",
                },
                "&:checked .chakra-checkbox__control": {
                  borderColor: "black",
                },
              }}
              isChecked={informacionReposicion}
              onChange={(e) => setInformacionReposicion(e.target.checked)}
            >
              <FormLabel>{Constantes.INFORMACION_REPOSICION_LABEL}</FormLabel>
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "black",
                },
                "&:checked .chakra-checkbox__control": {
                  borderColor: "black",
                },
              }}
              isChecked={informacionVacaciones}
              onChange={(e) => setInformacionVacaciones(e.target.checked)}
            >
              <FormLabel>{Constantes.INFORMACION_VACACIONES_LABEL}</FormLabel>
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <Checkbox
              sx={{
                "& .chakra-checkbox__control": {
                  borderColor: "black",
                },
                "&:checked .chakra-checkbox__control": {
                  borderColor: "black",
                },
              }}
              isChecked={comprobanteInscripcion}
              onChange={(e) => setComprobanteInscripcion(e.target.checked)}
            >
              <FormLabel>{Constantes.COMPROBANTE_INSCRIPCION_LABEL}</FormLabel>
            </Checkbox>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Foto del deportista</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleFileChange("Deportista", e);
              }}
            />
            {fotoDeportistaUrl && (
              <Box mt={4}>
                <Image
                  src={fotoDeportistaUrl}
                  alt="Preview"
                  maxW="200px"
                  maxH="200px"
                  borderRadius="md"
                />
              </Box>
            )}
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Foto del documento</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleFileChange("Documento", e);
              }}
            />
            {fotoDocumentoUrl && (
              <Box mt={4}>
                <Image
                  src={fotoDocumentoUrl}
                  alt="Preview"
                  maxW="400px"
                  maxH="200px"
                  borderRadius="md"
                />
              </Box>
            )}
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Button
            className="buttonSombreado"
            mt={4}
            colorScheme="blue"
            type="submit"
            margin={"30px"}
            onClick={() => handleClickCancelar(false)}
          >
            Cancelar
          </Button>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Button
            className="buttonSombreado"
            mt={4}
            type="submit"
            margin={"30px"}
            onClick={() => handleClickGuardar(false)}
          >
            Guardar
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}

export default EditarDeportistas;
