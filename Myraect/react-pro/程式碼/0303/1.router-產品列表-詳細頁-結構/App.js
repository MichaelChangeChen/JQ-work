import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetail from './pages/ProductDetail'

import Menu from './components/Menu'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* 選單 */}
        <Menu />
        {/* 路由表 */}
        <Switch>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/product-detail">
            <ProductDetail />
          </Route>
          {/* <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route> */}
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
