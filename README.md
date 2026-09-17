# SAMIVUE

SAMIVUE is a responsive movie explorer app built with React and Vite. Browse movies, search movies by title, and open a detail view with ratings, premiere dates, genres, summaries etc.

## Features

- Search movies and Tv shows by title
- Browse movies from the TVMaze API
- Open a modal with detailed information about a selected movie
- Responsive design for mobile and desktop
- Clean and modern UI with Tailwind CSS
- Error handling for API requests
- Loading state for API requests
- Accessible navigation and UI components


## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4 with the Vite plugin
- Lucide React for icons
- TVMaze API for show data
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

Clone the repository, move into the project directory, and install the dependencies:

```bash
git clone https://github.com/saminmahmud/SAMIVUE.git
cd SAMIVUE
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser at the URL printed in the terminal.


## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with the hero section. |
| `/movies` | Browse and search movies. |

## Data Source

The app uses the public [TVMaze API](https://www.tvmaze.com/api) through `src/services/get-movies.js`:

- Without a search term: `https://api.tvmaze.com/shows`
- With a search term: `https://api.tvmaze.com/search/shows?q=<query>`


## Project Structure

```text
src/
├── assets/                  Local application assets
├── components/              Shared UI components
│   ├── Error.jsx             API error state
│   ├── Footer.jsx            Site footer and social links
│   ├── Loading.jsx           Loading indicator
│   ├── MovieCard.jsx         Show card and modal trigger
│   ├── MovieModal.jsx        Show details modal
│   └── Navbar.jsx            Site navigation
├── layouts/
│   └── MainLayout.jsx        Shared navbar, content, and footer layout
├── pages/
│   ├── Home.jsx              Home page
│   └── Movies.jsx            Browse and search page
├── routes/
│   └── Router.jsx             Client-side route definitions
├── services/
│   └── get-movies.js          TVMaze API access
├── index.css                  Tailwind import and theme colors
└── main.jsx                   Application entry point
public/
└── banner.jpg                  Home page background image
```

## Live Link 
The app is deployed on Vercel and can be accessed at [https://samivue.vercel.app](https://samivue.vercel.app).