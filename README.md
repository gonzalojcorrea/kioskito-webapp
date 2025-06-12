# Kioskito Admin Dashboard

This project provides a simple React-based admin dashboard with a professional layout.

## Features

- Left sidebar with categories:
  - Inventario
  - Ventas
- Concesiones
- Configuration section at the bottom of the dashboard
- Login screen that authenticates against the [Kioskito API](https://github.com/gonzalojcorrea/kioskito-api)

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm start
```

On launch the application displays a login form. Credentials are sent via `POST` to the API's `/login` endpoint. On successful login, the admin dashboard is shown.

### API configuration

The base URL for API requests is defined in `src/config.js`. Update the
`API_URL` constant if your backend runs on a different address.

### Styling

All CSS files reside in `src/styles` for easier maintenance. Colors are
defined in `variables.css` and Font Awesome is loaded from a CDN for basic
icons used in the sidebar.
