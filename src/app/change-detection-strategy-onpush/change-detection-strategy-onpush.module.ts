import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategyOnpushComponent } from './change-detection-strategy-onpush.component';

@NgModule({
  declarations: [ChangeDetectionStrategyOnpushComponent],
  exports: [ChangeDetectionStrategyOnpushComponent],
  imports: [CommonModule],
})
export class ChangeDetectionStrategyOnpushModule {}
