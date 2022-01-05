import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5];

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

  name$: Observable<any> = this.state$.pipe(
    map( state => state.name )
  );

  totalReducer = (accumulator:any, currentValue:any) =>{
    // console.log({accumulator,currentValue});
    return accumulator + currentValue;
  };

  constructor() { }

  ngOnInit(): void {
    // reduce y scan son similares
    // reduce nos muestra en consola 15 que es el resultado final
    // scan nos muestra 1,3,6,10,15
    // from(this.numbers).pipe(
    //   scan(this.totalReducer,0)
    // ).subscribe(console.log);


    // from(this.users).pipe(
    //   scan((accumulator, currentValue)=>{
    //     return {...accumulator, ...currentValue};
    //   }, {})
    // ).subscribe(console.log);

    this.name$.subscribe(console.log);

  }

}
