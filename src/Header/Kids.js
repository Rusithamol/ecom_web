import { useState } from "react";

import a from '../css/childwall6.jpg';
import b from '../css/childwall4.jpg';
import c from '../css/childwall1.jpg';
import d from '../css/child1.jpg';
import e from "../css/child2.jpg";
import f1 from "../css/child3.jpg";
import g from "../css/child4.jpg";
import h from "../css/child5.jpg";
import i from "../css/child12.jpg";
import j from "../css/child7.jpg";
import k from "../css/chiLd8.jpg";
import l from "../css/child9.jpg";
import m from "../css/child10.jpg";
import n from "../css/child11.jpg";

function Kids({ cart, setCart }) {
  const cardImages = [d, e, f1, g, h, i, j, k, l, m, n];

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  return (
    <>
      {/* Header Section */}
      <section className="container-fluid hero-wrap">
        <div className="hero container">
          <h1 className="display-6 fw-semibold mb-2">Kids’ Store</h1>
          <p className="mb-0">Playful, comfy, and colorful outfits for your little ones.</p>
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
                  style={{ height: "100vh" }}
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
                  <h5 className="card-title">Kids Product {index + 1}</h5>
                  <p className="card-text">
                    Stylish and high-quality product {index + 1} for your needs.
                  </p>
                </div>
                <button
                  className="btn btn-success mt-auto"
                  onClick={() => addToCart(`kids Product ${index + 1}`)}
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

export default Kids;
