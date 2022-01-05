import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduceComponent } from './reduce.component';



@NgModule({
  declarations: [
    ReduceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReduceComponent
  ]
})
export class ReduceModule { }
