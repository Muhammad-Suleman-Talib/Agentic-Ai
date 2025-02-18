import Link from 'next/link'
import React from 'react'

export default function Aboutpage() {
  return (
    <div>
      <h1>welcome to the women world cup we have two teams one is india and other is england</h1>
      <button>
        <Link href="/about/india">India</Link>
        <Link href="/about/england"> England</Link>
      </button>
    </div>
  )
}
