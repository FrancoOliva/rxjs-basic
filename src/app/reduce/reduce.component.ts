import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {

  numbers: number[] = [1,2,3,4,5];

  totalReducer = (accumulator:any, currentValue:any) =>{
    // console.log({accumulator,currentValue});
    return accumulator + currentValue;
  };

  total = this.numbers.reduce(this.totalReducer,0);

  constructor() { }

  ngOnInit(): void {

    // console.log(this.total); forma 1

    // from(this.numbers).pipe(
    //   reduce(this.totalReducer,0)
    // ).subscribe(console.log);

    interval(1000).pipe(
      take(3), // toma los primeros 3 valores: 0,1,2
      reduce(this.totalReducer,0)
    ).subscribe({
      next: console.log,
      complete: ()=> console.log('complete!')
    });
  }

}
