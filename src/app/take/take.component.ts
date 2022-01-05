import { Component, OnInit } from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  numbers$ = of(1,2,3,4,5);
  click$: Observable<any> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {
    // ejemplo 1
    // this.numbers$.pipe(
    //   take(3),
    // ).subscribe({
    //   next: console.log,
    //   complete: ()=> console.log('Complete!')
    // });

    // ejemplo 2
    // usamos take(1) para que solo se imprima por consola
    // las coordenadas del primer click
    this.click$.pipe(
      map( event => ({
        x: event.clientX,
        y: event.clientY
      })),
      // filter, take(1)
      // en este caso con first aplicamos una lógica
      // imprime en consola si la coordenada y supera los 200
      first( ({y}) => y > 200)
      // take(1)
    ).subscribe({
      next: console.log,
      complete: ()=> console.log('Complete!')
    });

  }

}
