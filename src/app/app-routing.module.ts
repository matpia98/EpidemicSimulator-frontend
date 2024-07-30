import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SimulationDetailComponent } from './simulation-detail/simulation-detail.component';
import { SimulationEditComponent } from './simulation-edit/simulation-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/simulations', pathMatch: 'full' },
  { path: 'simulations', component: SimulationListComponent },
  { path: 'simulations/:id', component: SimulationDetailComponent },
  { path: 'edit-simulation/:id', component: SimulationEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
