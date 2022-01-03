import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesModule } from './observables/observables.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //rxjs
    ObservablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
