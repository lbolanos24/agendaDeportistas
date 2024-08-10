import axios from "axios";
import { Disponibilidad } from "../models/Disponibilidad";
import { Ubicacion } from "../models/Ubicacion";

export class ServicioUbicaciones {
  private ubicaciones: Ubicacion[];
  private static instancia: ServicioUbicaciones;
  private ruta: String;

  public static getInstancia(): ServicioUbicaciones {
    if (!this.instancia) {
      this.instancia = new ServicioUbicaciones();
      this.instancia.obtenerUbicaciones();
    }

    return this.instancia;
  }

  constructor() {
    this.ubicaciones = [];
    this.ruta = "http://localhost:8080/api/ubicaciones/";
  }

  //funcion para cargar ubicaciones Dummy
  public cargarDummy(): void {
    this.ubicaciones.push(
      new Ubicacion(
        1,
        "NombrePrueba1",
        "Direccion1",
        "",
        "",
        true,
        new Date("01/01/2024"),
        new Date("12/31/2024"),
        [
          new Disponibilidad(1, "Lunes", 8, 12),
          new Disponibilidad(2, "Martes", 8, 16),
        ]
      )
    );
    this.ubicaciones.push(
      new Ubicacion(
        2,
        "NombrePrurba2",
        "Direccion1",
        "",
        "",
        true,
        new Date("01/01/2024"),
        new Date("12/31/2024"),
        []
      )
    );

    //TODO
    //Carga de las ubcaciones desde BD
  }

  //FUncion para obtener los ubicaciones desde el backend
  public async obtenerUbicaciones(): Promise<Ubicacion[]> {
    try {
      /*if (this.ubicaciones.length === 0) {
        this.cargarDummy();
      }*/

      // Realizar llamado a servicio rest
      const response = await axios.get(this.ruta + "listar");

      this.ubicaciones = response.data;

      return this.ubicaciones;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch ubicaciones");
    } finally {
      console.log("finalizado obtener ubicaciones");
    }
  }

  // Función para listar todos los cursos
  public listarUbicaciones(): Ubicacion[] {
    return this.ubicaciones;
  }

  // Función para agregar un nuevo curso
  public async crearUbicacion(ubicacion: Ubicacion): Promise<Ubicacion> {
    try {
      const response = await axios.post<Ubicacion>(
        this.ruta + "crear",
        ubicacion
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create ubicacion");
    }
  }

  public async actualizarUbicacion(ubicacion: Ubicacion): Promise<Ubicacion> {
    try {
      const response = await axios.post<Ubicacion>(
        this.ruta + "actualizar",
        ubicacion
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create ubicacion");
    }
  }

  // Función para eliminar una ubicacion existente
  public async eliminarUbicacion(id: number): Promise<void> {
    try {
      //realizar llamado a servicio rest
      await axios.delete(this.ruta + "eliminar/" + id);
    } catch (error) {
      console.error("ERROR al eliminar: " + error);
      throw new Error("Failed to delete ubicacion");
    } finally {
      console.log("finalizado eliminar ubicacion");
    }
  }
}
