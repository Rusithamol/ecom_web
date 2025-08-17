import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Women from "./Header/Women";
import Men from "./Header/Men";
import Kids from "./Header/Kids";
import CartPage from "./Header/CartPage";

function App() {
  const [cart, setCart] = useState([]);
  
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <div className="container-fluid">
            {/* Left - Menu */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/kids">
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home-living">
                  Home & Living
                </a>
              </li>
            </ul>

            {/* Right - Search + Cart */}
            <div className="d-flex align-items-center">
              <form className="d-flex me-3">
                <input
                  className="form-control"
                  placeholder="Search"
                  style={{ minWidth: "200px" }}
                />
              </form>
              <button
                className="btn btn-outline-primary"
                onClick={() => setShowCart(!showCart)}
              >
                🛒 Cart ({cart.length})
              </button>
            </div>
          </div>
        </nav>

        {/* Routes */}
         <Routes>
          <Route path="/" element={<Women cart={cart} setCart={setCart} />} />
          <Route path="/men" element={<Men cart={cart} setCart={setCart} />} />
          <Route path="/kids" element={<Kids cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
