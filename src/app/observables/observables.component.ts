import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  

  observer: Observer<string> = {
    next: value => console.log('next', value),
    error: error => console.log('error',error),
    complete: ()=> console.log('complete!')
  };

  observable: Observable<string> = new Observable(subscriber =>{
    subscriber.next('Hello');
  });  

  constructor() { }

  ngOnInit(): void {
    this.observable.subscribe(this.observer);
  }

}
