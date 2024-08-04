export class Acudiente {
  id: string;
  nombre: string;
  tipoId: string;
  numeroCelular: number;
  direccion: string;
  correoElectronico: string;
  imagenPropia: boolean;
  profesionEmpresa: string;
  parentesco: string;

  constructor(
    id: string,
    nombre: string,
    tipoId: string,
    numeroCelular: number,
    direccion: string,
    correoElectronico: string,
    imagenPropia: boolean,
    profesionEmpresa: string,
    parentesco: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipoId = tipoId;
    this.numeroCelular = numeroCelular;
    this.direccion = direccion;
    this.correoElectronico = correoElectronico;
    this.imagenPropia = imagenPropia;
    this.profesionEmpresa = profesionEmpresa;
    this.parentesco = parentesco;
  }
}
