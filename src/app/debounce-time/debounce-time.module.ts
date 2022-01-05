import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceTimeComponent } from './debounce-time.component';



@NgModule({
  declarations: [
    DebounceTimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DebounceTimeComponent
  ]
})
export class DebounceTimeModule { }
