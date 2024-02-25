import React from 'react'
import Product from './Product'
import { fetchProducts } from '../../page'

async function page() {
  const products = await fetchProducts()
  return (
    <div>
      <Product products={products}/>
    </div>
  )
}

export default page