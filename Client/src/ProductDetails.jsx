
import './Shop.css'

function ProductDetails() {
  return (
    <div className="shop-page">
      <header className="shop-navbar">
        <a href="/" className="shop-logo">GAME<span>HUB</span></a>
        <nav>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>

      <main className="shop-content">
        <h2>PRODUCT DETAILS</h2>
        <div className="shop-product-card">
          <div className="shop-product-image">
            <img src="/src/assets/headset.jpg" alt="Gaming Headset" />
          </div>
          <div className="shop-product-info">
            <span>HEADSETS</span>
            <h2>Gaming Headset</h2>
            <p>₱1,499</p>
            <p>Experience immersive gaming audio with this comfortable gaming headset.</p>
            <button onClick={() => alert('Added to cart!')}>
              ADD TO CART +
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetails
