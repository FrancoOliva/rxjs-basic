import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss'],
})
export class ChangeDetectionStrategyComponent {
  @Input() name!: string;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  // Angular por defecto utiliza el ChangeDetectionStrategy.Default
  // Este tipo de change detection strategy no asume nada sobre nuestra app
  // Esto quiere decir que cualquier cosa desde: users events, timers, promises, etc
  // Van a ejecutar/disparar una detección de cambios en todos los componentes
  // Esto en una aplicación grande de Angular, traería problemas de perfomance/rendimiento.
  // Pero para este tipo de situaciones, podemos utilizar el OnPush
}
