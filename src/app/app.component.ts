import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-basic';

  config = {
    position: 'top',
  };
  /**
   *  Cuando hagamos clic en el botón no veremos ningún registro.
      Eso es porque Angular está comparando el valor anterior con el valor nuevo por referencia, algo así como:
      if( oldValue !== newValue){ runChangeDetection(); }
      Recordar: booleans, strings, null y undefined son tipos primitivos.
      Todos los tipos primitivos se pasan por valor.
      Objects, arrays y functions, son pasados por valor pero, el valor es la copia de una referencia.

      Para poder activar una detección de cambios en nuestro componente, necesitamos cambiar la referencia
      del objeto (btn-2)
   */

  onClick() {
    this.config.position = 'bottom';
  }

  // Con este cambio veremos que la vista ha sido revisada y el nuevo valor se muestra como se esperaba.
  cambiarReferenciaObjeto() {
    this.config = {
      position: 'bottom',
    };
  }
}
