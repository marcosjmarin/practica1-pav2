import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PUNTAJEComponent } from './puntaje/puntaje.component';
import { DetalleComponent } from './detalle/detalle/detalle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    PUNTAJEComponent,
    DetalleComponent,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'articulos', component: ListaArticulosComponent },
      { path: 'articulo/:id', component: DetalleComponent },
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: '**', component: PaginaNoEncontradaComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
