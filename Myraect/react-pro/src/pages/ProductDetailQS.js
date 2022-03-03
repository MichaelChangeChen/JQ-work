import React from 'react'
import { useParams , } from 'react-router-dom'
import { data } from '../data/product'
// ?id=123
function ProductDetail(props) {
  const { id } = useParams()
  const product = data.find((v, i) => v.id === id)

  return (
    <>
      <h1>ProductDetail- Query String</h1>
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.picture} alt="" />
          <p>{product.price}</p>
          <p>{product.tags}</p>
        </>
      )}
    </>
  )
}

export default ProductDetail
