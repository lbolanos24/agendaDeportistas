import { ListItemProps } from "@chakra-ui/react";

export class Acudiente {
  id: number;
  nombre: string;
  tipoId: Array<ListItemProps>;
  numeroCelular: number;
  direccion: string;
  correoElectronico: string;
  imagenPropia: boolean;
  profesionEmpresa: string;


  constructor(
    id: number, 
    nombre: string,
    tipoId: Array<ListItemProps>,
    numeroCelular: number,
    direccion: string,
    correoElectronico: string,
    imagenPropia: boolean,
    profesionEmpresa: string
  ) 
    {
    
      this.id = id;
      this.nombre = nombre;
      this.tipoId = tipoId;
      this.numeroCelular = numeroCelular;
      this.direccion = direccion;
      this.correoElectronico = correoElectronico;
      this.imagenPropia = imagenPropia;
      this.profesionEmpresa = profesionEmpresa
  }
}
