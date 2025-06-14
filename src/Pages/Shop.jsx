import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const Shop = () => {
    const products = useSelector(state =>state.product)
  return (
    
            <div>
                <h2 className="text-2xl font-bold mb-10 text-center">Shop</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
                    {products.products.map(((product) =>(
                       <ProductCard product={product}/>
                    )))}
                </div>
                
            </div>
    
  )
}

export default Shop