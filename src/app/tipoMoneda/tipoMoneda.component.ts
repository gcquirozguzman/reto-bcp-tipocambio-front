import { Component, OnInit } from "@angular/core";
import { HttpClientService, TipoMoneda } from "../service/httpclient.service";

@Component({
  selector: "app-tipoMoneda",
  templateUrl: "./tipoMoneda.component.html",
  styleUrls: ["./tipoMoneda.component.css"]
})
export class TipoMonedaComponent implements OnInit {
  tipoMonedas: TipoMoneda[];
  displayedColumns: string[] = ["codigo", "nombre", "delete"];

  constructor(private httpClientService: HttpClientService) {}

  ngOnInit() {
    this.httpClientService
      .listarTodos()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

  handleSuccessfulResponse(response) {
    this.tipoMonedas = response;
  }

  eliminarTipoMoneda(tipoMoneda: TipoMoneda): void {
    this.httpClientService.eliminarTipoMoneda(tipoMoneda).subscribe(data => {});
    this.httpClientService
      .listarTodos()
      .subscribe(response => this.handleSuccessfulResponse(response));
  }

}
