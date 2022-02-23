import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy-onpush',
  templateUrl: './change-detection-strategy-onpush.component.html',
  styleUrls: ['./change-detection-strategy-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionStrategyOnpushComponent {
  @Input() config: any;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
