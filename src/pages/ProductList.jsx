import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import electronics from "../assets/Electronics.jpeg"

const ProductList = () => {
  const [products,setProducts]= useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res)=>(res.json))
    .then((data)=>{
      setProducts(data);
      setLoading(false);
  })
  .catch((error)=>{
    console.error("Failed to fetch products:", err);
    setLoading(false);
  })
  

  }, [])
  if (loading) {
    return <p className="text-center mt-20">Loading products...</p>;
  }

  // const products=[
  //   {
  //     id:1,
  //     name:"Slim-fit t-shirt",
  //     price:"$50",
  //     image:electronics,
  //   }
  // ]

  return (
    <div className='max-w-8xl w-auto px-4 py-10'>
      <h2 className='text-3xl font-bold text-gray-800 text-center mb-4'>Explore Our Products!</h2>
      <div className='grid grid-cols-1 gap-8'>
        {products.map((product)=>(
          <div 
          key={product.id}
          className='border rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden bg-white'
          >
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-60 object-cover'
            />
            <div className='p-4'>
              <h2  className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
            </div>
        )
        )}
      </div>
      
    </div>
  )
}

export default ProductList
