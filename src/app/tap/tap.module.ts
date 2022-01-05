import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapComponent } from './tap.component';



@NgModule({
  declarations: [
    TapComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TapComponent
  ]
})
export class TapModule { }
