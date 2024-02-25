import { fetchProducts } from "../page"
import Category from "./Category"

async function page() {
  const products = await fetchProducts()
  return (
    <div>
      <Category items={products} />  
    </div>
  )
}

export default page