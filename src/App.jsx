import './App.css';

const hotDrops = [
  {
    id: 1,
    name: 'Selena G.',
    code: 'Drop #221',
    tag: 'LIMITED RELEASE',
    description: 'Notes of kale smoothie & L.A. brunch vibes.',
    cta: 'View the scoop',
  },
  {
    id: 2,
    name: 'Harry S.',
    code: 'Drop #782',
    tag: 'BACK IN STOCK',
    description: 'Collected outside Soho House (we can’t say which one).',
    cta: 'Add to shrine',
  },
  {
    id: 3,
    name: 'Mystery Oscar Winner',
    code: 'Drop #999',
    tag: 'BLIND DROP',
    description: 'High-fibre, high-drama, identity redacted.',
    cta: 'Reveal… maybe',
  },
];

function App() {
  const scrollToDrops = () => {
    const el = document.getElementById('drops');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <div className="logo-icon">📸💩</div>
            <div className="logo-text">
              <span className="logo-title">PA-POO-razzi</span>
              <span className="logo-tagline">Get closer to the stars than ever before.</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#drops">Latest Drops</a>
            <a href="#alist">A-List Exclusives</a>
            <a href="#how">Authentication</a>
            <a href="#scoop">The Scoop</a>
            <a href="#about">About</a>
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
                  <div className="jar-contents">💩</div>
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
                      <span className="drop-jar-emoji">💩</span>
                    </div>
                    <span className="drop-jar-star">★</span>
                  </div>

                  <p className="drop-text">{drop.description}</p>

                  <button className="drop-cta">{drop.cta}</button>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <p>
            © {new Date().getFullYear()} Pa-POO-razzi Laboratories. All rights reserved, none of this was a good idea.
          </p>
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