import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import DatePicker from "react-datepicker";

type Props = {
  fechaNacimiento: Date;
  setFechaNacimiento: (fechaNacimiento: Date) => void;
  isRequired: boolean;
  label: string;
};

function DateTimePicker(props: Props) {
  // Definir la interfaz para los props del componente CustomInput
  interface CustomInputProps {
    value?: string;
    onClick?: () => void;
  }

  // Componente de entrada personalizado para Chakra UI
  const CustomInput = React.forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <Box
        as="button"
        height="40px"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </Box>
    )
  );
  return (
    <>
      <FormControl isRequired={props.isRequired}>
        <FormLabel>{props.label}</FormLabel>
        <Box display="flex">
          <DatePicker
            selected={props.fechaNacimiento}
            onChange={(date: Date | null) => {
              if (date !== null) {
                props.setFechaNacimiento(date);
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
    </>
  );
}

export default DateTimePicker;
