import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  click$ : Observable<any> = fromEvent(document,'click');
  interval$ : Observable<number> = interval(1000);

  constructor() { }

  ngOnInit(): void {

    // Al hacer click comienza a contar el obsservable interno interval()
    // si hacemos otro click, esperamos y otro click más (3 en total)
    // tenemos 3 observables internos ejecutándose
    // tener en cuenta anotaciones en anotaciones.scss

    this.click$.pipe(
      mergeMap(()=> this.interval$)
    ).subscribe(console.log);
  }

}
