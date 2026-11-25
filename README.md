# Aquanora Smart

A responsive Next.js foundation for the Aquanora Smart international knowledge, learning and professional development brand.

## Included in this starter

- Premium responsive landing page
- Academy course catalogue and course detail routes
- Knowledge, Business, Media, About and Contact pages
- Shared navigation, footer and design system
- SEO metadata, sitemap and robots rules
- Static-export configuration for Cloudflare Pages
- Clear next-stage architecture notes

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static website is generated in the `out/` directory.

## Deploy to Cloudflare Pages

This initial release is a static Next.js website and is configured for Cloudflare Pages Static HTML Export.

1. In the Cloudflare dashboard, open **Workers & Pages** and choose **Create application**.
2. Select **Pages** and import the GitHub repository `REHMANMAZHAR/aquanora`.
3. Set the production branch to `main`.
4. Choose the **Next.js (Static HTML Export)** framework preset, or enter these settings manually:

| Setting | Value |
|---|---|
| Build command | `npx next build` |
| Build output directory | `out` |

5. Deploy to the Cloudflare preview URL and test all routes before connecting `aquanorasmart.uk`.

Cloudflare's current guidance recommends Workers for full-stack Next.js applications. If Aquanora later needs server-side rendering, API routes, user accounts, protected lessons or dynamic application features, plan a move to Cloudflare Workers using the currently recommended Next.js adapter rather than reintroducing the retired `@cloudflare/next-on-pages` package.

## Important launch notes

- The first release is a public marketing website, not a functioning paid LMS.
- Course cards are catalogue/interest links; student accounts, payment processing, protected lessons, graded exams and automated certificate issuance are future phases.
- Do not claim accreditation or recognition by IOSH, NEBOSH, ISO, a government or another awarding body unless a formal authorization exists.
- Add a real business email, legal entity details, privacy policy, terms, cookie notice (if required), refund policy and payment-provider disclosures before accepting payments.
- Do not put API keys or secrets in public source code.

## Suggested next phases

1. Define a Cloudflare D1 schema for users, courses, lessons, enrolments, assessments and certificates.
2. Add secure authentication and role-based access when moving to a server-capable deployment.
3. Add course authoring and protected lesson delivery.
4. Integrate a payment provider that explicitly onboards businesses in Pakistan.
5. Add assessment attempts, certificate IDs and a public verification endpoint.
6. Add admin reporting and corporate learner management.
