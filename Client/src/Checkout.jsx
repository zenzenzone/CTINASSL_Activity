
import './Shop.css'

function Checkout() {
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
        <h1>CHECKOUT</h1>

        <h2>Delivery Information</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          alert('Order placed successfully!')
        }}>
          <input placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input placeholder="Phone Number" required />
          <input placeholder="Delivery Address" required />

          <h2>Payment Method</h2>

          <select required>
            <option value="">Select Payment Method</option>
            <option>Cash on Delivery</option>
            <option>GCash</option>
            <option>Credit/Debit Card</option>
          </select>

          <h2 style={{ marginTop: '25px' }}>Order Total: ₱1,499</h2>

          <button type="submit">PLACE ORDER</button>
        </form>
      </main>
    </div>
  )
}

export default Checkout
