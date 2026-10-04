# Pokémon Explorer (Vortex Tech Week 4)

A React app that fetches live data from the PokéAPI and displays it in a responsive grid, with a detail page for each Pokémon.

## Live Demo
https://YOUR-APP.vercel.app

## API Used
[PokéAPI](https://pokeapi.co/) - free public API, no API key required.

- List: `https://pokeapi.co/api/v2/pokemon?limit=24`
- Detail: `https://pokeapi.co/api/v2/pokemon/{id}`

## Features
- Home page showing 24 Pokémon in a responsive CSS Grid
- Detail page (`/pokemon/:id`) with height, weight, types and abilities
- Routing with React Router (`/` and `/pokemon/:id`)
- Loading spinner while data is being fetched
- Friendly error message if the request fails
- Mobile friendly layout

## Run Locally
```bash
npm install
npm run dev
```

## Tech Stack
React, Vite, React Router, CSS