# Pokémon Explorer

Vortex Tech Web Development Internship - Week 4 (Advanced)

## Overview

Pokémon Explorer is a React application that fetches live data from a public API and displays it in a clean, responsive layout. The app has two pages: a list page showing a grid of Pokémon, and a detail page showing more information about the selected Pokémon. It handles loading and error states properly, and is deployed live on Vercel.

## Live Demo

https://YOUR-APP.vercel.app

## API Used

This project uses the PokéAPI, a free public API that does not need an API key.

- List endpoint: https://pokeapi.co/api/v2/pokemon?limit=24
- Detail endpoint: https://pokeapi.co/api/v2/pokemon/{id}

## Features

- Home page that shows 24 Pokémon in a responsive grid, each card with an image, name and number
- Detail page for every Pokémon showing its image, height, weight, types and abilities
- Two routes using React Router: `/` for the list and `/pokemon/:id` for the details
- Loading spinner displayed while data is being fetched
- Friendly error message displayed if the request fails or the Pokémon is not found
- Responsive layout built with CSS Grid that works on desktop and mobile
- Back button on the detail page to return to the list
- `vercel.json` rewrite rule so that refreshing a detail page does not give a 404 error

## How It Works

1. State variables store the fetched data, a loading flag and an error message.
2. `useEffect` runs the `fetch` call when the page loads. The call is wrapped in `try/catch/finally`, so loading is switched off and errors are caught in every case.
3. While loading is true, a spinner is shown. If there is an error, an error message is shown. Otherwise the data is displayed.
4. On the detail page, `useParams()` reads the Pokémon id from the URL and the app fetches that Pokémon's details.

## Project Structure

```
src/
  components/
    Loader.jsx
    ErrorMessage.jsx
  pages/
    Home.jsx
    Detail.jsx
  App.jsx
  App.css
  index.css
  main.jsx
vercel.json
```

## Run Locally

1. Clone the repository:
   git clone https://github.com/areebarasoolkhoso-boop/vortextech-webdev-week4.git
2. Go into the project folder:
   cd vortextech-webdev-week4
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open the local address shown in the terminal (usually http://localhost:5173).

## Tech Stack

- React
- Vite
- React Router
- CSS (Grid and Flexbox)
- PokéAPI
- Deployed on Vercel

Vortex Tech Web Development Internship — Week 4_React App