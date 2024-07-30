# Epidemic Simulator - Frontend

This is the frontend application for the Epidemic Simulator project. It's built using Angular and provides a user interface for creating, viewing, and managing epidemic simulations.

## Features

- View list of simulations
- Create new simulations
- View detailed simulation results including charts
- Edit existing simulations
- Delete simulations

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)
- Angular CLI (v12.x or later)
- The backend part of the application needs to be downloaded for the application to work properly. Download this repository:

https://github.com/matpia98/EpidemicSimulator-backend.git

Clone this repository and then follow the instructions in the README.me file

## Installation

1. Clone the repository:

```git
git clone https://github.com/matpia98/EpidemicSimulator-frontend.git
```

2. Navigate to the project directory:
   
```node
cd EpidemicSimulator-frontend
```

3. Install the dependencies:

```node
npm install
```

## Running the Application

To run the application in development mode:

```node
ng serve
```

Navigate to `http://localhost:4200/` in your web browser. The application will automatically reload if you change any of the source files.


## Project Structure

- `src/app/components/` - Contains all the Angular components
- `src/app/services/` - Contains services for API communication
- `src/app/models/` - Contains TypeScript interfaces for data models

## Key Components

- `simulation-list.component` - Displays a list of all simulations
- `simulation-detail.component` - Shows detailed view of a single simulation
- `simulation-edit.component` - Form for editing simulations

## Services

- `simulation.service` - Handles API calls to the backend for CRUD operations on simulations

## Models

The application uses the following key data models:

- `Simulation` - Represents a single epidemic simulation with properties such as:
  - `id`: Unique identifier for the simulation
  - `simulationName`: Name of the simulation
  - `populationSize`: Total population size
  - `initialInfected`: Number of initially infected individuals
  - `infectionRate`: Rate of infection spread
  - `mortalityRate`: Rate of mortality among infected
  - `infectionDuration`: Duration of the infectious period
  - `deathDuration`: Time from infection to potential death
  - `simulationDuration`: Total duration of the simulation

- `DailyData` - Represents the daily statistics of a simulation:
  - `day`: The day number
  - `infected`: Number of infected individuals
  - `susceptible`: Number of susceptible individuals
  - `deceased`: Number of deceased individuals
  - `recovered`: Number of recovered individuals


## Styling

This project uses Angular Material for UI components

## Testing

Run unit tests with:

```node
ng test
```

Run end-to-end tests with:

```node
ng e2e
```

## Contributing

Contributions to the Epidemic Simulator Frontend are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/SomeFeature`)
3. Commit your changes (`git commit -m 'Add some /SomeFeature'`)
4. Push to the branch (`git push origin feature/SomeFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Contact

- Developer: [Mateusz Piasecki](https://github.com/matpia98)
- Project Link: https://github.com/matpia98/EpidemicSimulator-frontend
