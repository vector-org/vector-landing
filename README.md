# vector-landing

Standalone Next.js/TinaCMS repo extracted from the Vector monorepo.

## Requirements

- Node.js 22.16.0
- pnpm 9.15.4

## Setup

```bash
pnpm install
# PowerShell
Copy-Item .env.example .env.local

# cmd.exe
copy .env.example .env.local
pnpm dev
```

## Environment Variables

- `NEXT_PUBLIC_TINA_CLIENT_ID`: Tina public client ID
- `TINA_TOKEN`: Tina read/build token
- `SUPABASE_URL`: Supabase project URL for `/api/subscribe`
- `SUPABASE_ANON_KEY`: Supabase anon key for `/api/subscribe`
- `HUBSPOT_ACCESS_TOKEN`: HubSpot token for `/api/newsletter`

## Scripts

- `pnpm dev`: run Tina local dev + Next.js
- `pnpm build`: build Tina admin assets and the Next.js app
- `pnpm lint`: run ESLint
- `pnpm start`: start the production server
