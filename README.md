# Course Platform

A web app for browsing and accessing online courses, with full user authentication and profile management.

---

## What It Does

Users land on a public page where they can browse available courses. From the navbar they can log in or create an account. Once authenticated, they have access to their profile and personalized content.

---

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Features

### Navbar
Persistent top navigation with a Browse Courses link and Log In / Sign Up buttons. Clicking the logo returns to the dashboard when logged in.

### Registration
A 3-step flow that walks the user through:
1. Email address
2. Password setup
3. Username and optional profile photo

### Login
Single-screen email and password login with inline error feedback.

### Edit Profile
Users can update their full name, email, phone number, age, and profile photo from their account settings.

---

## Auth in Development

While the backend is not yet connected, all auth flows run against local mock data. User sessions are stored in `localStorage` and persist across page refreshes. Swapping in real API calls requires no changes outside of `src/lib/mockAuth.ts`.