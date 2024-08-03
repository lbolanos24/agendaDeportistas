import { ListItemProps } from "@chakra-ui/react";
import { Acudiente } from "./Acudiente";

export class Deportista {
  id: number;
  nombre: string;
  edad: number;
  fechaNacimiento: Date;
  tipoId: string;
  direccion: string;
  eps: string;
  institucionEducativa: string;
  grado: number;
  condicionImportante: string;
  imagenPropia: boolean;
  fotoDeportista: ImageBitmap;
  fotoDocumento: ImageBitmap;
  //aceptacion de terminos se da por el acudiente pero se mira en la pantalla del deportista
  informacionMensualidad: boolean;
  informacionReposicion: boolean;
  informacionVacaciones: boolean;
  comprobanteInscripcion: boolean;
  acudientes: Array<Acudiente>;

  constructor(
    id: number,
    nombre: string,
    edad: number,
    fechaNacimiento: Date,
    tipoId: string,
    direccion: string,
    eps: string,
    institucionEducativa: string,
    grado: number,
    condicionImportante: string,
    imagenPropia: boolean,
    fotoDeportista: ImageBitmap,
    fotoDocumento: ImageBitmap,
    informacionMensualidad: boolean,
    informacionReposicion: boolean,
    informacionVacaciones: boolean,
    comprobanteInscripcion: boolean,
    acudientes: Array<Acudiente>
)
    {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.fechaNacimiento = fechaNacimiento;
    this.tipoId = tipoId;
    this.direccion = direccion;
    this.eps = eps;
    this.institucionEducativa = institucionEducativa;
    this.grado = grado;
    this.condicionImportante = condicionImportante;
    this.imagenPropia = imagenPropia;
    this.fotoDeportista = fotoDeportista;
    this.fotoDocumento = fotoDocumento;
    this.informacionMensualidad = informacionMensualidad;
    this.informacionReposicion = informacionReposicion;
    this.informacionVacaciones = informacionVacaciones;
    this.comprobanteInscripcion = comprobanteInscripcion;
    this.acudientes = acudientes;
  }

  getAcudientes():string {
    return this.acudientes?.map(acudiente => `${acudiente.nombre} ${acudiente.numeroCelular} `).join(' , ');
  }
}
