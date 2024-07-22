import { ListItemProps } from "@chakra-ui/react";

export class Deportista {
  id: number;
  nombre: string;
  edad: number;
  fechaNacimiento: Date;
  tipoId: Array<ListItemProps>;
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
  comprobanteInstcripcion: boolean;

  constructor(
    id: number,
    nombre: string,
    edad: number,
    fechaNacimiento: Date,
    tipoId: Array<ListItemProps>,
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
    comprobanteInstcripcion: boolean
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
    this.comprobanteInstcripcion = comprobanteInstcripcion;
  }
}
