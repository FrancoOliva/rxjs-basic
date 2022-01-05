import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, mapTo, scan } from 'rxjs/operators';

@Component({
  selector: 'app-contador-ejercicio',
  templateUrl: './contador-ejercicio.component.html',
  styleUrls: ['./contador-ejercicio.component.scss']
})
export class ContadorEjercicioComponent implements OnInit {

  // streams
  counter$: Observable<any> = interval(1000);

  // elem ref
  contador!: number;
  message!: string;

  constructor() { }

  ngOnInit(): void {

    this.counter$.pipe(
      mapTo(-1),
      scan((accumulator,currentValue)=>{
        return accumulator - 1;
      }, 10),
      filter( value => value >= 0)
    ).subscribe( value => {
      this.contador = value;

      if(!value){
        this.message = 'Liftoff';
      }
    });
  }

}
