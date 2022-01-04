import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollProgressBarComponent } from './scroll-progress-bar.component';



@NgModule({
  declarations: [
    ScrollProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScrollProgressBarComponent
  ]
})
export class ScrollProgressBarModule { }
