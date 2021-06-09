import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  text = 'Listado Articulos';
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
}
