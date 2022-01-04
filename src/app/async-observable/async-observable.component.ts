import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.scss']
})
export class AsyncObservableComponent implements OnInit {
  
  // Un observer puede registrar hasta tres observables
  // a los cuales debemos suscribirnos 

  observer: Observer<any> = {

    // valores emitidos con éxito 
    next: value => console.log('next', value),

    // para cuando suceden errores en la ejecución del observable
    error: error => console.log('error',error),

    // Para cuando queremos finalizar un observable y que no se emitan más valores
    complete: ()=> console.log('complete!')
  };

  // Los observables pueden ser sincrónicos o asincrónicos
  // En este caso usamos  un setInterval para sumar un valor cada 1 segundo
  // Cuando utilizamos el .complete(); para no recibir más valores
  // nos salimos del interval y entramos en la función del return
  // esto limpia el intervalo (los intervalos siempre se limpian)
  observable: Observable<any> = new Observable(subscriber =>{
    
    let count = 0;

    const id = setInterval(()=>{

      subscriber.next(count);
      subscriber.complete();
      count += 1;

    },1000);

    return ()=>{
      console.log('called');
      clearInterval(id);
    }
  });  

  constructor() { }

  ngOnInit(): void {

    console.log('before');
    this.observable.subscribe(this.observer);
    console.log('after');
  }

}
