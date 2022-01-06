import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhaustMapComponent } from './exhaust-map.component';



@NgModule({
  declarations: [
    ExhaustMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExhaustMapComponent
  ]
})
export class ExhaustMapModule { }
