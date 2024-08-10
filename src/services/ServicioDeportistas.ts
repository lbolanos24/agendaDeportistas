import { Deportista } from "../models/Deportista";
import { Acudiente } from "../models/Acudiente";
import axios from "axios";

export class ServicioDeportistas {
  private deportistas: Deportista[];
  private static instancia: ServicioDeportistas;
  private ruta: String;

  public static getInstancia(): ServicioDeportistas {
    if (!this.instancia) {
      this.instancia = new ServicioDeportistas();
    }

    return this.instancia;
  }

  constructor() {
    this.deportistas = [];
    this.ruta = "http://localhost:8080/api/deportistas/";
  }

  //funcion para cargar cursos Dummy
  public cargarDummy(): void {
    this.deportistas.push({
      id: "123456789",
      nombre: "Liliam Bolaños",
      tipoId: "Cédula de Ciudadania",
      edad: 39,
      fechaNacimiento: new Date("2024-01-01T05:00:00.000Z"),
      direccion: "",
      eps: "",
      institucionEducativa: "",
      grado: 1,
      condicionImportante: "N",
      imagenPropia: true,
      fotoDeportista: "",
      fotoDocumento: "",
      fotoDeportistaUrl:
        "blob:http://localhost:5173/35b63731-3364-4fc7-8b36-52b94f7441fb",
      fotoDocumentoUrl: "",
      informacionMensualidad: true,
      informacionReposicion: false,
      informacionVacaciones: true,
      comprobanteInscripcion: true,
      acudientes: [
        {
          id: "1",
          nombre: "Acudiente Test",
          tipoId: "",
          numeroCelular: 3154444444,
          direccion: "",
          correoElectronico: "",
          imagenPropia: true,
          profesionEmpresa: "",
          parentesco: "",
        },
      ],
    });
  }

  //FUncion para obtener los deportistas desde el backend
  public async obtenerDeportistas(): Promise<Deportista[]> {
    try {
      //realizar llamado a servicio rest
      const response = await axios.get(this.ruta + "listar");

      //console.log(JSON.stringify(response.data));

      this.deportistas = response.data;
      return this.deportistas;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch deportistas");
    } finally {
      console.log("finalizado obtener deportistas");
    }
  }

  public async obtenerFotoDeportista(id: String): Promise<string> {
    try {
      //realizar llamado a servicio rest
      const response = await axios.get(this.ruta + `${id}/fotoDeportista`);

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch foto del deportistas");
    }
  }

  public async obtenerFotoDocumento(id: String): Promise<string> {
    try {
      //realizar llamado a servicio rest
      const response = await axios.get(this.ruta + `${id}/fotoDocumento`);
      //console.log(JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch foto documento de deportistas");
    }
  }

  // Función para listar todos los deportistas
  public listarDeportistas(): Deportista[] {
    return this.deportistas;
  }

  public async crearDeportista(
    deportista: Deportista,
    fotoDeportista: File | null,
    fotoDocumento: File | null
  ): Promise<Deportista> {
    try {
      const response = await axios.post<Deportista>(
        this.ruta + "crear",
        deportista
      );

      try {
        if (response.status === 200) {
          if (fotoDeportista) {
            const formData = new FormData();
            formData.append("file", fotoDeportista);
            const responseFotoDeportista = await axios.post(
              this.ruta +
                `uploadFotoDeportista/${deportista.id}/fotoDeportista`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log(responseFotoDeportista.data);
          }

          if (fotoDocumento) {
            const formData = new FormData();
            formData.append("file", fotoDocumento);
            const responseFotoDocumento = await axios.post(
              this.ruta + `uploadFotoDocumento/${deportista.id}/fotoDocumento`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log(responseFotoDocumento.data);
          }
        }
      } catch (error) {
        console.log("ERROR AL GUARDAR FOTOS: " + error);
      }

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create Deportista");
    }
  }

  // Función para agregar un nuevo deportista
  public async actualizarDeportista(
    deportista: Deportista,
    fotoDeportista: File | null,
    fotoDocumento: File | null
  ): Promise<Deportista> {
    try {
      const response = await axios.post<Deportista>(
        this.ruta + "actualizar",
        deportista
      );

      if (response.status === 200) {
        try {
          if (fotoDeportista) {
            const formData = new FormData();
            formData.append("file", fotoDeportista);
            const responseFotoDeportista = await axios.post(
              this.ruta +
                `uploadFotoDeportista/${deportista.id}/fotoDeportista`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log(responseFotoDeportista.data);
          }

          if (fotoDocumento) {
            const formData = new FormData();
            formData.append("file", fotoDocumento);
            const responseFotoDocumento = await axios.post(
              this.ruta + `uploadFotoDocumento/${deportista.id}/fotoDocumento`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );

            console.log(responseFotoDocumento.data);
          }
        } catch (error) {
          console.log("ERROR AL GUARDAR FOTOS: " + error);
        }
      }

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update  Deportista");
    }
  }

  // Función para eliminar un deportista existente
  public async eliminarDeportistas(id: string): Promise<void> {
    try {
      //realizar llamado a servicio rest
      await axios.delete(this.ruta + "eliminar/" + id);
    } catch (error) {
      console.error("ERROR al eliminar: " + error);
      throw new Error("Failed to delete Deportista");
    }
  }

  public listarAcudientes(): Array<Acudiente> {
    return this.deportistas.reduce((acc: Acudiente[], curr) => {
      acc = [...acc, ...curr.acudientes];
      return acc;
    }, []);
  }

  public listarAcudientesByDeportista(id: string): Array<Acudiente> {
    return this.deportistas.find((d) => d.id === id)?.acudientes || [];
  }

  public buscarDeportistaPorId(id: string): Deportista | undefined {
    return this.deportistas.find((d) => d.id === id);
  }

  public eliminarAcudiente(id: string, idDeportista: string): Array<Acudiente> {
    return (
      this.deportistas
        .find((d) => d.id === idDeportista)
        ?.acudientes?.filter((c) => c.id !== id) || []
    );
  }
}
