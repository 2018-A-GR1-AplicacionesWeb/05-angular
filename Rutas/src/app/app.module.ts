import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqComponent } from './rutas/faq/faq.component';
import { HomeComponent } from './rutas/home/home.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    NoEncontradoComponent,
    RutaPerfilComponent,
    RutaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
