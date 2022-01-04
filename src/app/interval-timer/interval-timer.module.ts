import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalTimerComponent } from './interval-timer.component';



@NgModule({
  declarations: [
    IntervalTimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IntervalTimerComponent
  ]
})
export class IntervalTimerModule { }
