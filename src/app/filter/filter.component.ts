import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  keyup$: Observable<any> = fromEvent(document, 'keyup');

  keycode$: Observable<any> = this.keyup$.pipe(
    map(event => event.code)
  );
  
  // Hace un filtro de teclas
  // en este caso se muestra en consola la tecla o key
  // que coincida con la key/tecla 'Enter'
  enter$ = this.keycode$.pipe(
    filter(code => code === 'Enter')
  );

  constructor() { }

  ngOnInit(): void {

    // filtra el valor recibido alterando el valor inicial
    // en vez de imprimir en consola secuencialmente 1,2,3,4,5
    // imprime 3,4,5 porque son mayores que 2
    of(1,2,3,4,5).pipe(
      filter(value => value > 2)
    ).subscribe(console.log);

    // this.keycode$.subscribe(console.log);
    this.enter$.subscribe(console.log);
  }

}
