import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistinctUntilChangedComponent } from './distinct-until-changed.component';



@NgModule({
  declarations: [
    DistinctUntilChangedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DistinctUntilChangedComponent
  ]
})
export class DistinctUntilChangedModule { }
