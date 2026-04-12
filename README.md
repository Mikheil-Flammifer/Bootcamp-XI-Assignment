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


# Auth Forms

Two modal forms — Register and Login — built with React, TypeScript and Tailwind CSS. Both share the same reusable UI components and can be switched between on any page.

---

## Registration Form

A 3-step form that collects user details progressively to keep each screen focused.

**Steps:**
1. **Email** — user enters their email address
2. **Password** — user sets and confirms a password
3. **Profile** — user picks a username and optionally uploads an avatar (JPG, PNG, WebP)

Each step is validated before advancing. On the final step the form submits to the API and calls `onSuccess` with the created user.


## Login Form

A single-step form with email and password fields.

The user enters their credentials and submits. On success `onSuccess` is called with the authenticated user. On failure an inline API error is shown above the fields.



