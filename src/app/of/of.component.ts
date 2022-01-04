import { Component, OnInit } from '@angular/core';
import { Observer, of, range } from 'rxjs';

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

  source$ = of(1,2,3,4,5);
  //source2$ = range(1,5);

  constructor() { }

  ngOnInit(): void {

    this.source$.subscribe(this.observer);
    //this.source2$.subscribe(this.observer);
  }

}
