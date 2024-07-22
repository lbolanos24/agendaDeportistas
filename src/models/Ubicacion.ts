import { Disponibilidad } from "./Disponibilidad";

export class Ubicacion{
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  nombreContacto: string;
  estado: boolean; 
  //TBD el estado es activo o inactivo, se debe considerar las fechas de activacion e inactivacion-- proceso
  fechaInicioContrato: Date;
  fechaFinContrato: Date;
  //El contrato debe tener historico
  disponibilidades: Array<Disponibilidad>;

  constructor(
    id: number,
    nombre: string,
    direccion: string,
    telefono: string,
    nombreContacto: string,
    estado: boolean,
    fechaInicioContrato: Date,
    fechaFinContrato: Date,
    disponibilidades: Array<Disponibilidad>
  ) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nombreContacto = nombreContacto;
    this.estado = estado;
    this.fechaInicioContrato = fechaInicioContrato;
    this.fechaFinContrato = fechaFinContrato;
    this.disponibilidades = disponibilidades;
  }

  getDisponibilidades():string {
    return this.disponibilidades.map(disponibilidad => `${disponibilidad.diaDisponibilidad} ${disponibilidad.horaInicioDisponibilidad} - ${disponibilidad.horaFinDisponibilidad}`).join(' , ');
  }
}
