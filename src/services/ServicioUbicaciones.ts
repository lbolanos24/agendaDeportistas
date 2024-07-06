import { Ubicacion } from "../models/Ubicacion";

export class ServicioUbicaciones {
  private ubicaciones: Ubicacion[];
  private static instancia: ServicioUbicaciones;

  public static getInstancia(): ServicioUbicaciones {
    if (!this.instancia) {
      this.instancia = new ServicioUbicaciones();
      this.instancia.obtenerUbicaciones();
    }

    return this.instancia;
  }

  constructor() {
    this.ubicaciones = [];
  }

  //funcion para cargar cursos Dummy
  public cargarDummy(): void {
    this.ubicaciones.push(new Ubicacion(1, "Sede principal"));
  }

  //FUncion para obtener los cursos desde el backend
  public obtenerUbicaciones(): void {
    try {
      if (this.ubicaciones.length === 0) {
        this.cargarDummy();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Función para listar todos los cursos
  public listarUbicaciones(): Ubicacion[] {
    return this.ubicaciones;
  }

  // Función para agregar un nuevo curso
  public agregarUbicacion(ubicacion: Ubicacion): void {
    try {
      this.ubicaciones.push(ubicacion);
    } catch (error) {
      console.log(error);
    }
  }

  // Función para eliminar un curso existente
  public eliminarUbicacion(id: number): void {
    this.ubicaciones = this.ubicaciones.filter((c) => c.id !== id);
  }

  // Función para eliminar un curso existente
  public obtenerSiguienteId(): number {
    return this.ubicaciones.length + 1;
  }
}
