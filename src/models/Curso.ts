//Objeto de negocio Curso
export class Curso {
  idCurso: number;
  nombre: string;
  sexo: string;
  clasificacionEdad: string;
  edad: string;
  nivel: string;
  subNivel: string;
  modalidad: string;
  categoria: string;
  duracionClaseHoras: string;
  duracionClaseMinutos: string;
  color: string;

  constructor(
    idCurso: number,
    nombre: string,
    sexo: string,
    clasificacionEdad: string,
    edad: string,
    nivel: string,
    subNivel: string,
    modalidad: string,
    categoria: string,
    duracionClaseHoras: string,
    duracionClaseMinutos: string,
    color: string
  ) {
    this.idCurso = idCurso;
    this.nombre = nombre;
    this.sexo = sexo;
    this.clasificacionEdad = clasificacionEdad;
    this.edad = edad;
    this.nivel = nivel;
    this.subNivel = subNivel;
    this.modalidad = modalidad;
    this.categoria = categoria;
    this.duracionClaseHoras = duracionClaseHoras;
    this.duracionClaseMinutos = duracionClaseMinutos;
    this.color = color;
  }
}
