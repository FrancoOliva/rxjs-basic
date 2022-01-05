import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanComponent } from './scan.component';



@NgModule({
  declarations: [
    ScanComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ScanComponent
  ]
})
export class ScanModule { }
