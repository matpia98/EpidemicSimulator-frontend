import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';  // Import NgChartsModule

import { SimulationListComponent } from './app/components/simulation-list/simulation-list.component'; 
import { SimulationDetailComponent } from './app/components/simulation-detail/simulation-detail.component';
import { SimulationEditComponent } from './app/components/simulation-edit/simulation-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/simulations', pathMatch: 'full' },
  { path: 'simulations', component: SimulationListComponent },
  { path: 'simulations/:id', component: SimulationDetailComponent },
  { path: 'edit-simulation/:id', component: SimulationEditComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      RouterModule.forRoot(routes),
      BaseChartDirective  // Import NgChartsModule
    )
  ]
}).catch(err => console.error(err));
