import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Simulation, DailyData } from '../models/simulation.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  private apiUrl = 'http://localhost:8080/api/simulations';

  constructor(private http: HttpClient) {}

  getSimulations(): Observable<Simulation[]> {
    return this.http.get<{ simulationsDto: Simulation[] }>(this.apiUrl).pipe(
      map((response) => {
        if (Array.isArray(response.simulationsDto)) {
          return response.simulationsDto;
        } else {
          console.error('Response is not an array:', response);
          return [];
        }
      })
    );
  }

  getSimulation(id: number): Observable<Simulation> {
    return this.http.get<Simulation>(`${this.apiUrl}/${id}`);
  }

  getSimulationDailyData(id: number): Observable<DailyData[]> {
    return this.http.get<DailyData[]>(`${this.apiUrl}/${id}/daily-data`);
  }

  createSimulation(simulation: Simulation): Observable<Simulation> {
    return this.http.post<Simulation>(this.apiUrl, simulation);
  }

  updateSimulation(id: number, simulation: Simulation): Observable<Simulation> {
    return this.http.put<Simulation>(`${this.apiUrl}/${id}`, simulation);
  }

  deleteSimulation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
