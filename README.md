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


# Registration Form

## What it does

The user fills in their details across 3 steps:

1. **Email** — enters their email address
2. **Password** — sets and confirms a password
3. **Profile** — picks a username and optionally uploads an avatar

Each step is validated before moving to the next. On the final step the form submits to the API and calls `onSuccess` with the created user.

## Steps indicator

Three bars at the top of the form show progress — completed steps turn solid indigo, the current step is light purple, upcoming steps are very light.

## Components

- `RegisterForm` — the main shell
- `FormTitle` — reusable heading + subtitle
- `FormInput` — reusable label + input + inline error
- `FormButton` — reusable submit button


