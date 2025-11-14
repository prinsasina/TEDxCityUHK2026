# TEDxCityUHK 2026

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

This repository contains the source code and assets for the website of the 2026 TEDxCityU event series. The site highlights the annual theme, showcases speakers and performers, and introduces the student teams that organize the event.

## Project Structure

The main React application is located in the `tedx-cityu/` directory.

- `tedx-cityu/` – Create React App project that powers the site
  - `src/Pages/` – Top-level routed pages (Home, Team, Speakers, Past Events)
  - `src/Components/` – Reusable UI building blocks (navbar, banners, cards, footers, etc.)
  - `src/Data/` – JSON data sources for teams, sponsors, performers, and speakers
  - `src/Assets/` – Images and media used across the pages
  - `public/` – Static assets served as-is (favicon, hero images, HTML template)
- `LICENSE` – Project license (The Unlicense)
- `.gitignore` – Consolidated ignore rules for the full repository

## Tech Stack

- React 18 with Create React App
- React Router for client-side navigation
- Styled Components for component-level styling
- Splide (`@splidejs/react-splide`) for carousels and sliders
- Tailwind CSS configuration included for utility styling (optional)

## Getting Started

1.  Navigate to the app directory:
    ```bash
    cd TEDxCityUHK2026/tedx-cityu
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
    The site will open at `http://localhost:3000`.

## Available Scripts

In the project directory, you can also run:

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.