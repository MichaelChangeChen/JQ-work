import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { data } from '../data/product'

// product-detail?id=123
function ProductDetailQS(props) {
  const location = useLocation()
  //console.log(location.search)

  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id')

  // 利用網址上的id參數找資料
  const product = data.find((v, i) => v.id === id)

  return (
    <>
      <h1>ProductDetail - Query String</h1>
      {/* 有找到資料才會呈現 */}
      {product && (
        <>
          <h2>{product.name}</h2>
          <img src={product.picture} alt="" />
          <p>{product.price}</p>
          <p>{product.tags}</p>
        </>
      )}
      <Link to="/product-list-qs">回產品清單</Link>
    </>
  )
}

export default ProductDetailQS
