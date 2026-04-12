This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Auth & Profile Forms

Modal forms for Register, Login, and Edit Profile built with React, TypeScript and Tailwind CSS.

---

## Registration Form

3-step form that collects user details progressively.

1. **Email** — validates format
2. **Password** — min 6 chars, must match confirm
3. **Profile** — username + optional avatar upload (JPG, PNG, WebP)

On final step submits to API (or `mockRegister` in dev) and calls `onSuccess(user)`.

**Hook:** `useRegisterForm` — step state, per-step validation, avatar file handling, API submission.

---

## Login Form

Single step — email + password. Calls `onSuccess(user)` on success, shows inline API error on failure.

**Hook:** `useLoginForm` — validation, API submission (or `mockLogin` in dev).

---

## Edit Profile Form

Shows current user's avatar, username, and online status at the top. Fields: Full Name, Email, Mobile Number, Age, Avatar upload.

**Hook:** `useEditProfileForm(initialUser, onSuccess)` — initializes fields from the `User` object, validates, submits PATCH to API.

---


## Mock Auth (dev only)

Before the backend is ready, `src/lib/mockAuth.ts` provides:
- `mockLogin(email, password)` — finds user in `src/data/mockUsers.json`
- `mockRegister(email, username)` — returns a new fake user

User is persisted via `src/lib/storage.ts` (`saveUser`, `getUser`, `clearUser`) using `localStorage`. Swap for real API calls when backend is ready — nothing else changes.