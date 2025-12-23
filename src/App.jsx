import './App.css';
import { useEffect, useMemo, useState } from 'react';

import poo1 from './assets/poo1.png';
import poo2 from './assets/poo1.png';
import poo3 from './assets/poo1.png';
import poo4 from './assets/poo1.png';
import nugget from './assets/nuggest.png';

const hotDrops = [
  {
    id: 1,
    name: 'Selena G.',
    code: 'Drop #221',
    codeKey: '221',
    tag: 'LIMITED RELEASE',
    description: 'Notes of kale smoothie & L.A. brunch vibes.',
    cta: 'View the scoop',
    image: poo1,
    details: {
      vibeScore: 9.4,
      location: 'Brentwood juice bar alley',
      fibre: 'Suspiciously high',
      jar: 'Showbiz Solution™ (batch A12)',
      notes: 'Tiny sunglasses imprint detected. Allegedly.',
    },
  fecalAnalysis: {
  suspectedFoods: [
    'Energy drinks (mixed, unholy)',
    'Late-night takeaway of unknown origin',
    'Something pink and fizzy',
  ],
  texture: 'Structurally confident. Unbothered by containment.',
  aroma: 'Sweet chemical top-note with spiritual undertones.',
  additives: 'Artificial colourants, glitter-adjacent particulates',
  labComment: 'This specimen thinks it’s better than us.'
}
  },
  {
    id: 2,
    name: 'Harry S.',
    code: 'Drop #782',
    codeKey: '782',
    tag: 'BACK IN STOCK',
    description: 'Collected outside Soho House (we can’t say which one).',
    cta: 'Add to shrine',
    image: poo2,
    details: {
      vibeScore: 8.1,
      location: 'Private members’ pavement',
      fibre: 'Cautiously adequate',
      jar: 'Showbiz Solution™ (batch B07)',
      notes: 'Smells faintly of oat flat white entitlement.',
    },
  fecalAnalysis: {
  suspectedFoods: [
    'Energy drinks (mixed, unholy)',
    'Late-night takeaway of unknown origin',
    'Something pink and fizzy',
  ],
  texture: 'Structurally confident. Unbothered by containment.',
  aroma: 'Sweet chemical top-note with spiritual undertones.',
  additives: 'Artificial colourants, glitter-adjacent particulates',
  labComment: 'This specimen thinks it’s better than us.'
}
  },
  {
    id: 3,
    name: 'Mystery Oscar Winner',
    code: 'Drop #999',
    codeKey: '999',
    tag: 'BLIND DROP',
    description: 'High-fibre, high-drama, identity redacted.',
    cta: 'Reveal… maybe',
    image: poo3,
    details: {
      vibeScore: 10.0,
      location: 'Awards season danger-zone',
      fibre: 'Weaponised',
      jar: 'Showbiz Solution™ (batch X99)',
      notes: 'Identity redacted for everyone’s safety.',
    },
  fecalAnalysis: {
  suspectedFoods: [
    'Energy drinks (mixed, unholy)',
    'Late-night takeaway of unknown origin',
    'Something pink and fizzy',
  ],
  texture: 'Structurally confident. Unbothered by containment.',
  aroma: 'Sweet chemical top-note with spiritual undertones.',
  additives: 'Artificial colourants, glitter-adjacent particulates',
  labComment: 'This specimen thinks it’s better than us.'
}
  },
  {
  id: 4,
  name: 'Doja Cat',
  code: 'Drop #420',
  codeKey: '420',
  tag: 'ULTRA RARE',
  description: 'Chaotic sparkle energy with suspiciously excellent rhythm.',
  cta: 'View the scoop',
    image: poo1,
  details: {
    vibeScore: 9.9,
    location: 'A glittery backstage corridor (allegedly)',
    fibre: 'Unknowable. Powerful.',
    jar: 'Showbiz Solution™ (batch DC-01)',
    notes: 'Warm. Assertive. Visually confident. Refuses to sit politely in the jar. Emits a faint but unmistakable hint of energy drink, incense, and something that should not be warm this long.'
  },
  fecalAnalysis: {
  suspectedFoods: [
    'Energy drinks (mixed, unholy)',
    'Late-night takeaway of unknown origin',
    'Something pink and fizzy',
  ],
  texture: 'Structurally confident. Unbothered by containment.',
  aroma: 'Sweet chemical top-note with spiritual undertones.',
  additives: 'Artificial colourants, glitter-adjacent particulates',
  labComment: 'This specimen thinks it’s better than us.'
}
},
,
  {
    id: 9,
    name: 'Kim K.',
    code: 'Drop #404',
    codeKey: '404',
    tag: 'CURATED',
    description: 'Perfectly staged… and yet. Here we are.',
    cta: 'View the scoop',
    image: nugget,
    details: {
      vibeScore: 8.9,
      location: 'A valet area with too much lighting',
      fibre: 'Strategically optimised.',
      jar: 'Showbiz Solution™ (batch KK-04)',
      notes: 'It’s giving “sponsored,” but the sponsor is bacteria.',
    },
    grossSpec: {
      consistency: 'Suspiciously symmetrical. Like it had a glam team.',
      bouquet: 'Sweet top note, then immediate courtroom energy.',
      visualNotes: 'Smooth surfaces. Aggressively brand-safe.',
      hazardRating: 'Medium (publicist nearby)',
      collectorNote: 'Will attempt to monetize itself if left alone.'
    }
  },
  {
    id: 8,
    name: 'The Rock',
    code: 'Drop #999',
    codeKey: '501', // (change if you don’t want collision with your Oscar Winner)
    tag: 'HEAVYWEIGHT',
    description: 'Industrial presence. The jar is under witness protection.',
    cta: 'View the scoop',
    image: nugget,
    details: {
      vibeScore: 9.5,
      location: 'Gym-adjacent danger zone (allegedly)',
      fibre: 'Terrifyingly committed.',
      jar: 'Showbiz Solution™ (batch BRICK-01)',
      notes: 'Feels like it could bench press you.',
    },
    grossSpec: {
      consistency: 'Structural integrity: unethical.',
      bouquet: 'Protein-shake hallucination with a scorched-earth finish.',
      visualNotes: 'Looks like a meteorite with a gym membership.',
      hazardRating: 'High (do not drop jar on foot)',
      collectorNote: 'If it raises an eyebrow, evacuate.'
    }
  },,
  {
    id: 6,
    name: 'Rihanna',
    code: 'Drop #808',
    codeKey: '808',
    tag: 'ICON STATUS',
    description: 'Luxury vibes. The jar looks like it costs £900.',
    cta: 'View the scoop',
    image: nugget,
    details: {
      vibeScore: 9.8,
      location: 'VIP exit zone with security that blinked once',
      fibre: 'Unbothered. Moisturised. In its lane.',
      jar: 'Showbiz Solution™ (batch RIH-08)',
      notes: 'Refuses to be perceived unless you’re worthy.',
    },
    grossSpec: {
      consistency: 'Dense, expensive, and not here for your questions.',
      bouquet: 'Perfume-adjacent… then immediately not.',
      visualNotes: 'Looks like it’s wearing sunglasses.',
      hazardRating: 'Medium (confidence-related)',
      collectorNote: 'If you stare too long, you owe it money.'
    }
  },
];

