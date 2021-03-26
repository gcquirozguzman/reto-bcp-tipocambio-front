import { Component, OnInit } from "@angular/core";
import { HttpClientService, TablaConversion } from "../service/httpclient.service";

@Component({
  selector: "app-tablaConversion",
  templateUrl: "./tablaConversion.component.html",
  styleUrls: ["./tablaConversion.component.css"]
})
export class TablaConversionComponent implements OnInit {
  tablaConversions: TablaConversion[];
  displayedColumns: string[] = ["codigoOrigen", "codigoDestino", "monto", "fecha", "editar", "eliminar"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .listarTodosTablaConversion()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.tablaConversions = response;
  }

  eliminarTablaConversion(tablaConversion: TablaConversion): void {
    this.httpClientService.eliminarTablaConversion(tablaConversion).subscribe(data => {});
    this.httpClientService
      .listarTodos()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

}
