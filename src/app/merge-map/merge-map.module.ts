import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeMapComponent } from './merge-map.component';



@NgModule({
  declarations: [
    MergeMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MergeMapComponent
  ]
})
export class MergeMapModule { }
