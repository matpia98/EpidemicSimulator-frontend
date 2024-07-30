import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { BaseChartDirective  } from 'ng2-charts';

import { SimulationListComponent } from './simulation-list/simulation-list.component';
import { SimulationDetailComponent } from './simulation-detail/simulation-detail.component';
import { SimulationEditComponent } from './simulation-edit/simulation-edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/simulations', pathMatch: 'full' },
  { path: 'simulations', component: SimulationListComponent },
  { path: 'simulations/:id', component: SimulationDetailComponent },
  { path: 'edit-simulation/:id', component: SimulationEditComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BaseChartDirective
  ],
  providers: []
})
export class AppModule { }
