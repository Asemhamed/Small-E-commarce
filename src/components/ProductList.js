import React, { useEffect, useState } from 'react'
import Card from './Card'


const ProductList = () => {
    const [product,setProduct] = useState([]);
    const [category,setCategory] = useState([]);
    const Api = "https://fakestoreapi.com/products";
    const getProducts = () =>{
                fetch(Api)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    } 
        const getCategories = () => {
          fetch(`${Api}/categories`)
            .then((res) => res.json())
            .then((data) => setCategory(data));
        }; 
        const getCategory = (catName) => {
          fetch(`${Api}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
        }; 
    useEffect(()=>{
getProducts();
getCategories();
    },[])
  return (
    <>
      <h2>Our Product</h2>
      <div className="container">
        <button
          className="btn btn-info p-10 my-5 mx-1"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {category.map((cat) => (
          <button
            key={cat.id}
            className="btn btn-info p-10 my-5 mx-1"
            onClick={() => {
              getCategory(cat);
            }}
          >
            {cat}
          </button>
        ))}
        <div className="row">
          {product.map((p) => (
            <div className="col-3" key={p.id}>
              <Card product={p} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList