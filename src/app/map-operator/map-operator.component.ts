import { Component, OnInit } from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit {

  // Especificamos tipo 'any' porque en el curso de rxjs
  // utilizan javascript y no utilizan tipado como en typescrip
  keyup$: Observable<any> = fromEvent(document, 'keyup');

  keycode$: Observable<any> = this.keyup$.pipe(
    map( event => event.code)
  );

  keycodeWithPluck$ = this.keyup$.pipe(
    pluck('code')
  );
  

  // recibe un valor y devuelve siempre un mismo valor
  // en este caso aunque toquemos diferentes teclas
  // va a imprimir en el console 'Key pressed!'
  pressed$: Observable<any> = this.keyup$.pipe(
    mapTo('Key pressed!')
  );
  

  constructor() { }

  ngOnInit(): void {
    // of() ejecuta de forma secuencial
    // dentro de .pipe()
    // utilizamos el operador .map()
    // que nos permite transformar el valor que recibe de .of()

    // of(1,2,3,4,5).pipe(
    //   map(value => value * 10)
    // ).subscribe(console.log);

    // this.keyup$.subscribe(console.log);
    // this.keycode$.subscribe(console.log);
    // this.keycodeWithPluck$.subscribe(console.log);
    // this.pressed$.subscribe(console.log);
    
  }

}
