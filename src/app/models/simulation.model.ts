export interface Simulation {
  id: number;
  simulationName: string;
  populationSize: number;
  initialInfected: number;
  infectionRate: number;
  mortalityRate: number;
  infectionDuration: number;
  deathDuration: number;
  simulationDuration: number;
  dailyDataList: DailyData[];
}

export interface DailyData {
  id: number;
  day: number;
  infected: number;
  susceptible: number;
  deceased: number;
  recovered: number;
}

export interface SimulationRequest {
  simulationName: string;
  populationSize: number;
  initialInfected: number;
  infectionRate: number;
  mortalityRate: number;
  infectionDuration: number;
  deathDuration: number;
  simulationDuration: number;
}
