import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from '../saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SaludoComponent, ContadorComponent,ListadoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularFirst';
  counter:number = 0;
  increment:number=1;

  updateIncrement(number:string){
    this.increment=parseInt(number);
  }
}
