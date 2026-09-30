const products = [
  ['Dog Mum Sweatshirt', '£34.00', 'cream'],
  ['Cat Mum Hoodie', '£36.00', 'black'],
  ['Animal Lover T-Shirt', '£28.00', 'white'],
  ['Dog Lover Hoodie', '£36.00', 'brown'],
  ['Better Together T-Shirt', '£28.00', 'charcoal'],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand">
          <div className="brand-mark">♧</div>
          <div><strong>BELLA &amp; THE CATS</strong><span>APPAREL FOR PET PEOPLE</span></div>
        </div>
        <nav><a href="#home">Home</a><a href="#shop">Shop⌄</a><a href="#dogs">Dog Lovers</a><a href="#cats">Cat Lovers</a><a href="#animals">Animal Lovers</a><a href="#story">About Us</a><a href="#contact">Contact</a></nav>
        <div className="icons">⌕　♙　🛍</div>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy"><p className="eyebrow">BELLA &amp; THE CATS</p><h1>FOR THE LOVE<br/>OF ANIMALS</h1><p>Clothing for the people who know<br/>that pets aren't just pets — they're family.</p><a className="button" href="#shop">SHOP THE COLLECTION →</a></div>
        <div className="hero-image" aria-label="Bella and cats lifestyle image" />
      </section>

      <section className="collections">
        <Collection id="dogs" title="DOG LOVERS" text="For the dog obsessed." image="🐕" />
        <Collection id="cats" title="CAT LOVERS" text="For people who know who's really in charge." image="🐈" />
        <Collection id="animals" title="ANIMAL LOVERS" text="For those who love them all." image="🐾" />
      </section>

      <section id="story" className="story">
        <div><p className="script">our story</p><h2>MEET BELLA &amp; THE CATS</h2><p>What started with Bella and three very opinionated cats — Loki, Tyler and Leia — inspired a clothing brand for people who understand just how much animals become part of our lives.</p><a className="button" href="#contact">OUR STORY →</a></div>
        <div className="pet-row"><span>🐕<small>Bella</small></span><span>🐈<small>Loki</small></span><span>🐈<small>Tyler</small></span><span>🐈<small>Leia</small></span></div>
      </section>

      <section id="shop" className="featured"><div className="section-heading"><h2>FEATURED COLLECTION</h2><a href="#shop">Shop All →</a></div><div className="products">{products.map(([name, price, tone]) => <article className="product" key={name}><div className={`product-image ${tone}`}><span>{name.includes('Dog') ? 'DOG' : name.includes('Cat') ? 'CAT' : 'ANIMAL'}</span></div><h3>{name}</h3><p>{price}</p></article>)}</div></section>

      <section className="lifestyle"><div><h2>WEAR WHAT YOU LOVE.</h2><p>Celebrate the animals that make your life better.</p><a className="button" href="#shop">SHOP NOW →</a></div></section>

      <section id="contact" className="newsletter"><h2>JOIN THE BELLA &amp; THE CATS FAMILY</h2><p>New designs, new collections &amp; a little animal love.</p><form><input aria-label="Email address" placeholder="Your email address" type="email"/><button>JOIN US</button></form></section>

      <footer><div><strong>BELLA &amp; THE CATS</strong><p>Apparel for pet people.</p></div><div className="footer-links"><a>About Us</a><a>Contact</a><a>Delivery</a><a>Returns</a><a>FAQs</a><a>Size Guide</a></div><div className="social">◎　f　p　♪　▶</div></footer>
    </main>
  );
}

function Collection({ id, title, text, image }: { id: string; title: string; text: string; image: string }) {
  return <a id={id} className="collection" href="#shop"><div className="collection-image">{image}</div><div><h2>{title}</h2><p>{text}</p><span>SHOP {title} →</span></div></a>;
}
