import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import Card from './Card';


const ProductDetails = () => {
    const product = useParams();
        const [Product, setProduct] = useState({});
        useEffect(() => {
          fetch(`https://fakestoreapi.com/products/${product.id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
        }, []);
  return (
    <div><Card product={Product} showButton={false}/></div>
  )
}

export default ProductDetails