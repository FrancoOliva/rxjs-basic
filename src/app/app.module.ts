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
import { FilterModule } from './filter/filter.module';
import { ScrollProgressBarModule } from './scroll-progress-bar/scroll-progress-bar.module';
import { ReduceModule } from './reduce/reduce.module';
import { ScanModule } from './scan/scan.module';
import { ContadorEjercicioModule } from './contador-ejercicio/contador-ejercicio.module';
import { TapModule } from './tap/tap.module';





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
    MapOperatorModule,
    FilterModule,
    ScrollProgressBarModule,
    ReduceModule,
    ScanModule,
    ContadorEjercicioModule,
    TapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
