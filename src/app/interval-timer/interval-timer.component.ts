import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {

  // comienza de forma rápida con intervalos de 1 seg
  interval$ = interval(1000);

  // recibe 2 parámetros: el primero indica el comienzo a los 2 seg
  // e imprime un valor cada 1 seg
  // timer$ = timer(2000); este ej imprime un valor a los 2 seg y termina
  timer$ = timer(2000,1000);

  constructor() { }

  ngOnInit(): void {

    // this.interval$.subscribe(console.log);
    this.timer$.subscribe(console.log);
  }

}
