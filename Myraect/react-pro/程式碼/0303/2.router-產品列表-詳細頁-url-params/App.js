import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useState } from 'react'

// 頁面元件
// import About from './pages/About'
// import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'

// 其它元件(選單、頁首、頁尾...etc)
import Menu from './components/Menu'

function App() {
  // 全域狀態
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
          {/* 動態的網址上的參數params */}
          <Route path="/product-detail/:id">
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
