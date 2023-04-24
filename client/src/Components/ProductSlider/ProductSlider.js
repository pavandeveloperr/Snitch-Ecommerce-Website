import React from "react";
import Heroimg1 from "../../Images/hero1.png";
import Heroimg2 from "../../Images/hero2.png";
import Heroimg3 from "../../Images/hero3.png";
import Heroimg4 from "../../Images/hero4.png";
import "./ProductSlider.css";

const ProductSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={Heroimg1} className="d-block w-100" alt="heroimage1" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={Heroimg2} className="d-block w-100" alt="heroimage2" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={Heroimg3} className="d-block w-100" alt="heroimage3" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={Heroimg4} className="d-block w-100" alt="heroimage4" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductSlider;
