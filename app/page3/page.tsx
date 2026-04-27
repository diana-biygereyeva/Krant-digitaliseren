"use client";

import { useState } from "react";

export default function ArticleAISlop() {
  const [listening, setListening] = useState(false);
  const [shared, setShared] = useState(false);
  const [saved, setSaved] = useState(false);

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

        .article-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.18;
          color: var(--ds-black);
          margin: 0 0 20px;
          letter-spacing: -0.3px;
        }

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

        /* Hero */
        .hero-image {
          width: 100%;
          aspect-ratio: 16/8;
          background: linear-gradient(180deg, #87ceeb 0%, #87ceeb 60%, #5d8a3c 60%, #5d8a3c 75%, #6b4c2a 75%, #6b4c2a 100%);
          border-radius: 2px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-caption {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: var(--ds-gray-mid);
          margin-bottom: 28px;
          font-style: italic;
        }

        .article-body {
          font-size: 16.5px;
          line-height: 1.75;
          color: var(--ds-gray-dark);
        }
        .article-body p { margin: 0 0 22px; }
        .article-body strong { color: var(--ds-black); font-weight: 600; }

        /* Step boxes */
        .steps-box {
          background: #fff;
          border: 1px solid var(--ds-border);
          border-left: 4px solid var(--ds-red);
          border-radius: 0 3px 3px 0;
          padding: 20px 24px;
          margin: 28px 0;
        }
        .steps-box h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ds-red);
          margin: 0 0 14px;
        }
        .step-item {
          display: flex;
          gap: 14px;
          margin-bottom: 12px;
          align-items: baseline;
        }
        .step-num {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--ds-red);
          min-width: 24px;
          line-height: 1;
        }
        .step-text {
          font-family: 'Source Serif 4', serif;
          font-size: 15px;
          line-height: 1.55;
          color: var(--ds-gray-dark);
        }

        /* Subheading */
        .article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ds-black);
          margin: 36px 0 14px;
          border-bottom: 1px solid var(--ds-border);
          padding-bottom: 10px;
        }

        /* Code inline */
        .code-inline {
          font-family: 'Courier New', monospace;
          font-size: 14px;
          background: var(--ds-gray-light);
          padding: 2px 6px;
          border-radius: 2px;
          color: var(--ds-red-dark);
        }

        /* Tool pills */
        .tool-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0 24px;
        }
        .tool-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 20px;
          background: #fff;
          border: 1.5px solid var(--ds-border);
          color: var(--ds-gray-dark);
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.12s;
        }
        .tool-pill:hover {
          background: var(--ds-red);
          color: white;
          border-color: var(--ds-red);
          transform: translateY(-1px);
        }

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

        /* Tip box */
        .tip-box {
          background: #fff8f5;
          border: 1px solid #f5d5cc;
          border-radius: 3px;
          padding: 16px 20px;
          margin: 24px 0;
        }
        .tip-box p {
          font-size: 14.5px;
          color: var(--ds-gray-dark);
          margin: 0;
          line-height: 1.6;
        }
        .tip-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ds-red);
          margin-bottom: 8px;
        }
      `}</style>

      <div className="article-page">
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="site-logo">DS</div>
            <div className="top-date">Maandag 27 april 2026</div>
          </div>
        </div>

        <div className="article-wrapper">
          <main>
            <span className="section-label">De Technocraat</span>

            <h1 className="article-headline">
              Leidt AI-slop tot de dood van sociale media?
            </h1>

            <p className="article-intro">
              Sociale media slibben de jongste paar maanden angstwekkend snel dicht met AI-slop: video's met mensen die niet bestaan en gebeurtenissen die zich niet hebben voorgedaan. Blijven we daar in 2026 naar kijken?
            </p>

            <div className="article-meta">
              <div className="author-avatar">DD</div>
              <div>
                <div className="author-name">Dominique Deckmyn</div>
                <div className="article-date">2 januari 2026 om 23:59</div>
              </div>
            </div>

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
                className={`btn${saved ? " btn-active" : ""}`}
                onClick={() => setSaved(!saved)}
              >
                <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                {saved ? "Opgeslagen" : "Bewaren"}
              </button>
            </div>

            {/* Hero */}
            <div className="hero-image">
<img src="3.png"></img>
            </div>
            <p className="hero-caption">Schattige katten, gegenereerd door AI. © youtube</p>

            <div className="article-body">
              <p>
                De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een realistisch uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we daarnaar blijven kijken?
              </p>

              <p>
                Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met de enorm toegenomen productie, maar ook met wat algoritmes ons aanbevelen. Met keuzes die bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. Als je op Youtube een nieuwe account aanmaakt, dan is <strong>20 procent van de video's</strong> die je worden aangeboden van AI afkomstig.
              </p>

              <h2>De drie tijdperken van Zuckerberg</h2>

              <p>
                Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud betekent een nieuw tijdperk in sociale media. Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan de levens van celebrity's en influencers – tijdperk twee. En nu komt er een stortvloed van AI-video's aan.
              </p>

              <div className="steps-box">
                <h3>De drie tijdperken van sociale media</h3>
                {[
                  "Tijdperk één: we deelden ons eigen leven op Facebook en Instagram.",
                  "Tijdperk twee: we verkozen de levens van celebrity's en influencers boven onze eigen vrienden.",
                  "Tijdperk drie: een stortvloed van door AI gegenereerde video's, eindeloos op maat afgestemd door algoritmes."
                ].map((step, i) => (
                  <div key={i} className="step-item">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>

              <p>
                Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder video's we bekijken van professionele makers en van onze eigen vrienden. Nochtans hadden sociale media echt wel een bestaansreden, namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen. Zijn we in 2026 dan zo veranderd?
              </p>

              <p>
                Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonder enige beperking eindeloos meer van kunnen genereren. Nog meer kattenvideo's, onmogelijke stunts, spectaculaire taarten of gewelddadige pranks. Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo's, u krijgt kattenvideo's die nog veel schattiger zijn dan in het echt.
              </p>

              <h2>De voornaamste videogenerators</h2>

              <div className="tool-row">
                {["Sora", "Veo", "Runway", "Kling", "Pika", "Luma Dream Machine"].map(tool => (
                  <span key={tool} className="tool-pill">{tool}</span>
                ))}
              </div>

              <h2>Persoonlijke afkeer van AI-slop</h2>

              <p>
                Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voor AI-slop: vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik 'm weg. Net zoals ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de voornaamste auteur was.
              </p>

              <div className="tip-box">
                <div className="tip-label">Persoonlijke noot</div>
                <p>De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het soms lachen geblazen met sommige van die Sora-filmpjes. Er is heus wel een plaats voor AI-video, bijvoorbeeld om speciale effecten te produceren in films. En er zijn creatieve mensen die toffe, vaak heel grappige video's maken die zonder AI onbetaalbaar duur zouden zijn.</p>
              </div>

              <p>
                Maar horen ze thuis op Instagram en Facebook? Dat waren toch 'sociale' media, nietwaar? Wat precies is de sociale dimensie van kijken naar een eindeloze stroom van door een computer gegenereerde video's, aanbevolen door een algoritme? In die zin zien we nu de dood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
              </p>

              <p>
                Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast <em>'Bits &amp; atomen'</em>.
              </p>
            </div>

            <div className="tag-row">
              {["Cultuur en media", "De Technocraat", "Artificiële intelligentie", "Mark Zuckerberg"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </main>

          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-label">Lees ook</div>
              {[
                { section: "De Technocraat", title: "Kandidaat-product van het jaar: de AI-videogenerator" },
                { section: "De Helpdesk", title: "Vibecoding: zo maak je in enkele minuten je eigen games en apps met AI" },
                { section: "Artificiële intelligentie", title: "Mijn destructieve cyberhuwelijk met Claude" },
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