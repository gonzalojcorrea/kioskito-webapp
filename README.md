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
