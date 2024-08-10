import axios from "axios";
import { Disponibilidad } from "../models/Disponibilidad";
import { Profesor } from "../models/Profesor";

export class ServicioProfesores {
  private profesores: Profesor[];
  private static instancia: ServicioProfesores;
  private ruta: String;

  public static getInstancia(): ServicioProfesores {
    if (!this.instancia) {
      this.instancia = new ServicioProfesores();
    }

    return this.instancia;
  }

  constructor() {
    this.profesores = [];
    this.ruta = "http://localhost:8080/api/profesores/";
  }

  //funcion para cargar cursos Dummy
  public cargarDummy(): void {
    this.profesores.push(
      new Profesor(
        "1232313",
        "Jorge Castrillon",
        "",
        3157895487,
        "",
        "",
        "",
        "",
        "",
        0,
        [
          new Disponibilidad(1, "Lunes", 8, 12),
          new Disponibilidad(2, "Martes", 8, 12),
        ]
      )
    );
  }

  //FUncion para obtener los cursos desde el backend
  public async obtenerProfesores(): Promise<Profesor[]> {
    try {
      if (this.profesores.length === 0) {
        this.cargarDummy();
      }

      // Realizar llamado a servicio rest
      /*const response = await axios.get(this.ruta + "listar");

      this.profesores = response.data;*/

      return this.profesores;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Profesores");
    } finally {
      console.log("finalizado obtener Profesores");
    }
  }

  // Función para listar todos los cursos
  public listarProfesores(): Profesor[] {
    return this.profesores;
  }

  // Función para agregar un nuevo curso
  public async crearProfesor(profesor: Profesor): Promise<Profesor> {
    try {
      const response = await axios.post<Profesor>(
        this.ruta + "crear",
        profesor
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create Profesor");
    }
  }

  public async actualizarProfesor(profesor: Profesor): Promise<Profesor> {
    try {
      const response = await axios.post<Profesor>(
        this.ruta + "actualizar",
        profesor
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create Profesor");
    }
  }

  // Función para eliminar una Profesor existente
  public async eliminarProfesor(id: string): Promise<void> {
    try {
      //realizar llamado a servicio rest
      await axios.delete(this.ruta + "eliminar/" + id);
    } catch (error) {
      console.error("ERROR al eliminar: " + error);
      throw new Error("Failed to delete Profesor");
    } finally {
      console.log("finalizado eliminar Profesor");
    }
  }
}
