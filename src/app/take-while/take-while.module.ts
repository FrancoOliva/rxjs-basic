import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeWhileComponent } from './take-while.component';



@NgModule({
  declarations: [
    TakeWhileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TakeWhileComponent
  ]
})
export class TakeWhileModule { }
