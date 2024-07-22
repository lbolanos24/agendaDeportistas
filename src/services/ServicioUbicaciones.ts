import { Disponibilidad } from "../models/Disponibilidad";
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

  //funcion para cargar ubicaciones Dummy
  public cargarDummy(): void {
    this.ubicaciones.push(new Ubicacion(1,"NombrePrueba1", "Direccion1","","",true, new Date("01/01/2024"), new Date("12/31/2024"),[new Disponibilidad("Lunes", 8,12), new Disponibilidad("Martes", 8, 12)]));
    this.ubicaciones.push(new Ubicacion(1,"NombrePrurba2", "Direccion1","","",true, new Date("01/01/2024"), new Date("12/31/2024"),[]));
    
    //TODO
    //Carga de las ubcaciones desde BD
  }

  //FUncion para obtener los ubicaciones desde el backend
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
