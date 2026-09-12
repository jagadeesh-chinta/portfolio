# Jagadeesh Chinta — Portfolio

Professional portfolio website built with React and Express.js.

## Tech Stack

- **Frontend:** React, Vite, CSS3
- **Backend:** Express.js, Node.js
- **Styling:** Custom CSS Design System (no frameworks)

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
npm run install:all
```

### Development

Run both frontend and backend simultaneously:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:client    # React dev server (port 5173)
npm run dev:server    # Express server (port 5000)
```

### Production Build

```bash
npm run build
```

## Project Structure

```
portfolio/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── data/         # Portfolio data (single source of truth)
│   │   ├── styles/       # Component CSS modules
│   │   └── assets/       # Images and resume
│   └── public/           # Static files (robots.txt, sitemap.xml)
│
├── server/               # Express backend
│   ├── routes/           # API routes
│   ├── controllers/      # Route handlers
│   └── server.js         # Server entry point
│
├── .env.example          # Environment variable template
└── package.json          # Root workspace scripts
```

## Configuration

1. Copy `.env.example` to `server/.env`
2. Configure environment variables as needed
3. To enable email delivery, configure the email provider in `server/controllers/contactController.js`

## Features

- Dark/Light theme with localStorage persistence
- Responsive design (320px to 1440px+)
- Accessible (keyboard navigation, ARIA labels, focus management)
- SEO optimized (meta tags, Open Graph, JSON-LD, sitemap)
- Contact form with server-side validation
- Smooth scroll animations (respects prefers-reduced-motion)
- Project detail modals

## Contact

Jagadeesh Chinta — jagadeeshchinta6@gmail.com
