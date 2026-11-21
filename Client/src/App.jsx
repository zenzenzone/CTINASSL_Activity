import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Shop from './shop.jsx'
import ProductDetails from './ProductDetails.jsx'
import Cart from './cart.jsx'
import Checkout from './checkout.jsx'

const products = [
  {
    id: 1,
    name: "Gaming Headset",
    category: "Accessories",
    price: 1499,
    image: "/src/assets/headset.jpg",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 2499,
    image: "/src/assets/keyboard.jpg",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 999,
    image: "/src/assets/mouse.jpg",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Gaming Controller",
    category: "Gaming",
    price: 1899,
    image: "/src/assets/controller.jpg",
    tag: "FEATURED",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
    alert(product.name + " added to cart!");
  }

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="logo">
          GAME<span>HUB</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
        </nav>

        <button className="cart-button">🛒 Cart ({cart.length})</button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="hero-label">YOUR ULTIMATE GAMING STORE</span>

            <h1>
              LEVEL UP
              <br />
              YOUR <span>GAME.</span>
            </h1>

            <p>
              Discover gaming accessories, gadgets, and everything you need for
              your next adventure.
            </p>

            <a href="#products" className="shop-button">
              SHOP NOW →
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">🎮</div>
            <span className="floating-icon">🎧</span>
            <span className="floating-icon second">🕹️</span>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories" id="categories">
          <h2>SHOP BY CATEGORY</h2>

          <div className="category-list">
            <div className="category-card">
              <img src="/src/assets/console.jpg" alt="Consoles" />
              <h3>Consoles</h3>
            </div>

            <div className="category-card">
              <img src="/src/assets/category-keyboard.jpg" alt="Keyboards" />
              <h3>Keyboards</h3>
            </div>

            <div className="category-card">
              <img
                src="/src/assets/category-accessories.jpg"
                alt="Accessories"
              />
              <h3>Accessories</h3>
            </div>

            <div className="category-card">
              <img src="/src/assets/category-headset.jpg" alt="Headsets" />
              <h3>Headsets</h3>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="small-label">OUR COLLECTION</span>
              <h2>FEATURED PRODUCTS</h2>
            </div>

            <span className="product-count">{products.length} Products</span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <span className="product-tag">{product.tag}</span>

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>

                  <h3>{product.name}</h3>

                  <p className="price">
                    ₱{product.price.toLocaleString("en-PH")}
                  </p>

                  <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    ADD TO CART +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROMOTION */}
        <section className="promo-section">
          <div>
            <span>SPECIAL OFFER</span>
            <h2>READY TO LEVEL UP?</h2>
            <p>Find your next favorite gaming gear at GameHub.</p>
          </div>

          <a href="#products" className="shop-button">
            EXPLORE PRODUCTS →
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <h2>
          GAME<span>HUB</span>
        </h2>

        <p>Your ultimate destination for gaming gear.</p>

        <p>© 2026 GameHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default MainApp