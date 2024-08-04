import { Deportista } from "../models/Deportista";
import { Acudiente } from "../models/Acudiente";

export class ServicioDeportistas {
  private deportistas: Deportista[];
  private static instancia: ServicioDeportistas;

  public static getInstancia(): ServicioDeportistas {
    if (!this.instancia) {
      this.instancia = new ServicioDeportistas();
      this.instancia.obtenerDeportistas();
    }

    return this.instancia;
  }

  constructor() {
    this.deportistas = [];
  }

  //funcion para cargar cursos Dummy
  public cargarDummy(): void {
    this.deportistas.push({
      id: "123456789",
      nombre: "Liliam Bolaños",
      tipoId: "Cédula de Ciudadania",
      edad: 39,
      fechaNacimiento: new Date("2024-01-01T05:00:00.000Z"),
      direccion: "",
      eps: "",
      institucionEducativa: "",
      grado: 1,
      condicionImportante: "N",
      imagenPropia: true,
      fotoDeportista: null,
      fotoDocumento: null,
      fotoDeportistaUrl:
        "blob:http://localhost:5173/35b63731-3364-4fc7-8b36-52b94f7441fb",
      fotoDocumentoUrl: "",
      informacionMensualidad: true,
      informacionReposicion: false,
      informacionVacaciones: true,
      comprobanteInscripcion: true,
      acudientes: [
        {
          id: "1",
          nombre: "Acudiente Test",
          tipoId: "",
          numeroCelular: 3154444444,
          direccion: "",
          correoElectronico: "",
          imagenPropia: true,
          profesionEmpresa: "",
          parentesco: "",
        },
      ],
    });
  }

  //FUncion para obtener los deportistas desde el backend
  public obtenerDeportistas(): void {
    try {
      if (this.deportistas.length === 0) {
        this.cargarDummy();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Función para listar todos los deportistas
  public listarDeportistas(): Deportista[] {
    return this.deportistas;
  }

  // Función para agregar un nuevo deportista
  public agregarDeportista(deportista: Deportista): void {
    try {
      this.deportistas.push(deportista);
    } catch (error) {
      console.log(error);
    }
  }

  // Función para eliminar un deportista existente
  public eliminarDeportistas(id: string): void {
    this.deportistas = this.deportistas.filter((c) => c.id !== id);
  }

  // Función para eliminar un deportista existente
  public obtenerSiguienteId(): number {
    return this.deportistas.length + 1;
  }

  public listarAcudientes(): Array<Acudiente> {
    return this.deportistas.reduce((acc: Acudiente[], curr) => {
      acc = [...acc, ...curr.acudientes];
      return acc;
    }, []);
  }

  public listarAcudientesByDeportista(id: string): Array<Acudiente> {
    return this.deportistas.find((d) => d.id === id)?.acudientes || [];
  }

  public buscarDeportistaPorId(id: string): Deportista | undefined {
    return this.deportistas.find((d) => d.id === id);
  }

  public eliminarAcudiente(id: string, idDeportista: string): Array<Acudiente> {
    return (
      this.deportistas
        .find((d) => d.id === idDeportista)
        ?.acudientes?.filter((c) => c.id !== id) || []
    );
  }

  public agregarAcudiente(acudiente: Acudiente, idDeportista: string) {
    this.deportistas
      .find((d) => d.id === idDeportista)
      ?.acudientes.push(acudiente);
  }
}
