import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simulation-edit',
  templateUrl: './simulation-edit.component.html',
  styleUrls: ['./simulation-edit.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SimulationEditComponent implements OnInit {

  simulationForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private simulationService: SimulationService,
    private router: Router
  ) {
    this.simulationForm = this.fb.group({
      simulationName: ['', Validators.required],
      populationSize: ['', Validators.required],
      initialInfected: ['', Validators.required],
      infectionRate: ['', Validators.required],
      mortalityRate: ['', Validators.required],
      infectionDuration: ['', Validators.required],
      deathDuration: ['', Validators.required],
      simulationDuration: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.id = Number(id);
      this.simulationService.getSimulation(this.id).subscribe(data => {
        this.simulationForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.simulationForm.valid) {
      const simulation = this.simulationForm.value;
      if (this.id !== null) {
        this.simulationService.updateSimulation(this.id, simulation).subscribe(() => {
          this.router.navigate(['/simulations']);
        });
      } else {
        this.simulationService.createSimulation(simulation).subscribe(() => {
          this.router.navigate(['/simulations']);
        });
      }
    }
  }
}
