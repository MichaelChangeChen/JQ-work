import React from 'react'
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <>
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">
            首頁
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">
            首頁
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product-list">
            產品清單(URL Params)
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product-list-qs">
            產品清單(Query String)
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/order">
            訂購流程(網址無連動)
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/order-steps">
            訂購流程(網址連動)
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/admin">
            管理區
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">
            登入
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
