import React from 'react'
import { blogPosts } from '../Blogdata'

export default function Slug({params}:{params:{slug:string}}) {
    const product  = blogPosts.find((post) => post.title === String(params.slug))
  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  )
}
