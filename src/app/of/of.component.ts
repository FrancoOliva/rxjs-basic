import { Component, OnInit } from '@angular/core';
import { from, Observer, of, range } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  observer: Observer<any> = {
    next: val => console.log('next', val),
    error: err => console.log('err', err),
    complete: () => console.log('complete!')
  };

  // Probar los distintos operadores para ver sus diferencias


  //source$ = of(1,2,3,4,5); 
  //source2$ = range(1,5);
  //source3$ = from([1,2,3,4,5]); // probar también con un string para ver lo que hace
  // source3$ = from(fetch(
  //   'https://api.github.com/users/octocat'
  // ));

  

  constructor() { }

  ngOnInit(): void {

    // this.source$.subscribe(this.observer);
    // this.source2$.subscribe(this.observer);
    // this.source3$.subscribe(this.observer);
  }

  

}
