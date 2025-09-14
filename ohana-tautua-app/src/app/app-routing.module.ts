import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigIslandRentalComponent } from './big-island-rental/big-island-rental.component';
import { OhanaAirBnbComponent } from './ohana-air-bnb/ohana-air-bnb.component';
import { OhanaHvacComponent } from './ohana-hvac/ohana-hvac.component';
import { OhanaTautuaManagerComponent } from './ohana-tautua-manager/ohana-tautua-manager.component';
import { WildTunaRestComponent } from './wild-tuna-rest/wild-tuna-rest.component';


const routes: Routes = [
  { path: '', component: WildTunaRestComponent },
  { path: 'bigislandrental', component: BigIslandRentalComponent },
  { path: 'ohanabnb', component: OhanaAirBnbComponent },
  { path: 'ohanahvac', component: OhanaHvacComponent },
  { path: 'manager', component: OhanaTautuaManagerComponent },
  { path: 'wildtuna', component: WildTunaRestComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404 cases
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
