import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  interval: Observable<number> = interval(1000);
  click$: Observable<Event> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {

    // Si hacemos 3 click seguidos
    // Emite el primero y los otros dos quedan en espera
    // antes de emitir un nuevo observable, primero termina el anterior y así..

    this.click$.pipe(
      concatMap( ()=> this.interval.pipe(take(3)))
    ).subscribe(console.log);
  }

}
