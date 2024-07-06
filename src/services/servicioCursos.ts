import { Curso } from "../models/Curso";

export class ServicioCursos {
  private cursos: Curso[];
  private static instancia: ServicioCursos;

  public static getInstancia(): ServicioCursos {
    if (!this.instancia) {
      this.instancia = new ServicioCursos();
      this.instancia.obtenerCursos();
    }

    return this.instancia;
  }

  constructor() {
    this.cursos = [];
  }

  //funcion para cargar cursos Dummy
  public cargarCursosDummy(): void {
    this.cursos.push(
      new Curso(
        1,
        "Mamitas 1",
        "Femenino",
        "Maternas",
        "1er trimestre",
        "",
        "1",
        "",
        "",
        "1",
        "0",
        "#77DD77"
      )
    );
    this.cursos.push(
      new Curso(
        2,
        "Baby 1",
        "Mixto",
        "Bebes",
        "2 meses",
        "",
        "1",
        "",
        "",
        "1",
        "0",
        "#FAFAD2"
      )
    );
    this.cursos.push(
      new Curso(
        3,
        "Baile 1",
        "Femenino",
        "Niños",
        "6 años",
        "Acrobacia",
        "Básico",
        "Individual",
        "Bailarines",
        "1",
        "0",
        "#FF5733"
      )
    );
  }

  //FUncion para obtener los cursos desde el backend
  public obtenerCursos(): void {
    try {
      //realizar llamado a servicio rest
      /*const response = await fetch("http://localhost:3000/datos");
      const datos = await response.json();
      console.log(datos);
      this.cursos = datos;*/

      if (this.cursos.length === 0) {
        this.cargarCursosDummy();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Función para listar todos los cursos
  public listarCursos(): Curso[] {
    return this.cursos;
  }

  // Función para agregar un nuevo curso
  public agregarCurso(curso: Curso): void {
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
      this.cursos.push(curso);
    } catch (error) {
      console.log(error);
    }
  }

  // Función para eliminar un curso existente
  public eliminarCurso(id: number): void {
    this.cursos = this.cursos.filter((c) => c.id !== id);
  }

  // Función para obtener un curso por su id
  public obtenerCursoPorId(id: number): Curso | undefined {
    return this.cursos.find((c) => c.id === id);
  }

  // Función para obtener el siguiente id disponible
  public obtenerSiguienteId(): number {
    return this.cursos.length + 1;
  }
}
