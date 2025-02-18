import React from 'react'
import { blogPosts} from './Blogdata'
import Link from 'next/link'
export default function Blogpage() {
  return (
    <div>
      <h1>welcome to the our new blogs where i display the world</h1>
        {blogPosts.map((post) => (
            <div key={post.title}>
               <ul>
                <li><Link href='/blog/{post.title}'>{post.title}</Link></li>
               </ul>
            </div>
        ))}
    </div>
  )
}
