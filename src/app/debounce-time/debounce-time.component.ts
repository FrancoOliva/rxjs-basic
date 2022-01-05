import { Target } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { debounce, debounceTime, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {

  

  // streams
  click$: Observable<any> = fromEvent(document,'click');


  // ejemplo 2 - ejercicio pendiente de hacerlo funcionar
  inputBox:any = document.getElementById('text-input');
  input$: Observable<any> = fromEvent(this.inputBox,'keyup');

  constructor() { }

  ngOnInit(): void {

    // en este ejemplo debounceTime()
    // ignora todos los clicks que se hacen de forma seguida
    // cuando hacemos click y esperamos 1 segundo
    // imprime en consola
    this.click$.pipe(
      debounceTime(1000)
    ).subscribe(console.log);

    // ejemplo 2
    // this.input$.pipe(
    //   debounceTime(1000),
    //   pluck('target','value')
    // ).subscribe(console.log);

    // ejemplo 2b
    // this.input$.pipe(
    //   debounce(()=> interval(1000)),
    //   pluck('target','value')
    // ).subscribe(console.log);
  }

}
