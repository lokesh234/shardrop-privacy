# Prismfall privacy policy

The privacy policy site for Prismfall, built with React and Vite. Live at https://lokesh234.github.io/prismfall-privacy/

## Develop

```sh
npm install
npm run dev      # local server with hot reload
npm run build    # production build into dist/
```

Fonts are bundled with the site, so the page makes no third-party requests.

## Edit

- Contact email, developer name and effective date: `src/config.ts`
- Policy text: `src/App.tsx`, plus the data map (`src/components/DataMap.tsx`), choices and FAQ components
- Styles: `src/styles.css`

When the app's data handling changes (new ad network, analytics, accounts), update the text and `EFFECTIVE_DATE`.

## Deploy

Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`.
