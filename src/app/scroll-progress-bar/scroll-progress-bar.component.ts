import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-scroll-progress-bar',
  templateUrl: './scroll-progress-bar.component.html',
  styleUrls: ['./scroll-progress-bar.component.scss']
})
export class ScrollProgressBarComponent implements OnInit {

  // elems
  progressBar: any = document.querySelector('.progress-bar');
  

  // streams
  scroll$: Observable<any>  = fromEvent(document,'scroll');

  progress$: Observable<any> = this.scroll$.pipe(
    // percent progress
    map(({target}) => this.calculateScrollPercent(
      target.documentElement
    ))
  );

  constructor() { }

  ngOnInit(): void {

    this.scroll$.subscribe(console.log);

    // no pudimos hacer funcionar progressBar
   
  }

  // helpers - function
  calculateScrollPercent(element:any){
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = element;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

}
