import React from 'react'
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/product-list">產品清單(URL Params)</Link>
      <br />
      <Link to="/product-list-qs">產品清單(Query String)</Link>
      <br />
      <Link to="/order">訂購流程(網址無連動)</Link>
      <br />
      <Link to="/order-steps">訂購流程(網址連動)</Link>
      <br />
      <Link to="/login">登入</Link>
    </div>
  )
}

export default Menu
