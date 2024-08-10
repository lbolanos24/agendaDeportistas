export class Disponibilidad {
  id: number;
  diaDisponibilidad: string;
  horaInicioDisponibilidad: number;
  horaFinDisponibilidad: number;

  constructor(
    id: number,
    diaDisponibilidad: string,
    horaInicioDisponibilidad: number,
    horaFinDisponibilidad: number
  ) {
    this.id = id;
    this.diaDisponibilidad = diaDisponibilidad;
    this.horaInicioDisponibilidad = horaInicioDisponibilidad;
    this.horaFinDisponibilidad = horaFinDisponibilidad;
  }
}
