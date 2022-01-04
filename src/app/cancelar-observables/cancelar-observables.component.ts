import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-cancelar-observables',
  templateUrl: './cancelar-observables.component.html',
  styleUrls: ['./cancelar-observables.component.scss']
})
export class CancelarObservablesComponent implements OnInit {

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
      // subscriber.complete();
      count += 1;

    },1000);

    return ()=>{
      console.log('called');
      clearInterval(id);
    }
  });

  subscription = this.observable.subscribe(
    this.observer
  );

  suscriptionTwo = this.observable.subscribe(
    this.observer
  );

  // Cuando nos suscribimos a un observable, nos retorna un subscribe
  // los subscribe tienen un método para cancelarlos .unsubscribe
  // subscribe permite añadir otros subscribe con .add para cancelarlos
  

  constructor() { }

  ngOnInit(): void {

    this.subscription.add(this.suscriptionTwo);

    setTimeout(()=>{
      this.subscription.unsubscribe();
      //this.suscriptionTwo.unsubscribe();
    },3500);
    
  }

}