function App() {
  const [activeDrop, setActiveDrop] = useState(null);

  const dropsByKey = useMemo(() => {
    const map = new Map();
    hotDrops.forEach((d) => map.set(String(d.codeKey), d));
    return map;
  }, []);

  const closeModal = () => {
    setActiveDrop(null);

    // Clear the hash (optional). Keeps URL clean after closing.
    if (window.location.hash.startsWith('#/')) {
      history.replaceState(null, '', window.location.pathname + window.location.search + '#');
    }
  };

  const readHashAndOpen = () => {
    // Accepts "#/221" or "#221"
    // Also survives scanners that add junk like "#/221?utm=whatever"
    const raw = window.location.hash || '';
    const key = raw
      .replace(/^#\/?/, '')       // "#/221" -> "221"
      .split(/[?&/]/)[0]          // "221?x=y" -> "221"
      .trim();

    if (!key) {
      setActiveDrop(null);
      return;
    }

    const found = dropsByKey.get(key);
    if (found) setActiveDrop(found);
    else setActiveDrop(null); // unknown code -> no modal
  };

  useEffect(() => {
    readHashAndOpen(); // on initial load
    window.addEventListener('hashchange', readHashAndOpen);
    return () => window.removeEventListener('hashchange', readHashAndOpen);
  }, [dropsByKey]);

  const scrollToDrops = () => {
    const el = document.getElementById('drops');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

const makeSerial = (drop) => {
  // deterministic-ish “serial” based on codeKey + id
  const base = `${drop.codeKey}-${drop.id}`;
  const hash = [...base].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
  return `PPR-${drop.codeKey}-${String(hash).slice(-6).padStart(6, '0')}`;
};

const formatHashLink = (drop) => `${window.location.origin}${window.location.pathname}#/${drop.codeKey}`;

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            {/* <img
              src={`${process.env.PUBLIC_URL}/papoorazzi-logo.svg`}
              alt="Pa-POO-razzi logo"
              className="logo-img"
            /> */}
            <div className="logo-text">
              <span className="logo-title-main">PA-POO-razzi</span>
              <span className="logo-tagline">Get closer to the stars than ever before.</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#drops">Latest Drops</a>
            <a href="#alist">A-List Exclusives</a>
            <a href="#how">Authentication</a>
            <a href="#scoop">The Scoop</a>
            <a href="#about">About Pa-POO-razzi</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-text">
              <h1>Get closer to the stars than ever before.</h1>
              <p className="hero-sub">
                Exclusive celebrity… deposits. <span className="hero-highlight">Verified*</span> &amp; jarred for your
                adoration.
              </p>
              <button className="hero-cta" onClick={scrollToDrops}>
                ⚡ Browse today&apos;s A-list poos ⚡
              </button>
              <p className="hero-footnote">
                *Verification based on highly scientific vibes, diet rumours and suspiciously specific fibre levels.
              </p>
            </div>

            <div className="hero-card">
              <div className="jar-illustration">
                <div className="jar-glass">
                <div className="jar-contents">
  <img
    src={nugget}
    alt="Preserved nugget"
    className="jar-nugget-img"
  />
</div>
                </div>
                <div className="jar-label">LIMITED DROP</div>
              </div>
              <p className="hero-card-text">
                Each nugget is preserved in our proprietary <strong>Showbiz Solution™</strong> for long-term
                shelf-shame.
              </p>
            </div>
          </div>
        </section>

        {/* TODAY'S HOT DROPS */}
        <section id="drops" className="section section-drops">
          <div className="section-inner">
            <h2>Today&apos;s Hot Drops</h2>
            <p className="section-sub">
              Hand-scooped by our field paparazzi, catalogued with love by our lab goblins.
            </p>

            <div className="drops-grid">
              {hotDrops.map((drop) => (
                <article key={drop.id} className="drop-card">
                  <div className="drop-header">
                    <span className="drop-star">★</span>
                    <div>
                      <h3>
                        {drop.name} <span className="drop-code">– {drop.code}</span>
                      </h3>
                      <span className="drop-tag">{drop.tag}</span>
                    </div>
                  </div>

                  <div className="drop-jar">
                    <div className="drop-jar-glass">
                     <img
  src={drop.image}
  alt={`${drop.name} drop`}
  className="drop-jar-img"
/>
                    </div>
                    <span className="drop-jar-star">★</span>
                  </div>

                  <p className="drop-text">{drop.description}</p>

                  {/* QR-only: no onClick, just a disabled “button-looking” thing */}
                  <button className="drop-cta" disabled>
                    {drop.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE SCOOOP THE SCOOP */}
        <section id="how" className="section-how">
          <div className="how-inner">
            <h2>How We Scooop the Scoop</h2>

            <div className="how-grid">
              <div className="how-card">
                <div className="how-icon">🕶️</div>
                <h3>Paparazzi precision</h3>
                <p>
                  Our field agents operate like TMZ ninjas, minus (most of) the lawsuits. Red carpets, back alleys, VIP
                  exits – if it drops, we clock it.
                </p>
              </div>

              <div className="how-card">
                <div className="how-icon">🌟</div>
                <h3>Star diet matching</h3>
                <p>
                  We track each celeb&apos;s rumoured meals to match the fibre profile. Green juice? Sushi?
                  questionable peri-peri? Our lab has thoughts.
                </p>
              </div>

              <div className="how-card">
                <div className="how-icon">🧪</div>
                <h3>Jarred like memorabilia</h3>
                <p>
                  Every nugget is suspended in <strong>Showbiz Solution™</strong>, labelled, serialised and ready to
                  take pride of place on your very odd shelf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BREAKING POO NEWS TICKER */}
        <section id="scoop" className="ticker-section">
          <div className="ticker-label">⭐ BREAKING POO NEWS ⭐</div>
          <div className="ticker-track">
            <div className="ticker-content">
              A-lister spotted leaving yoga studio, fibre intake at record highs •
              &nbsp;Exclusive: mystery Oscar winner&apos;s chilli night causes seismic activity •
              &nbsp;Rumour: pop icon switches to oat milk, lab goblins delighted •
              &nbsp;Pa-POO-razzi announces new &quot;Blind Drop&quot; subscription for the truly unwell •
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-about">
          <div className="about-inner">
            <h2>About Pa-POO-razzi</h2>
            <p>
              Pa-POO-razzi started as a simple question: <em>“What if celebrity culture went just one step too far?”</em>
              &nbsp;We collect, curate and catalogue the world&apos;s most unnecessary memorabilia so you don&apos;t
              have to.
            </p>
            <p>
              We are not affiliated with any celebrities, their agents, their lawyers, or anyone with good judgement.
              All samples are totally, absolutely, 100% probably real.*
            </p>
            <p className="about-footnote">
              *Realness is evaluated using our proprietary Vibe-Based Authenticity™ scoring system. Please don&apos;t
              sue us.
            </p>
          </div>
        </section>
      </main>

      {/* MODAL (opens ONLY when URL hash contains a valid codeKey) */}
     {activeDrop && (
  <div className="modal-backdrop" onClick={closeModal} role="presentation">
    <div
      className="modal modal-product"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeDrop.name} details`}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={closeModal} aria-label="Close">
        ✕
      </button>

      {/* Top banner */}
      <div className="modal-top">
        <div className="modal-top-left">
         <div className="modal-kicker">CONGRATULATIONS</div>

<div className="modal-specimen-callout">
  Drop contents: <span className="specimen-emphasis">one preserved faecal nugget</span>
</div>

<h2 className="modal-title">
  You are now the proud owner of <span className="modal-title-accent">{activeDrop.code}</span>
</h2>
          <p className="modal-blurb">
            Please keep your excitement to a minimum. The specimen can sense confidence.
          </p>
        </div>

        <div className="modal-top-right">
          <span className="modal-pill">{activeDrop.tag}</span>
          <span className="modal-pill subtle">Authenticated by vibes</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="modal-body modal-body-product">
        <div className="modal-media">
          <div className="drop-jar-glass modal-jar-glass">
            <img
              src={activeDrop.image}
              alt={`${activeDrop.name} drop`}
              className="drop-jar-img drop-jar-img--modal"
            />
          </div>

          <div className="modal-certificate">
            <div className="cert-title">Certificate of Extremely Questionable Ownership</div>
            <div className="cert-row">
              <span className="cert-label">Specimen</span>
              <span className="cert-value">{activeDrop.name}</span>
            </div>
            <div className="cert-row">
              <span className="cert-label">Serial</span>
              <span className="cert-value mono">{makeSerial(activeDrop)}</span>
            </div>
            <div className="cert-row">
              <span className="cert-label">Containment</span>
              <span className="cert-value">Level IV Jar • “Do Not Agitate”</span>
            </div>
            <div className="cert-row">
              <span className="cert-label">Status</span>
              <span className="cert-value">Sealed • Glowering • Unapologetic</span>
            </div>
          </div>
        </div>

        <div className="modal-info">
          <div className="modal-subhead">
            <div>
            <div className="modal-name modal-name-hero">{activeDrop.name}</div>
              <div className="modal-code">{activeDrop.code}</div>
            </div>
            <div className="modal-rating">
              <div className="rating-label">Vibe Score</div>
              <div className="rating-value">{activeDrop.details?.vibeScore ?? '—'}</div>
            </div>
          </div>

          <p className="modal-desc">{activeDrop.description}</p>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-title">Collection Zone</div>
              <div className="info-text">{activeDrop.details?.location ?? 'Unknown'}</div>
            </div>

            <div className="info-card">
              <div className="info-title">Fibre Profile</div>
              <div className="info-text">{activeDrop.details?.fibre ?? 'Unclear'}</div>
            </div>

            <div className="info-card">
              <div className="info-title">Jar & Suspension</div>
              <div className="info-text">{activeDrop.details?.jar ?? 'Showbiz Solution™'}</div>
            </div>

            <div className="info-card danger">
              <div className="info-title">Lab Notes</div>
              <div className="info-text">
                {activeDrop.details?.notes ??
                  'Arrived with ambition. The jar is doing its best.'}
              </div>
            </div>
          </div>

{activeDrop.fecalAnalysis && (
  <div className="analysis-box">
    <div className="analysis-title">Fecal Analysis Report</div>

    <div className="analysis-grid">
      <div className="analysis-item">
        <div className="analysis-label">Suspected Diet</div>
        <ul className="analysis-list">
          {activeDrop.fecalAnalysis.suspectedFoods.map((food, i) => (
            <li key={i}>{food}</li>
          ))}
        </ul>
      </div>

      <div className="analysis-item">
        <div className="analysis-label">Texture Profile</div>
        <div className="analysis-text">{activeDrop.fecalAnalysis.texture}</div>
      </div>

      <div className="analysis-item">
        <div className="analysis-label">Aroma Notes</div>
        <div className="analysis-text">{activeDrop.fecalAnalysis.aroma}</div>
      </div>

      <div className="analysis-item">
        <div className="analysis-label">Detected Additives</div>
        <div className="analysis-text">{activeDrop.fecalAnalysis.additives}</div>
      </div>

      <div className="analysis-item full danger">
        <div className="analysis-label">Lab Commentary</div>
        <div className="analysis-text">
          {activeDrop.fecalAnalysis.labComment}
        </div>
      </div>
    </div>
  </div>
)}

          <div className="gross-box">
            <div className="gross-title">Handling & Care Instructions</div>
            <ul className="gross-list">
              <li><strong>DO NOT</strong> open the lid “just for a sniff”. That’s how legends end.</li>
              <li>Store upright, away from sunlight, pets, and anyone you respect.</li>
              <li>If the liquid looks like it’s staring back: rotate the jar 90° and whisper “containment” firmly.</li>
              <li>In the event of slosh: place jar in a bowl, walk away, reassess your life.</li>
            </ul>
          </div>

          <div className="modal-actions">
            <button
              className="drop-cta"
              onClick={() => navigator.clipboard?.writeText(formatHashLink(activeDrop))}
            >
              Copy QR Link
            </button>

            <button className="ghost-btn" onClick={closeModal}>
              Close & Pretend This Never Happened
            </button>
          </div>

          <p className="modal-footnote">
            By viewing this specimen you agree to the Pa-POO-razzi code: no touching, no tasting, no questions.
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Pa-POO-razzi Laboratories. All rights reserved, none of this was a good idea.</p>
          <p className="footer-small">
            Pa-POO-razzi is committed to ethical poo-sourcing from publicly accessible celebrity zones. No trespassing,
            no drones in bathrooms, just old-fashioned poor life choices.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;