import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {

  interval: Observable<number> = interval(1000);
  click$: Observable<Event> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {

    // Si hacemos 3 click seguidos
    // Emite el primero y los otros dos son ignorados
    // termina de emitir el primer click y luego, puede recibir y emitir otro valor

    this.click$.pipe(
      exhaustMap( ()=> this.interval.pipe(take(3)))
    ).subscribe(console.log);
  }

}
