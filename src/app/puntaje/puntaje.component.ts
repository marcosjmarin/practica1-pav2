import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css']
})
export class PUNTAJEComponent implements OnChanges {
  @Input() puntaje: number = 4;
  puntajeAncho: number;
  @Output() puntajeClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(): void {
    this.puntajeAncho = (this.puntaje * 68) / 5;
  }
  onClick(): void {
    this.puntajeClicked.emit('El puntaje es: ' + this.puntaje);
  }
}
