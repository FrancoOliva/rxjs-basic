import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeUntilComponent } from './take-until.component';



@NgModule({
  declarations: [
    TakeUntilComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TakeUntilComponent
  ]
})
export class TakeUntilModule { }
