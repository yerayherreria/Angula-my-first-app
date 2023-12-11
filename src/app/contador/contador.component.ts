import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title: String = "Mi contador";
  counter: number = 0;
  base:number = 3;
  aggregate() {
    this.counter+=this.base;
  }

  restar(){
    this.counter-=this.base;
  }
}
