import { useState } from "react";

import a from '../css/womenwall2.jpg';
import b from '../css/womenwall3.jpg';
import c from '../css/womenwall1.jpg';
import d from '../css/women11.jpg';
import e from "../css/women1.jpg";
import f1 from "../css/women2.jpg";
import g from "../css/women3.jpg";
import h from "../css/women4.jpg";
import i from "../css/women5.jpg";
import j from "../css/women6.jpg";
import k from "../css/women7.jpg";
import l from "../css/women8.jpg";
import m from "../css/women9.jpg";
import n from "../css/women10.jpg";

function Women({ cart, setCart }) {
  const cardImages = [d, e, f1, g, h, i, j, k, l, m, n];

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  return (
    <>
      {/* Header Section */}
      <section className="container-fluid hero-wrap">
        <div className="hero container">
          <h1 className="display-6 fw-semibold mb-2">Women’s Store</h1>
          <p className="mb-0">Discover kurtas, ethnic dresses, skirts, bottoms & more</p>
        </div>
      </section>

      {/* Carousel */}
      <div className="container-fluid my-4 px-0">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[b, a, c].map((img, idx) => (
              <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                <img
                  src={img}
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "100vh", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="container">
        <div className="d-flex flex-wrap gap-4 p-4 justify-content-center">
          {cardImages.map((img, index) => (
            <div className="card d-flex flex-column" style={{ width: "18rem" }} key={index}>
              {/* Card Header - Fluid Image */}
              <div className="bg-light d-flex justify-content-center align-items-center p-2">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    maxHeight: "250px",
                    width: "100%"
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body text-center d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">Women’s Product {index + 1}</h5>
                  <p className="card-text">
                    Stylish and high-quality Women’s product {index + 1} for your needs.
                  </p>
                </div>
                <button
                  className="btn btn-success mt-auto"
                  onClick={() => addToCart(`Women’s Product ${index + 1}`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Women;
