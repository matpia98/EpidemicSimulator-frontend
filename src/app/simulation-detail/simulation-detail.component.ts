import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimulationService } from '../simulation.service';
import { Simulation, DailyData } from '../simulation.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-simulation-detail',
  templateUrl: './simulation-detail.component.html',
  styleUrls: ['./simulation-detail.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, BaseChartDirective],
})
export class SimulationDetailComponent implements OnInit {
  simulation: Simulation | undefined;
  dailyData: DailyData[] = [];

  // Chart configuration
  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
  };

  constructor(
    private route: ActivatedRoute,
    private simulationService: SimulationService,
    private router: Router
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.simulationService.getSimulation(id).subscribe((data) => {
      this.simulation = data;
      this.fetchDailyData(id);
    });
  }

  fetchDailyData(id: number): void {
    this.simulationService.getSimulationDailyData(id).subscribe((data) => {
      this.dailyData = data;
      this.setupChartData();
    });
  }

  setupChartData() {
    if (this.dailyData) {
      const days = this.dailyData.map((d) => d.day);
      const infected = this.dailyData.map((d) => d.infected);
      const susceptible = this.dailyData.map((d) => d.susceptible);
      const deceased = this.dailyData.map((d) => d.deceased);
      const recovered = this.dailyData.map((d) => d.recovered);

      this.lineChartData = {
        labels: days,
        datasets: [
          {
            data: infected,
            label: 'Pi (Infected)',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255,0,0,0.3)',
            fill: false,
          },
          {
            data: susceptible,
            label: 'Pv (Susceptible)',
            borderColor: '#0000FF',
            backgroundColor: 'rgba(0,0,255,0.3)',
            fill: false,
          },
          {
            data: deceased,
            label: 'Pm (Deceased)',
            borderColor: '#00FF00',
            backgroundColor: 'rgba(0,255,0,0.3)',
            fill: false,
          },
          {
            data: recovered,
            label: 'Pr (Recovered)',
            borderColor: '#FFFF00',
            backgroundColor: 'rgba(255,255,0,0.3)',
            fill: false,
          },
        ],
      };
    }
  }

  editSimulation() {
    if (this.simulation) {
      this.router.navigate(['/edit-simulation', this.simulation.id]);
    }
  }

  deleteSimulation() {
    if (
      this.simulation &&
      confirm('Are you sure you want to delete this simulation?')
    ) {
      this.simulationService.deleteSimulation(this.simulation.id).subscribe(
        () => {
          console.log('Simulation deleted successfully');
          this.router.navigate(['/simulations']); // Navigate back to the list of simulations
        },
        (error) => {
          console.error('Error deleting simulation:', error);
          // Handle error (e.g., show an error message to the user)
        }
      );
    }
  }
}
