import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesModule } from './observables/observables.module';
import { AsyncObservableModule } from './async-observable/async-observable.module';
import { CancelarObservablesModule } from './cancelar-observables/cancelar-observables.module';
import { FromEventModule } from './from-event/from-event.module';
import { OfModule } from './of/of.module';
import { IntervalTimerModule } from './interval-timer/interval-timer.module';
import { MapOperatorModule } from './map-operator/map-operator.module';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //rxjs
    ObservablesModule,
    AsyncObservableModule,
    CancelarObservablesModule,
    FromEventModule,
    OfModule,
    IntervalTimerModule,
    MapOperatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
