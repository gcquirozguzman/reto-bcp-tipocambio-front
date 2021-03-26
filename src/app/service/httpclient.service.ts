import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

//const rutaBase = "http://localhost:8080"; 
const rutaBase = "https://reto-bcp-tipocambio-back.herokuapp.com";

export class TipoMoneda {
  constructor(
    public id: string,
    public codigo: string,
    public nombre: string
  ) {}
}

export class TablaConversion {
  constructor(
    public id: string,
    public origen: string,
    public destino: string,
    public monto: string,
    public fecha: number,
    public codigoOrigen: string,
    public codigoDestino: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  listarTodos() {
    return this.httpClient.get<TipoMoneda[]>(rutaBase + "/ProyectoTipoCambio/tipoMoneda/listarTodos");
  }

  public eliminarTipoMoneda(tipoMoneda) {
    return this.httpClient.delete<TipoMoneda>(
      rutaBase + "/ProyectoTipoCambio/tipoMoneda/eliminar" + "/" + tipoMoneda.id
    );
  }
  public crearTipoMoneda(tipoMoneda) {
    return this.httpClient.post<TipoMoneda>(
      rutaBase + "/ProyectoTipoCambio/tipoMoneda/crear",
        tipoMoneda
    );
  }

  listarTodosTablaConversion() {
    return this.httpClient.get<TablaConversion[]>(rutaBase + "/ProyectoTipoCambio/tablaConversion/listarTodosDescripcion");
  }

  public eliminarTablaConversion(tablaConversion) {
    return this.httpClient.delete<TablaConversion>(
      rutaBase + "/ProyectoTipoCambio/tablaConversion/eliminar" + "/" + tablaConversion.id
    );
  }
  public crearTablaConversion(tablaConversion) {
    return this.httpClient.post<TablaConversion>(
      rutaBase + "/ProyectoTipoCambio/tablaConversion/crear",
      tablaConversion
    );
  }


}
