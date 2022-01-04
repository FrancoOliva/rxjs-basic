import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelarObservablesComponent } from './cancelar-observables.component';



@NgModule({
  declarations: [
    CancelarObservablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CancelarObservablesComponent
  ]
})
export class CancelarObservablesModule { }
