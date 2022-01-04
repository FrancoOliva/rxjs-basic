import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesModule } from './observables/observables.module';
import { AsyncObservableModule } from './async-observable/async-observable.module';
import { CancelarObservablesModule } from './cancelar-observables/cancelar-observables.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //rxjs
    ObservablesModule,
    AsyncObservableModule,
    CancelarObservablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
