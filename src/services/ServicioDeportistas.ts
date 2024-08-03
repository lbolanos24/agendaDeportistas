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
    this.deportistas.push(
      new Deportista(
        123456789,
        "Liliam Bolaños",
        39,
        new Date("01/01/2024"),
        "CC",
        "",
        "",
        "",
        1,
        "N",
        true,
        "",
        "",
        true,
        true,
        true,
        true,
        [new Acudiente("1", "Acudiente Test", "", 3154444444, "", "", true, "")]
      )
    );
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

  public eliminarAcudiente(id: string, idDeportista: string): Acudiente {
    const deportista = this.deportistas.find((d) => d.id === idDeportista);
    if (deportista) {
      return deportista.acudientes.find((a) => a.id === id);
    }
    return undefined;
  }
}
