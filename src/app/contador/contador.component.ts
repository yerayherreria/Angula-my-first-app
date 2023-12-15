import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  title: String = "Mi contador";
  counter2: number = 0;
  base:number = 3;
  
  @Input() value: number=0;
  @Input() increment: number=0;
  @Output() valueChange = new EventEmitter<number>();
  
  aggregate() {
    this.counter2+=this.base;
  }
  aggregate2() {
    this.value+=this.increment;
    this.valueChange.emit(this.value)
  }
  restar2(){
    this.value-=this.increment;
    this.valueChange.emit(this.value)
  }
  restar(){
    this.counter2-=this.base;
  }
}
