import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy.component';

@NgModule({
  declarations: [ChangeDetectionStrategyComponent],
  exports: [ChangeDetectionStrategyComponent],
  imports: [CommonModule],
})
export class ChangeDetectionStrategyModule {}
