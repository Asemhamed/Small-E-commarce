import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import "./ProductDetails.css";


const Card = ({product ,showButton}) => {
  return (
    <div class="card">
      <img src={product.image} class="card-img-top image" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <h4>{product.price}$</h4>
        {showButton && (
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            Details
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card