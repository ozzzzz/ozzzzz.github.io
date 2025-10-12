# ozzzzz.github.io

Personal site for Bogdan Neterebskii. Built with Vite, React, Mantine, and Tailwind, and deployed as a single-page application on GitHub Pages.

## Pages

- **Home** – concise introduction with primary calls to action leading to the About me and Contacts sections.
- **About me** – toggle between brief and detailed CV-inspired views backed by strongly typed profile data.
- **Projects** – highlights ongoing initiatives that bridge software, data, and physical products.
- **Contacts** – splits outreach details into online links and an offline location snapshot.

## Content model

- `CV.md` acts as the source of truth for the latest career history.
- `src/utils/profileData.ts` mirrors the CV and feeds the About me views, Home highlights, and contact surfaces. Update it alongside `CV.md`.
- `src/components/AboutBrief.tsx` and `src/components/AboutDetailed.tsx` render the two modes on the About me page using the shared profile data.
- `src/components/ContactLinks.tsx` centralises button and badge rendering for contact information across pages.

## Development

```bash
npm install
npm run dev     # local development server
npm run lint    # static analysis
npm run build   # production bundle (used by GitHub Pages)
```

Deployments are handled via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## TODO
- Add proper color scheme without explicit colors in the codebase
- Add "funny" images to the photos
- Add more projects
- Update favicon
- Add links to the articles, patents, and other mentions