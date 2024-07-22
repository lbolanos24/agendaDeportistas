export class Disponibilidad{
    diaDisponibilidad: string;
    horaInicioDisponibilidad: number;
    horaFinDisponibilidad: number;

    constructor(
    diaDisponibilidad: string,
    horaInicioDisponibilidad: number,
    horaFinDisponibilidad: number
)   
    {
    this.diaDisponibilidad = diaDisponibilidad;
    this.horaInicioDisponibilidad = horaInicioDisponibilidad;
    this.horaFinDisponibilidad = horaFinDisponibilidad;
    }
}