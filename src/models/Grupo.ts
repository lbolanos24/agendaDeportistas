import { Curso } from "./Curso";
import { Profesor } from "./Profesor";
import { Ubicacion } from "./Ubicacion";

export class Grupo {
  idGrupo: number;
  curso: Curso;
  dia: string;
  horaInicio: string;
  horaFin: string;
  cupos: number;
  profesor: Profesor;
  ubicacion: Ubicacion;

  constructor(
    idGrupo: number,
    curso: Curso,
    dia: string,
    horaInicio: string,
    horaFin: string,
    cupos: number,
    profesor: Profesor,
    ubicacion: Ubicacion
  ) {
    this.idGrupo = idGrupo;
    this.curso = curso;
    this.dia = dia;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
    this.cupos = cupos;
    this.profesor = profesor;
    this.ubicacion = ubicacion;
  }
}
