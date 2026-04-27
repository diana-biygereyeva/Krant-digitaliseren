"use client";

import { useState } from "react";

export default function ArticleSpartacus() {
  const [liked, setLiked] = useState(false);
  const [listening, setListening] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --ds-red: #c8102e;
          --ds-red-dark: #9e0c22;
          --ds-black: #0f0f0f;
          --ds-gray-dark: #2d2d2d;
          --ds-gray-mid: #666;
          --ds-gray-light: #f0eeeb;
          --ds-border: #e0ddd8;
          --ds-bg: #faf9f7;
        }

        .article-page {
          background: var(--ds-bg);
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ds-black);
        }

        /* Top bar */
        .top-bar {
          border-bottom: 3px solid var(--ds-red);
          background: #fff;
          padding: 10px 0;
        }
        .top-bar-inner {
          max-width: 880px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .site-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 26px;
          letter-spacing: -0.5px;
          color: var(--ds-red);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .top-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: var(--ds-gray-mid);
          font-weight: 300;
        }

        /* Article wrapper */
        .article-wrapper {
          max-width: 880px;
          margin: 0 auto;
          padding: 40px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 240px;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .article-wrapper { grid-template-columns: 1fr; gap: 32px; }
          .sidebar { display: none; }
        }

        /* Section label */
        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--ds-red);
          margin-bottom: 14px;
          display: block;
        }

        /* Headline */
        .article-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4.5vw, 44px);
          font-weight: 700;
          line-height: 1.18;
          color: var(--ds-black);
          margin: 0 0 20px;
          letter-spacing: -0.3px;
        }

        /* Intro / deck */
        .article-intro {
          font-family: 'Source Serif 4', serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.55;
          color: var(--ds-gray-dark);
          margin: 0 0 24px;
          border-left: 3px solid var(--ds-red);
          padding-left: 16px;
        }

        /* Meta row */
        .article-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c8102e 0%, #7a0019 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          flex-shrink: 0;
        }
        .author-name {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          color: var(--ds-black);
        }
        .article-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: var(--ds-gray-mid);
          font-weight: 300;
        }

        /* Action buttons */
        .action-row {
          display: flex;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.3px;
          cursor: pointer;
          border: 1.5px solid var(--ds-border);
          background: #fff;
          color: var(--ds-gray-dark);
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.12s ease;
          user-select: none;
          outline: none;
        }
        .btn:hover {
          background: var(--ds-gray-light);
          border-color: #c0bcb5;
          transform: translateY(-1px);
        }
        .btn:active { transform: translateY(0); }
        .btn-active {
          background: var(--ds-red) !important;
          border-color: var(--ds-red) !important;
          color: white !important;
        }
        .btn-active:hover {
          background: var(--ds-red-dark) !important;
          border-color: var(--ds-red-dark) !important;
        }
        .btn svg { width: 14px; height: 14px; flex-shrink: 0; }

        /* Hero image placeholder */
        .hero-image {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(160deg, #1a1a2e 0%, #2d1b35 50%, #1a0a0a 100%);
          border-radius: 2px;
          margin-bottom: 10px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-image::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(200,16,46,0.04) 40px,
            rgba(200,16,46,0.04) 80px
          );
        }
        .hero-caption {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: var(--ds-gray-mid);
          margin-bottom: 28px;
          font-style: italic;
        }

        /* Article body */
        .article-body {
          font-size: 16.5px;
          line-height: 1.75;
          color: var(--ds-gray-dark);
        }
        .article-body p {
          margin: 0 0 22px;
        }
        .article-body strong {
          color: var(--ds-black);
          font-weight: 600;
        }
        .article-body em {
          font-style: italic;
          color: var(--ds-gray-dark);
        }

        /* Pull quote */
        .pull-quote {
          border-left: 4px solid var(--ds-red);
          padding: 12px 20px;
          margin: 32px 0;
          background: #fff;
          border-radius: 0 3px 3px 0;
        }
        .pull-quote p {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-style: italic;
          line-height: 1.5;
          color: var(--ds-black);
          margin: 0;
          font-weight: 400;
        }

        /* Tags */
        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 36px;
          padding-top: 24px;
          border-top: 1px solid var(--ds-border);
        }
        .tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--ds-gray-mid);
          border: 1px solid var(--ds-border);
          padding: 5px 12px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.12s;
        }
        .tag:hover {
          background: var(--ds-red);
          color: white;
          border-color: var(--ds-red);
          transform: translateY(-1px);
        }

        /* Sidebar */
        .sidebar {
          position: sticky;
          top: 24px;
        }
        .sidebar-box {
          background: #fff;
          border: 1px solid var(--ds-border);
          border-top: 3px solid var(--ds-red);
          padding: 18px;
          border-radius: 0 0 3px 3px;
        }
        .sidebar-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ds-red);
          margin-bottom: 14px;
        }
        .sidebar-item {
          border-bottom: 1px solid var(--ds-border);
          padding: 12px 0;
          cursor: pointer;
          transition: padding-left 0.18s;
        }
        .sidebar-item:last-child { border-bottom: none; padding-bottom: 0; }
        .sidebar-item:first-of-type { padding-top: 0; }
        .sidebar-item:hover { padding-left: 6px; }
        .sidebar-item-title {
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          line-height: 1.45;
          color: var(--ds-black);
          font-weight: 400;
        }
        .sidebar-item-section {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: var(--ds-red);
          font-weight: 500;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        /* Divider rule */
        .rule { border: none; border-top: 1px solid var(--ds-border); margin: 28px 0; }
      `}</style>

      <div className="article-page">
        {/* Top bar */}
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="site-logo">DS</div>
            <div className="top-date">Maandag 27 april 2026</div>
          </div>
        </div>

        {/* Main layout */}
        <div className="article-wrapper">
          {/* Main content */}
          <main>
            <span className="section-label">De Technocraat</span>

            <h1 className="article-headline">
              Was het verzet van Dario Amodei tegen minister Hegseth het "Ik ben Spartacus!"-moment van Silicon Valley?
            </h1>

            <p className="article-intro">
              Het verzet van Dario Amodei tegen minister van "Oorlog" Pete Hegseth, en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
            </p>

            {/* Meta */}
            <div className="article-meta">
              <div className="author-avatar">DD</div>
              <div>
                <div className="author-name">Dominique Deckmyn</div>
                <div className="article-date">13 maart 2026 om 23:59</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="action-row">
              <button
                className={`btn${listening ? " btn-active" : ""}`}
                onClick={() => setListening(!listening)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                </svg>
                {listening ? "Bezig…" : "Luisteren"}
              </button>
              <button
                className={`btn${shared ? " btn-active" : ""}`}
                onClick={() => { setShared(true); setTimeout(() => setShared(false), 2000); }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                {shared ? "Gedeeld!" : "Delen"}
              </button>
              <button
                className={`btn${liked ? " btn-active" : ""}`}
                onClick={() => setLiked(!liked)}
              >
                <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {liked ? "Opgeslagen" : "Bewaren"}
              </button>
            </div>

            {/* Hero image */}
            <div className="hero-image">
<img src="1.png"></img>
            </div>
            <p className="hero-caption">Dario Amodei neemt heel nadrukkelijk een ethisch standpunt in over AI. © getty</p>

            {/* Body */}
            <div className="article-body">
              <p>
                Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen en tegendraadse oprichter van Anthropic die de confrontatie met Maga (Make America Great Again) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar niet via grote publieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. De kritiek zit, in advocatentaal omzwachteld, in een aantal zogenoemde <em>amicus briefs</em>, documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn juridische strijd tegen het Pentagon.
              </p>

              <div className="pull-quote">
                <p>"Een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat de regering alle middelen zal gebruiken om te straffen wie het aandurft het oneens te zijn."</p>
              </div>

              <p>
                Toch staat er rake taal in. De strafmaatregel die minister van "Oorlog" Pete Hegseth Anthropic oplegt, namelijk het uitroepen tot "risico voor de toeleveringsketen", creëert die sfeer van dwang. En dat staat in een document dat — indirect — ondertekend is door Amazon, Google en Apple (via de belangengroep Chamber of Progress).
              </p>

              <p>
                Is dit nu het "Ik ben Spartacus!'" moment van Silicon Valley? Nee, daarvoor is het allemaal veel te voorzichtig. Chamber of Progress argumenteert vooral dat Anthropics recht op vrije meningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren te formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfs voorzichtige steun uit voor die ethische bezwaren, met heel wat mitsen en maren.
              </p>

              <p>
                Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet te ver uit. Trump en zijn Maga-beweging hebben van dat begrip natuurlijk wel een heel eigen invulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot, nu verdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nog wel steun voor het idee dat iedereen zijn zegje mag hebben.
              </p>

              <p>
                Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwege het inspirerende voorbeeld van Amodei, of omdat ze voelen dat de politieke wind stilaan van richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet meer zoals vroeger. We zullen van deze ceo's de komende jaren waarschijnlijk weinig politieke gevoelige uitspraken horen.
              </p>

              <p>
                Wanneer deze ceo's zich in het verleden van hun progressiefste kant lieten zien, was dat (zoveel is ondertussen duidelijk) zelden vanuit een diepe overtuiging. Het was eerder omdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen de werknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract met Defensie liet vallen.
              </p>

              <p>
                Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken, en dat merk je. Met één uitzondering, weliswaar: de paar honderd AI-experts die de meest geavanceerde LLM's kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe hebben om volgens hun overtuiging te handelen.
              </p>

              <p>
                Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in deze zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk en moedig een ethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
              </p>
            </div>

            {/* Tags */}
            <div className="tag-row">
              {["Cultuur en media", "De Technocraat", "Artificiële intelligentie"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-label">Lees ook</div>
              {[
                { section: "De Technocraat", title: "ChatGPT boycotten, of meteen de hele big tech?" },
                { section: "Artificiële intelligentie", title: "Leidt AI-slop tot de dood van sociale media?" },
                { section: "De Helpdesk", title: "Vibecoding: zo maak je in enkele minuten je eigen games met AI" },
              ].map((item, i) => (
                <div key={i} className="sidebar-item">
                  <div className="sidebar-item-section">{item.section}</div>
                  <div className="sidebar-item-title">{item.title}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}