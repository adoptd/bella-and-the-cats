const products = [
  { name: 'Dog Mum Sweatshirt', price: '£28.00', tone: 'blush', mark: 'DOG MUM', symbol: '♡' },
  { name: 'Cat Mum Hoodie', price: '£32.00', tone: 'sage', mark: 'CAT MUM', symbol: '♡' },
  { name: 'Animal Lover T-Shirt', price: '£18.00', tone: 'cream', mark: 'ANIMAL\nLOVER', symbol: '♡' },
  { name: 'Dog Lover Hoodie', price: '£32.00', tone: 'teal', mark: 'DOG\nLOVER', symbol: '♡' },
  { name: 'Better Together T-Shirt', price: '£18.00', tone: 'white', mark: 'Better\nTogether', symbol: '♡' },
]

const pets = [
  { name: 'Bella', role: 'The original inspiration', image: '/pets/bella-bluebells.jpg' },
  { name: 'Loki', role: 'The resident troublemaker', image: '/pets/loki.jpg' },
  { name: 'Tyler', role: 'The handsome one', image: '/pets/tyler.jpg' },
  { name: 'Leia', role: 'The tortie with attitude', image: '/pets/leia.jpg' },
]

function Paw({ small = false }: { small?: boolean }) {
  return <span className={small ? 'paw small' : 'paw'} aria-hidden="true">✦</span>
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bella and The Cats home">
          <span className="brand-script">Bella</span>
          <span className="brand-sub">&amp; The Cats</span>
          <span className="brand-paw">🐾</span>
        </a>
        <nav>
          <a className="active" href="#top">Home</a><a href="#shop">Shop</a><a href="#dog">Dog Lovers</a><a href="#cat">Cat Lovers</a><a href="#animal">Animal Lovers</a><a href="#story">About Us</a><a href="#footer">Contact</a>
        </nav>
        <div className="header-icons" aria-hidden="true"><span>⌕</span><span>♙</span><span>🛍</span></div>
      </header>

      <section className="hero" id="top">
        <img src="/pets/bella-bluebells.jpg" alt="Bella sitting among bluebells" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="script-kicker">Bella &amp; The Cats <span>♥</span></div>
          <h1>FOR THE LOVE<br />OF ANIMALS</h1>
          <p>Clothing for the people who know<br className="desktop" /> that pets aren&apos;t just pets —<br className="desktop" /> they&apos;re family.</p>
          <a className="button" href="#shop">SHOP THE COLLECTION <span>→</span></a>
        </div>
      </section>

      <section className="collections">
        <a className="collection-card" id="dog" href="#shop"><img src="/pets/bella-close.jpg" alt="Bella the dog"/><span>Dog Lovers <b>🐾</b></span></a>
        <a className="collection-card" id="cat" href="#shop"><img src="/pets/loki.jpg" alt="Loki the cat"/><span>Cat Lovers <b>🐾</b></span></a>
        <a className="collection-card" id="animal" href="#shop"><img src="/pets/leia.jpg" alt="Leia the cat"/><span>Animal Lovers <b>🐾</b></span></a>
      </section>

      <section className="story" id="story">
        <div className="section-heading"><span>♡</span><h2>Meet Bella &amp; The Cats</h2><span>♡</span></div>
        <p className="intro">Bella, Loki, Tyler and Leia are the four-legged inspiration behind Bella &amp; The Cats —<br className="desktop" /> a clothing brand created for people who know that animals aren&apos;t just pets, they&apos;re family.</p>
        <div className="pet-grid">
          {pets.map((pet) => <article className="pet" key={pet.name}><div className="pet-photo"><img src={pet.image} alt={pet.name} /></div><div className="pet-name">{pet.name} <span>♡</span></div><p>{pet.role}</p><div className="pet-heart">♡</div></article>)}
        </div>
      </section>

      <section className="featured" id="shop">
        <div className="section-heading"><h2>Featured Products</h2><a href="#shop">View all products →</a></div>
        <div className="product-grid">
          {products.map((p) => <article className="product" key={p.name}><div className={`garment ${p.tone}`}><div className="garment-neck"/><div className="garment-print">{p.mark.split('\n').map((line, i) => <span key={i}>{line}</span>)}<small>{p.symbol}</small></div></div><h3>{p.name}</h3><p>{p.price}</p></article>)}
        </div>
      </section>

      <section className="wear">
        <img src="/pets/bella-bluebells.jpg" alt="Bella enjoying the outdoors" />
        <div className="wear-overlay"><h2>♡ WEAR WHAT YOU LOVE.</h2><p>For the people who know that animals aren&apos;t just pets — they&apos;re family.</p></div>
      </section>

      <section className="newsletter">
        <div><div className="newsletter-title">🐾 <span>Join the Bella &amp; The Cats family</span></div><p>Be the first to know about new designs, special offers and more.</p></div>
        <form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Email address"/><button type="submit">Sign Up</button></form>
      </section>

      <footer id="footer"><div className="footer-brand">Bella &amp; The Cats <small>APPAREL FOR PET PEOPLE</small></div><div className="footer-links"><a href="#story">About Us</a><a href="#footer">Contact</a><a href="#footer">Delivery</a><a href="#footer">Returns</a><a href="#footer">FAQs</a><a href="#footer">Size Guide</a></div><div className="social">◎ &nbsp; f &nbsp; ◉ &nbsp; ♪ &nbsp; ▶</div></footer>
    </main>
  )
}
