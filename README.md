# DD Photography — MERN Stack

A full-stack MERN (MongoDB, Express, React, Node.js) conversion of the DD Photography website.
Built with **JavaScript only** (no TypeScript). Design and layout are identical to the original Lovable-generated version.

---

## Project Structure

```
dd-photography-mern/
├── client/                  # React frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Images (hero, team, portfolio)
│   │   ├── components/      # All page sections (.jsx)
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── FooterSection.jsx
│   │   ├── hooks/
│   │   │   └── use-mobile.js
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── App.jsx          # Routes + page layout
│   │   ├── main.jsx         # React entry point
│   │   └── styles.css       # All custom styles + CSS variables
│   ├── index.html
│   ├── vite.config.js       # Dev server proxies /api → localhost:5000
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                  # Express + MongoDB backend
│   ├── models/
│   │   └── Contact.js       # Mongoose schema for booking inquiries
│   ├── routes/
│   │   └── contact.js       # POST /api/contact, GET /api/contact
│   ├── server.js            # Express app + MongoDB connection
│   ├── .env.example
│   └── package.json
│
├── package.json             # Root — runs both with concurrently
└── .gitignore
```

---

## Prerequisites

- **Node.js** v18 or later
- **MongoDB** running locally (`mongod`) — or provide a MongoDB Atlas URI

---

## Setup & Run

### 1. Install all dependencies

```bash
# From the project root
npm run install:all
```

Or manually:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 2. Configure the server environment

```bash
cd server
cp .env.example .env
# Edit .env if needed (default connects to local MongoDB on port 27017)
```

### 3. Run in development (both frontend + backend)

```bash
# From the project root
npm run dev
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

Vite automatically proxies all `/api` requests from the frontend to Express — no CORS issues in dev.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Save a booking inquiry to MongoDB |
| `GET` | `/api/contact` | List all inquiries (admin) |
| `GET` | `/api/health` | Health check |

### POST `/api/contact` — Request body

```json
{
  "name": "Thamilini",
  "phone": "+94 77 123 4567",
  "email": "thamilini@example.com",
  "shootType": "Wedding",
  "date": "2025-06-15",
  "message": "We'd love a traditional Tamil ceremony shoot."
}
```

---

## Build for Production

```bash
# Build the React frontend
npm run build
# Output: client/dist/

# Serve dist/ as static files from Express (add express.static in server.js)
```

---

## What Changed from the Original

| File | Change |
|------|--------|
| All `*.tsx` | Converted to `*.jsx` — TypeScript types, interfaces, and generics removed |
| `src/routes/index.tsx` | Replaced by `client/src/App.jsx` using `react-router-dom` |
| `src/routes/__root.tsx` | Replaced by `client/src/main.jsx` |
| `src/lib/utils.ts` | Converted to `utils.js` |
| `src/hooks/use-mobile.tsx` | Converted to `use-mobile.js` |
| `ContactSection` | Now calls `POST /api/contact` via axios instead of a mock submit |
| `styles.css` | Adapted from Tailwind v4 syntax to Tailwind v3 |
| *(new)* `server/` | Express server, Mongoose Contact model, contact API route |

**Design and layout: unchanged.**
