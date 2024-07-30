import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';
import { Simulation } from '../../models/simulation.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
})
export class SimulationListComponent implements OnInit {
  simulations: Simulation[] = [];
  displayedColumns: string[] = [
    'id',
    'simulationName',
    'populationSize',
    'initialInfected',
    'infectionRate',
    'mortalityRate',
    'infectionDuration',
    'deathDuration',
    'simulationDuration',
    'actions',
  ];
  showSimulationButtons = false;

  constructor(
    private simulationService: SimulationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSimulations();
  }

  fetchSimulations(): void {
    this.simulationService.getSimulations().subscribe({
      next: (data: Simulation[]) => {
        this.simulations = data;
        console.log('Fetched simulations:', this.simulations); // Debugging statement
      },
      error: (error) => {
        console.error('Error fetching simulations:', error);
      },
    });
  }

  createNewSimulation() {
    this.router.navigate(['/edit-simulation', 'new']);
  }

  deleteSimulation(id: number) {
    this.simulationService.deleteSimulation(id).subscribe(() => {
      this.fetchSimulations();
    });
  }

  viewSimulationDetails(id: number) {
    this.router.navigate(['/simulations', id]);
  }

  showSimulations() {
    this.showSimulationButtons = !this.showSimulationButtons;
    console.log(
      'Show Simulations button clicked. showSimulationButtons:',
      this.showSimulationButtons
    ); // Debugging statement
    if (this.showSimulationButtons) {
      this.fetchSimulations();
    }
  }
}
