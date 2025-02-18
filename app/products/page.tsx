// import Link from 'next/link'
// import React from 'react'

// export default function Productspage() {
//   return (
//     <div>
//       <h1>Products</h1>
//       <Link href='/products/id'>
//       <p>Smartphone Pro Max</p>
//       </Link>
//       <p>Smartphone Pro Max2</p>
//       <p>Smartphone Pro Max1</p>
//     </div>
//   )
// }













import Link from "next/link";
import { products } from "./data";
export default function ProductsList() {
     
  return (
    <div>
      <h1>Products</h1>
     <ul>
        {products.map((product) => (
            <div key={product.id}>
                <li><Link href={`/products/${product.id}`}>{product.name}</Link></li>
            </div>
        ))}
     </ul>
    </div>
  );
}
