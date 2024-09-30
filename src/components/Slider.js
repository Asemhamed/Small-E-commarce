import React from 'react'
import Image1 from '../images/OIP (1).jpeg'
import Image2 from '../images/OIP (2).jpeg'
import Image3 from '../images/OIP.jpeg'
import './Slider.css'


const Slider = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 Image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image2} class="d-block w-100 Image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100 Image" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider