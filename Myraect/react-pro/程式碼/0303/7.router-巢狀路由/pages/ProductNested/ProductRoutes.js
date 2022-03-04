import React from 'react'
import { Route, withRouter, NavLink, Switch } from 'react-router-dom'
import Product from './Product'

function ProductRoutes(props) {
  const { path } = props
  return (
    <Switch>
      <Route exact path={path}>
        <h3>請選擇子分類</h3>
      </Route>
      <Route path={`${path}/:type?/:id?`}>
        <Product />
      </Route>
    </Switch>
  )
}

export default ProductRoutes
