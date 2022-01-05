import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  numbers$ = of(1,2,3,4,5);

  constructor() { }

  ngOnInit(): void {

    // con tap() podemos debuggear observables

    // Ejemplo 1
    this.numbers$.pipe(
      tap( value => console.log('before', value)),
      map(value => value * 10),
      tap( value => console.log('after', value))
    ).subscribe( value => {
      console.log('from subscribe', value);
    });
  }

}
