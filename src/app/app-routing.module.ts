import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTipoMonedaComponent } from './add-tipoMoneda/add-tipoMoneda.component';
import { TablaConversionComponent } from './tablaConversion/tablaConversion.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { TipoMonedaComponent } from './tipoMoneda/tipoMoneda.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tipoMoneda', component: TipoMonedaComponent,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'addTipoMoneda', component: AddTipoMonedaComponent,canActivate:[AuthGaurdService]},
  { path: 'tablaConversion', component: TablaConversionComponent,canActivate:[AuthGaurdService]},
  { path: 'editarConversion', component: AddTipoMonedaComponent,canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
