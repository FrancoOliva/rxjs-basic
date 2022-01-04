import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  // Un observer puede registrar hasta tres observables
  // a los cuales debemos suscribirnos 

  observer: Observer<string> = {

    // valores emitidos con éxito 
    next: value => console.log('next', value),

    // para cuando suceden errores en la ejecución del observable
    error: error => console.log('error',error),

    // Para cuando queremos finalizar un observable y que no se emitan más valores
    complete: ()=> console.log('complete!')
  };


  observable: Observable<string> = new Observable(subscriber =>{
    // observer 
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });  

  constructor() { }

  ngOnInit(): void {
    this.observable.subscribe(this.observer);
  }

}
