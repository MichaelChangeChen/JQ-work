import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { data } from '../data/product'

function ProductDetail(props) {
  const { id } = useParams()
  const product = data.find((v, i) => v.id === id)

  return (
    <>
      <h1>ProductDetail</h1>
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.picture} alt="" />
          <p>{product.price}</p>
          <p>{product.tags}</p>
        </>
      )}
      <Link to="/product-list">回產品清單</Link>
    </>
  )
}

export default ProductDetail
