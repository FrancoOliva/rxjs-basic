import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncObservableComponent } from './async-observable.component';



@NgModule({
  declarations: [
    AsyncObservableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AsyncObservableComponent
  ]
})
export class AsyncObservableModule { }
