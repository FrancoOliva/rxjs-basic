import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  interval$ : Observable<number> = interval(1000);
  click$: Observable<Event> = fromEvent(document,'click');

  constructor() { }

  ngOnInit(): void {
    // A diferencia del mergeMap() que podía contener
    // internamente varios observables el switchMap()
    // completa el observable anterior y emite uno nuevo
    this.click$.pipe(
      switchMap(()=> this.interval$)
    ).subscribe(console.log);
  }

}
