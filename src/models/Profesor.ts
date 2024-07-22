import { ListItemProps } from "@chakra-ui/react";
import { Disponibilidad } from "./Disponibilidad";

export class Profesor {
  id: number;//cedula
  nombre: string;
  tipoId: string;
  numeroCelular: number;
  direccion: string;
  eps: string;
  arl: string;
  correoElectronico: string;
  nombreContacto:string;
  numeroContacto: number;
  disponibilidades: Array<Disponibilidad>;

  constructor(
    id: number,
    nombre: string,
    tipoId: string,
    numeroCelular: number,
    direccion: string,
    eps: string,
    arl: string,
    correoElectronico: string,
    nombreContacto:string,
    numeroContacto: number,
    disponibilidades: Array<Disponibilidad>
  )
  {
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
}
