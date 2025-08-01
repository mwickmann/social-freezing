# ❄️ Social Freezing ❄️ – MVP (NB: Denne er under utvikling)

**Live Demo**: [https://social-freezing.vercel.app](https://social-freezing.vercel.app)

Et MVP-prosjekt for å teste ut en idé jeg har jobbet med:  
En digital plattform der kvinner enkelt kan finne informasjon og kontakte klinikker som tilbyr eggfrysning. Jeg ønsket å bryne meg på noen teknologier jeg ikke har vært så mye borte i (PostgreSQL, Next.js, Vercel)

## Formål

Prosjektet er en enkel fullstack-applikasjon som gir innsikt i:
- Hvordan bygge moderne Next.js-applikasjoner
- Bruke Supabase med PostgreSQL og Prisma
- Full CRUD-håndtering for klinikker og brukere
- Lage et kontaktskjema med backend-håndtering

## Tech Stack

- **Next.js 14/15** med App Router  
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (PostgreSQL database + auth + API)
- **Prisma** (ORM for databasehåndtering)
- **Vercel** (for hosting)

## Funksjonalitet

### Klinikkendepunkter
- `POST /api/clinics` – opprette ny klinikk  
- `GET /api/clinics` – hente alle klinikker  
- `GET /api/clinics/:id` – hente klinikk basert på ID  
- `PUT /api/clinics/:id` – oppdatere klinikkinformasjon

### Brukerendepunkter
- `POST /api/users` – opprette ny bruker  
- `GET /api/users/:id` – hente bruker basert på ID

### Kontaktskjema
- `POST /api/contact` – sende inn kontaktskjema (lagres i databasen)

## TODO:
- Koble kontaktskjema til Python
- Logge inn med to-trinn (ell helst vipps)
- Tidy up the code
- Klarere info om klinikkene, hvorfor man skal fryse ned, booking av timer 
- Videreutvikle til en mobilapplikasjon via React Native
