import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeafletMapComponent } from '../app/leaflet-map/leaflet-map.component';

const routes: Routes = [
  { path: '', component:  LeafletMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
