# ArticleAISlop — `page.tsx`

Een Next.js-paginacomponent die een krantenartikel uit _De Standaard_ nabootst. De pagina toont het artikel **"Leidt AI-slop tot de dood van sociale media?"** van Dominique Deckmyn in een volledig opgemaakte, interactieve lay-out.

## Installatie & gebruik

1. Plaats `page.tsx` in een route-map van je Next.js App Router, bijvoorbeeld:

```
app/
└── artikel/
    └── page.tsx
```

2. Voeg de hero-afbeelding toe aan je `public`-map:

```
public/
└── katten.png
```

3. Start de ontwikkelserver:

```bash
npm run dev
```

4. Open `http://localhost:3000/artikel` in je browser.

---

## Structuur van de component

```
ArticleAISlop
├── Top bar          — Logo (DS) + huidige datum
├── Artikelkop       — Sectielabel, krantenkop, intro, auteur, datum
├── Actieknoppen     — Luisteren / Delen / Bewaren (met interactieve state)
├── Hero-afbeelding  — katten.png + bijschrift
├── Artikeltekst
│   ├── Inleidende paragrafen
│   ├── Steps-box        — De drie tijdperken van Zuckerberg
│   ├── Tool pills        — Overzicht van AI-videogenerators
│   ├── Tip-box          — Persoonlijke noot van de auteur
│   └── Afsluiting
├── Tags             — Cultuur en media · De Technocraat · …
└── Zijbalk          — "Lees ook"-links
```

---

## Interactiviteit

De component beheert drie lokale states via `useState`:

| State       | Gedrag                                                   |
| ----------- | -------------------------------------------------------- |
| `listening` | Schakelknop — actief/inactief                            |
| `shared`    | Tijdelijke bevestiging ("Gedeeld!"), reset na 2 seconden |
| `saved`     | Schakelknop — slaat artikel op/verwijdert opslaan        |

---

## Vormgeving

De stijlen zijn gedefinieerd als een inline `<style>`-blok met CSS-variabelen:

```css
--ds-red: #c8102e /* Hoofdkleur / accentkleur */ --ds-red-dark: #9e0c22
  /* Hover-toestand rode elementen */ --ds-black: #0f0f0f /* Kopteksten */
  --ds-gray-dark: #2d2d2d /* Broodtekst */ --ds-gray-mid: #666
  /* Bijschriften, meta-info */ --ds-gray-light: #f0eeeb
  /* Achtergrond subtiele elementen */ --ds-border: #e0ddd8 /* Randen */
  --ds-bg: #faf9f7 /* Paginaachtergrond */;
```

**Lettertypen** (geladen via Google Fonts):

- `Playfair Display` — koppen
- `Source Serif 4` — broodtekst
- `DM Sans` — UI-elementen, labels, meta

De lay-out gebruikt een **CSS Grid** van twee kolommen (`1fr 240px`). Op schermen smaller dan 700 px schakelt de zijbalk uit en valt de pagina terug op één kolom.

---

## Hero-afbeelding aanpassen

De component verwacht een bestand `katten.png` in de `public`-map. Vervang dit door een eigen afbeelding:

```tsx
// In page.tsx, regel ~270:
<img src="jouw-afbeelding.jpg" alt="Beschrijving" />
```

---

## Licentie

Dit component is gebaseerd op een artikel van _De Standaard_ (© Mediahuis) en is uitsluitend bedoeld voor educatieve of persoonlijke doeleinden. Gebruik de inhoud niet commercieel zonder toestemming van de rechthebbende.
