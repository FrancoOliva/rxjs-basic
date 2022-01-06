import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatMapComponent } from './concat-map.component';



@NgModule({
  declarations: [
    ConcatMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConcatMapComponent
  ]
})
export class ConcatMapModule { }
