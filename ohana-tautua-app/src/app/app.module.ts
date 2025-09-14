/*
==========================================================================
Project: Ohana Tautua
Created by: McKenzie Allen 08/17/2025.
Design by: Coa and Malia Mislang-Darden 08/17/2025.

Module base component.
==========================================================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigIslandRentalComponent } from './big-island-rental/big-island-rental.component';
import { WildTunaRestComponent } from './wild-tuna-rest/wild-tuna-rest.component';
import { OhanaAirBnbComponent } from './ohana-air-bnb/ohana-air-bnb.component';
import { OhanaTautuaManagerComponent } from './ohana-tautua-manager/ohana-tautua-manager.component';
import { OhanaHvacComponent } from './ohana-hvac/ohana-hvac.component';

@NgModule({
  declarations: [
    AppComponent,
    OhanaHvacComponent,
    BigIslandRentalComponent,
    WildTunaRestComponent,
    OhanaAirBnbComponent,
    OhanaTautuaManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
