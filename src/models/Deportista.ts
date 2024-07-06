import { Acudiente } from "./Acudiente";

export class Deportista {
  id: number;
  nombre: string;
  acudiente1: Acudiente;
  acudiente2: Acudiente;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.acudiente1 = new Acudiente(0, "");
    this.acudiente2 = new Acudiente(0, "");
  }
}
