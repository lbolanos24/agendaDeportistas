import { ChakraProvider, Text } from "@chakra-ui/react";
import Encabezado from "./components/Encabezado";
import { useState } from "react";
import GestionCursos from "./components/Cursos/GestionCursos";
import "./App.css";

function App() {
  const [optionSelected, setOptionSelected] = useState({
    id: 0,
    name: "Inicio",
    page: "Inicio",
  });
  const opcionesMenu = [
    { id: 0, name: "Inicio", page: "Inicio" },
    { id: 1, name: "Gestión de Cursos", page: "GestionCursos" },
    { id: 2, name: "Gestión de Profesores", page: "GestionProfesores" },
    { id: 3, name: "Gestión de Grupos", page: "GestionGrupos" },
    { id: 4, name: "Gestión Deportista", page: "Inscribir" },
    { id: 5, name: "Agendar Clase", page: "Agendar" },
  ];

  const handlerSelected = (element: {
    id: number;
    name: string;
    page: string;
  }) => {
    setOptionSelected(element);
  };

  return (
    <ChakraProvider>
      <div
        style={{
          backgroundColor: "#e0f2f1" /* Color de fondo */,
          minHeight: "100vh", // Asegura que el fondo cubra toda la pantalla
          fontFamily: "Arial, sans-serif", // Estilo de fuente opcional
          padding: "2px", // Espacio opcional para el contenido
        }}
      >
        <Encabezado onClick={handlerSelected} data={opcionesMenu} />
        {optionSelected.id === 1 ? (
          <GestionCursos titulo={optionSelected.name} />
        ) : (
          <Text>{optionSelected.page}</Text>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
