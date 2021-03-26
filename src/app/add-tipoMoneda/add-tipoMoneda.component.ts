import { Component, OnInit } from "@angular/core";
import { HttpClientService, TipoMoneda } from "../service/httpclient.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-tipoMoneda",
  templateUrl: "./add-tipoMoneda.component.html",
  styleUrls: ["./add-tipoMoneda.component.css"]
})
export class AddTipoMonedaComponent implements OnInit {
  objeto: TipoMoneda = new TipoMoneda("", "", "");

  constructor(private httpClientService: HttpClientService,
    private router: Router) {}

  ngOnInit() {}

  crearTipoMoneda(): void {
    console.debug(this.objeto);
    this.httpClientService.crearTipoMoneda(this.objeto).subscribe(data => {
      alert("Tipo Moneda created successfully.");
      this.router.navigate(['tipoMoneda'])
    });
  }
}
