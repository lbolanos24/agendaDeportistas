import { Deportista } from "./Deportista";
import { Grupo } from "./Grupo";

export class Agenda {
  idAgenda: number;
  grupo: Grupo;
  deportista: Deportista;
  constructor(idAgenda: number, grupo: Grupo, deportista: Deportista) {
    this.idAgenda = idAgenda;
    this.grupo = grupo;
    this.deportista = deportista;
  }
}
