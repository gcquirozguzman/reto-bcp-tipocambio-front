import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    return this.httpClient.get<TipoMoneda[]>("http://localhost:8080/ProyectoTipoCambio/tipoMoneda/listarTodos");
  }

  public eliminarTipoMoneda(tipoMoneda) {
    return this.httpClient.delete<TipoMoneda>(
      "http://localhost:8080/ProyectoTipoCambio/tipoMoneda/eliminar" + "/" + tipoMoneda.id
    );
  }
  public crearTipoMoneda(tipoMoneda) {
    return this.httpClient.post<TipoMoneda>(
      "http://localhost:8080/ProyectoTipoCambio/tipoMoneda/crear",
        tipoMoneda
    );
  }

  listarTodosTablaConversion() {
    return this.httpClient.get<TablaConversion[]>("http://localhost:8080/ProyectoTipoCambio/tablaConversion/listarTodosDescripcion");
  }

  public eliminarTablaConversion(tablaConversion) {
    return this.httpClient.delete<TablaConversion>(
      "http://localhost:8080/ProyectoTipoCambio/tablaConversion/eliminar" + "/" + tablaConversion.id
    );
  }
  public crearTablaConversion(tablaConversion) {
    return this.httpClient.post<TablaConversion>(
      "http://localhost:8080/ProyectoTipoCambio/tablaConversion/crear",
      tablaConversion
    );
  }


}
