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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ServicioDeportistas } from "../../services/ServicioDeportistas";
import { Acudiente } from "../../models/Acudiente";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import React from "react";
//import { Acudiente } from "../../models/Acudiente";

// Registrar el idioma español en react-datepicker
registerLocale("es", es);

type Props = {
  isSubmitting: boolean;
  setIsNewElement: (element: boolean) => void;
  servicioDeportistas: ServicioDeportistas;
  idDeportista: string;
};

function EditarAcudientes(props: Props) {  
  const [nombre, setNombreAcudiente] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [id, setId] = useState("");
  const [numeroCelular, setNumeroCelular] = useState(0);
  const [direccion, setDireccion] = useState("");  
  const [correoElectronico, setCorreoElectronico] = useState("");  
  const [imagenPropia, setImagenPropia] = useState<boolean>(false);
  const [profesionEmpresa, setProfesionEmpresa] = useState("");  
  const [isNewElement, setIsNewElement] = useState(false);
  const [opciones, setOpciones] = useState<{ id: string; value: string }[]>([]);

  const handleClickCancelar = (event: boolean) => {
    props.setIsNewElement(event);
  };

  //evento para guardar los datos capturados en pantalla
  const handleClickGuardar = (event: boolean) => {
    // Crear el objeto
    const nuevoAcudiente = new Acudiente(
      id,
      nombre,
      tipoId,
      numeroCelular,
      direccion,
      correoElectronico,
      imagenPropia,
      profesionEmpresa
    );

    // Se envian los datos capturados a una base de datos
    console.log(nuevoAcudiente);

    props.servicioDeportistas?.agregarAcudiente(nuevoAcudiente, props.idDeportista);
    props.setIsNewElement(event);
  };

  return (
    <>
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
              placeholder="Digite el nombre del Acudiente"
              onChange={(e) => setNombreAcudiente(e.target.value)}
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
            <FormLabel>Número Célular</FormLabel>
            <NumberInput
              defaultValue={0}
              onChange={(value) => setNumeroCelular(Number(value))}            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Fecha de nacimiento</FormLabel>
            <Box display="flex">
              <DatePicker
                selected={fechaNacimiento}
                onChange={(date: Date | null) => {
                  if (date !== null) {
                    setFechaNacimiento(date);
                  }
                }}
                locale="es"
                dateFormat="dd/MM/yyyy"
                customInput={<CustomInput />}
                popperPlacement="right-start" // Posiciona el selector de fechas a la derecha del input
                showMonthDropdown // Mostrar dropdown para seleccionar el mes
                showYearDropdown // Mostrar dropdown para seleccionar el año
                dropdownMode="select" // Usar select en vez de scroll para el dropdown
              />
            </Box>
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
            <NumberInput
              defaultValue={0}
              onChange={(value) => setGrado(Number(value))}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <FormControl isRequired>
            <FormLabel>
              ¿CONSIDERA USTED QUE SU HIJO/A PRESENTA ALGUNA CONDICIÓN QUE SEA
              IMPORTANTE COMUNICAR AL PROFESOR PARA EL ADECUADO TRATAMIENTO Y
              EFECTIVO DESARROLLO DE LAS ACTIVIDADES DURANTE LAS
              CLASES?¿CUAL/CUALES?
            </FormLabel>
            <Input
              placeholder="Indique si el deportista presenta alguna condicion importante"
              onChange={(e) => setEps(e.target.value)}
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
              checked={imagenPropia}
              onChange={(e) => setImagenPropia(e.target.checked)}
            >
              Durante las clases, el Club estará recopilando memorias de las
              actividades por medio de imágenes y/o videos, esta usted de
              acuerdo con que SU IMAGEN sea compartida en medios de comunicación
              y redes sociales?
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
              checked={informacionMensualidad}
              onChange={(e) => setInformacionMensualidad(e.target.checked)}
            >
              El pago de las mensualidades corresponden al trabajo de 4 semanas
              por mes y de ahí se despliega la cantidad de clases que adquiera
              la familia por semana, si por algún motivo nos vemos en la
              necesidad de cancelar alguna de las clases (Festivo, eventos
              deportivos, incapacidad del profesor sin posible reemplazo) se
              tendrá en cuenta le número de clases dictadas al grupo para hacer
              la reposición de la misma. En cuyo caso, será el profesor titular
              del grupo quien coordinará con las familias la reposición de la
              clase procurando que la mayoría de los integrantes del grupo pueda
              asistir en un mismo horario, de no ser posible le pedimos por
              favor nos envíe un correo con el asunto SOLICITUD DE REPOSICIÓN y
              el número de documento del niño o la niña, así podremos desde
              nuestra base de datos indicarle cuales son las opciones para dicha
              reposición. La respuesta a este punto es ENTENDIDO.
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
              checked={informacionReposicion}
              onChange={(e) => setInformacionReposicion(e.target.checked)}
            >
              Entendemos que en algunos casos se pueden presentar inasistencias,
              es importante para nosotros que usted como adulto tenga claro que
              para realizar una reposición de clase necesitamos que nos comparta
              un comprobante medico para reponer todas las clases que sean
              necesarias debido a dicha incapacidad, y en caso de no tenerlo
              solo podremos reponer 1 clase por mes con previa reserva. Para
              esto deberá enviarnos un correo con el asunto SOLICITUD DE
              REPOSICIÓN y el número de documento del niño o la niña, así
              podremos desde nuestra base de datos indicarle cuales son las
              opciones para dicha reposición. La respuesta a este punto es
              ENTENDIDO
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
              checked={informacionVacaciones}
              onChange={(e) => setInformacionVacaciones(e.target.checked)}
            >
              Con respecto a las fechas de vacaciones (inicio de año, semana
              santa, vacaciones de mitad de año, semana de octubre y final de
              año) consideramos importante que las familias sepan que no serán
              contempladas en los cobros de mensualidades, y por tanto no se
              dictarán para respetar los planes familiares. Para las familias
              que prefieren conservar las actividades se realizarán propuesta de
              intensivos para estas fechas y de acuerdo a la cobertura se
              extenderán la mayor cantidad de tiempo posible y para organizar
              estas actividades será el profesor titular del grupo quien
              coordinará con las familias este trabajo, si por algún motivo el
              profesor no dictará estas actividades será él quien direccione a
              las familias interesadas con el área administrativa para ayudarlas
              con su necesidad. La respuesta a este punto es ENTENDIDO
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
              checked={comprobanteInscripcion}
              onChange={(e) => setComprobanteInscripcion(e.target.checked)}
            >
              Para finalizar el proceso de inscripción y entendiendo que está de
              acuerdo con lo descrito en este formulario. Le pedimos por favor
              cancelar el valor de la matrícula por $100.000COP a la cuenta de
              ahorros 00682228130 de Bancolombia y nos comparta el comprobante.
              La matrícula corresponde al seguro contra accidentes deportivos
              con cobertura desde el 1 de enero hasta el 31 de diciembre del
              presente año y esta debe renovarse cada año.
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
            isLoading={props.isSubmitting}
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
            isLoading={props.isSubmitting}
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

export default EditarAcudientes;
