import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useState } from 'react'

// 頁面元件
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetail from './pages/ProductDetail'
import ProductDetailQS from './pages/ProductDetailQS'
import ProductList from './pages/ProductList'
import ProductListQS from './pages/ProductListQS'
import OrderIndex from './pages/Order/OrderIndex'
import OrderSteps from './pages/Order2/OrderSteps'

// 其它元件(選單、頁首、頁尾...etc)
import Menu from './components/Menu'
import MLBreadcrumb from './components/MLBreadcrumb'

function App() {
  // 全域狀態
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* 選單 */}
        <Menu />
        <MLBreadcrumb />
        {/* 路由表 */}
        <Switch>
          <Route path="/order">
            <OrderIndex />
          </Route>
          <Route path="/order-steps/:stepType">
            <OrderSteps />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product-list-qs">
            <ProductListQS />
          </Route>
          <Route path="/product-detail-qs">
            <ProductDetailQS />
          </Route>
          <Route path="/product-list">
            <ProductList />
          </Route>
          {/* 網址上的動態參數params */}
          <Route path="/product-list/product-detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
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
