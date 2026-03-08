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

---

## GitHub Issue Creation

The app exposes a server-side API route (`POST /api/create-issue`) that creates GitHub issues without exposing any credentials to the browser.

### Environment variable

| Variable | Description |
|---|---|
| `GITHUB_TOKEN` | A GitHub Personal Access Token (PAT) or a token generated from a GitHub App installation. |

**Required PAT scopes**

- For **public** repositories: `public_repo`
- For **private** repositories: `repo`

> **Note:** Classic PATs do not have an `issues`-only sub-scope — `repo` grants full repository access. If you need more granular permissions, use a fine-grained PAT (beta) and enable **Issues: Read & Write**, or use a GitHub App (see below).

If you prefer a GitHub App instead of a PAT:

1. Create a GitHub App with **Issues: Read & Write** permissions.
2. Install the app on the target repository.
3. Replace the token value in `GITHUB_TOKEN` with an installation access token generated via the GitHub App's private key. You can adapt `app/api/create-issue/route.ts` to call the `/app/installations/{id}/access_tokens` endpoint and use the resulting token.

> **Important:** Never hardcode secrets. Never pass `GITHUB_TOKEN` to the browser. The API route reads it from `process.env` on the server only.

### Local development

1. Create a `.env.local` file in the project root (already git-ignored):

   ```env
   GITHUB_TOKEN=ghp_yourPersonalAccessTokenHere
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open <http://localhost:3000/create-issue-demo> to test the form interactively.

4. Or verify the endpoint directly with `curl`:

   ```bash
   curl -X POST http://localhost:3000/api/create-issue \
     -H "Content-Type: application/json" \
     -d '{"owner":"bellemartineebusiness","repo":"Projektgaranti","title":"Test issue","body":"Created via curl"}'
   ```

   A successful response returns HTTP `201` and the created issue JSON from GitHub.

### Deploying to Vercel

1. Push the branch and open a pull request (or merge to your production branch).
2. In your Vercel project dashboard go to **Settings → Environment Variables**.
3. Add `GITHUB_TOKEN` with the value of your PAT (select **Production**, **Preview**, and **Development** environments as needed).
4. Redeploy. The `/api/create-issue` endpoint will be live.

### File locations

| File | Purpose |
|---|---|
| `app/api/create-issue/route.ts` | Server-side Next.js Route Handler (POST only) |
| `components/CreateIssueForm.tsx` | Client React form component |
| `app/create-issue-demo/page.tsx` | Demo page that mounts `CreateIssueForm` |

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
