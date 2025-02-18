// import Link from 'next/link'
// import React from 'react'

// export default function Idpage({params}:{params:{id:string}}) {
//   return (
//     <div>
//         <Link href="/products/review">
//       <h1 >products detailed is here! {params.id} </h1>
//       </Link>

//     </div>
//   )
// }






"use client";

import { usePathname } from "next/navigation";
import { products } from "../data";

export default function ProductPage() {

  // Extract ID from URL path
  const productId = usePathname().split("/").pop();

  if (!productId) {
    return <h1>Loading...</h1>;
  }

  const product = products.find((data) => data.id === Number(productId));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {product.id}</p>
      <p>Slug: {product.slug}</p>
    </div>
  );
}
