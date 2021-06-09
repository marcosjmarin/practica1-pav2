import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  text = 'Listado Articulos';
  bandera = true;
  articulos: any[] = [
    {
      id: 2,
      nombre: 'Articulo X'
    },
    {
      id: 5,
      nombre: 'Articulo Y'
    }
  ];
  mostrarBoton(): void {
    this.bandera = !this.bandera;
  }
}
