import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeComponent } from './take.component';



@NgModule({
  declarations: [
    TakeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TakeComponent
  ]
})
export class TakeModule { }
