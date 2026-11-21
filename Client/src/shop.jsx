
import { useState } from 'react'
import './Shop.css'

const products = [
  { id: 1, name: 'Gaming Headset', category: 'Headsets', price: 1499, image: '/src/assets/headset.jpg' },
  { id: 2, name: 'Mechanical Keyboard', category: 'Keyboards', price: 2499, image: '/src/assets/keyboard.jpg' },
  { id: 3, name: 'Gaming Mouse', category: 'Accessories', price: 999, image: '/src/assets/mouse.jpg' },
  { id: 4, name: 'Gaming Controller', category: 'Consoles', price: 1899, image: '/src/assets/controller.jpg' },
  { id: 5, name: 'Gaming Console', category: 'Consoles', price: 24999, image: '/src/assets/console.jpg' },
  { id: 6, name: 'Gaming Headset Pro', category: 'Headsets', price: 2999, image: '/src/assets/category-headset.jpg' },
  { id: 7, name: 'RGB Keyboard', category: 'Keyboards', price: 3299, image: '/src/assets/category-keyboard.jpg' },
  { id: 8, name: 'Gaming Accessories', category: 'Accessories', price: 1299, image: '/src/assets/category-accessories.jpg' },
]

function Shop() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="shop-page">
      <header className="shop-navbar">
        <a href="/" className="shop-logo">GAME<span>HUB</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/#categories">Categories</a>
        </nav>
        <a href="/cart" className="shop-cart">🛒 Cart</a>
      </header>

      <section className="shop-banner">
        <span>GAMEHUB COLLECTION</span>
        <h1>ALL PRODUCTS</h1>
        <p>Find the perfect gaming gear for your next adventure.</p>
      </section>

      <main className="shop-content">
        <div className="shop-heading">
          <h2>Explore Our Products</h2>
          <span>{filteredProducts.length} Products Found</span>
        </div>

        <div className="shop-controls">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="shop-filters">
            {['All', 'Consoles', 'Keyboards', 'Accessories', 'Headsets'].map((item) => (
              <button
                key={item}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="shop-grid">
          {filteredProducts.map((product) => (
            <div className="shop-product-card" key={product.id}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="shop-product-info">
                <span>{product.category}</span>
                <h3>{product.name}</h3>
                <p>₱{product.price.toLocaleString('en-PH')}</p>
                <button onClick={() => alert(product.name + ' added to cart!')}>
                  ADD TO CART +
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-products">No products found.</p>
        )}
      </main>

      <footer className="shop-footer">
        <h2>GAME<span>HUB</span></h2>
        <p>Your ultimate destination for gaming gear.</p>
        <p>© 2026 GameHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Shop
