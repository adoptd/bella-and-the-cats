'use client'

const products = [
  { name: 'Dog Mum Sweatshirt', price: '£28.00', tone: 'blush', mark: ['DOG MUM'], kind: 'sweatshirt' },
  { name: 'Cat Mum Hoodie', price: '£32.00', tone: 'sage', mark: ['CAT MUM'], kind: 'hoodie' },
  { name: 'Animal Lover T-Shirt', price: '£18.00', tone: 'cream', mark: ['ANIMAL', 'LOVER'], kind: 'tee' },
  { name: 'Dog Lover Hoodie', price: '£32.00', tone: 'teal', mark: ['DOG', 'LOVER'], kind: 'hoodie' },
  { name: 'Better Together T-Shirt', price: '£18.00', tone: 'white', mark: ['Better', 'Together'], kind: 'tee' },
]

const pets = [
  { name: 'Bella', role: 'The original inspiration', image: '/pets/bella-bluebells.jpg', number: '01' },
  { name: 'Loki', role: 'The box lover', image: '/pets/loki.jpg', number: '02' },
  { name: 'Tyler', role: 'The sofa specialist', image: '/pets/tyler.jpg', number: '03' },
  { name: 'Leia', role: 'The tortie with attitude', image: '/pets/leia.jpg', number: '04' },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bella and The Cats home">
          <span className="brand-script">Bella</span>
          <span className="brand-sub">&amp; The Cats</span>
          <span className="brand-paw">✣</span>
        </a>

        <nav aria-label="Main navigation">
          <a className="active" href="#top">Home</a>
          <a href="#shop">Shop</a>
          <a href="#dog">Dog Lovers</a>
          <a href="#cat">Cat Lovers</a>
          <a href="#animal">Animal Lovers</a>
          <a href="#story">Our Story</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="header-icons" aria-label="Shop tools">
          <span>⌕</span><span>♙</span><span>🛍</span>
        </div>
      </header>

      <section className="hero" id="top">
        <img src="/pets/bella-bluebells.jpg" alt="Bella sitting among bluebells" />
        <div className="hero-shade" />
        <div className="hero-frame" />
        <div className="hero-copy">
          <p className="eyebrow">BELLA &amp; THE CATS <span>—</span> EST. WITH LOVE</p>
          <h1>For the love<br /><em>of animals.</em></h1>
          <p className="hero-text">Thoughtful clothing for people who know that pets aren't just pets — they're family.</p>
          <a className="button" href="#shop">SHOP THE COLLECTION <span>↗</span></a>
        </div>
        <div className="hero-note"><span>01</span><i /> The four-legged inspiration behind the brand</div>
      </section>

      <section className="collections" aria-label="Shop by passion">
        <a className="collection-card" id="dog" href="#shop">
          <img src="/pets/bella-close.jpg" alt="Bella the dog" />
          <div><small>01 / FOR DOG PEOPLE</small><strong>Dog Lovers <b>↗</b></strong></div>
        </a>
        <a className="collection-card" id="cat" href="#shop">
          <img src="/pets/loki.jpg" alt="Loki the cat" />
          <div><small>02 / FOR CAT PEOPLE</small><strong>Cat Lovers <b>↗</b></strong></div>
        </a>
        <a className="collection-card" id="animal" href="#shop">
          <img src="/pets/tyler.jpg" alt="Tyler the cat" />
          <div><small>03 / FOR EVERYONE</small><strong>Animal Lovers <b>↗</b></strong></div>
        </a>
      </section>

      <section className="story" id="story">
        <div className="story-intro">
          <p className="eyebrow dark">MEET THE FAMILY</p>
          <h2>Four personalities.<br /><em>One big love.</em></h2>
          <p>Bella, Loki, Tyler and Leia are the four-legged inspiration behind Bella &amp; The Cats — a clothing brand made for people who know that animals aren't just pets, they're family.</p>
        </div>

        <div className="pet-grid">
          {pets.map((pet) => (
            <article className="pet" key={pet.name}>
              <div className="pet-number">{pet.number}</div>
              <div className="pet-photo"><img src={pet.image} alt={pet.name} /></div>
              <div className="pet-caption">
                <div><h3>{pet.name}</h3><span>♡</span></div>
                <p>{pet.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featured" id="shop">
        <div className="featured-heading">
          <div>
            <p className="eyebrow dark">THE EDIT</p>
            <h2>Made for animal people.</h2>
          </div>
          <a href="#shop">View all products <span>↗</span></a>
        </div>
        <p className="featured-intro">A few favourites for dog people, cat people and everyone who loves them all.</p>

        <div className="product-grid">
          {products.map((p, index) => (
            <article className="product" key={p.name}>
              <div className="product-image">
                <span className="product-index">0{index + 1}</span>
                <div className={`garment ${p.tone} ${p.kind}`}>
                  <div className="garment-neck" />
                  <div className="garment-print">{p.mark.map(line => <span key={line}>{line}</span>)}<small>♡</small></div>
                </div>
                <button aria-label={`View ${p.name}`}>↗</button>
              </div>
              <div className="product-meta"><h3>{p.name}</h3><p>{p.price}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wear">
        <img src="/pets/bella-bluebells.jpg" alt="Bella enjoying the outdoors" />
        <div className="wear-shade" />
        <div className="wear-content">
          <p className="eyebrow">THE BELLA &amp; THE CATS WAY</p>
          <h2>Wear what<br /><em>you love.</em></h2>
          <p>Because the best things in life have four paws.</p>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="eyebrow dark">STAY IN THE PACK</p>
          <h2>Come along for the journey.</h2>
          <p>New designs, little offers and plenty of animal love. Straight to your inbox.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Your email address" />
          <button type="submit">JOIN US <span>↗</span></button>
        </form>
      </section>

      <footer id="footer">
        <div className="footer-top">
          <div className="footer-brand"><span>Bella</span><strong>&amp; The Cats</strong><small>APPAREL FOR PET PEOPLE</small></div>
          <div className="footer-message">Made for the people<br />who love them most. ♡</div>
        </div>
        <div className="footer-bottom">
          <div className="footer-links"><a href="#story">About Us</a><a href="#footer">Contact</a><a href="#footer">Delivery</a><a href="#footer">Returns</a><a href="#footer">FAQs</a><a href="#footer">Size Guide</a></div>
          <div className="social">Instagram &nbsp; · &nbsp; Facebook &nbsp; · &nbsp; TikTok</div>
          <small>© Bella &amp; The Cats</small>
        </div>
      </footer>
    </main>
  )
}
