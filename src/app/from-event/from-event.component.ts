import { Component, OnInit } from '@angular/core';
import { Observer, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  // fromEvent nos permite crear observables que
  // escuchen cualquier tipo de eventos: document, clicks, teclas, etc
  // Siempre es importante saber que si un subscribe
  // ya no se utiliza más, hay que cancelarlo con .unsubscribe();

  observer: Observer<any> = {
    next: val => console.log('next', val),
    error: err => console.log('err', err),
    complete: () => console.log('complete!')
  };

  source$ = fromEvent(document, 'keyup');

  subOne = this.source$.subscribe(this.observer);
  subTwo = this.source$.subscribe(this.observer);

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      console.log('unsubscribing');
      this.subOne.unsubscribe();
    }, 3000);
    
  }

}
