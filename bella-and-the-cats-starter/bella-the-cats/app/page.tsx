'use client'

import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Dog Mum Sweatshirt',
    category: 'Sweatshirt',
    price: '£28.00',
    tone: 'blush',
    tag: 'Bestseller',
    colorName: 'Blush Rose',
    mark: ['DOG MUM'],
    kind: 'sweatshirt'
  },
  {
    id: 2,
    name: 'Cat Mum Hoodie',
    category: 'Heavyweight Hoodie',
    price: '£32.00',
    tone: 'sage',
    tag: 'Popular',
    colorName: 'Muted Sage',
    mark: ['CAT MUM'],
    kind: 'hoodie'
  },
  {
    id: 3,
    name: 'Animal Lover T-Shirt',
    category: 'Organic Tee',
    price: '£18.00',
    tone: 'cream',
    tag: 'Essential',
    colorName: 'Oatmeal',
    mark: ['ANIMAL', 'LOVER'],
    kind: 'tee'
  },
  {
    id: 4,
    name: 'Dog Lover Hoodie',
    category: 'Heavyweight Hoodie',
    price: '£32.00',
    tone: 'teal',
    tag: 'Staff Pick',
    colorName: 'Deep Teal',
    mark: ['DOG', 'LOVER'],
    kind: 'hoodie'
  },
  {
    id: 5,
    name: 'Better Together T-Shirt',
    category: 'Organic Tee',
    price: '£18.00',
    tone: 'white',
    tag: 'New Season',
    colorName: 'Pure White',
    mark: ['Better', 'Together'],
    kind: 'tee'
  },
]

const pets = [
  {
    name: 'Bella',
    title: 'The Golden Muse',
    role: 'The original inspiration & Chief Greeter',
    image: '/pets/bella-bluebells.jpg',
    number: '01',
    badge: 'Chief Muse'
  },
  {
    name: 'Loki',
    title: 'The Box Inspector',
    role: 'Cardboard box connoisseur & Quality Control',
    image: '/pets/loki.jpg',
    number: '02',
    badge: 'Quality Control'
  },
  {
    name: 'Tyler',
    title: 'The Sofa Specialist',
    role: 'Sofa lounge expert & Nap Department Lead',
    image: '/pets/tyler.jpg',
    number: '03',
    badge: 'Comfort Lead'
  },
  {
    name: 'Leia',
    title: 'The Tortie Icon',
    role: 'Tortoiseshell attitude & Head of Style Direction',
    image: '/pets/leia.jpg',
    number: '04',
    badge: 'Head of Style'
  },
]

