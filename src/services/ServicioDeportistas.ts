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
    const deportista = {
      id: 1,
      nombre: "Liliam Paola Bolaños",
      acudiente1: new Acudiente(1, "Jaime Bolaños"),
      acudiente2: new Acudiente(2, "Deya Rengifo"),
    };

    this.deportistas.push(deportista);
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
  public eliminarDeportistas(id: number): void {
    this.deportistas = this.deportistas.filter((c) => c.id !== id);
  }

  // Función para eliminar un deportista existente
  public obtenerSiguienteId(): number {
    return this.deportistas.length + 1;
  }
}
