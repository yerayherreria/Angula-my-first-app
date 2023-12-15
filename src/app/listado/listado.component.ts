import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  alumnos: String[] = ["Pepito","Susanita","Raquelita"];
  @Input() mensaje: String = '';
}
