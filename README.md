# QuoteSpace

Discover quotes, save favorites, and turn any quote into a downloadable PNG card. Frontend-only: no backend, database, auth, or external API.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm test           # validates the built-in quote data
npm run build && npm start
```

- Quotes live in `src/data/quotes.ts`. Favorites are stored as IDs in `localStorage` (`quotespace:favorites`), per browser.
- Deploys to Vercel as a plain Next.js site; no environment variables needed.
