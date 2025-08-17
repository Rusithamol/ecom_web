import React from "react";

function CartPage({ cart, setCart }) {
  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center border-bottom py-2">
            <span>{item}</span>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(index)}>✖</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
