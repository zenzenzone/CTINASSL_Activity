
import './Shop.css'

function Cart() {
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
        <h1>MY SHOPPING CART</h1>

        <div className="shop-product-card">
          <div className="shop-product-image">
            <img src="/src/assets/headset.jpg" alt="Gaming Headset" />
          </div>
          <div className="shop-product-info">
            <h3>Gaming Headset</h3>
            <p>₱1,499</p>
            <p>Quantity: 1</p>
            <button onClick={() => alert('Item removed!')}>
              REMOVE ITEM
            </button>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2>Subtotal: ₱1,499</h2>
          <a href="/checkout">
            <button className="shop-product-info button">
              PROCEED TO CHECKOUT
            </button>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Cart
