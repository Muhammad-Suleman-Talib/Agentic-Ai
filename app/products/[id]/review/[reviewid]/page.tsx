import React from 'react'

export default async function Reviewpage({params}:{params: Promise<{id:string,reviewid:string}>}) {
    const {id,reviewid} = await  params
  return (
    <div>
      <h1>reives {reviewid} and products {id}</h1>
    </div>
  )
}
