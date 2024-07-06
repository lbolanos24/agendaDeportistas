//Objeto de negocio Curso
export class Curso {
  id: number;
  nombre: string;
  sexo: string;
  clasificacionEdadInicial: string;
  edadInicial: string;
  nivel: string;
  subNivel: string;
  modalidad: string;
  categoria: string;
  duracionClaseHoras: string;
  duracionClaseMinutos: string;
  color: string;

  constructor(
    id: number,
    nombre: string,
    sexo: string,
    clasificacionEdadInicial: string,
    edadInicial: string,
    nivel: string,
    subNivel: string,
    modalidad: string,
    categoria: string,
    duracionClaseHoras: string,
    duracionClaseMinutos: string,
    color: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.sexo = sexo;
    this.clasificacionEdadInicial = clasificacionEdadInicial;
    this.edadInicial = edadInicial;
    this.nivel = nivel;
    this.subNivel = subNivel;
    this.modalidad = modalidad;
    this.categoria = categoria;
    this.duracionClaseHoras = duracionClaseHoras;
    this.duracionClaseMinutos = duracionClaseMinutos;
    this.color = color;
  }
}
