import { Disponibilidad } from "./Disponibilidad";

export class Profesor {
  id: string; //cedula
  nombre: string;
  tipoId: string;
  numeroCelular: string;
  direccion: string;
  eps: string;
  arl: string;
  correoElectronico: string;
  nombreContacto: string;
  numeroContacto: string;
  disponibilidades: Array<Disponibilidad>;

  constructor(
    id: string,
    nombre: string,
    tipoId: string,
    numeroCelular: string,
    direccion: string,
    eps: string,
    arl: string,
    correoElectronico: string,
    nombreContacto: string,
    numeroContacto: string,
    disponibilidades: Array<Disponibilidad>
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipoId = tipoId;
    this.numeroCelular = numeroCelular;
    this.direccion = direccion;
    this.eps = eps;
    this.arl = arl;
    this.correoElectronico = correoElectronico;
    this.nombreContacto = nombreContacto;
    this.numeroContacto = numeroContacto;
    this.disponibilidades = disponibilidades;
  }

  getDisponibilidades(): string {
    return this.disponibilidades
      ?.map(
        (disponibilidad) =>
          `${disponibilidad.diaDisponibilidad} ${disponibilidad.horaInicioDisponibilidad} - ${disponibilidad.horaFinDisponibilidad}`
      )
      .join(" , ");
  }
}