export default function Home() {
  const [cartCount, setCartCount] = useState(0)
  const [likedPets, setLikedPets] = useState<Record<string, boolean>>({})
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [addedItem, setAddedItem] = useState<string | null>(null)

  const handleAddToCart = (productName: string) => {
    setCartCount(prev => prev + 1)
    setAddedItem(productName)
    setTimeout(() => setAddedItem(null), 2500)
  }

  const togglePetLike = (petName: string) => {
    setLikedPets(prev => ({ ...prev, [petName]: !prev[petName] }))
  }

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <main>
      {/* Top Announcement Bar */}
      <aside className="announcement-bar" aria-label="Promotions">
        <div className="announcement-track">
          <span>A SMALL BRAND WITH A BIG LOVE FOR PETS</span>
          <span className="dot">·</span>
          <span>INSPIRED BY BELLA, LOKI, TYLER &amp; LEIA</span>
          <span className="dot">·</span>
          <span>MADE FOR ANIMAL PEOPLE</span>
        </div>
      </aside>

      {/* Added to cart toast notification */}
      {addedItem && (
        <div className="cart-toast" role="status">
          <span className="toast-icon">✓</span>
          <span>Added <strong>{addedItem}</strong> to bag</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bella & The Cats home">
          <span className="brand-logo-text">BELLA &amp; THE CATS</span>
          <span className="brand-subtitle">APPAREL FOR PET PEOPLE</span>
        </a>

        <nav aria-label="Main navigation">
          <a className="active" href="#top">Home</a>
          <a href="#shop">Shop All</a>
          <a href="#dog">Dog Lovers</a>
          <a href="#cat">Cat Lovers</a>
          <a href="#animal">Animal Lovers</a>
          <a href="#story">Our Story</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="header-icons" aria-label="Shop tools">
          <a href="#shop" className="icon-btn" aria-label="Search collection">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </a>
          <a href="#story" className="icon-btn" aria-label="View family">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </a>
          <button className="icon-btn cart-btn" aria-label="Shopping bag" onClick={() => alert('Bag contains ' + cartCount + ' item(s). Checkout coming soon!')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </header>

      {/* Hero Section — Thinner, Sharpened & Framed */}
      <section className="hero" id="top">
        <img 
          src="/pets/bella-bluebells.jpg" 
          alt="Bella smiling in bluebells" 
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-frame" />
        <div className="hero-copy">
          <p className="eyebrow">BELLA &amp; THE CATS <span>—</span> EST. WITH LOVE</p>
          <h1>For the love<br /><em>of animals.</em></h1>
          <p className="hero-text">Clothing inspired by the four characters who make our house a home — for people who know pets are family.</p>
          <div className="hero-actions">
            <a className="button" href="#shop">SHOP THE COLLECTION <span>↗</span></a>
            <a className="button-secondary" href="#story">MEET OUR PETS</a>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-num">01</span>
          <i /> 
          <span className="note-desc">Bella — The heart behind the brand</span>
        </div>
      </section>

      {/* Shop By Category Cards */}
      <section className="collections" aria-label="Shop by passion">
        <a className="collection-card" id="dog" href="#shop">
          <img src="/pets/bella-close.jpg" alt="Bella the dog" />
          <div className="card-overlay" />
          <div className="card-content">
            <small>01 / FOR DOG PEOPLE</small>
            <strong>Dog Lovers <b>↗</b></strong>
            <p>Sweatshirts &amp; tees made for dog obsessed humans.</p>
          </div>
        </a>
        <a className="collection-card" id="cat" href="#shop">
          <img src="/pets/loki.jpg" alt="Loki the cat" />
          <div className="card-overlay" />
          <div className="card-content">
            <small>02 / FOR CAT PEOPLE</small>
            <strong>Cat Lovers <b>↗</b></strong>
            <p>Cozy hoodies &amp; apparel for proud cat guardians.</p>
          </div>
        </a>
        <a className="collection-card" id="animal" href="#shop">
          <img src="/pets/tyler.jpg" alt="Tyler the cat" />
          <div className="card-overlay" />
          <div className="card-content">
            <small>03 / FOR EVERYONE</small>
            <strong>Animal Lovers <b>↗</b></strong>
            <p>Apparel celebrating the bond we share with all paws.</p>
          </div>
        </a>
      </section>

      {/* Meet The Family Section */}
      <section className="story" id="story">
        <div className="story-intro">
          <p className="eyebrow dark">MEET THE FAMILY</p>
          <h2>Four personalities.<br /><em>One big love.</em></h2>
          <p>Bella, Loki, Tyler and Leia are the heart of our little brand. Their different personalities inspire everything from our name to the feeling we want every design to bring.</p>
        </div>

        <div className="pet-grid">
          {pets.map((pet) => {
            const isLiked = likedPets[pet.name]
            return (
              <article className="pet-card" key={pet.name}>
                <div className="pet-badge">{pet.badge}</div>
                <div className="pet-number">{pet.number}</div>
                <div className="pet-photo">
                  <img src={pet.image} alt={pet.name} />
                </div>
                <div className="pet-caption">
                  <div className="pet-title-row">
                    <div>
                      <h3>{pet.name}</h3>
                      <span className="pet-sub">{pet.title}</span>
                    </div>
                    <button 
                      className={`pet-heart-btn ${isLiked ? 'liked' : ''}`}
                      onClick={() => togglePetLike(pet.name)}
                      aria-label={`Send love to ${pet.name}`}
                    >
                      {isLiked ? '♥' : '♡'}
                    </button>
                  </div>
                  <p>{pet.role}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Featured Products / The Edit */}
      <section className="featured" id="shop">
        <div className="featured-heading">
          <div>
            <p className="eyebrow dark">THE EDIT</p>
            <h2>Made for animal people.</h2>
          </div>
          <a className="view-all-link" href="#shop">View all pieces <span>↗</span></a>
        </div>
        <p className="featured-intro">A growing collection inspired by everyday life with the animals we love.</p>

        <div className="product-grid">
          {products.map((p, index) => (
            <article className="product-card" key={p.name}>
              <div className="product-badge">{p.tag}</div>
              <div className="product-image">
                <span className="product-index">0{index + 1}</span>
                <div className={`garment ${p.tone} ${p.kind}`}>
                  <div className="garment-neck" />
                  <div className="garment-print">
                    {p.mark.map(line => <span key={line}>{line}</span>)}
                    <small>♡</small>
                  </div>
                </div>
                <button 
                  className="quick-add-btn" 
                  aria-label={`Add ${p.name} to bag`}
                  onClick={() => handleAddToCart(p.name)}
                >
                  + Add to Bag
                </button>
              </div>
              <div className="product-meta">
                <div>
                  <span className="product-category">{p.category}</span>
                  <h3>{p.name}</h3>
                  <span className="product-color-tag">{p.colorName}</span>
                </div>
                <p className="product-price">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Brand Values / Quality Promise */}
      <section className="values-banner" aria-label="Brand promises">
        <div className="value-item">
          <span className="value-icon">🐾</span>
          <strong>Designed with Heart</strong>
          <p>Thoughtful designs for the people whose pets are part of the family.</p>
        </div>
        <div className="value-item">
          <span className="value-icon">🌿</span>
          <strong>A Personal Touch</strong>
          <p>A small business built around a genuine love of animals.</p>
        </div>
        <div className="value-item">
          <span className="value-icon">♡</span>
          <strong>Made for Pet People</strong>
          <p>From dog mums to cat people, there is a little something for every animal lover.</p>
        </div>
      </section>

      {/* Lifestyle Banner — Using Bella Close Photo */}
      <section className="wear">
        <img src="/pets/bella-close.jpg" alt="Bella resting comfortably at home" />
        <div className="wear-shade" />
        <div className="wear-content">
          <p className="eyebrow">THE BELLA &amp; THE CATS WAY</p>
          <h2>Wear what<br /><em>you love.</em></h2>
          <p>Because the very best things in life walk on four paws.</p>
          <a className="button wear-btn" href="#shop">SHOP APPAREL <span>↗</span></a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <div>
          <p className="eyebrow dark">STAY IN THE PACK</p>
          <h2>Come along for the journey.</h2>
          <p>Be the first to hear about new designs, little behind-the-scenes moments, and updates from our furry family.</p>
        </div>

        {subscribed ? (
          <div className="newsletter-success">
            <span className="success-icon">✓</span>
            <div>
              <strong>You're officially in the pack!</strong>
              <p>Thanks for joining our little community.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleNewsletter} className="newsletter-form">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit">JOIN US <span>↗</span></button>
          </form>
        )}
      </section>

      {/* Polished Boutique Footer */}
      <footer id="footer">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="footer-brand-title">BELLA &amp; THE CATS</span>
              <small>APPAREL FOR PET PEOPLE</small>
            </div>
            <p className="footer-bio">
              Inspired by Bella, Loki, Tyler and Leia. Made with love for the people who cherish their pets as family.
            </p>
          </div>

          <div className="footer-col">
            <h4>Collections</h4>
            <a href="#shop">Dog Lovers</a>
            <a href="#shop">Cat Lovers</a>
            <a href="#shop">Animal Lovers</a>
            <a href="#shop">Hoodies &amp; Sweats</a>
            <a href="#shop">Organic Tees</a>
          </div>

          <div className="footer-col">
            <h4>Customer Care</h4>
            <a href="#footer">Delivery &amp; Shipping</a>
            <a href="#footer">Returns &amp; Exchanges</a>
            <a href="#footer">Size Guide</a>
            <a href="#footer">FAQs</a>
            <a href="#footer">Contact Us</a>
          </div>

          <div className="footer-col">
            <h4>The Animals</h4>
            <a href="#story">Bella's Story</a>
            <a href="#story">Loki the Box Lover</a>
            <a href="#story">Tyler the Sofa Specialist</a>
            <a href="#story">Leia the Tortie</a>
            <a href="#footer">Shelter Partnerships</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#footer">Privacy Policy</a>
            <a href="#footer">Terms of Service</a>
            <a href="#footer">Cookie Preferences</a>
          </div>
          <div className="social">
            <span>Instagram</span> &nbsp; · &nbsp; 
            <span>Facebook</span> &nbsp; · &nbsp; 
            <span>TikTok</span> &nbsp; · &nbsp; 
            <span>Pinterest</span>
          </div>
          <small className="copyright">© {new Date().getFullYear()} Bella &amp; The Cats Ltd. All rights reserved.</small>
        </div>
      </footer>
    </main>
  )
}
