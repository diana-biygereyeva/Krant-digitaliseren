"use client";

import { useState } from "react";

export default function ArticleVibecoding() {
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

        /* Hero - pixelated game feel */
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
          image-rendering: pixelated;
        }
        .pixel-dino {
          width: 48px;
          height: 48px;
          background: #3a7d44;
          border-radius: 4px 14px 4px 4px;
          position: absolute;
          bottom: 28%;
          left: 20%;
          box-shadow: 4px -4px 0 #2d5e33, -4px 0 0 #2d5e33;
        }
        .pixel-dino::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: #fff;
          border-radius: 50%;
          top: 6px;
          right: 4px;
          box-shadow: 0 0 0 3px #3a7d44;
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
            <span className="section-label">De Helpdesk</span>

            <h1 className="article-headline">
              Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
            </h1>

            <p className="article-intro">
              Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je.
            </p>

            <div className="article-meta">
              <div className="author-avatar">DD</div>
              <div>
                <div className="author-name">Dominique Deckmyn</div>
                <div className="article-date">23 januari 2026 om 23:59</div>
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
<img src="2.png"></img>
            </div>
            <p className="hero-caption">© De Standaard</p>

            <div className="article-body">
              <p>
                Het is nog maar januari, maar 'vibecoding', ofwel coderen met AI, maakt al een goede kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen.
              </p>

              <p>
                Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar een prompt. Denk aan "maak een spel waarbij je cocktails moet mixen". Al helpt het wel om eerst een paar handigheidjes te leren.
              </p>

              <p>
                Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeft niet te kunnen programmeren, je hoeft zelfs geen programmacode te kunnen lezen, wel moet je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen.
              </p>

              <h2>Een eenvoudig spel</h2>
              <p>
                Hoe klein? Wel, laten we beginnen met zo'n spelletje. Open een chatbot naar keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel spel. Ik probeerde bijvoorbeeld: "Schrijf een spel waarbij een dinosaurus een bal moet koppen."
              </p>

              <p>
                Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document met de extensie <span className="code-inline">.html</span>.
              </p>

              <div className="steps-box">
                <h3>Op een Windows-pc</h3>
                {[
                  "Klik op de code die de chatbot genereerde (meestal op het 'copy'-knopje bovenaan of onderaan)",
                  "Plak de code in een programma als Windows Kladblok of Macintosh TextEdit",
                  "Bewaar het bestand met een naam als 'dinospel.html'",
                  "Klik op dinospel.html",
                  "Het spel opent in je standaardbrowser. En spelen maar!"
                ].map((step, i) => (
                  <div key={i} className="step-item">
                    <span className="step-num">{i + 1}</span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>

              <div className="tip-box">
                <div className="tip-label">Let op</div>
                <p>Als je Microsoft Kladblok gebruikt, moet je wel op één ding letten: het programma heeft de neiging om elk document te bewaren met de extensie ".txt". Hou dus in de gaten dat hij er niet stiekem <span className="code-inline">dinospel.html.txt</span> van heeft gemaakt.</p>
              </div>

              <h2>Ambitieuzer: een gezinskalender</h2>
              <p>
                Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor grafische apps zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit.
              </p>

              <p>
                Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app worden voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de voetbaltraining moet brengen.
              </p>

              <p>
                Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus, opnieuw, uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn voor iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een paar opties, ik koos daaruit Supabase, een cloud-database.
              </p>

              <p>
                Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een werkende app, maar wel een die er nogal belabberd uitzag en waar je, bijvoorbeeld, een activiteit wel kon toevoegen maar niet kon wissen of wijzigen.
              </p>

              <h2>Echt agentic werken</h2>
              <p>
                Wie verder wil gaan dan dat — zonder zelf te gaan programmeren — moet 'agentic' gaan werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast alles bouwen.
              </p>

              <p>
                Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per maand). Er zijn ook talloze gespecialiseerde vibecoding-instrumenten:
              </p>

              <div className="tool-row">
                {["Cursor", "Replit", "Lovable", "Claude Code", "ChatGPT Codex", "VS Code"].map(tool => (
                  <span key={tool} className="tool-pill">{tool}</span>
                ))}
              </div>

              <p>
                In totaal heeft mijn afgewerkte Gezinskalender mij een halve dag werk gekost. Maar in die tijd heb ik enorm veel geleerd. Ik weet zeker dat ik een app van deze complexiteit een volgende keer in de helft van die tijd in elkaar gestoken krijg.
              </p>

              <p>
                Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als mijn Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of maanden waarschijnlijk met twee-drie prompts genereren.
              </p>
            </div>

            <div className="tag-row">
              {["Inspiratie", "De Helpdesk", "Helpdesk"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </main>

          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-label">Lees ook</div>
              {[
                { section: "De Helpdesk", title: "Echt waar: niks AI" },
                { section: "De Technocraat", title: "Mijn destructieve cyberhuwelijk met Claude" },
                { section: "Artificiële intelligentie", title: "Leidt AI-slop tot de dood van sociale media?" },
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