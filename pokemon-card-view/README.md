# Pokémon Card View

This project is a React application that displays a multi-card view of the original 151 Pokémon using Bootstrap for styling. The data is fetched from the Pokémon API.

## Features

- Displays cards for each of the original 151 Pokémon.
- Responsive design using Bootstrap.
- Fetches Pokémon data from the API: [PokéAPI](https://pokeapi.co/api/v2/pokemon?limit=151).

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```
   cd pokemon-card-view
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Components

- **PokemonCard**: Displays individual Pokémon information.
- **PokemonList**: Fetches and maps over Pokémon data to render multiple `PokemonCard` components.

## Styles

The application uses Bootstrap for styling, and custom styles are defined in `src/styles/App.css`.

## License

This project is licensed under the MIT License.