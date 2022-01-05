import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

  click$: Observable<any> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {

    this.click$.pipe(
      map( event => (
        {
          x: event.clientX,
          y: event.clientY
        })),
        // en este caso takeWhile()
        // va a imprimir las coordenadas de los diferentes click en consola
        // mientras 'y' sea menor o igual a 200
      takeWhile( ({y}) => y <= 200)
    ).subscribe({
      next: console.log,
      complete: () => console.log('Complete!')
    })
  }

}
