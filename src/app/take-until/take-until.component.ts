import { Component, OnInit } from '@angular/core';
import { interval, Observable, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  counter$: Observable<number> = interval(1000);

  click$: Observable<Event> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {

    // takeUntil() puede recibir como parámetros observables
    // en este caso el observable de interval()
    // se detiene cuando se detecta el observable click$
    this.counter$.pipe(
      takeUntil(this.click$)
    ).subscribe(console.log);
  }

}
