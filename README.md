# vector-landing

Standalone Next.js/TinaCMS repo extracted from the Vector monorepo.

Cloudflare deploys build the Tina admin bundle locally before the OpenNext build. Generated admin files are not committed.
`pnpm build` works without Tina credentials and renders the press index empty when they are absent.

## Requirements

- Node.js 22.16.0
- pnpm 11.7.0

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
- `pnpm build`: build the Next.js app only
- `pnpm build:admin`: generate the Tina admin bundle in `public/admin`
- `pnpm build:admin -- --skip-cloud-checks`: generate the Tina admin bundle without validating TinaCloud credentials
- `pnpm lint`: run ESLint
- `pnpm start`: start the production server
