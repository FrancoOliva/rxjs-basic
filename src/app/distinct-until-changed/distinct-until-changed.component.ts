import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit {
  
  numbers: Observable<any> = of(1,1,2,3,3,3,4,5,3);

  users: Array<{}> = [
    {name: 'Brian', loggedIn: false, token: null},
    {name: 'Brian', loggedIn: true, token: 'abc'},
    {name: 'Brian', loggedIn: true, token: '123'}
  ];

  state$: Observable<any> = from(this.users).pipe(
    scan((accumulator, currentValue)=>{
      return {...accumulator, ...currentValue};
    }, {})
  );

  // name$: Observable<any> = this.state$.pipe(
  //   map( state => state.name )
  // );

  // cuando tenemos que comparar propiedades de objetos
  // podemos utilizar distinctUntilKeyChanged()
  name$: Observable<any> = this.state$.pipe(
    distinctUntilKeyChanged('name'),
    map( state => state.name )
  );

  constructor() { }

  ngOnInit(): void {

    // distinctUntilChanged() ignora los valores repetidos
    // el 3 al final del arreglo lo agrega porque es diferente de 5
    this.numbers.pipe(
      distinctUntilChanged()
    ).subscribe(console.log);

    this.name$.subscribe(console.log);
  }

}
