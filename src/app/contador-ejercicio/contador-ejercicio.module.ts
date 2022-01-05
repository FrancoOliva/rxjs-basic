import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorEjercicioComponent } from './contador-ejercicio.component';



@NgModule({
  declarations: [
    ContadorEjercicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorEjercicioComponent
  ]
})
export class ContadorEjercicioModule { }
