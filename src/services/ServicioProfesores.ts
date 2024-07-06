import { Profesor } from "../models/Profesor";

export class ServicioProfesores {
  private profesores: Profesor[];
  private static instancia: ServicioProfesores;

  public static getInstancia(): ServicioProfesores {
    if (!this.instancia) {
      this.instancia = new ServicioProfesores();
      this.instancia.obtenerProfesores();
    }

    return this.instancia;
  }

  constructor() {
    this.profesores = [];
  }

  //funcion para cargar cursos Dummy
  public cargarDummy(): void {
    this.profesores.push(new Profesor(1, "Jorge Castrillon"));
  }

  //FUncion para obtener los cursos desde el backend
  public obtenerProfesores(): void {
    try {
      //realizar llamado a servicio rest
      /*const response = await fetch("http://localhost:3000/datos");
      const datos = await response.json();
      console.log(datos);
      this.cursos = datos;*/

      if (this.profesores.length === 0) {
        this.cargarDummy();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Función para listar todos los cursos
  public listarProfesores(): Profesor[] {
    return this.profesores;
  }

  // Función para agregar un nuevo curso
  public agregarCurso(profesor: Profesor): void {
    try {
      /*this.servicioBD.query(
        "INSERT INTO cursos (identificacion, nombre, sexo, clasificacion_edad, edadInicial, nivel, subNivel, modalidad, categoria, duracion_clase_horas, duracion_clase_minutos, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
        [
          curso.id,
          curso.nombre,
          curso.sexo,
          curso.clasificacionEdadInicial,
          curso.edadInicial,
          curso.nivel,
          curso.subNivel,
          curso.modalidad,
          curso.categoria,
          curso.duracionClaseHoras,
          curso.duracionClaseMinutos,
          curso.color,
        ]
      );*/
      this.profesores.push(profesor);
    } catch (error) {
      console.log(error);
    }
  }

  // Función para eliminar un curso existente
  public eliminarProfesores(id: number): void {
    this.profesores = this.profesores.filter((c) => c.id !== id);
  }

  // Función para eliminar un curso existente
  public obtenerSiguienteId(): number {
    return this.profesores.length + 1;
  }
}
